const express = require ('express');
const empleados = express.Router();
const db = require('../config/database')

empleados.post("/insert", async (req, res, next) => {
    const {emp_id, emp_name, emp_last_name, emp_phone, emp_email, emp_direction} = req.body;

    if (emp_id && emp_name && emp_last_name && emp_phone && emp_email && emp_direction){
    let query = "INSERT INTO empleados(emp_id, emp_name, emp_last_name, emp_phone, emp_email, emp_direction)";
    query += ` VALUES ('${emp_id}','${emp_name}','${emp_last_name}',${emp_phone},'${emp_email}','${emp_direction}')`;
    const rows = await db.query(query);
    
    console.log(rows);

    if(rows.affectedRows== 1){
        return res.status(201).json({ code: 201, message: "Empleado dado de alta correctamente"});
      }
  
      return res.status(500).json({code :500, message: "Error"});
    }
     return res.status(500).json({code :500, message: "Campos incompletos"}); 
});

empleados.delete("/:id([0-9]{1,3})",async(req, res,next) => {
    const query = `DELETE FROM empleados WHERE emp_id=${req.params.id}`;
    const rows =await db.query(query);

    if(rows.affectedRows ==1){
      
      return res.status(200).json({code :200, message: "Empleado dado de baja correctamente"});
    }
    return res.status(404).json({code :404, message: "Empleado no encontrado"});

});

empleados.put("/:id([0-9]{1,3})",async(req, res,next) => {
    const {emp_id, emp_name, emp_last_name, emp_phone, emp_email, emp_direction} = req.body;

    if (emp_id && emp_name && emp_last_name && emp_phone && emp_email && emp_direction){
        let query = `UPDATE empleados SET emp_id='${emp_id}',emp_name='${emp_name}',`;
        query += `emp_last_name='${emp_last_name}',emp_phone=${emp_phone},emp_email='${emp_email}', emp_direction='${emp_direction}' WHERE emp_id=${req.params.id}`;
    
        const rows = await db.query(query);
        console.log(rows);
    
        if(rows.affectedRows== 1){
            return res.status(201).json({ code: 201, message: "Empleado actualizado correctamente"});
          }
      
          return res.status(500).json({code :500, message: "Error"});
        }
         return res.status(500).json({code :500, message: "Campos incompletos"}); 
});

empleados.patch("/:id([0-9]{1,3})",async(req, res,next) => {

    if(req.body.emp_name){
      let query = `UPDATE empleados SET emp_name='${req.body.emp_name}' WHERE emp_id=${req.params.id}`;
      const rows = await db.query(query);
      
      if(rows.affectedRows== 1){
        return res.status(201).json({ code: 200, message: "Empleado actualizado correctamente"});
      }
      return res.status(500).json({code :500, message: "Ocurrio un error"});
    }
    return res.status(500).json({code :500, message: "Campos incompletos"});
});

  

empleados.get('/', async (req, res, next) => {
    const emple = await db.query("SELECT * FROM empleados"); 
    return res.status(200).json({ code: 1, message: emple });
});

empleados.get('/:id([0-9]{1,3})', async (req, res, next) =>{
    const id = req.params.id;
    if (id >= 1 && id <= 10) {
        const emple = await db.query("SELECT * FROM empleados WHERE emp_id="+ id +";");   
        return res.status(200).json({ code: 1, message: emple });
    }
    return res.status(404).send({ code: 404, message: "Empleado no encontrado"  });
});

empleados.get('/:name([A-Za-z]+)', async (req, res, next) =>{
    const name = req.params.name;
    const emple = await db.query("SELECT * FROM empleados WHERE emp_name='"+ name +"';");
    if (emple.length > 0 ) {   
        return res.status(200).json({ code: 1, message: emple });
    } 
    return res.status(404).send({ code: 404, message: "Empleado no encontrado"  });
});

/*empleados.delete('/logout', async (req, res, next)=> {

  const token = jwt.logout;
  try{

  }
  catch(error);){
    next(error);
  }
})*/

module.exports = empleados;
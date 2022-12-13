window.onload = init;

var headers = {};
var url = "http://localhost:3000/empleados/";



function init(){
if(localStorage.getItem("token")){
    
    headers = {
        headers: {
        'Authorization': "bearer " + localStorage.getItem("token")
        }
    }
    document.querySelector('.btn-primary').addEventListener('click', eliminar);

    document.querySelector('.btn-secondary').addEventListener('click', function(){
        window.location.href = "interfaz.html"
    });   

}
else{
    window.location.href = "index.html";
  }

}
    function eliminar () {
        var id = document.getElementById('input-id').value;

        axios({
            method:'delete',
            url: url + id,
            data: {
                emp_id: id
            }
           
        }).then(function(res){
            console.log(res);
            alert("Empleado eliminado exitosamente");
            window.location.href ="Interfaz.html";
    
        }).catch(function(err){
            console.log(err);
        });
    };















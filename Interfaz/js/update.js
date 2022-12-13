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
    document.querySelector('.btn-primary').addEventListener('click', update);

    document.querySelector('.btn-secondary').addEventListener('click', function(){
        window.location.href = "interfaz.html"
    });   

}
else{
    window.location.href = "index.html";
  }

}
    function update () {
        var id = document.getElementById('input-id').value;
        var name = document.getElementById('input-name').value;
        var last = document.getElementById('input-last_name').value;
        var phone = document.getElementById('input-phone').value;
        var email = document.getElementById('input-email').value;
        var direction = document.getElementById('input-direction').value;


        axios({
            method: 'put',
            url: url + id,
            data: {
                emp_id: id,
                emp_name: name,
                emp_last_name: last,
                emp_phone: phone,
                emp_email: email,
                emp_direction: direction
            }
        }).then(function(res){
            console.log(res);
            alert("Empleado modificado exitosamente");
            window.location.href ="Interfaz.html";
    
        }).catch(function(err){
            console.log(err);
        });
    };















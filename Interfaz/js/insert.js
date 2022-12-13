window.onload = init;
var headers = {};
var url = "http://localhost:3000";



function init() {
    if(localStorage.getItem("token")){

        headers = {
            headers: {
            'Authorization': "bearer " + localStorage.getItem("token")
            }
            
        }
        document.querySelector('.btn-primary').addEventListener('click',insert);
    }
    document.querySelector('.btn-secondary').addEventListener('click', function(){
        window.location.href = "login.html"
    });
}

    function insert () {
        var id = document.getElementById('input-id').value;
        var name = document.getElementById('input-name').value;
        var last = document.getElementById('input-last_name').value;
        var phone = document.getElementById('input-phone').value;
        var email = document.getElementById('input-email').value;
        var direction = document.getElementById('input-direction').value;

        
        axios({
            method: 'post',
            url: 'http://localhost:3000/empleados/insert',
            data: {
                emp_id: id,
                emp_name: name,
                emp_last_name: last,
                emp_phone: phone,
                emp_email: email,
                emp_direction: direction
            }
        }).then(function(res) {
            console.log(res);
            alert("Empleado insertado existosamente");
            window.location.href = "login.html";
        }).catch(function(err) {
            console.log(err);
        })

    }





















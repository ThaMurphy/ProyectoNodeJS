window.onload = init;
var headers = {};
var url = "http://localhost:3000";




function init(){
if(localStorage.getItem("token")){
    
    headers = {
        headers: {
        'Authorization': "bearer " + localStorage.getItem("token")
        }
    }
    
    loadEmpleado();

    
    function showTime(){
        var date = new Date();
        var h = date.getHours(); // 0 - 23
        var m = date.getMinutes(); // 0 - 59
        var s = date.getSeconds(); // 0 - 59
        var session = "AM";
        
        if(h == 0){
            h = 12;
        }
        
        if(h > 12){
            h = h - 12;
            session = "PM";
        }
        
        h = (h < 10) ? "0" + h : h;
        m = (m < 10) ? "0" + m : m;
        s = (s < 10) ? "0" + s : s;
        
        var time = h + ":" + m + ":" + s + " " + session;
        document.getElementById("MyClockDisplay").innerText = time;
        document.getElementById("MyClockDisplay").textContent = time;
        
        setTimeout(showTime, 1000);
        
    }
    showTime();

    document.querySelector('btnBorrar').addEventListener('click', function(){
        window.location.href = "delete.html";
    });

    

}
else{
    window.location.href = "index.html";
  }

}

function loadEmpleado() {
    axios.get(url + "/empleados", headers)
    .then(function(res) {
        console.log(res);
        displayEmpleado(res.data.message);

    }).catch(function(err) {
        console.log(err);
    
    })
}

function displayEmpleado(empleado) {
    var body = document.querySelector("body");
    for( var i = 0; i < empleado.length; i++) {
        if (i % 2 == 0){
        body.innerHTML += `<p class="f1"><span class="sname">${empleado[i].emp_name} ${empleado[i].emp_last_name}</span><span class="sid">${empleado[i].emp_id}</span><span class="sphone">${empleado[i].emp_phone}</span><span class="semail">${empleado[i].emp_email}</span><span class="sdirection">${empleado[i].emp_direction}</span></p>`;
        }else{
        body.innerHTML += `<p class="f1"><span class="spname">${empleado[i].emp_name} ${empleado[i].emp_last_name}</span><span class="spid">${empleado[i].emp_id}</span><span class="spphone">${empleado[i].emp_phone}</span><span class="spemail">${empleado[i].emp_email}</span><span class="spdirection">${empleado[i].emp_direction}</span></p>`;
        }
    }
    
}

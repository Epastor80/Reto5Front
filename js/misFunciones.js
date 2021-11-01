function traerInformacionCategorias(){
    $.ajax({
        url:"http://150.230.69.146:8080/api/Category/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuestacategoria){
            console.log(respuestacategoria);
            pintarRespuestaCategorias(respuestacategoria);
        }
    });
}

function pintarRespuestaCategorias(respuestacategoria){

    let myTable="<table border=1 bordercolor=#FFFFFF>";
    for(i=0;i<respuestacategoria.length;i++){
        myTable+="<tr>";
        myTable+="<td><font color=#FFFFFF><b>"+respuestacategoria[i].name+"</b></font></td>";
        myTable+="<td><font color=#FFFFFF><b>"+respuestacategoria[i].description+"</b></font></td>";
        myTable+="<td><button onclick ='actualizarInformacionCategorias("+respuestacategoria[i].id+")'>Actualizar Categoria </button>";
        myTable+="<td><button onclick ='borrarCategoria("+respuestacategoria[i].id+")'>Borrar Categoria </button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado1").html(myTable);
}

function guardarInformacionCategorias(){
    let var1 = {
        name:$("#Cname").val(),
        description:$("#Cdescription").val()
        };
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var1),
        url:"http://150.230.69.146:8080/api/Category/save",
        
        success:function(response) {
            console.log(response);
            console.log("Se guardo correctamente la Categoria");
            alert("Se guardo correctamente la Categoria");
            window.location.reload()
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
            alert("No se guardo correctamente la Categoria");
        }
    });
}

function actualizarInformacionCategorias(idElementocategoria){
    let myData={
        id:idElementocategoria,
        name:$("#Cname").val(),
        description:$("#Cdescription").val()
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://150.230.69.146:8080/api/Category/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuestacategoria){
            $("#resultado1").empty();
            $("#id").val("");
            $("#Cname").val("");
            $("#Cdescription").val("");
            traerInformacionCategorias();
            alert("se ha Actualizado correctamente la categoria");
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
          alert("No se Actualizo correctamente la Categoria");
          }
    });
}

function borrarCategoria(idElementocategoria){
    let myData={
        id:idElementocategoria
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://150.230.69.146:8080/api/Category/"+idElementocategoria,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuestacategoria){
            $("#resultado1").empty();
            traerInformacionCategorias();
            alert("Se ha Eliminado correctamente.");
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
          alert("No se Elimino correctamente la Categoria");
        }
    });
    }

    ///////////////////CLIENTES//////////////////////2

function traerInformacionClientes(){
    $.ajax({
        url:"http://150.230.69.146:8080/api/Client/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuestaclientes){
            console.log(respuestaclientes);
            pintarRespuestaClientes(respuestaclientes);
        }
    });
}

function pintarRespuestaClientes(respuestaclientes){


    let myTable="<table border=1 bordercolor=#FFFFFF>";
    for(i=0;i<respuestaclientes.length;i++){
        myTable+="<tr>";
        myTable+="<td><font color=#FFFFFF><b>"+respuestaclientes[i].name+"</b></font></td>";
        myTable+="<td><font color=#FFFFFF><b>"+respuestaclientes[i].age+"</b></font></td>";
        myTable+="<td><font color=#FFFFFF><b>"+respuestaclientes[i].email+"</b></font></td>";
        myTable+="<td><font color=#FFFFFF><b>"+respuestaclientes[i].password+"</b></font></td>";
        myTable+="<td><button onclick='actualizarInformacionClientes("+respuestaclientes[i].idClient+")'> Actualizar Cliente </button>";
        myTable+="<td><button onclick='borrarClientes("+respuestaclientes[i].idClient+")'> Borrar Cliente </button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado2").html(myTable);
}

function guardarInformacionClientes(){
    let var2 = {
        email:$("#CLemail").val(),
        password:$("#CLpassword").val(),
        name:$("#CLname").val(),
        age:$("#CLage").val(),
        };
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var2),
        url:"http://150.230.69.146:8080/api/Client/save",
        
        success:function(response) {
            console.log(response);
            console.log("Se guardo correctamente el Cliente");
            alert("Se guardo correctamente el Cliente");
            window.location.reload()
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("No se guardo correctamente");
        }
    });
}

function actualizarInformacionClientes(idElementoCliente){
    let myData={
        idClient:idElementoCliente,
        email:$("#CLemail").val(),
        password:$("#CLpassword").val(),
        name:$("#CLname").val(),
        age:$("#CLage").val(),
        };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://150.230.69.146:8080/api/Client/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuestaclientes){
            $("#resultado2").empty();
            $("#idElementoCliente").val("");
            $("#CLemail").val("");
            $("#CLpassword").val("");
            $("#CLname").val("");
            $("#CLage").val("");
            traerInformacionClientes();
            alert("Se Actualizo correctamente el Cliente");
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
          alert("No se Actualizo correctamente el Cliente");
        }
    });
}

function borrarClientes(idElementoCliente){
    let myData={
        id:idElementoCliente
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://150.230.69.146:8080/api/Client/"+idElementoCliente,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuestaclientes){
            $("#resultado2").empty();
            traerInformacionClientes();
            alert("Se ha Eliminado correctamente.");
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
            alert("No se Elimino correctamente el Cliente");
        }
    });
}


	///////////////////////JUEGOS//////////////////3

    function traerInformacionJuegos(){
        $.ajax({
            url:"http://150.230.69.146:8080/api/Game/all",
            type:"GET",
            datatype:"JSON",
            success:function(respuestajuegos){
                console.log(respuestajuegos);
                pintarRespuestaJuegos(respuestajuegos);
            }
        });
    }
    
    function pintarRespuestaJuegos(respuestajuegos){
    
        let myTable="<table border=1 bordercolor=#FFFFFF>";
        for(i=0;i<respuestajuegos.length;i++){
            myTable+="<tr>";
            myTable+="<td><td><font color=#FFFFFF><b>"+respuestajuegos[i].name+"</b></font></td>";
            myTable+="<td><td><font color=#FFFFFF><b>"+respuestajuegos[i].developer+"</b></font></td>";
            myTable+="<td><td><font color=#FFFFFF><b>"+respuestajuegos[i].year+"</b></font></td>";
            myTable+="<td><td><font color=#FFFFFF><b>"+respuestajuegos[i].description+"</b></font></td>";
            myTable+="<td> <button onclick=' actualizarInformacionJuegos("+respuestajuegos[i].id+")'>Actualizar Juego </button>";
            myTable+="<td> <button onclick='borrarJuegos("+respuestajuegos[i].id+")'>Borrar Juego </button>";
            myTable+="</tr>";
        }
        myTable+="</table>";
        $("#resultado3").html(myTable);
    }
    
    function guardarInformacionJuegos(){
        let var3 = {
            name:$("#Gname").val(),
            developer:$("#Gdeveloper").val(),
            year:$("#Gyear").val(),
            description:$("#Gdescription").val(),
            };
          
            $.ajax({
            type:'POST',
            contentType: "application/json; charset=utf-8",
            dataType: 'JSON',
            data: JSON.stringify(var3),
            url:"http://150.230.69.146:8080/api/Game/save",
           
            success:function(response) {
                console.log(response);
                console.log("Se guardo correctamente");
                alert("Se guardo correctamente el Juego");
                window.location.reload()
        
            },
            
            error: function(jqXHR, textStatus, errorThrown) {
                  window.location.reload()
                alert("No se guardo el Juego");
        
            }
        });
    }
    
    function actualizarInformacionJuegos(idElementojuego){
        let myData={
            id:idElementojuego,
            name:$("#Gname").val(),
            developer:$("#Gdeveloper").val(),
            year:$("#Gyear").val(),
            description:$("#Gdescription").val()
        };
        console.log(myData);
        let dataToSend=JSON.stringify(myData);
        $.ajax({
            url:"http://150.230.69.146:8080/api/Game/update",
            type:"PUT",
            data:dataToSend,
            contentType:"application/JSON",
            datatype:"JSON",
            success:function(respuestajuegos){
                $("#resultado3").empty();
                $("#id").val("");
                $("#Gname").val("");
                $("#Gdeveloper").val("");
                $("#Gyear").val("");
                $("#Gdescrption").val("");
                traerInformacionJuegos();
                alert("Se Actualizo correctamente el Juego");   
            },
            
            error: function(jqXHR, textStatus, errorThrown) {
                window.location.reload()
              alert("No se Actualizo correctamente");
            }
        });
    }
    
    function borrarJuegos(idElementojuego){
        let myData={
            id:idElementojuego
        };
        let dataToSend=JSON.stringify(myData);
        $.ajax({
            url:"http://150.230.69.146:8080/api/Game/"+idElementojuego,
            type:"DELETE",
            data:dataToSend,
            contentType:"application/JSON",
            datatype:"JSON",
            success:function(respuestajuegos){
                $("#resultado3").empty();
                traerInformacionJuegos();
                alert("Se ha Eliminado correctamente el juegoo.")
            },
            
            error: function(jqXHR, textStatus, errorThrown) {
                window.location.reload()
              alert("No se Elimino correctamente el Juego");
            }
        });
    }
    

 /////////////////////MENSAJES/////////////////////////////4

function traerInformacionMensajes(){
    $.ajax({
        url:"http://150.230.69.146:8080/api/Message/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuestamensajes){
            console.log(respuestamensajes);
            pintarRespuestaMensajes(respuestamensajes);
        }
    });
}

function pintarRespuestaMensajes(respuestamensajes){

    let myTable="<table border=1 bordercolor=#FFFFFF>";
    for(i=0;i<respuestamensajes.length;i++){
        myTable+="<tr>";
        myTable+="<td><td><font color=#FFFFFF><b>"+respuestamensajes[i].messageText+"</b></font></td>";
        myTable+="<td> <button onclick='actualizarInformacionMensajes("+respuestamensajes[i].idMessage+")'>Actualizar Mensaje </button>";
        myTable+="<td> <button onclick='borrarMensaje("+respuestamensajes[i].idMessage+")'>Borrar Mensaje</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado4").html(myTable);
}

function guardarInformacionMensajes(){
    let var4 = {
        messageText:$("#MSmessage").val()
        };
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var4),
        url:"http://150.230.69.146:8080/api/Message/save",
        
        success:function(response) {
            console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctamente el Mensaje");
            window.location.reload()
            },
        
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se guardo correctamente el Mensaje");
        }
    });
}

function actualizarInformacionMensajes(idElementomenssaje){
    let myData={
        idMessage:idElementomenssaje,
        messageText:$("#MSmessage").val()
        };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://150.230.69.146:8080/api/Message/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuestamensajes){
            $("#resultado4").empty();
            $("#idMessage").val("");
            $("#MSmessage").val("");
            traerInformacionMensajes();
            alert("Se ha Actualizado correctamente el Mensaje")
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
        window.location.reload()
        alert("No se Actualizo correctamente el Mensaje");
        }
    });
}

function borrarMensaje(idElementomenssaje){
    let myData={
        idMessage:idElementomenssaje,
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://150.230.69.146:8080/api/Message/"+idElementomenssaje,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuestamensajes){
            $("#resultado4").empty();
            traerInformacionMensajes();
            alert("Se ha Eliminado correctamente el Mensaje.")
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
            window.location.reload()
          alert("No se Elimino correctamente el Mensaje");
        }
    });
}

/////////////////RESERVACIONES//////////////////////


function traerInformacionReservaciones(){
    $.ajax({
        url:"http://150.230.69.146:8080/api/Reservation/all",
        type:"GET",
        datatype:"JSON",
        success:function(respuestareservaciones){
            console.log(respuestareservaciones);
            pintarRespuestaReservaciones(respuestareservaciones);
        }
    });
}

function pintarRespuestaReservaciones(respuestareservaciones){

    let myTable="<table border=1 bordercolor=#FFFFFF>";
    for(i=0;i<respuestareservaciones.length;i++){
        myTable+="<tr>";
        myTable+="<td><td><font color=#FFFFFF><b>"+respuestareservaciones[i].startDate+"</b></font></td>";
        myTable+="<td><td><font color=#FFFFFF><b>"+respuestareservaciones[i].devolutionDate+"</b></font></td>";
        myTable+="<td><td><font color=#FFFFFF><b>"+respuestareservaciones[i].status+"</b></font></td>";
        myTable+="<td> <button onclick=' actualizarInformacionReservaciones("+respuestareservaciones[i].idReservation+")'>Actualizar Reservacion </button>";
        myTable+="<td> <button onclick='borrarReservaciones("+respuestareservaciones[i].idReservation+")'>Borrar Reservacion </button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado5").html(myTable);
}

function guardarInformacionReservaciones(){
    let var5 = {
        startDate:$("#RestarDate").val(),
        devolutionDate:$("#RedevolutionDate").val(),
        status:$("Restatus").val()
        };
        $.ajax({
        type:'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var5),
        url:"http://150.230.69.146:8080/api/Reservation/save",
        
        success:function(response) {
            console.log(response);
            console.log("Se guardo correctamente la Reservacion");
            alert("Se guardo correctamente la Reservacion");
            window.location.reload()
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
              window.location.reload()
            alert("No se guardo correctamente la Reservacion");
        }
    });
}

function actualizarInformacionReservaciones(idElementoreservaciones){
    let myData={
        idReservation:idElementoreservaciones,
        startDate:$("#RestarDate").val(),
        devolutionDate:$("#RedevolutionDate").val(),
        status:$("#Restatus").val()
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://150.230.69.146:8080/api/Reservation/update",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuestareservaciones){
            $("#resultado5").empty();
            $("#id").val("");
            $("#RestarDate").val("");
            $("#RedevolutionDate").val("");
            $("#Restatus").val("");
            traerInformacionReservaciones();
            alert("se ha Actualizado correctamente la Reservacion")
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
            window.location.reload()
          alert("No se Actualizo correctamente la Reservacion");
        }
    });
}

function borrarReservaciones(idElementoreservaciones){
    let myData={
        idReservation:idElementoreservaciones
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"http://150.230.69.146:8080/api/Reservation/"+idElementoreservaciones,
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuestareservaciones){
            $("#resultado5").empty();
            traerInformacionReservaciones();
            alert("Se ha Eliminado correctamente.")
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
            window.location.reload()
          alert("No se Elimino correctamente la Reservacion");
        }
    });
}

/////////////REPORTES/////////////////

function traerReporteStatus(){
    console.log("test");
    $.ajax({
        url:"http://150.230.69.146:8080/api/Reservation/report-status",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuesta(respuesta);
        }
    });
}
function pintarRespuesta(respuesta){

    let myTable="<table border=1 bordercolor=#FFFFFF>";
    myTable+="<tr>";
       myTable+="<th><font color=#FFFFFF><b>completadas</b></font></th>";
        myTable+="<td><font color=#FFFFFF><b>"+respuesta.completed+"</b></font></td>";
        myTable+="<th><font color=#FFFFFF><b>canceladas</b></font></th>";
        myTable+="<td><font color=#FFFFFF><b>"+respuesta.cancelled+"</b></font></td>";
        myTable+="</tr>";
    myTable+="</table>";
    $("#resultadoStatus").html(myTable);
}

function traerReporteDate(){

    var fechaInicio = document.getElementById("RstarDate").value;
    var fechaCierre = document.getElementById("RdevolutionDate").value;
    console.log(fechaInicio);
    console.log(fechaCierre);
    
        $.ajax({
            url:"http://150.230.69.146:8080/api/Reservation/report-dates/"+fechaInicio+"/"+fechaCierre,
            type:"GET",
            datatype:"JSON",
            success:function(respuesta){
                console.log(respuesta);
                pintarRespuestaDate(respuesta);
            }
        });
    }
    function pintarRespuestaDate(respuesta){

        let myTable="<table border=1 bordercolor=#FFFFFF>";
        myTable+="<tr>";
          
        for(i=0;i<respuesta.length;i++){
        myTable+="<th><font color=#FFFFFF><b>total</b></font></th>";
            myTable+="<td><font color=#FFFFFF><b>"+respuesta[i].devolutionDate+"</b></font></td>";
            myTable+="<td><font color=#FFFFFF><b>"+respuesta[i].startDate+"</b></font></td>";
            myTable+="<td><font color=#FFFFFF><b>"+respuesta[i].status+"</b></font></td>";
            myTable+="</tr>";
        }
        myTable+="</table>";
        $("#resultadoDate").html(myTable);
    }


    function traerReporteClientes(){
        $.ajax({
            url:"http://150.230.69.146:8080/api/Reservation/report-clients",
            type:"GET",
            datatype:"JSON",
            success:function(respuesta){
                console.log(respuesta);
                pintarRespuestaClientesReporte(respuesta);
            }
        });
    }
    function pintarRespuestaClientesReporte(respuesta){

        let myTable="<table border=1 bordercolor=#FFFFFF>";
        myTable+="<tr>";
          
        for(i=0;i<respuesta.length;i++){
        myTable+="<th><font color=#FFFFFF><b>total</b></font></th>";
            myTable+="<td><font color=#FFFFFF><b>"+respuesta[i].total+"</b></font></td>";
            myTable+="<td><font color=#FFFFFF><b>"+respuesta[i].client.name+"</b></font></td>";
            myTable+="<td><font color=#FFFFFF><b>"+respuesta[i].client.email+"</b></font></td>";
            myTable+="<td><font color=#FFFFFF><b>"+respuesta[i].client.age+"</b></font></td>";
            myTable+="</tr>";
        }
        myTable+="</table>";
        $("#resultadoClientes").html(myTable);
    }
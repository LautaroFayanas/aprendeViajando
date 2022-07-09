
const url = "https://www.dolarsi.com/api/api.php?type=valoresprincipales"

$.get(url,(respuesta,estado) =>{
 
    if(estado === "success"){
           
        respuesta.forEach(e => {

            $("#api").append
            (`<div id="${e.casa.agencia}">
            ${e.casa.nombre} <br>
            ${e.casa.compra}
            
            </div>`)
            
        });

        $("#311").css("display","none")
        $("#312").css("display","none")
        $("#313").css("display","none")
        $("#399").css("display","none")
        $("#302").css("display","none")
        $("#141").css("display","none")
        $("#406").css("display","none")
        $("#349").css("display","none")
       
 
    }

})



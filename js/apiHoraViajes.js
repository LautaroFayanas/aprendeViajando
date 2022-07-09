const apiClima = "http://worldtimeapi.org/api/timezone/Europe/Paris"

fetch(apiClima)
   .then(respuesta=> respuesta.json())
   .then(data => {
       console.log(data);

       $("#apiClima").append
       (`<div id="#apiClima">  

       
       <h3> ${data.timezone} </h3>
       ${data.datetime}
    
       </div>`)
   })

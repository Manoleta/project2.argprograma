
//Guardo en mi variable lo que se le manda por url y se guarda en location.search 
let queryString = location.search

console.log(queryString);


//Me permite usar metodos para poder obtener los valores que me llegan por url

let param = new URLSearchParams(queryString)

console.log(param);

//con el metodo get de la instancia creada arriba, saco el valor del id y lo guardo en una variable.

const id = param.get('id')
console.log(id);

//Me traigo y guardo en evento el evento cuyo id es el mismo que me llego por la search location

let evento = []
evento = eventos.find(evento => evento._id == id)
console.log(evento);

let containerDetails = document.getElementById('container_detail')
containerDetails.innerHTML= ''

function makeDetailCard (objeto)
{
    containerDetails.innerHTML +=`figure class="figure">
<img src="${evento.image}" class="figure-img img-fluid rounded" alt="...">
</figure>
<div class="card text-bg-dark mb-3" style="max-width: 18rem;">
<div class="card-header"> ${evento.name}</div>
<div class="card-body">
  <h5 class="card-title">${evento.category}</h5>
  <p class="card-text"> ${evento.description}</p>
</div>`
}






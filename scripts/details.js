let URLapi = "https://mindhub-xj03.onrender.com/api/amazing"


async function traer() {
    let response = await fetch(URLapi);
    datosAPI = await response.json();
    console.log(datosAPI)
}

async function iniciar() {
    await traer();

let queryString = location.search
let param = new URLSearchParams(queryString)
const id = param.get('id')
let evento = []
evento = datosAPI.events.find(evento => evento._id == id)
console.log(evento);

let containerDetails = document.getElementById('container_detail')
containerDetails.innerHTML= ''

function makeDetailCard (objeto)
{
    
    let browserTab = document.querySelector('title')
    browserTab.innerHTML = evento.name

    containerDetails.innerHTML +=`<figure class="figure">
<img src="${evento.image}" class="figure-img img-fluid rounded" alt="...">
</figure>
<div class="card text-bg-dark mb-3" style="max-width: 18rem;">
<div class="card-header"> ${evento.name}</div>
<div class="card-body">
  <h5 class="card-title">${evento.category}</h5>
  <p class="card-text"> ${evento.description}</p>
</div>`
}

makeDetailCard(evento)


}
iniciar()

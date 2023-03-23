let URLapi = "https://mindhub-xj03.onrender.com/api/amazing"


async function traer() {
    let response = await fetch(URLapi);
    datosAPI = await response.json();

}

async function iniciar() {
  await traer();

  let arrEvents = datosAPI.events

// Completo Array objetos Futuro y pasado 
  let pastarray = []
  let upcomingarray = []

for (let i = 0; i < datosAPI.events.length; i++) {
    let element = datosAPI.events[i];
    let fecha = new Date("2023-03-20")
    let fechaevent = new Date(element.date)
    if (fecha > fechaevent ) {
        pastarray.push(datosAPI.events[i])
    } else {
        upcomingarray.push(datosAPI.events[i])
    }
}

//Defino funcion para imprimir cards

function imprimirCards(array) {

  let divCards = document.getElementById('div-cards')
  divCards.innerHTML= ''

  for (let evento of array) {
      divCards.innerHTML += `<div class="card" style="width: 18rem;">
  <img src="${evento.image}" class="card-img-top" alt="cinema" id="img">
  <div class="card-body">
    <h5 class="card-title" id="title">${evento.name}</h5>
    <p class="card-text" id="text">${evento.description}</p>
    <div class="end-card">
      <p class="card-price" id="price">Price ${evento.price}</p>
     <a href="./details.html?id=${evento._id}" class="btn btn-primary">Ver más</a>
    </div> 
  </div>`
  }
}

// Defino funcion para categorias dinamicas 

function imprimirCategories (array){

  let categories = []

array.forEach( evento => {
if (!categories.includes(evento.category)) {
    categories.push(evento.category);
}
})

  let ul_cat = document.getElementById('ul-checkbox')
  ul_cat.innerHTML= ''

categories.forEach(categoria => {ul_cat.innerHTML += `<li class="list-group-item">
<input class="form-check-input me-1" type="checkbox" value="${categoria}" id="${categoria}">
<label class="form-check-label" for="${categoria}">${categoria}</label>
</li>`})
  
}
imprimirCards (pastarray)
imprimirCategories(pastarray) 

const inputCat = document.querySelectorAll('input[type="checkbox"]')

inputCat.forEach(function(checkbox) {
    checkbox.addEventListener("change", filtroCategory);
    });

    const buttonSearch = document.getElementById("button_search");
    buttonSearch.addEventListener("click", filtroCategory);
    

//Filtro por Categoria 
function filtroCategory (e) {
  e.preventDefault()
  const arrfiltro = [] ;
  inputCat.forEach(input => {
             if(input.checked) {
              arrfiltro.push(input.value);
               }
     });

  let eventoChequeado = pastarray.filter((obj) =>{
  return arrfiltro.includes(obj.category);
   })

   const textSearch = document.getElementById("textsearch").value.toLowerCase();
   let eventSearch = pastarray.filter(function(event) {
   return event.name.toLowerCase().includes(textSearch) || event.description.toLowerCase().includes(textSearch);})

if (arrfiltro.length === 0 && eventSearch.length){
  imprimirCards(eventSearch);
}else{
  if(arrfiltro.length > 0){
    eventSearch = eventSearch.filter(event => {
      return arrfiltro.some(cat =>event.category.includes(cat))
    })
    if(eventSearch.length){ 
      imprimirCards(eventSearch);}
   else{
    notFound();
   }
  }
  else{
    notFound();
}
}
}

function notFound(){
  let divCards = document.getElementById('div-cards')
  divCards.innerHTML= ''
  divCards.innerHTML += `<h2>No hay resultados</h2>`
}
}

iniciar();
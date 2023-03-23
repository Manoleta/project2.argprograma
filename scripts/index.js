imprimirCards (arrEvents)
imprimirCategories(arrEvents) 

const textsearch = document.getElementById("textsearch");
const searchButton = document.getElementById("button_search");

const busqueda = textsearch.value.toLowerCase().trim();

searchButton.addEventListener("click", 
  buscar());


function buscar(){
  console.log(busqueda)
  console.log(searchButton)
}

imprimirCards (pastarray)
imprimirCategories(pastarray)


const inputCat = document.querySelectorAll('input[type="checkbox"]')

inputCat.forEach(function(checkbox) {
    checkbox.addEventListener("change", filtroCategory);
    });

const buttonSearch = document.getElementById("button_search");
    buttonSearch.addEventListener("click", filtroCategory);
    

    //Filtro por Categoria 
function filtroCategory () {
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
    imprimirCards(eventSearch)
  }else{
    if(arrfiltro.length > 0){
      eventSearch = eventSearch.filter(event => {
        return arrfiltro.some(cat =>event.category.includes(cat))
      })
      if(eventSearch.length){ 
        imprimirCards(eventSearch)}
     else{
      notFound()
     }
    }
    else{
      notFound()
  }
  }
  }
  
  function notFound(){
    let divCards = document.getElementById('div-cards')
    divCards.innerHTML= ''
    divCards.innerHTML += `<h2>No hay resultados</h2>`
  }
  
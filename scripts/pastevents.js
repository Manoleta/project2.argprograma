  let pastarray = []
  let upcomingarray = []

for (let i = 0; i < data.events.length; i++) {
    let element = data.events[i];
    let fecha = new Date(data.currentDate)
    let fechaevent = new Date(element.date)
    if (fecha > fechaevent ) {
        pastarray.push(data.events[i])
    } else {
        upcomingarray.push(data.events[i])
    }
}



for (let i = 0; i < pastarray.length; i++) {
    let element2 = pastarray[i]
    div3.innerHTML += `<div class="card" style="width: 18rem;">
    <img src="${element2.image}" class="card-img-top" alt="cinema" id="img">
    <div class="card-body">
      <h5 class="card-title" id="title">${element2.name}</h5>
      <p class="card-text" id="text">${element2.description}</p>
      <div class="end-card">
        <p class="card-price" id="price">Price ${element2.price}</p>
       <a href="./details.html" class="btn btn-primary">Ver más</a>
      </div> 
    </div>`
}
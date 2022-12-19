fetch('https://swapi.dev/api/people/1/').then(response =>{
    return response.json()
}).then(corpo=>{
    document.getElementById("nome").innerHTML=corpo.name
    document.getElementById("altura").innerHTML=corpo.height
})

fetch('https://swapi.dev/api/people/2/').then(response =>{
    return response.json()
}).then(corpo=>{
    document.getElementById("nome2").innerHTML=corpo.name
    document.getElementById("altura2").innerHTML=corpo.height
})






// API - https://swapi.dev/api/people/ 
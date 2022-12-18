const url = "https://swapi.dev/api/people" 

const loadingElement = document.querySelector("#loading")
const peopleContainer = document.querySelector("#people-container")

async function getAllPeople() {
    const response = await fetch(url); 
    console.log(response); 

    const data = await response.json(); 
    console.log(data);

    //loadingElement.classList.add("hide");

    data.map((people) => {
        const div = document.createElement("div");
        const species = document.createElement("p");
        const birth_year = document.createElement("p");
        const link = document.createElement("a");


        species.innerText = people.species;
        birth_year.innerText = people.birth_year;
        link.innerText = "Ler";
        link.setAttribute("href", '/index.html?id=${people.id}');

        div.appendChild(species);
        div.appendChild(birth_year);
        div.appendChild(link);

        peopleContainer,appendChild(div);

    });
}

getAllPeople();






// API - https://swapi.dev/api/people/1/ 
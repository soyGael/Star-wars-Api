const sectionShip = document.getElementById("starship_container");
const mainShip = document.getElementById("modal_container");
let index = 0;
const ships = [
  {
    name: "CR90",
    url: "https://th.bing.com/th/id/OIP.xN7xDHhxqfpG7efSXAjXdwHaEK?rs=1&pid=ImgDetMain",
    faction: "Rebelde",
    type: "Transporte",
  },
  {
    name: "Star Destroyer",
    url: "https://th.bing.com/th/id/OIP.Ds4OoHxuxuEn-myIBTzF-gHaEo?rs=1&pid=ImgDetMain",
    faction: "Imperio",
    type: "Militar",
  },
  {
    name: "Sentinel",
    url: "https://cdna.artstation.com/p/marketplace/presentation_assets/001/723/266/large/file.jpg?1652848070",
    faction: "Imperio",
    type: "Transporte",
  },
  {
    name: "Death Star",
    url: "https://th.bing.com/th/id/OIP.kTBTueW86dbFMVvhSKFyIAHaEK?rs=1&pid=ImgDetMain",
    faction: "Imperio",
    type: "Militar",
  },
  {
    name: "Millennium Falcon",
    url: "https://th.bing.com/th/id/OIP.NUchM44XJo16dVSuFmVnfAHaFH?rs=1&pid=ImgDetMain",
    faction: "Rebelde",
    type: "Transporte",
  },
  {
    name: "Y-Wing",
    url: "https://th.bing.com/th/id/OIP.XyX016-s-ZMFqWpSF0seKwHaFj?rs=1&pid=ImgDetMain",
    faction: "Rebelde",
    type: "Militar",
  },
  {
    name: "X-Wing",
    url: "https://th.bing.com/th/id/R.a2f5d707cc5f4f168659fd03db05feba?rik=YbByaLaXTq7SLg&pid=ImgRaw&r=0",
    faction: "Rebelde",
    type: "Militar",
  },
  {
    name: "Tie Advance",
    url: "https://th.bing.com/th/id/R.5fd34895e6ec16d43a1aa6f1538d806f?rik=Cc5byUXFu9Ejhw&pid=ImgRaw&r=0",
    faction: "Imperio",
    type: "Militar",
  },
  {
    name: "Executor",
    url: "https://th.bing.com/th/id/R.1203e4cae8b65feb938bcf3c0ee6b347?rik=HfN%2fUUH7sYJeBw&pid=ImgRaw&r=0",
    faction: "Imperio",
    type: "Militar",
  },
  {
    name: "Rebel transport",
    url: "https://th.bing.com/th/id/OIP._Yi9OUgTs2UqCYhmn30d3AHaFL?rs=1&pid=ImgDetMain",
    faction: "Rebelde",
    type: "Transporte",
  },
  {
    name: "Slave 1",
    url: "https://beforesandafters.com/wp-content/uploads/2020/04/slavel1_final.jpg",
    faction: "Imperio",
    type: "Militar",
  },
  {
    name: "Imperial shuttle",
    url: "https://th.bing.com/th/id/R.1f76b7d27acb6c638f5ab70fb47bf345?rik=%2bpt66snTYn4x%2fg&pid=ImgRaw&r=0",
    faction: "Imperio",
    type: "Transporte",
  },
  {
    name: "EF76 Nebulon",
    url: "https://th.bing.com/th/id/OIP.Fn5MjmavpTKBgE5fZmhbnQHaFj?rs=1&pid=ImgDetMain",
    faction: "Rebelde",
    type: "Militar",
  },
  {
    name: "Calamari Cruiser",
    url: "https://cdnb.artstation.com/p/assets/images/images/005/214/805/large/howard-day-moncal-08-00000.jpg?1489393130",
    faction: "Rebelde",
    type: "Militar",
  },
  {
    name: "A-Wing",
    url: "https://th.bing.com/th/id/R.d77a440a8c03ae8b378a7f026a17d1c8?rik=fnWdriwGwIuAAA&pid=ImgRaw&r=0",
    faction: "Rebelde",
    type: "Militar",
  },
];

let starshipsData;

async function fetchStarships() {
  try {
    const response = await fetch("https://swapi.info/api/starships");
    const data = await response.json();
    console.log(data);
    starshipsData = data;
    processStarshipsData(starshipsData);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchStarships();


function processStarshipsData(data) {
  for (const starship of data) {
    const imgShipContainer = document.createElement("div");
    imgShipContainer.setAttribute("class", "containerImg");
    const imgShip = document.createElement("img");
    imgShip.setAttribute("src", `${ships[index].url}`);
    const articleShip = document.createElement("article");

    const titleShip = document.createElement("h2");
    const bodyInfoShip = document.createElement("div");
    bodyInfoShip.setAttribute("class", "border-top");
    const dataInfoShip_Model = document.createElement("p");
    dataInfoShip_Model.setAttribute("class", "reduce_info");
    const dataInfoShip_Credits = document.createElement("p");

    const btn_Info = document.createElement("btn");
    btn_Info.textContent = "Saber más";
    btn_Info.setAttribute("class", "btn");
    btn_Info.setAttribute("data-index", `${index}`);
    btn_Info.addEventListener("click", function () {
      let index = this.getAttribute("data-index");
      mostrarInfo(index);
    });

    titleShip.textContent = starship.name;
    dataInfoShip_Model.textContent = `Modelo: ${starship.model}`;
    dataInfoShip_Credits.textContent += `Costo en créditos: ${starship.cost_in_credits}`;
    dataInfoShip_Credits.setAttribute("class", "reduce_info");

    // ! Elemento padre
    sectionShip.append(articleShip);

    // ! Elementos hijos
    articleShip.append(imgShipContainer);
    imgShipContainer.append(imgShip);
    articleShip.append(titleShip);
    articleShip.append(bodyInfoShip);
    bodyInfoShip.append(dataInfoShip_Model);
    bodyInfoShip.append(dataInfoShip_Credits);
    bodyInfoShip.append(btn_Info);
    index++;
  }
}

function mostrarInfo(e) {
  alert(e);
  const modalExistente = document.querySelector('.modal');
  if (modalExistente) {
    modalExistente.remove();
  }
  const modal = document.createElement("div");
  modal.setAttribute("class", "modal");
  modal.textContent = starshipsData[e].name;
  mainShip.prepend(modal);
}

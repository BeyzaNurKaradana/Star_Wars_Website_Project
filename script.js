let characters = [
    {
      id: 1,
      name: "Luke Skywalker",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
      homeworld: "tatooine",
    },
    {
      id: 2,
      name: "C-3PO",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
      homeworld: "tatooine",
    },
    {
      id: 3,
      name: "R2-D2",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
      homeworld: "naboo",
    },
    {
      id: 4,
      name: "Darth Vader",
      pic: "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
      homeworld: "tatooine",
    },
    {
      id: 5,
      name: "Leia Organa",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
      homeworld: "alderaan",
    },
    {
      id: 6,
      name: "Owen Lars",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
      homeworld: "tatooine",
    },
    {
      id: 7,
      name: "Beru Whitesun lars",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png",
      homeworld: "tatooine",
    },
    {
      id: 8,
      name: "R5-D4",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png",
      homeworld: "tatooine",
    },
    {
      id: 9,
      name: "Biggs Darklighter",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
      homeworld: "tatooine",
    },
    {
      id: 10,
      name: "Obi-Wan Kenobi",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
      homeworld: "stewjon",
    },
    {
      id: 11,
      name: "Anakin Skywalker",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
      homeworld: "tatooine",
    },
    {
      id: 12,
      name: "Wilhuff Tarkin",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
      homeworld: "eriadu",
    },
    {
      id: 13,
      name: "Chewbacca",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
      homeworld: "kashyyyk",
    },
    {
      id: 14,
      name: "Han Solo",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
      homeworld: "corellia",
    },
    {
      id: 15,
      name: "Greedo",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg",
      homeworld: "rodia",
    },
    {
      id: 16,
      name: "Jabba Desilijic Tiure",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png",
      homeworld: "tatooine",
    },
    {
      id: 17,
      name: "Wedge Antilles",
      pic: "https://lumiere-a.akamaihd.net/v1/images/image_cef2777b.jpeg",
      homeworld: "corellia",
    },
    {
      id: 18,
      name: "Jek Tono Porkins",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png",
      homeworld: "bestine",
    },
    {
      id: 19,
      name: "Yoda",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png",
      homeworld: "other",
    },
    {
      id: 20,
      name: "Palpatine",
      pic: "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png",
      homeworld: "naboo",
    },
  ];
  
  const cardsRow = document.getElementById("cardsRow");
  const button = document.getElementById("showButton");
  const radioContainer = document.getElementById("radioContainer");
  
  function showCharacters() {
    let arr = "";
    let arrTwo = "";
    for (let i = 0; i < characters.length; i++) {
      const card = characters[i];
      arr += `<div class="card" filter-id="${card?.homeworld}" style="width: 18rem;"><ul class="list-group list-group-flush text-center"><li class="list-group-item"><img class="img-fluid" src=${card?.pic}></li><li class="list-group-item">${card?.name}</li><li class="list-group-item">${card?.homeworld}</li></ul></div>`;
    }
  
    cardsRow.innerHTML = arr;
  
    cardsRow.classList.toggle("display");
    cardsRow.classList.toggle("hide");
  
    button.classList.toggle("btn-hide");
    button.classList.toggle("btn-show");
  
    radioContainer.classList.toggle("display-flex");
    radioContainer.classList.toggle("hide");
  
    if (button.innerText == "Display Characters") {
      button.innerText = "Hide Characters";
    } else {
      button.innerText = "Display Characters";
    }
  
    for (let i = 0; i < homeWorlds.length; i++) {
      const radio = homeWorlds[i];
      arrTwo += `<div class="form-check">
        <input class="form-check-input mx-2" type="radio" name="homeworld" value="${homeWorlds[i]}"  id="homeworld-${homeWorlds[i]}">
        <label class="form-check-label" for=""homeworld-${homeWorlds[i]}"">${homeWorlds[i]}
        </label>
      </div>`;
  
      radioContainer.innerHTML = arrTwo;
    }
  }

  //PART 2
  
let homeworldsRaw = characters.map((a) => a.homeworld);
  console.log(homeworldsRaw);
  
  let homeworldsUnique = [...new Set(homeworldsRaw)];
  console.log(homeworldsUnique);
  
  let homeworldsLowercase = homeworldsUnique.map((a) => {
    return a.toLowerCase();
  });
  
  const homeWorlds = homeworldsLowercase;
  
  console.log(homeworldsLowercase);
  
  document.addEventListener("DOMContentLoaded", function () {
    let filteredHomeworld = null;
  
    function updateHomeworld() {
      const radioButtons = document.querySelectorAll('input[name="homeworld"]');
  
      for (const radioButton of radioButtons) {
        if (radioButton.checked) {
          filteredHomeworld = radioButton.value;
          var cards = document.getElementsByClassName("card");
          cards = Array.from(cards);
          cards.forEach(function (item, index) {
           if(item.getAttribute("filter-id")!=filteredHomeworld){
            item.style.display="none"
           }else{
            item.style.display="block"
            
           }
          });
          break;
        }
      }
      console.log("Selected homeworld", filteredHomeworld);
    }
  
    document.body.addEventListener("change", updateHomeworld);
  
    updateHomeworld();
  });
   
  
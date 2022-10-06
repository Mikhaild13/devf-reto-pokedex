let pokemons = JSON.parse(poke_file).result;
let pkmInput = document.getElementById('pkmInput');
let results = document.getElementById('results');

let liveSearch = () => {

  results.innerHTML = '';
  
  let type1 = '';
  let type2 = '';

  pokemons.map(pokemon => {
    if(pkmInput.value.length >= 2) {
      if(pokemon.name.toLowerCase().includes(pkmInput.value.toLowerCase())) {

        if (pokemon.type.length > 1) {
          type1 = pokemon.type[0];
          type2 = pokemon.type[1];
          results.innerHTML += 
          `
          <div class="card">
          <div class="imgBx" style="background-image: url(./img/Pokemon_Type_Icon_${type1}.svg);
      background-size: contain;">
            <img src="${pokemon.ThumbnailImage}" alt="">
          </div>
          <div class="content">
            <div class="details">
              <h2>#${pokemon.number} ${pokemon.name}<br>
              <span>Type: <img src="./img/Pokemon_Type_Icon_${type1}.svg"> <img src="./img/Pokemon_Type_Icon_${type2}.svg"></span>
              </h2>
              <div class="data">
                <h3>Height ${pokemon.height}</h3>
                <h3>Weight ${pokemon.weight}</h3>
                <h3>Hability "${pokemon.abilities}"</h3>
              </div>
              <form class="actionBtn" action="https://www.pokemon.com${pokemon.detailPageURL}">
                <button type="submit">MORE DETAIL</button>
              </form>
            </div>
          </div>
        </div>
          `
        } else {
          type1 = pokemon.type[0];
          results.innerHTML += 
          `
          <div class="card">
          <div class="imgBx" style="background-image: url(./img/Pokemon_Type_Icon_${type1}.svg);
      background-size: contain;">
            <img src="${pokemon.ThumbnailImage}" alt="">
          </div>
          <div class="content">
            <div class="details">
              <h2>${pokemon.name}<br>
              <span>Type: <img src="./img/Pokemon_Type_Icon_${type1}.svg"></span>
              </h2>
              <div class="data">
                <h3>Height ${pokemon.height}</h3>
                <h3>Weight ${pokemon.weight}</h3>
                <h3>Hability "${pokemon.abilities}"</h3>
              </div>
              <form class="actionBtn" action="https://www.pokemon.com${pokemon.detailPageURL}">
                <button type="submit">MORE DETAIL</button>
              </form>
            </div>
          </div>
        </div>
          `
        }
        // const imgBx = document.getElementById('imgBx');

        // imgBx.style.backgroundColor = 'red';

      }
    }
  })
}




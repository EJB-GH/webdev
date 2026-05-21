const pokemonColors = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#c56d6a",
  poison: "#ea7ce8",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#9074b4",
  dragon: "#967bdb",
  dark: "#938175",
  steel: "#B7B7CE",
  fairy: "#D685AD",
};

// Add your code here

const createNewElement = function (data) {
  const { name: pokemonName, types } = data;
  const { front_default: pokemonImage } =
    data.sprites.other["official-artwork"];

  const pokemonTypesArr = types.map((item) => item.type.name);

  const card = document.createElement("div");
  const h2 = document.createElement("h2");
  const img = document.createElement("img");
  const typesDiv = document.createElement("div");

  h2.textContent = pokemonName;
  img.src = pokemonImage;
  img.alt = pokemonName;
  img.width = "240";
  img.height = "240";

  card.setAttribute("class", "pokemonCard");

  card.append(h2);
  card.append(img);
  card.append(typesDiv);

  pokemonTypesArr.map((item) => {
    const span = document.createElement("span");
    span.textContent = item;
    span.style.backgroundColor = pokemonColors[item];
    span.setAttribute("class", "pokemonType");
    typesDiv.append(span);
  });

  return card;
};

const fetchData = async function () {
  const url = "https://pokeapi.co/api/v2/pokemon/bulbasaur";
  const pokeList = document.querySelector(".poke-list");

  try {
    const resp = await fetch(url);
    const data = await resp.json();
    const elem = createNewElement(data);
    pokeList.append(elem);

    console.log(data);
  } catch (error) {
    console.error("Error fetching data from PokeAPI", error);
    const errorElement = document.createElement("p");
    errorElement.textContent = "Error fetching data from PokeAPI";
    errorElement.setAttribute("class", "errorMessage");
    pokeList.append(errorElement);
  } finally {
    console.log("execute either way");
    const loading = document.querySelector(".loading-container");
    loading.setAttribute("class", "display-none");
  }
};

const fetchDataAll = async function () {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=250&offset=0";
  const pokeList = document.querySelector(".poke-list");

  try {
    const resp = await fetch(url);
    const data = await resp.json();

    const pokemonDetails = await Promise.all(
      data.results.map((pokemon) => fetch(pokemon.url).then((r) => r.json())),
    );

    pokemonDetails.forEach((pokemon) => {
      const elem = createNewElement(pokemon);
      pokeList.append(elem);
    });

    console.log(data);
  } catch (error) {
    console.error("Error fetching data from PokeAPI", error);
    const errorElement = document.createElement("p");
    errorElement.textContent = "Error fetching data from PokeAPI";
    errorElement.setAttribute("class", "errorMessage");
    pokeList.append(errorElement);
  } finally {
    console.log("execute either way");
    const loading = document.querySelector(".loading-container");
    loading.setAttribute("class", "display-none");
  }
};

fetchDataAll();

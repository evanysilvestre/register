
async function fetchData() {
    try{
        //const pokemonName = document.getElementById("pokemonName").value.toLowerCase();

        let number = Math.floor(Math.random() * 50) + 1;

        const response = await fetch(`https://pokeapi.co/api/v2/item/${number}/`);
        console.log(response);

        if(!response.ok) {
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.default;
        const name = data.name;
        const pokemonName = document.getElementById("pokemonName");
        const imgElement = document.getElementById("pokemonSprite");

        pokemonName.innerHTML = name;
        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";

    } catch(error) {
        console.error(error);
    }
}
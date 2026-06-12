const jokes = document.querySelector("#jokes");
const button = document.querySelector("button");


const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: "application/json" } };
        const res = await axios.get("https://icanhazdadjoke.com/", config);
        const joketext = res.data.joke;
        const newLI = document.createElement("LI");
        newLI.append(joketext);
        jokes.append(newLI);
    } catch (e) {
        return "NO JOKES AVAILABLE! SORRY :(";
    }
};

button.addEventListener("click", getDadJoke);
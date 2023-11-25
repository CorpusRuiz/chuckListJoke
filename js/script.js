const fetchJoke = document.getElementById('fetchJoke')
const jokeList = document.getElementById('jokeList')
const reiniciar = document.getElementById('Reiniciar')
let jokes = []

reiniciar.addEventListener('click', () => {
    localStorage.clear()
    jokeList.innerHTML = ``
    jokes = []
})
fetchJoke.addEventListener('click', () => {
    fetch('https://api.chucknorris.io/jokes/random')
    .then((response) => {
        if(!response.ok) {
            throw new Error ('Ha ocurrido un error 1')
        }   return response.json();
    })
    .then((data) => {
      jokes.push(data.value)
      guardar()
      pintar()
    })
    .catch (Error => {
        jokeList.innerHTML = ('Ha ocurrido un error 2')
    });

})

const guardar = () =>{
    localStorage.setItem('jokes', JSON.stringify(jokes))
}

const pintar = () => {
    let secondJokes = localStorage.getItem('jokes')
    jokeList.innerHTML = ``
    JSON.parse(secondJokes).forEach(joke => {
        jokeList.innerHTML += `
        <div class="joke">
        <p>${joke}</p>
        </div>
        ` 
    });
}
pintar()




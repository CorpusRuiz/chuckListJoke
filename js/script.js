const fetchJoke = document.getElementById('fetchJoke')
const jokeList = document.getElementById('jokeList')
let jokes = []

fetchJoke.addEventListener('click', () => {
    fetch('https://api.chucknorris.io/jokes/random')
    .then((response) => {
        if(!response.ok) {
            throw new Error ('Ha ocurrido un error 1')
        }   return response.json();
    })
    .then((data) => {
      jokes.push(data.value)
    })
    .catch (Error => {
        jokeList.innerHTML = ('Ha ocurrido un error 2')
    });

})
console.log(jokecounter)




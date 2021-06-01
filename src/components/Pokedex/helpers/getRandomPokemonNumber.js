/**
 * get random number between from and to
 */
const getRandomPokemonNumber = (from, to) => {
    const randomNumber = Math.floor(Math.random() * to) + from
    return randomNumber
}

export default getRandomPokemonNumber

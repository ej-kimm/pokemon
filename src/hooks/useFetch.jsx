import { useEffect, useState } from 'react'

export default function useFetch(id) {
  const [pokemons, setPokemons] = useState([])
  const [clickedPokemon, setClickedPokemon] = useState({})

  useEffect(() => {
    fetch('/data/pokemons.json')
      .then((res) => res.json())
      .then((data) => {
        setPokemons(data)

        if (id) {
          const foundPokemon = data.find((pokemon) => pokemon.id === Number(id))
          setClickedPokemon(foundPokemon)
        }
      })
      .catch((err) => console.error(err))
  }, [])

  return id ? { clickedPokemon } : [pokemons]
}

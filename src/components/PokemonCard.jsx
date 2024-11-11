import { addPokemon, removePokemon } from '../redux/modules/pokemonSlice'
import { StyledPokemonCardBox } from '../styles/components/StyledPokemonCard'
import { useDispatch } from 'react-redux'
import Button from './Button'

export default function PokemonCard({ pokemon, action }) {
  const dispatch = useDispatch()

  const handleAddButton = (e) => {
    e.preventDefault()
    dispatch(addPokemon(pokemon))
  }

  const handleRemoveButton = (e) => {
    e.preventDefault()
    dispatch(removePokemon(pokemon.id))
  }

  return (
    <StyledPokemonCardBox>
      <img src={pokemon.img_url} alt={pokemon.korean_name} />
      <div>
        <strong>{pokemon.korean_name}</strong>
        <p>{`No. ${String(pokemon.id).padStart(3, 0)}`}</p>
      </div>
      <Button
        onClick={action === 'select' ? handleAddButton : handleRemoveButton}
      >
        {action === 'select' ? '선택' : '삭제'}
      </Button>
    </StyledPokemonCardBox>
  )
}

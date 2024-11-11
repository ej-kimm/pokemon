import { usePokemon } from '../context/PokemonContext'
import { StyledPokemonCardBox } from '../styles/components/StyledPokemonCard'
import { StyledButton } from '../styles/modules/StyledButtons'

export default function PokemonCard({ pokemon, action }) {
  const { addPokemon, removePokemon } = usePokemon()

  const handleAddButton = (e) => {
    e.preventDefault()
    addPokemon(pokemon)
  }

  const handleRemoveButton = (e) => {
    e.preventDefault()
    removePokemon(pokemon.id)
  }

  return (
    <StyledPokemonCardBox>
      <img src={pokemon.img_url} alt={pokemon.korean_name} />
      <div>
        <strong>{pokemon.korean_name}</strong>
        <p>{`No. ${String(pokemon.id).padStart(3, 0)}`}</p>
      </div>
      <StyledButton
        type="button"
        action="select"
        size="small"
        onClick={action === 'select' ? handleAddButton : handleRemoveButton}
      >
        {action === 'select' ? '선택' : '삭제'}
      </StyledButton>
    </StyledPokemonCardBox>
  )
}

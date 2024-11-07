import { StyledPokemonCardBox } from '../styles/components/StyledPokemonCard'
import { StyledButton } from '../styles/modules/StyledButtons'

export default function PokemonCard({ pokemon, action, onSelect }) {
  const addPokemon = () => {
    onSelect(pokemon)
  }

  return (
    <StyledPokemonCardBox>
      <img src={pokemon.img_url} alt={pokemon.korean_name} />
      <div>
        <strong>{pokemon.korean_name}</strong>
        {pokemon.id < 10 ? (
          <p>No. 00{pokemon.id}</p>
        ) : pokemon.id < 100 ? (
          <p>No. 0{pokemon.id}</p>
        ) : (
          <p>No. {pokemon.id}</p>
        )}
      </div>
      <StyledButton
        type="button"
        action="select"
        size="small"
        onClick={action === 'select' ? addPokemon : null}
      >
        {action === 'select' ? '선택' : '삭제'}
      </StyledButton>
    </StyledPokemonCardBox>
  )
}

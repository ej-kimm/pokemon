import React from 'react'
import useFetch from '../hooks/useFetch'
import { useParams } from 'react-router-dom'
import {
  StyledPokemonDetailContainer,
  StyledBackground,
  StyledBlob,
  StyledContent,
  StyledPokemonCardBox,
} from '../styles/layouts/StyledPokemonDetail'
import { StyledButton } from '../styles/modules/StyledButtons'
import { useNavigate } from 'react-router-dom'

export default function PokemonDetail() {
  const { id } = useParams()
  const {
    clickedPokemon: { img_url, korean_name, types, description },
  } = useFetch(id)
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(-1)
  }

  return (
    <StyledPokemonDetailContainer>
      <StyledPokemonCardBox>
        <StyledBackground />
        <StyledBlob />
        <StyledContent>
          <img src={img_url} alt={korean_name} />
          <h2>{korean_name}</h2>
          <p>{(types || []).join(', ')}</p>
          <p>{description}</p>
          <StyledButton type="button" size="small" onClick={handleGoBack}>
            뒤로 가기
          </StyledButton>
        </StyledContent>
      </StyledPokemonCardBox>
    </StyledPokemonDetailContainer>
  )
}

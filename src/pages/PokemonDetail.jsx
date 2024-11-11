import React from 'react'
import useFetch from '../hooks/useFetch'
import { useParams } from 'react-router-dom'
import {
  StyledPokemonDetailContainer,
  StyledBackground,
  StyledBlob,
  StyledContent,
  StyledPokemonCardBox,
  StyledButtonWrapper,
} from '../styles/layouts/StyledPokemonDetail'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addPokemon, removePokemon } from '../redux/modules/pokemonSlice'
import Button from '../components/Button'

export default function PokemonDetail() {
  const { id } = useParams()
  const { clickedPokemon } = useFetch(id)
  const { selectedPokemonList } = useSelector((state) => state.pokemon)
  const isPokemonSeleted = selectedPokemonList.find(
    (pokemon) => pokemon.id === Number(id)
  )
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(-1)
  }
  const handleButtonAction = () => {
    isPokemonSeleted
      ? dispatch(removePokemon(Number(id)))
      : dispatch(addPokemon(clickedPokemon))
  }

  return (
    <StyledPokemonDetailContainer>
      <StyledPokemonCardBox>
        <StyledBackground />
        <StyledBlob />
        <StyledContent>
          <img src={clickedPokemon.img_url} alt={clickedPokemon.korean_name} />
          <h2>{clickedPokemon.korean_name}</h2>
          <p>{(clickedPokemon.types || []).join(', ')}</p>
          <p>{clickedPokemon.description}</p>
          <StyledButtonWrapper>
            <Button onClick={handleGoBack}>뒤로 가기</Button>
            <Button onClick={handleButtonAction}>
              {isPokemonSeleted ? '삭제' : '선택'}
            </Button>
          </StyledButtonWrapper>
        </StyledContent>
      </StyledPokemonCardBox>
    </StyledPokemonDetailContainer>
  )
}

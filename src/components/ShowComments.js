import React from 'react'
import { Container } from '../styles/ShowComments'

const ShowComments = ({getCommets, post}) => {
  return (
    <Container>
      <button id='button-show' onClick={() => getCommets(post.id)}>
        Mostrar Comentários
      </button>
      <i class="bi bi-chevron-compact-down"></i>
    </Container>
  )
}

export default ShowComments
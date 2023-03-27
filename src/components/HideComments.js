import React from 'react'
import { Container } from '../styles/HideComments'

const HideComments = ({hideComments, post}) => {
  return (
    <Container>
      <button onClick={() => hideComments(post.id)}>
        Ocultar Comentários
      </button>
      <i class="bi bi-chevron-compact-up"></i>
    </Container>
  )
}

export default HideComments
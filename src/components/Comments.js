import React from 'react'
import { Container } from '../styles/Commentes'
import Avatar from '../assets/avatar.png'

const comentários = ({coment}) => {
  return (
    <Container>
      <div id='div-comment'>
        <img src={Avatar} alt="" />
        <ul>
          <li>{coment.email}</li>
          <li>{coment.body}</li>
        </ul>
      </div>

      <div id='div-buttons'>
        <button id='button-like'>
          <p>Curtir</p>
          <i class="bi bi-hand-thumbs-up"></i>
        </button>

        <button id='button-comment'>
          <p>Comentar</p>
          <i class="bi bi-chat-right"></i>
        </button>
      </div>
      
    </Container>
  )
}

export default comentários
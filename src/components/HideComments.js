import React from 'react'

const HideComments = ({hideComments, post}) => {
  return (
    <div>
      <button onClick={() => hideComments(post.id)}>
        Ocultar Comentários
      </button>
    </div>
  )
}

export default HideComments
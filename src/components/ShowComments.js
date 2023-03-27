import React from 'react'

const ShowComments = ({getCommets, post}) => {
  return (
    <div>
      <button onClick={() => getCommets(post.id)}>
        Mostrar Comentários
      </button>
    </div>
  )
}

export default ShowComments
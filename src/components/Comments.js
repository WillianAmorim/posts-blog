import React from 'react'

const comentários = ({coment}) => {
  return (
    <div>
      <ul>
        <li>{coment.body}</li>
        <li>{coment.email}</li>
        <li>{coment.name}</li>
      </ul>
    </div>
  )
}

export default comentários
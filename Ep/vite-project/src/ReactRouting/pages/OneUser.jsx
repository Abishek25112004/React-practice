import React from 'react'
import { useParams } from 'react-router-dom'

function OneUser() {

    let {username} = useParams()
  return (
    <div>
      <h2>One User : {username}</h2>
    </div>
  )
}

export default OneUser

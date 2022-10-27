import React from 'react'
import { useNavigate } from 'react-router-dom'

const InputSearch = () => {

    const navigate = useNavigate()

    const submit = e => {
        e.preventDefault()
        navigate(`/pokedex/${e.target.search.value.trim().toLowerCase()}`)
    }

  return (
   <form onSubmit={submit}>
    <input className='pokedex__input2' id='search' type="text" placeholder='Search a pokemon'/>
    <button className='pokedex__btn2'>Search</button>
   </form>
  )
}

export default InputSearch
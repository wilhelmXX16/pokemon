import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../../pages/styles/pokedex.css'

const SelectByType = ({setTypeSelected, setPage}) => {

    const [types, setTypes] = useState()

    useEffect(() => {
        const URL ='https://pokeapi.co/api/v2/type'
            axios.get(URL)
                .then(res => setTypes(res.data.results))
                .catch(err => console.log(err))
    },[])

    const handleChange = e => {
        setTypeSelected(e.target.value)
        setPage(1)
    }

  return (
    <select className={`poke__select bg-${types?.name}`} onChange={handleChange}>
        <option className='poke_item' value='All Pokemons'>All Pokemons</option>
        {
            types?.map(type => (
                <option 
                    className='poke_item'
                    key={type.url} 
                    value={type.url}>{type.name}</option>
            ))
        }
    </select>
  )
}

export default SelectByType
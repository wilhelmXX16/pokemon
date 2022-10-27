import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './style/cardPoke.css'

const CardPoke = ({url}) => {

  const [pokemon, setPokemon] = useState()

  useEffect(()=>{
    axios.get(url)
      .then(res => setPokemon(res.data))
      .catch(err => console.log(err))
  },[])

  // console.log(pokemon)

  const navigate = useNavigate()

  const handleClick = () =>{
    navigate(`/pokedex/${pokemon.id}`)
  }


  return (
    <article className={`card color-${pokemon?.types[0].type.name}`} 
    onClick={handleClick}>
      <header className={`card__header bg-${pokemon?.types[0].type.name}`}>
        <img className='card__avatar'  src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
      </header>
      <section className='card__body'>
        <h3 className={`card__name color-text-${pokemon?.types[0].type.name}`}>{pokemon?.name}</h3>
        <ul className='card__list-type'>
          {
            pokemon?.types.map(type => (
              <li key={type.slot} className='card__item-type'>{type.type.name}</li>
            ))
          }
        </ul>
        <p className="card-poke__type-label">Type</p>
        <hr className='card__hr' />
      </section>
      <footer className='card__footer'>
        <ul className='card__list-stats'>
          {
            pokemon?.stats.map(stat => (
              <li key={stat.stat.name} className="card__stat">
                <span className='card__stat-title'>
                  {stat.stat.name}
                </span>
                <span className={`card_stat-value color-text-${pokemon?.types[0].type.name}`}>
                  {stat.base_stat}
                </span>
              </li>
            ))
          }
        </ul>
      </footer>
      
    </article>
  )
}

export default CardPoke
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Pokemon404 from '../components/pokedexId/Pokemon404'
import HeaderPoke from '../components/shared/HeaderPoke'
import './styles/pokemonId.css'

const PokedexById = () => {

  const {id} = useParams()

  const [pokemon, setPokemon] = useState()
  const [hasError, setHasError] = useState(false)

  useEffect(()=>{
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}/`
    axios.get(URL)
      .then(res => setPokemon(res.data))
      .catch(err => {
        console.log(err)
        setHasError(true)
        })
  },[])

 console.log(pokemon)

  if(hasError){
    return <Pokemon404 />
  }

  return (
    <div className='main'>
      <HeaderPoke />
      <article className='card__main-poke'>
        <header className={`card__head bg-${pokemon?.types[0].type.name}`}>
          <img className='head__img' src={pokemon?.sprites.other['official-artwork'].front_default} alt="imagen pokemon" />
          <h3 className={`head__id color-text-${pokemon?.types[0].type.name}`}> #{pokemon?.id}</h3>
          <h2 className={`head__title color-text-${pokemon?.types[0].type.name}`}>{pokemon?.name}</h2>
        </header>
        <div>
          <div className='types__abilities'>
              <div className='card__type'>
                <h4 className='card__title'>Type</h4>
                <ul className='card__list-type'>
                  {
                    pokemon?.types.map(type => (
                      <li key={type.slot} className={`card__itemT colobg-${type.type.name}`}>{type.type.name}</li>
                    ))
                  }
                </ul>
              </div>
              <div className='card__ability'>
                <h4 className='card__title'>Abilities</h4>
                <ul className='card__list-type'>
                  {
                    pokemon?.abilities.map(ability => (
                      <li key={ability.slot} className='card__itemA'>{ability.ability.name}</li>
                    ))
                  }
                </ul>
              </div>
          </div>
          <div className='card__stat-poke'>
            <h3 className='card__title-poke'>Stats</h3>
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
          </div>
        
        </div>
      </article>
      
      <section className='card__moves'>
        {
          pokemon?.moves.map(move => (
            <span className='moves' key={move.move.url} >{move.move.name}</span>
          ))
        }
      </section>
    </div>
  )
}

export default PokedexById
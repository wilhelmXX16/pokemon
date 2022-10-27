import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardPoke from '../components/pokedex/CardPoke'
import InputSearch from '../components/pokedex/InputSearch'
import Pagination from '../components/pokedex/Pagination'
import SelectByType from '../components/pokedex/SelectByType'
import HeaderPoke from '../components/shared/HeaderPoke'
import './styles/pokedex.css'

const Pokedex = () => {

  const [pokemons, setPokemons] = useState()
  const [typeSelected, setTypeSelected] = useState('All Pokemons')

  useEffect(()=>{
    if(typeSelected !== 'All Pokemons'){
      //si se selecciono un tipo
      axios.get(typeSelected)
        .then(res => {
          //la key se coloca solamente cuando esta en el jsx
          const result = res.data.pokemon.map(e => e.pokemon)
          setPokemons(result)
        })
        .catch(err => console.log(err))
    } else {
      //si se quiere ver todos los pokemon
    const URL = 'https://pokeapi.co/api/v2/pokemon?limit=1000000&offset=0'
    axios.get(URL)
      .then(res => setPokemons(res.data.results))
      .catch(err => console.log(err))
    }
  },[typeSelected])

  // console.log(pokemons)
  const userName = useSelector(state => state.userName)


  //lógica de paginacion
  const [page, setPage] = useState(1)
  const [pokePerPage, setPokePerPage] = useState(12)

  const initialPoke = (page - 1) * pokePerPage
  //               = initialPoke + pokePerPage + 1
   const finalPoke = page * pokePerPage

  return (
    <div className='pokedex'>
      <HeaderPoke />
      <header className='pokedex__head'>
        <p className='pokedex__message'>Welcome <span className='pokedex__name-trainer'>{userName}</span>, here you con find your favorite pokemon.</p>
      </header>
      <aside className='pokedex__navigation'>
        <InputSearch />
        <SelectByType setTypeSelected={setTypeSelected} setPage={setPage}/>
      </aside>
      <main className='pokedex__cards'>
        <div className="card-container">
          {
            pokemons?.slice(initialPoke,finalPoke).map(pokemon => (
              <CardPoke 
                key={pokemon.url}
                url={pokemon.url}
              />
            ))
          }
        </div>
      </main>
      <Pagination 
          page={page} 
          setPage={setPage}
          pagesLength={pokemons && Math.ceil(pokemons.length / pokePerPage)}
        />
    </div>
  )
}

export default Pokedex
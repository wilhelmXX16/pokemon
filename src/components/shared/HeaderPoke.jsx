import React from 'react'
import './style/header.css'

const HeaderPoke = () => {
  return (
    <header className='red-rectangle-header'>
      <img className='header-img' src="https://archives.bulbagarden.net/media/upload/4/4b/Pok%C3%A9dex_logo.png" alt="" />
      <div className='black-rectangle-header'></div>
      <div className='circle-ext-header'>
        <div className="circle-int-header"></div>
      </div>
    </header>
  )
}

export default HeaderPoke
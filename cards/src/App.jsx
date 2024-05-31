import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  { XFollowCard } from './XFollowCard.jsx'

function App() {
 
  return (
    <section className='App'>
        <XFollowCard  userName='yeinwillie' initiaIsfollowing={true}> Yein España </XFollowCard>
        <XFollowCard  userName='lourdesNay'> Lourdes Celis </XFollowCard>
        <XFollowCard  userName='matiasEspana'> Matias España </XFollowCard>

    </section>

    
  )
}

export default App

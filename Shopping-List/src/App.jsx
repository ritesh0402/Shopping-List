import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ShoppingList from './components/ShoppingList'

function App() {
  const list = [
    { item: "q", qty: "1", status: true },
    { item: "w", qty: "2", status: true },
    { item: "e", qty: "3", status: false },
    { item: "t", qty: "4", status: false },
    { item: "y", qty: "5", status: true },
    { item: "u", qty: "6", status: false },
  ]

  return (
    <>
      <ShoppingList list={list} />
      <ShoppingList list={list} />
    </>
  )
}

export default App

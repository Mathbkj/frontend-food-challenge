import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { GridItem } from './components/GridItem'

import waffle from "./assets/product-list-with-cart-main/product-list-with-cart-main/assets/images/image-waffle-desktop.jpg"
import cremebrulee from "@images/image-creme-brulee-desktop.jpg"
import macaron from "@images/image-macaron-desktop.jpg"
import tiramisu from "@images/image-tiramisu-desktop.jpg"
import baklava from "@images/image-baklava-desktop.jpg"
import pie from "@images/image-meringue-desktop.jpg"
import cake from "@images/image-cake-desktop.jpg"
import brownie from "@images/image-brownie-desktop.jpg"
import panna from "@images/image-panna-cotta-desktop.jpg"
import emptyCard from "@images/illustration-empty-cart.svg"


function App() {
  const [selected, setSelected] = useState([false,false,false,false,false,false,false,false,false])
  const [count, setCount] = useState(0)

  const handleSelected = (index) => {
    setSelected(prev => {
      return {...prev,[index]:true}
    })
  }
  useEffect(() => {
    console.log(`Selected State Changed to ${JSON.stringify(selected)}`)
  },[selected])

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Desserts</h1>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-grow bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <GridItem title="Waffle" handleSelected={()=>handleSelected(0)} subT="Waffle With Berries" cost="6.50" image={waffle}/>
                <GridItem title="Creme Brulle" handleSelected={()=>handleSelected(1)} subT="Vanilla Bean Creme Brulee" cost="7.00" image={cremebrulee}/>
                <GridItem title="Macaron" handleSelected={()=>handleSelected(2)} subT="Macaron Mix Of Five" cost="8.00" image={macaron} />
                <GridItem title="Tiramisu" handleSelected={()=>handleSelected(3)} subT="Classic Tiramisu" cost="5.50" image={tiramisu} />
                <GridItem title="Baklava" handleSelected={()=>handleSelected(4)} subT="Pistachio Baklava" cost="4.00" image={baklava} />
                <GridItem title="Pie" handleSelected={()=>handleSelected(5)} subT="Lemon Pie Meringue" cost="7.00" image={pie} />
                <GridItem title="Cake" handleSelected={()=>handleSelected(6)} subT="Red Velvet Cake" cost="4.50" image={cake} />
                <GridItem title="Brownie" handleSelected={()=>handleSelected(7)} subT="Salted Caramel Brownie" cost="5.50" image={brownie} />
                <GridItem title="Panna Cotta" handleSelected={()=>handleSelected(8)} subT="Vanilla Panna Cotta" cost="6.50" image={panna} />
              </div>
            </div>
          </div>
          <div className="lg:w-64 bg-white h-max rounded-lg overflow-hidden flex flex-col justify-between">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">{`Your Cart(${count})`}</h2>
              <div className="space-y-2">
                <img width={100} height={100} className="object-cover block m-auto" src={emptyCard}></img>
                <p className="text-gray-600">Your Added Items Will Appear Here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App


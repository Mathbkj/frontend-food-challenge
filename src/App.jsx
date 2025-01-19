import { useEffect, useState } from 'react'
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
import { CartSelected } from './components/CartSelected'
import { ListData } from './lists/List'


function App() {
  const [selected, setSelected] = useState([false, false, false, false, false, false, false, false, false])
  const [counter,setCounter] = useState([0,0,0,0,0,0,0,0,0])
  const [totalCount, setTotalCount] = useState(0)
  const [cartItem, setCartItem] = useState(ListData);

  const decrement = (index) => {
    setCounter(prev => {
      const newCounter = [...prev]
      if (newCounter[index] == 0) {
        setSelected(prev => {
          return {...prev,[index]:false}
        })
      }
      newCounter[index] -= 1
      return newCounter
    })
    setTotalCount(prev=>prev-1)
  }
  const increment = (index) => { 
    setCounter(prev => {
      const newCounter = [...prev]
      newCounter[index] += 1
      return newCounter
    })
    setTotalCount(prev=>prev+1)
  } 


  const handleSelected = (index) => {
    setSelected(prev => {
      return {...prev,[index]:true}
    })
    const data = cartItem.find(v => v.key == index)
    setCartItem(prev => {
      return [...prev,data.selected=true]
    })
    
    increment(index)
  }
  const handleRemoved = (index) => {
    const data = cartItem.find(v => v.key == index)
    setCartItem(prev => {
      return [...prev,data.selected=false]
    })
    decrement(index)
  }
  useEffect(() => {
    console.log(`Selected State Changed to ${JSON.stringify(selected)}.\n Counter State Changed to ${JSON.stringify(counter)}`)
  }, [selected,counter])

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Desserts</h1>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-grow bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <GridItem title="Waffle" selected={selected[0]} decrement={()=>decrement(0)} increment={()=>increment(0)} counter={counter[0]}  handleSelected={()=>handleSelected(0)} subT="Waffle With Berries" cost="6.50" image={waffle}/>
                <GridItem title="Creme Brulle" selected={selected[1]} decrement={()=>decrement(1)} increment={()=>increment(1)} counter={counter[1]} handleSelected={()=>handleSelected(1)} subT="Vanilla Bean Creme Brulee" cost="7.00" image={cremebrulee}/>
                <GridItem title="Macaron" selected={selected[2]} decrement={()=>decrement(2)} increment={()=>increment(2)} counter={counter[2]} handleSelected={()=>handleSelected(2)} subT="Macaron Mix Of Five" cost="8.00" image={macaron} />
                <GridItem title="Tiramisu" selected={selected[3]} decrement={()=>decrement(3)} increment={()=>increment(3)} counter={counter[3]} handleSelected={()=>handleSelected(3)} subT="Classic Tiramisu" cost="5.50" image={tiramisu} />
                <GridItem title="Baklava" selected={selected[4]} decrement={()=>decrement(4)} increment={()=>increment(4)} counter={counter[4]} handleSelected={()=>handleSelected(4)} subT="Pistachio Baklava" cost="4.00" image={baklava} />
                <GridItem title="Pie" selected={selected[5]} decrement={()=>decrement(5)} increment={()=>increment(5)} counter={counter[5]} handleSelected={()=>handleSelected(5)} subT="Lemon Pie Meringue" cost="7.00" image={pie} />
                <GridItem title="Cake" selected={selected[6]} decrement={()=>decrement(6)} increment={()=>increment(6)} counter={counter[6]} handleSelected={()=>handleSelected(6)} subT="Red Velvet Cake" cost="4.50" image={cake} />
                <GridItem title="Brownie" selected={selected[7]} decrement={()=>decrement(7)} increment={()=>increment(7)} counter={counter[7]} handleSelected={()=>handleSelected(7)} subT="Salted Caramel Brownie" cost="5.50" image={brownie} />
                <GridItem title="Panna Cotta" selected={selected[8]} decrement={()=>decrement(8)} increment={()=>increment(8)} counter={counter[8]} handleSelected={()=>handleSelected(8)} subT="Vanilla Panna Cotta" cost="6.50" image={panna} />
              </div>
            </div>
          </div>
          <div className="lg:w-64 bg-white h-max rounded-lg overflow-hidden flex flex-col justify-between">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">{`Your Cart(${totalCount})`}</h2>
              <div className="space-y-2">
                <img width={100} height={100} className="object-cover block m-auto" src={emptyCard}></img>
                <ul>
                  {ListData.map(el => {
                    if (el.selected == true) {
                    return <CartSelected key={el.key} title={el.title} ammo={"1x"} unitCost={el.price} pluralCost={el.price} handleRemove={()=>handleRemoved(el.key)} />

                    }
                  }
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App


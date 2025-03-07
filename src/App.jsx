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
import carbonIcon from "@images/icon-carbon-neutral.svg";
import orderConfirmed from "@images/icon-order-confirmed.svg"
import { CartSelected } from './components/CartSelected'
import { ListData } from './lists/List'


function App() {
  const [selected, setSelected] = useState([false, false, false, false, false, false, false, false, false])
  const [counter, setCounter] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [totalCount, setTotalCount] = useState(0)
  const [cartItem, setCartItem] = useState(ListData);
  const [orderTotal, setTotalOrder] = useState(0);
  const [isModalOpen,setModalOpen]=useState(false)

  const decrement = (index) => {
    setCounter(prev => {
      const newCounter = [...prev]
      if (newCounter[index] == 0) {
        setSelected(prev => {
          return {...prev,[index]:false}
        })
      }
      if (!newCounter[index] <= 0) {
          newCounter[index] -= 1
        setTotalCount(prev => Math.abs(prev - 1))    
     
      }
    
         return newCounter
    })
    
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
    console.log(`Selected State Changed to ${JSON.stringify(selected)}.\n Counter State  Changed to ${JSON.stringify(counter)}`)
    const total = cartItem.reduce((acc, item, key) => {
      if (selected[key]) {
        return acc+counter[key] * parseFloat(item.price)
      }
      return acc;
    }, 0)
    setTotalOrder(total.toFixed(2));
  }, [selected, counter,cartItem])
  useEffect(() => {
    if (totalCount == 0) {
      setTotalCount(0)
    }
  }, [totalCount])
  useEffect(() => {
    console.log(`Order Total Value Changed to ${orderTotal}`)
  }, [orderTotal])
  
  const handleModal = () => {
    setModalOpen(true);
  }

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
            <div className="p-6 min-w-[100%]">
              <h2 className="text-xl font-semibold mb-4">{`Your Cart(${totalCount})`}</h2>
              <div className="space-y-6">
                {totalCount < 1 && <img width={100} height={100} className="object-cover block m-auto" src={emptyCard}></img>}
                <ul>
                  {ListData.map(el => {
                    if (el.selected == true) {
                      return <>
                        <CartSelected key={el.key} title={el.title} ammo={counter[el.key]} unitCost={el.price.toFixed(2)} handleRemove={() => handleRemoved(el.key)} />
                        <hr className="mx-auto my-3"/>
                    </>
                    }
                  }
                  )}
                </ul>
                
                
                {totalCount >= 1 && <div className="flex items-center justify-between">
                  <span>Order Total</span>
                  <span className="text-xl font-bold">${orderTotal}</span>
                </div>}
                {totalCount >= 1 ? <button onClick={handleModal} type='submit' className="text-white block m-auto px-11 py-2 rounded-3xl bg-red-500">Confirm Order</button> : <p>Your selected items will appear here</p>}
                {totalCount >= 1 && <div className="flex items-center justify-center gap-2  bg-emerald-500/10 px-2 py-3">
                  <img src={carbonIcon}></img>
                  <p className='text-center'>This is a cabon-neutral delivery </p>
                </div>}
                
              </div>
              <div style={{backgroundPosition:""}} className={`modal-container ${isModalOpen==false?'hidden':''} w-screen h-[200%] bg-fixed right-1/2 absolute translate-x-1/2 translate-y-1/2 bottom-1/2 z-10 bg-slate-950/30`}>
                <div className="modal-content rounded-md absolute translate-x-[70%] p-10 -translate-y-1/2 top-1/2 right-1/2 flex flex-col bg-white z-20 w-[300px]">
                  <img src={orderConfirmed} width={30} height={30} />
                  <h1 className="font-semibold text-2xl">Order Confirmation</h1>
                  <h2 className="text-base font-thin text-black/50">We hope you enjoy your food!</h2>
                    <ul className="">
                  {ListData.map(el => {
                    if (el.selected == true) {
                      return <>
                        <div className="flex justify-center items-center gap-4">
                          <img style={{ objectFit:"contain"}} width={30} height={10} src={el.src}></img>
                          <CartSelected key={el.key} title={el.title} ammo={counter[el.key]} unitCost={el.price.toFixed(2)} />
                        </div>
                        
                        <hr className="mx-auto my-3"/>
                    </>
                    }
                  }
                  )}
                  </ul>
                  <button type='submit' className="text-white block m-auto px-11 py-2 rounded-3xl bg-red-500">Start New Order</button>
                  
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App


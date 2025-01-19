import cartIcon from "../assets/product-list-with-cart-main/product-list-with-cart-main/assets/images/icon-add-to-cart.svg"
import minus from "@images/icon-decrement-quantity.svg"
import add from "@images/icon-increment-quantity.svg"
export const GridItem = (props) => {
    return (<div key={props.key} className={"flex outline outline-1 outline-transparent rounded-md mx-1 p-2 flex-col ${props.selected && 'outline-red-800"}>
        <div>
            <img className={`object-cover outline outline-transparent rounded-md text-left ${props.selected && "outline-red-600"}`} width={150} height={150} src={props.image} />      
        </div>
        {props.selected && <button className="text-white mx-1/2 translate-x-6 text-xs  relative bottom-6 right-1  w-[100px] flex justify-between items-center gap-2 text-center outline-none rounded-full p-2 bg-red-600"><img className="cursor-pointer" onClick={props.decrement} src={minus}></img>{props.counter}<img onClick={props.increment} src={add}></img></button>}
        {!props.selected && <button onClick={props.handleSelected} className="text-black mx-1/2 translate-x-6 text-xs relative bottom-6 right-3 w-max flex gap-2 text-center outline outline-1 rounded-full p-2 bg-slate-50"><img src={cartIcon}></img>Add To Card</button>}
        <h1 className="text-black/40">{props.title}</h1>
        <h2 className="text-black">{props.subT}</h2>
        <span className="text-red-500">${props.cost}</span>
    </div>)
}
import cartIcon from "../assets/product-list-with-cart-main/product-list-with-cart-main/assets/images/icon-add-to-cart.svg"

export const GridItem = (props) => {
    return (<div key={props.key} className="flex mx-1 p-2 flex-col">
        <div>
            <img className="object-cover text-left" width={150} height={150} src={props.image} />      
        </div>
        <button onClick={props.handleSelected} className="text-black mx-1/2 translate-x-6 text-xs relative bottom-6 right-3 w-max flex gap-2 text-center outline outline-1 rounded-full p-2 bg-slate-50"><img src={cartIcon}></img>Add To Card</button>
        <h1 className="text-black/40">{props.title}</h1>
        <h2 className="text-black">{props.subT}</h2>
        <span className="text-red-500">${props.cost}</span>
    </div>)
}
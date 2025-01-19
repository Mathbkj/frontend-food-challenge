export const CartSelected = (props) => {
    return <li key={props.key} className="flex flex-row">
        <div>
            <h1 className="text-black text-base">{props.title}</h1>
            <div className="flex justify-around items-center gap-5">
                <h2 className="text-black/50">{props.ammo}</h2>
                <span className="font-normal">{props.unitCost}</span>
                <span className="text-black/20 font-medium">{props.pluralCost}</span>
                     <button type="button" onClick={props.handleRemove} className=" outline outline-1 outline-red-600 p-5 rounded-full text-center">X</button>
   
            </div> 
        </div>
    </li>
}
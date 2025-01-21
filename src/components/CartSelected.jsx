export const CartSelected = (props) => {
    const parsedUnit = parseFloat(props.unitCost)
    const pluralCost = props.ammo * (isNaN(parsedUnit)?0:parsedUnit)
    return <li key={props.key} className="flex flex-row">
        <div>
            <h1 className="text-black text-base">{props.title}</h1>
            <div className="flex justify-around items-center gap-5">
                <h2 className="text-red-600 font-bold">{props.ammo}x</h2>
                <span className="font-normal">${props.unitCost}</span>
                <span className="text-black/20 font-medium">${pluralCost.toFixed(2)}</span>
                     <button type="button" onClick={props.handleRemove} className=" outline outline-1 outline-slate-350 px-3 py-1 rounded-full text-slate-350 text-center">X</button>
   
            </div> 
        </div>
    </li>
}
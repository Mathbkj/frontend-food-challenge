import cartIcon from "../assets/product-list-with-cart-main/product-list-with-cart-main/assets/images/icon-add-to-cart.svg";
import minus from "@images/icon-decrement-quantity.svg";
import add from "@images/icon-increment-quantity.svg";

export const GridItem = ({ 
  selected, 
  image, 
  handleSelected, 
  decrement, 
  increment, 
  counter, 
  title, 
  subT, 
  cost 
}) => {
  return (
    <div
      className={`flex outline outline-1 outline-transparent rounded-md mx-1 p-2 flex-col ${
        selected ? "outline-red-800" : ""
      }`}
    >
      <div>
        <img
          className={`object-cover rounded-md text-left ${
            selected ? "outline outline-1 outline-red-600" : ""
          }`}
          width={150}
          height={150}
          src={image}
          alt={title}
        />
      </div>
      {selected ? (
        <button
          className="text-white mx-1/2 translate-x-6 text-xs relative bottom-6 right-1 w-[100px] flex justify-between items-center gap-2 text-center outline-none rounded-full p-2 bg-red-600"
        >
          <img 
            className="cursor-pointer" 
            onClick={decrement} 
            src={minus} 
            alt="Decrease quantity" 
          />
          {counter}
          <img 
            onClick={increment} 
            src={add} 
            alt="Increase quantity" 
          />
        </button>
      ) : (
        <button
          onClick={handleSelected}
          className="text-black mx-1/2 translate-x-6 text-xs relative bottom-6 right-3 w-max flex gap-2 text-center outline outline-1 rounded-full p-2 bg-slate-50"
        >
          <img src={cartIcon} alt="Add to cart" />
          Add To Cart
        </button>
      )}
      <h1 className="text-black/40">{title}</h1>
      <h2 className="text-black">{subT}</h2>
      <span className="text-red-500">${cost}</span>
    </div>
  );
};
import { useProvider } from "@/context/provider";
import { urlFor } from "./sanity/client";
import addCommaToNumber from "@/helpers/convert";

export default function CartItem() {
  const { cartItems, decrementQuantity, incrementQuantity } = useProvider();

  console.log(cartItems);

  const itemSlugs = cartItems.map((item) => item.slug);
  const stringSlug = itemSlugs.join("");

  const handleDecrementQuantity = () => {
    decrementQuantity(stringSlug);
  };
  const handleIncrementQuantity = () => {
    incrementQuantity(stringSlug);
  };

  console.log(itemSlugs);
  console.log(stringSlug);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      {cartItems.map((item, index) => (
        <div key={index} className="flex items-center justify-between my-4">
          <img
            src={urlFor(item.product)}
            alt={item.id}
            className="w-16 h-16 rounded-md"
          />
          <div>
            <h1 className="font-bold uppercase text-sm">{item.id}</h1>
            <p className="font-bold text-xs tracking-widest text-black/50">
              ${item.price}
            </p>
          </div>
          <div className="flex items-center gap-5 bg-colorFour px-4 py-2">
            <button onClick={handleDecrementQuantity}>-</button>
            <p>{item.quantity}</p>
            <button onClick={handleIncrementQuantity}>+</button>
          </div>
        </div>
      ))}

      <div className="flex items-center justify-between uppercase">
        <h2 className="text-black/70">Total</h2>
        <p className="font-bold text-lg tracking-widest">
          ${addCommaToNumber(totalPrice)}
        </p>
      </div>
    </>
  );
}

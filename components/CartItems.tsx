import { useProvider } from "@/context/provider";
import { urlFor } from "./sanity/client";
import addCommaToNumber from "@/helpers/convert";

export default function CartItem() {
  const { cartItems, decrementQuantity, incrementQuantity } = useProvider();
  const cartNumber = cartItems.length;

  const handleDecrementQuantity = (slug: string) => {
    decrementQuantity(slug);
  };

  const handleIncrementQuantity = (slug: string) => {
    incrementQuantity(slug);
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <>
      {cartItems.map((item) => (
        <div key={item.slug} className="flex items-center justify-between my-6">
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
            <button onClick={() => handleDecrementQuantity(item.slug)}>
              -
            </button>
            <p>{item.quantity}</p>
            <button onClick={() => handleIncrementQuantity(item.slug)}>
              +
            </button>
          </div>
        </div>
      ))}

      {cartNumber !== 0 && (
        <div className="flex items-center justify-between uppercase my-6">
          <h2 className="text-black/70">Total</h2>
          <p className="font-bold text-lg tracking-widest">
            ${addCommaToNumber(totalPrice)}
          </p>
        </div>
      )}
    </>
  );
}

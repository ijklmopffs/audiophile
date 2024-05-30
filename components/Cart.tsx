import { useState, type ReactNode } from "react";
import Button from "./Button";
import CartItem from "./CartItems";
import { useProvider } from "@/context/provider";
import { useRouter } from "next/router";

type PositionType = {
  positionClass: ReactNode;
};

export default function Cart({ positionClass }: PositionType) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(true);
  const { cartItems, clearCart } = useProvider();
  const router = useRouter();

  const handleCartClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleCheckout = () => {
    router.push("/checkout");
    setIsModalOpen(false);
  };

  if (!isModalOpen) {
    return null;
  }

  const cartNumber = cartItems.length;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
      <div className={`absolute ${positionClass}`} onClick={handleCartClick}>
        <main className="w-[265px] h-fit bg-white rounded-md p-8">
          <div className="flex items-center justify-between">
            <h1 className="uppercase font-bold text-lg text-black">
              cart ({cartNumber})
            </h1>
            <button
              className="text-sm font-medium text-black/70"
              onClick={clearCart}
            >
              Remove all
            </button>
          </div>
          {cartNumber === 0 ? (
            <p className="font-bold mt-16 text-black">
              You do not have anything in your cart yet
            </p>
          ) : (
            <CartItem />
          )}
          {cartNumber !== 0 && (
            <Button
              bgColor="bg-colorOne"
              textColor="text-white"
              line=""
              lineWidth=""
              width="w-full"
              onClick={handleCheckout}
            >
              checkout
            </Button>
          )}
        </main>
      </div>
    </div>
  );
}

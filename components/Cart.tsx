import { type ReactNode } from "react";
import Button from "./Button";
import CartItem from "./CartItems";
import { useProvider } from "@/context/provider";
import { useRouter } from "next/router";

type PositionType = {
  positionClass: ReactNode;
};

export default function Cart({ positionClass }: PositionType) {
  const { cartItems, clearCart } = useProvider();
  const router = useRouter();

  const handleCartClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const cartNumber = cartItems.length;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
      <div className={`absolute ${positionClass}`} onClick={handleCartClick}>
        <main className="w-[265px] h-[360px] bg-white rounded-md p-8">
          <div className="flex items-center justify-between">
            <h1 className="uppercase font-bold text-lg">cart ({cartNumber})</h1>
            <button className="text-sm font-medium" onClick={clearCart}>
              Remove all
            </button>
          </div>
          {cartNumber === 0 ? (
            <p className="font-bold mt-40">
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
              onClick={() => router.push("/checkout")}
            >
              checkout
            </Button>
          )}
        </main>
      </div>
    </div>
  );
}

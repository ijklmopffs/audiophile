import Button from "@/components/Button";
import { urlFor } from "@/components/sanity/client";
import { useProvider } from "@/context/provider";
import addCommaToNumber from "@/helpers/convert";
import { useRouter } from "next/router";

export default function Checkout() {
  const router = useRouter();
  const { cartItems } = useProvider();

  const handleGoBack = () => {
    router.back();
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const vat = +(totalPrice * 0.2).toFixed(0);

  const grandPrice = totalPrice + 50 + vat;

  console.log(cartItems);

  return (
    <main className="bg-[#F1F1F1] p-4 md:p-20">
      <section className="max-w-md md:max-w-4xl lg:max-w-5xl mx-auto">
        <button
          className="my-10 font-medium text-sm text-black"
          onClick={handleGoBack}
        >
          Go back
        </button>

        <section className="flex flex-col lg:flex-row gap-4">
          <div className="max-w-xl md:max-w-5xl lg:max-w-xl bg-white rounded-md p-5">
            <h1 className="uppercase font-bold text-3xl">checkout</h1>
            <section className="my-10">
              <h2 className="uppercase text-colorOne text-xs tracking-wider">
                billing details
              </h2>
              <div className="flex items-center gap-4 flex-wrap my-4">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="font-bold text-lg lg:text-xs"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-96 md:w-64 rounded-md border-2 p-3 font-bold text-xs focus:outline-none"
                    placeholder="Alexei Ward"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="font-bold text-lg lg:text-xs"
                  >
                    Email Address
                  </label>
                  <input
                    type="text"
                    id="email"
                    className="w-96 md:w-64 rounded-md border-2 p-3 font-bold text-xs focus:outline-none"
                    placeholder="alexei@mail.com"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="number"
                    className="font-bold text-lg lg:text-xs"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="number"
                    className="w-96 md:w-64 rounded-md border-2 p-3 font-bold text-xs focus:outline-none"
                    placeholder="+1 202-555-0136"
                  />
                </div>
              </div>
            </section>

            <section className="my-10">
              <h2 className="uppercase text-colorOne text-xs tracking-wider">
                shipping info
              </h2>
              <div className="flex items-center gap-4 flex-wrap my-4">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="address"
                    className="font-bold text-lg lg:text-xs"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    className="w-96 md:w-64 lg:w-[33rem] rounded-md border-2 p-3 font-bold text-xs focus:outline-none"
                    placeholder="1137 Williams Avenue"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="zip" className="font-bold text-lg lg:text-xs">
                    ZIP Code
                  </label>
                  <input
                    type="text"
                    id="zip"
                    className="w-96 md:w-64 rounded-md border-2 p-3 font-bold text-xs focus:outline-none"
                    placeholder="10001"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="city"
                    className="font-bold text-lg lg:text-xs"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    className="w-96 md:w-64 rounded-md border-2 p-3 font-bold text-xs focus:outline-none"
                    placeholder="New York"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="country"
                    className="font-bold text-lg lg:text-xs"
                  >
                    Country
                  </label>
                  <input
                    type="text"
                    id="country"
                    className="w-96 md:w-64 rounded-md border-2 p-3 font-bold text-xs focus:outline-none"
                    placeholder="United States"
                  />
                </div>
              </div>
            </section>

            <section className="my-10">
              <h2 className="uppercase text-colorOne text-xs tracking-wider">
                billing details
              </h2>
              <div className="flex items-center gap-4 flex-wrap my-4">
                <div className="flex flex-col md:flex-row justify-between gap-2 w-[33rem] md:w-full lg:w-[33rem]">
                  <label
                    htmlFor="method"
                    className="font-bold text-lg lg:text-xs"
                  >
                    Payment Method
                  </label>
                  <div>
                    <div className="w-96 md:w-64 rounded-md border-2 p-3 flex items-center gap-2 mb-4">
                      <input type="radio" id="method" name="paymentMethod" />
                      <p className="font-bold text-xs">e-Money</p>
                    </div>
                    <div className="w-96 md:w-64 rounded-md border-2 p-3 flex items-center gap-2">
                      <input type="radio" id="method" name="paymentMethod" />
                      <p className="font-bold text-xs">Cash on Delivery</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="money-number"
                    className="font-bold text-lg lg:text-xs"
                  >
                    e-Money Number
                  </label>
                  <input
                    type="text"
                    id="money-number"
                    className="w-96 md:w-64 rounded-md border-2 p-3 font-bold text-xs focus:outline-none"
                    placeholder="238521993"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="number"
                    className="font-bold text-lg lg:text-xs"
                  >
                    e-Money PIN
                  </label>
                  <input
                    type="password"
                    id="number"
                    className="w-96 md:w-64 rounded-md border-2 p-3 font-bold text-xs focus:outline-none"
                    placeholder="6891"
                  />
                </div>
              </div>
            </section>
          </div>

          <div className="w-[28rem] md:w-[56rem] lg:w-96 bg-white rounded-md p-5 h-fit">
            <h2 className="uppercase font-bold text-3xl">summary</h2>
            <div>
              {cartItems.map((item) => (
                <div
                  key={item.slug}
                  className="flex items-center justify-between my-5"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={urlFor(item.product)}
                      alt={item.id}
                      className="w-16 h-16 rounded-md"
                    />
                    <div>
                      <h3 className="uppercase font-bold text-sm">{item.id}</h3>
                      <p className="font-bold text-xs text-black/70">
                        ${addCommaToNumber(item.price)}
                      </p>
                    </div>
                  </div>
                  <p className="font-bold text-black/70 text-xs">
                    x{item.quantity}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between">
              <p className="uppercase font-medium text-sm text-black/70">
                total
              </p>
              <p className="font-bold text-lg">
                ${addCommaToNumber(totalPrice)}
              </p>
            </div>
            <div className="flex items-center justify-between my-3">
              <p className="uppercase font-medium text-sm text-black/70">
                shipping
              </p>
              <p className="font-bold text-lg">$50</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="uppercase font-medium text-sm text-black/70">
                vat (included)
              </p>
              <p className="font-bold text-lg">${addCommaToNumber(vat)}</p>
            </div>

            <div className="flex items-center justify-between my-3">
              <p className="uppercase font-medium text-sm text-black/70">
                grand total
              </p>
              <p className="font-bold text-lg text-colorOne">
                ${addCommaToNumber(grandPrice)}
              </p>
            </div>

            <Button
              bgColor="bg-colorOne"
              textColor="text-white"
              line=""
              lineWidth=""
              width="w-full"
              onClick={() => router.push("/checkout")}
            >
              continue & pay
            </Button>
          </div>
        </section>
      </section>
    </main>
  );
}

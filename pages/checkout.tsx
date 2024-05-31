import { useState } from "react";
import { useRouter } from "next/router";
import { urlFor } from "@/components/sanity/client";
import { useProvider } from "@/context/provider";
import Image from "next/image";
import Button from "@/components/Button";
import addCommaToNumber from "@/helpers/convert";
import iconCod from "/public/images/checkout/icon-cash-on-delivery.svg";
import iconDone from "/public/images/checkout/icon-order-confirmation.svg";

interface Errors {
  name?: string;
  email?: string;
  number?: string;
  address?: string;
  zip?: string;
  city?: string;
  country?: string;
  money_number?: string;
  pin_number?: string;
  selectedMethod?: string;
}

export default function Checkout() {
  const router = useRouter();
  const { cartItems, clearCart } = useProvider();
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
  const [back, setBack] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    address: "",
    zip: "",
    city: "",
    country: "",
    money_number: "",
    pin_number: "",
  });
  const [selectedMethodError, setSelectedMethodError] = useState<string | null>(
    null
  );

  const [formErrors, setFormErrors] = useState<Errors>({});

  const handleCheckout = () => {
    router.push("/");
    setBack(false);
    clearCart();
  };

  const handleMethodChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedMethod(e.target.value);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    const errors: Errors = {};

    if (formData.name.trim() === "") {
      errors.name = "Name is required";
    }

    if (formData.email.trim() === "" || !/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is not valid";
    }

    if (formData.number.trim() === "") {
      errors.number = "This field is required";
    }

    if (formData.address.trim() === "") {
      errors.address = "This field is required";
    }

    if (formData.zip.trim() === "") {
      errors.zip = "This field is required";
    }

    if (formData.city.trim() === "") {
      errors.city = "This field is required";
    }

    if (formData.country.trim() === "") {
      errors.country = "This field is required";
    }

    if (selectedMethod === null) {
      errors.selectedMethod = "Please select a payment method";
      setSelectedMethodError("Please select a payment method");
    } else {
      setSelectedMethodError(null);
    }
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      setBack(true);
    }
  };

  const handleGoBack = () => {
    router.back();
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const vat = +(totalPrice * 0.2).toFixed(1);

  const grandPrice = totalPrice + 50 + vat;

  return (
    <>
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
                      className="font-bold text-lg lg:text-xs text-black"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={
                        formErrors.name
                          ? "w-96 md:w-64 rounded-md border-[#CD2C2C] border-2 p-3 font-bold text-xs focus:outline-none"
                          : "w-96 md:w-64 rounded-md border-2 p-3 font-bold text-xs focus:outline-none"
                      }
                      placeholder="Alexei Ward"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="email"
                      className="font-bold text-lg lg:text-xs text-black"
                    >
                      Email Address
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={
                        formErrors.email
                          ? "w-96 md:w-64 rounded-md border-2 border-[#CD2C2C] p-3 font-bold text-xs focus:outline-none"
                          : "w-96 md:w-64 rounded-md border-2 p-3 font-bold text-xs focus:outline-none"
                      }
                      placeholder="alexei@mail.com"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="number"
                      className="font-bold text-lg lg:text-xs text-black"
                    >
                      Phone Number
                    </label>
                    <input
                      type="text"
                      id="number"
                      name="number"
                      value={formData.number}
                      onChange={handleChange}
                      className={
                        formErrors.number
                          ? "w-96 md:w-64 rounded-md border-2 border-[#Cd2C2C] p-3 font-bold text-xs focus:outline-none"
                          : "w-96 md:w-64 rounded-md border-2 p-3 font-bold text-xs focus:outline-none"
                      }
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
                      className="font-bold text-lg lg:text-xs text-black"
                    >
                      Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className={
                        formErrors.address
                          ? "w-96 md:w-64 lg:w-[33rem] rounded-md border-[#CD2C2C] border-2 p-3 font-bold text-xs focus:outline-none"
                          : "w-96 md:w-64 lg:w-[33rem] rounded-md border-2 p-3 font-bold text-xs focus:outline-none"
                      }
                      placeholder="1137 Williams Avenue"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="zip"
                      className="font-bold text-lg lg:text-xs text-black"
                    >
                      ZIP Code
                    </label>
                    <input
                      type="text"
                      id="zip"
                      name="zip"
                      value={formData.zip}
                      onChange={handleChange}
                      className={
                        formErrors.zip
                          ? "w-96 md:w-64 rounded-md border-2 border-[#CD2C2C] p-3 font-bold text-xs focus:outline-none"
                          : "w-96 md:w-64 rounded-md border-2 p-3 font-bold text-xs focus:outline-none"
                      }
                      placeholder="10001"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="city"
                      className="font-bold text-lg lg:text-xs text-black"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className={
                        formErrors.city
                          ? "w-96 md:w-64 rounded-md border-2 border-[#CD2C2C] p-3 font-bold text-xs focus:outline-none"
                          : "w-96 md:w-64 rounded-md border-2 p-3 font-bold text-xs focus:outline-none"
                      }
                      placeholder="New York"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="country"
                      className="font-bold text-lg lg:text-xs text-black"
                    >
                      Country
                    </label>
                    <input
                      type="text"
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className={
                        formErrors.country
                          ? "w-96 md:w-64 rounded-md border-2 border-[#CD2C2C] p-3 font-bold text-xs focus:outline-none"
                          : "w-96 md:w-64 rounded-md border-2 p-3 font-bold text-xs focus:outline-none"
                      }
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
                      className="font-bold text-lg lg:text-xs text-black"
                    >
                      Payment Method
                    </label>
                    <div>
                      <p className="text-sm text-[#cd2c2c] my-1">
                        {selectedMethodError}
                      </p>
                      <div
                        className={
                          selectedMethodError
                            ? "w-96 md:w-64 rounded-md border-2 border-[#cd2c2c] p-3 flex items-center gap-2 mb-4"
                            : "w-96 md:w-64 rounded-md border-2 p-3 flex items-center gap-2 mb-4"
                        }
                      >
                        <input
                          type="radio"
                          id="method"
                          name="paymentMethod"
                          value="e-Money"
                          className="accent-colorOne"
                          onChange={handleMethodChange}
                        />
                        <p className="font-bold text-xs text-black">e-Money</p>
                      </div>
                      <div
                        className={
                          selectedMethodError
                            ? "w-96 md:w-64 rounded-md border-2 border-[#cd2c2c] p-3 flex items-center gap-2"
                            : "w-96 md:w-64 rounded-md border-2 p-3 flex items-center gap-2"
                        }
                      >
                        <input
                          type="radio"
                          id="method"
                          name="paymentMethod"
                          value="cod"
                          className="accent-colorOne"
                          onChange={handleMethodChange}
                        />
                        <p className="font-bold text-xs text-black">
                          Cash on Delivery
                        </p>
                      </div>
                    </div>
                  </div>
                  {selectedMethod === "e-Money" && (
                    <div className="flex items-center justify-between w-full">
                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="money-number"
                          className="font-bold text-lg lg:text-xs text-black"
                        >
                          e-Money Number
                        </label>
                        <input
                          type="text"
                          id="money-number"
                          name="money_number"
                          value={formData.money_number}
                          onChange={handleChange}
                          className="w-96 md:w-64 rounded-md border-2 p-3 font-bold text-xs focus:outline-none"
                          placeholder="238521993"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="number"
                          className="font-bold text-lg lg:text-xs text-black"
                        >
                          e-Money PIN
                        </label>
                        <input
                          type="password"
                          id="number"
                          name="pin_number"
                          value={formData.pin_number}
                          onChange={handleChange}
                          className="w-96 md:w-64 rounded-md border-2 p-3 font-bold text-xs focus:outline-none"
                          placeholder="6891"
                        />
                      </div>
                    </div>
                  )}
                  {selectedMethod === "cod" && (
                    <div className="flex items-center gap-8">
                      <Image src={iconCod} alt="cod" />
                      <p className="font-medium text-sm text-black/70">
                        The ‘Cash on Delivery’ option enables you to pay in cash
                        when our delivery courier arrives at your residence.
                        Just make sure your address is correct so that your
                        order will not be cancelled.
                      </p>
                    </div>
                  )}
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
                        <h3 className="uppercase font-bold text-sm text-black">
                          {item.id}
                        </h3>
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
                <p className="font-bold text-lg text-black">
                  ${addCommaToNumber(totalPrice)}
                </p>
              </div>
              <div className="flex items-center justify-between my-3">
                <p className="uppercase font-medium text-sm text-black/70">
                  shipping
                </p>
                <p className="font-bold text-lg text-black">$50</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="uppercase font-medium text-sm text-black/70">
                  vat (included)
                </p>
                <p className="font-bold text-lg text-black">
                  ${addCommaToNumber(vat)}
                </p>
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
                onClick={handleSubmit}
              >
                continue & pay
              </Button>
            </div>
          </section>
        </section>
      </main>

      {back && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <main className="w-[360px] md:w-[400px] h-fit bg-white rounded-md p-8">
            <Image src={iconDone} alt="icon" className="w-16 mb-5" />
            <div className="space-y-5">
              <h1 className="uppercase font-bold text-3xl w-60 text-black">
                Thank you for your order
              </h1>
              <p className="font-medium text-sm text-black/70">
                You will receive an email confirmation shortly.
              </p>
            </div>
            <div className="rounded-tl-md rounded-tr-md md:rounded-md md:rounded-tr-none md:rounded-br-none my-10 flex flex-col md:flex-row items-center">
              <div className="w-[200px] h-[100px] bg-[#f1f1f1] p-5 rounded-md">
                {cartItems.length > 0 && (
                  <div
                    key={cartItems[0].slug}
                    className="flex items-center justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={urlFor(cartItems[0].product)}
                        alt={cartItems[0].id}
                        className="w-12 h-12 rounded-md"
                      />
                      <div>
                        <h3 className="uppercase font-bold text-sm text-black">
                          {cartItems[0].id}
                        </h3>
                        <p className="font-bold text-xs text-black/70">
                          ${addCommaToNumber(cartItems[0].price)}
                        </p>
                      </div>
                    </div>
                    <p className="font-bold text-black/70 text-xs">
                      x{cartItems[0].quantity}
                    </p>
                  </div>
                )}

                {cartItems.length > 1 && (
                  <>
                    <hr />
                    <p className="text-xs mt-2 text-center text-black/70">
                      and {cartItems.length - 1} other item(s)
                    </p>
                  </>
                )}
              </div>
              <div className="bg-black p-5 rounded-bl-md rounded-br-md md:rounded-md w-[200px] h-[100px] md:rounded-tl-none md:rounded-bl-none">
                <h2 className="uppercase text-sm text-white/70 font-medium">
                  grand total
                </h2>
                <p className="font-bold text-lg text-white">
                  ${addCommaToNumber(grandPrice)}
                </p>
              </div>
            </div>
            <Button
              bgColor="bg-colorOne"
              textColor="text-white"
              line=""
              lineWidth=""
              width="w-full"
              onClick={handleCheckout}
            >
              back to home
            </Button>
          </main>
        </div>
      )}
    </>
  );
}

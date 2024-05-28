import { useRouter } from "next/router";

export default function Checkout() {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <main className="bg-[#F1F1F1]">
      <section className="max-w-md md:max-w-4xl lg:max-w-5xl mx-auto">
        <button
          className="my-10 font-medium text-sm text-black"
          onClick={handleGoBack}
        >
          Go back
        </button>

        <section>
          <div className="max-w-3xl bg-white rounded-md p-4">
            <h1 className="uppercase font-bold text-3xl">checkout</h1>
            <section>
              <h2>billing details</h2>
              <div>
                <input type="text" />
                <input type="text" />
                <input type="text" />
              </div>
            </section>
            <section></section>
            <section></section>
          </div>
          <div></div>
        </section>
      </section>
    </main>
  );
}

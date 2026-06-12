function Home() {
  return (
    <div className="container mx-auto mt-10 px-6 gap-6 flex overflow-x-auto">
      {/* Card 1 */}
      <div className="border w-64 h-100 flex flex-col items-center justify-center p-4 rounded-lg shadow-lg bg-white shrink-0">
        <img
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
          className="w-32 h-32 object-contain"
        />

        <h2 className="mt-4 text-sm text-center">
          Ghar Soaps Sandalwood & Saffron Magic Soaps For Bath (300 Gms Pack Of
          3) | Paraben Free | Chandan & Kesar Bath Soap | Handmade Soaps For
          Glowing | Skin Brightening Soap For Men & Women
        </h2>

        <p className="text-green-600 font-bold mt-2 flex align-middle">  -15% ₹399 ₹133.00 per g(₹133 /100 g)</p>

        <button className="bg-yellow-500 w-56 rounded-2xl p-2">buy</button>
      </div>

      {/* Card 2 */}
      <div className="border w-64 h-80 flex flex-col items-center justify-center p-4 rounded-lg shadow-lg bg-white shrink-0">
        <img
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
          className="w-32 h-32 object-contain"
        />

        <h2 className="mt-4 text-sm font-semibold text-center">Product 2</h2>

        <p className="text-green-600 font-bold mt-2">299</p>
      </div>
    </div>
  );
}

export default Home;

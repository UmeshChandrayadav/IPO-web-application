const MarketDataSection = () => {
  const highStocks = [
    { company: "Indian Railway Finance", price: "113.40", dayHigh: "114.00" },
    { company: "Firstsource Solution", price: "209.90", dayHigh: "217.00" },
    { company: "HCL Tech.", price: "1,540.80", dayHigh: "1,555.00" },
    { company: "ONGC", price: "223.40", dayHigh: "224.75" },
    { company: "Avanti Feeds", price: "545.30", dayHigh: "581.40" },
    { company: "Coforge", price: "6,592.70", dayHigh: "6,615.00" },
    { company: "Infibeam Avenues", price: "26.55", dayHigh: "27.50" },
    { company: "Tata Power", price: "357.75", dayHigh: "361.85" },
    { company: "Bank Of India", price: "129.10", dayHigh: "130.10" },
    { company: "Tata Consumer Products", price: "1,159.00", dayHigh: "1,165.55" },
    { company: "Zomato", price: "139.55", dayHigh: "141.50" },
    { company: "Tata Motors", price: "816.45", dayHigh: "818.55" },
    { company: "Rail Vikas Nigam", price: "203.25", dayHigh: "207.00" },
    { company: "IRCTC", price: "951.20", dayHigh: "962.00" },
    { company: "Union Bank Of India", price: "131.20", dayHigh: "132.50" },
  ];

  const lowStocks = [
    { company: "Mukesh Babu Fin Serv", price: "149.10", change: "+200%" },
    { company: "Jupiter Infomedia", price: "50.20", change: "+19.96%" },
    { company: "Jigar Cables", price: "66.45", change: "+19.95%" },
    { company: "Dhanlaxmi Bank", price: "36.30", change: "+19.8%" },
    { company: "CNI Research", price: "4.00", change: "+19.76%" },
    { company: "Manomay Tex India", price: "193.10", change: "+19.68%" },
    { company: "Eastern Logica Info", price: "1,329.80", change: "+19.41%" },
    { company: "Ansal Buildwell", price: "119.99", change: "+19.38%" },
    { company: "Upsurge Investment", price: "55.60", change: "+19.34%" },
    { company: "Paired Technologies", price: "210.60", change: "+19.38%" },
    { company: "Service Care", price: "67.50", change: "+17.39%" },
    { company: "Zodiac Ventures", price: "23.94", change: "+16.33%" },
    { company: "Mitcon Consultancy", price: "105.85", change: "+15.06%" },
    { company: "Ashiana Housing", price: "311.35", change: "+14.07%" },
    { company: "Xelpmoc Design", price: "127.70", change: "+14.63%" },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">MARKET MOVERS</h2>
          <p className="text-gray-600 text-lg">
            Learn about stock market updates today - 52 Week Highs, 52 week Lows and more.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* 52 Week High */}
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <div className="bg-blue-50 px-6 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-blue-600">📈 52 Week High</h3>
                <div className="flex space-x-4 text-sm">
                  <span className="text-blue-600 font-medium">NSE</span>
                  <span className="text-gray-500">BSE</span>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-3 gap-4 mb-4 text-sm font-medium text-gray-500 uppercase">
                <span>COMPANY</span>
                <span className="text-right">PRICE Rs.</span>
                <span className="text-right">DAY HIGH Rs.</span>
              </div>
              
              <div className="space-y-3">
                {highStocks.map((stock, index) => (
                  <div key={index} className="grid grid-cols-3 gap-4 py-2 text-sm">
                    <span className="text-blue-600 font-medium">{stock.company}</span>
                    <span className="text-right text-gray-900">{stock.price}</span>
                    <span className="text-right text-gray-900">{stock.dayHigh}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 text-center">
                <button className="text-blue-600 font-medium">View All 52 Week High</button>
              </div>
            </div>
          </div>

          {/* 52 Week Low */}
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
            <div className="bg-blue-50 px-6 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-blue-600">📉 52 Week LOW</h3>
                <div className="flex space-x-4 text-sm">
                  <span className="text-blue-600 font-medium">NSE</span>
                  <span className="text-gray-500">BSE</span>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-3 gap-4 mb-4 text-sm font-medium text-gray-500 uppercase">
                <span>COMPANY</span>
                <span className="text-right">PRICE Rs.</span>
                <span className="text-right">CHANGE %</span>
              </div>
              
              <div className="space-y-3">
                {lowStocks.map((stock, index) => (
                  <div key={index} className="grid grid-cols-3 gap-4 py-2 text-sm">
                    <span className="text-blue-600 font-medium">{stock.company}</span>
                    <span className="text-right text-gray-900">{stock.price}</span>
                    <span className="text-right text-green-600 font-medium">{stock.change}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 text-center">
                <button className="text-blue-600 font-medium">View All Gainers</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketDataSection;

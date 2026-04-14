const WhySection = () => {
  const resources = [
    {
      title: "Analytics",
      icon: "📊",
      bgColor: "bg-orange-100"
    },
    {
      title: "Blogs", 
      icon: "📈",
      bgColor: "bg-blue-100"
    },
    {
      title: "Videos",
      icon: "🎥",
      bgColor: "bg-pink-100"
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start justify-between mb-16">
          <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12">
            <h2 className="text-4xl font-bold text-black mb-8">
              Why do traders love bluestock?
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed">
              Bluestock caters to traders looking to enhance<br />
              their technical analysis skills, providing a user-friendly<br />
              environment to interpret and leverage charts effectively<br />
              for strategic decision-making in the financial markets.
            </p>
          </div>

          <div className="lg:w-1/2 flex justify-center relative">
            <div className="relative">
              {/* Main circular element */}
              <div className="w-64 h-64 bg-cyan-300 rounded-full flex items-center justify-center relative">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-1">Shark</div>
                  <div className="text-xl font-bold text-white">Investor</div>
                </div>
              </div>
              
              {/* Decorative scattered elements */}
              <div className="absolute -top-8 -right-12 w-4 h-4 bg-pink-400 rounded-full"></div>
              <div className="absolute -top-4 -right-20 w-3 h-3 bg-blue-400 rounded-full"></div>
              <div className="absolute top-8 -right-24 w-2 h-2 bg-yellow-400 rounded-full"></div>
              <div className="absolute top-16 -right-16 w-3 h-3 bg-purple-400 rounded-full"></div>
              
              <div className="absolute -bottom-8 -left-12 w-5 h-5 bg-yellow-400 rounded-full"></div>
              <div className="absolute -bottom-4 -left-20 w-3 h-3 bg-pink-400 rounded-full"></div>
              <div className="absolute bottom-8 -left-24 w-2 h-2 bg-blue-400 rounded-full"></div>
              
              <div className="absolute -top-12 -left-8 w-3 h-3 bg-green-400 rounded-full"></div>
              <div className="absolute top-20 -left-16 w-4 h-4 bg-red-400 rounded-full"></div>
              
              <div className="absolute -bottom-12 right-8 w-2 h-2 bg-purple-400 rounded-full"></div>
              <div className="absolute bottom-24 right-16 w-3 h-3 bg-cyan-400 rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {resources.map((resource, index) => (
            <div key={index} className={`${resource.bgColor} rounded-2xl p-8 text-center`}>
              <div className="text-4xl mb-4">{resource.icon}</div>
              <h3 className="text-xl font-semibold text-black">{resource.title}</h3>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-3xl p-12 relative">
          <div className="inline-block bg-green-500 text-white px-6 py-3 rounded-full mb-6">
            <span className="font-semibold">Resources</span>
          </div>
          <h3 className="text-4xl font-bold text-black mb-6">
            All things finance,right here
          </h3>
          <p className="text-lg text-gray-500 leading-relaxed">
            Master the art of investing and secure your financial future<br />
            with Bluestock learning resources.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhySection;

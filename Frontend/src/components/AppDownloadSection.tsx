const AppDownloadSection = () => {
  const testimonials = [
    {
      name: "Venkatesh",
      text: "Excellent app with a fantastic UI! 😊 Even though the app is still in progressive mode, I must say it is getting better every day."
    },
    {
      name: "Sarthak", 
      text: "Bluestock app provides a user-friendly interface 🔥 The clean design and intuitive navigation enhance the overall experience."
    },
    {
      name: "Sakshi",
      text: "BlueStock for chart learning & technical and it has exceeded my expectations. The UI is well-designed, making it a breeze to navigate and learn charts."
    }
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-blue-600">Bluestock App 2.0</span> is Live Now!
          </h2>
          <p className="text-xl text-gray-600 mb-8">Download Our App</p>
          
          <div className="flex justify-center space-x-4 mb-8">
            <div className="bg-black text-white px-6 py-3 rounded-lg flex items-center">
              <span className="mr-2">📱</span>
              <div>
                <div className="text-xs">GET IT ON</div>
                <div className="font-bold">Google Play</div>
              </div>
            </div>
            <div className="bg-black text-white px-6 py-3 rounded-lg flex items-center">
              <span className="mr-2">🍎</span>
              <div>
                <div className="text-xs">Download on the</div>
                <div className="font-bold">App Store</div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center mb-8">
            <div className="flex -space-x-2 mr-4">
              {[1,2,3,4].map((i) => (
                <div key={i} className="w-10 h-10 bg-gray-300 rounded-full border-2 border-white"></div>
              ))}
            </div>
            <div className="flex text-yellow-400 mr-2">
              {'★★★★★'.split('').map((star, i) => (
                <span key={i} className="text-xl">{star}</span>
              ))}
            </div>
            <span className="text-gray-600">(5/5 by 100+ users)</span>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">What do our users say?</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-4xl text-blue-500 mb-4">"</div>
                <h4 className="font-bold text-gray-900 mb-4">{testimonial.name}</h4>
                <p className="text-gray-600 leading-relaxed">{testimonial.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;

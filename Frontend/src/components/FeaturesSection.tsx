const FeaturesSection = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-gray-600 text-lg mb-4">Built for a growing India.</p>
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold">
              <span className="text-purple-600">It's easy</span>
            </h2>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              It's powerful
            </h2>
            <h2 className="text-4xl lg:text-5xl font-bold">
              <span className="text-purple-600">It's beautiful</span>
            </h2>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <div className="space-y-6">
              <p className="text-xl text-gray-600 leading-relaxed">
                Beautiful UI for the modern trader,<br />
                with access on all platforms,<br />
                to trade on the go
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center">
            <div className="text-8xl">👍</div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <p className="text-gray-600 text-lg mb-8">Power-packed with everything you need.</p>
          <h3 className="text-4xl font-bold text-gray-900 mb-4">Bluestock Highlights</h3>
          <p className="text-gray-600 text-lg">
            Simplified enough for beginners, Detailed enough for experts.<br />
            Track upcoming IPOs, Leverage advanced tools to<br />
            make the best decisions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

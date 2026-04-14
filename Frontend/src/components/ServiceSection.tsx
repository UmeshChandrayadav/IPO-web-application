import { Pencil, Send, Zap } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "Learn Chart",
      icon: <Pencil className="w-6 h-6" />,
      bgColor: "bg-pink-100",
      items: [
        { number: "1", text: "Technical, Fundamental" },
        { number: "2", text: "Finology, Facts, Equity" },
        { number: "3", text: "Trading Psychology" },
        { number: "3", text: "Risk Assessment" },
        { number: "3", text: "Option Trading" },
      ]
    },
    {
      title: "Analytics",
      icon: <Send className="w-6 h-6" />,
      bgColor: "bg-blue-100",
      items: [
        { number: "1", text: "Live Sector Trend" },
        { number: "2", text: "IPO DRHP" },
        { number: "3", text: "Sectoral Distribution" },
        { number: "3", text: "Stock Overview" },
        { number: "3", text: "TradingView Chart" },
        { number: "3", text: "Technical, Fundamental" },
      ]
    },
    {
      title: "Club",
      icon: <Zap className="w-6 h-6" />,
      bgColor: "bg-yellow-100",
      items: [
        { number: "1", text: "Educational Resources" },
        { number: "2", text: "Real-time Chat" },
        { number: "3", text: "Forums" },
      ]
    }
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className={`${service.bgColor} rounded-2xl p-8`}>
              <div className="flex items-center mb-6">
                <h3 className="text-2xl font-bold text-blue-600 mr-3">{service.title}</h3>
                <div className="text-blue-600">
                  {service.icon}
                </div>
              </div>
              
              <div className="space-y-4">
                {service.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                      {item.number}
                    </div>
                    <span className="text-gray-900 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;



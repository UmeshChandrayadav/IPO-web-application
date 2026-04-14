
import React, { useState } from 'react';
import { ChevronRight, BarChart3, TrendingUp, Users } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const onboardingSteps = [
  {
    id: 1,
    title: "Unlock the Era of Stock",
    description: "Welcome to a community driven by learning and analytics. Join us to uncover the secrets of the stock market.",
    icon: <BarChart3 className="w-16 h-16 text-blue-600" />,
    illustration: "📊"
  },
  {
    id: 2,
    title: "Powerful Analytics at your Fingertips",
    description: "Gain a competitive edge with our advanced analytics tools. Make informed decisions and take control of your financial future.",
    icon: <TrendingUp className="w-16 h-16 text-blue-600" />,
    illustration: "📈"
  },
  {
    id: 3,
    title: "Your Path to Financial Success",
    description: "Where community, learning and analytics converge. Start your journey towards financial success with us.",
    icon: <Users className="w-16 h-16 text-blue-600" />,
    illustration: "💼"
  }
];

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < onboardingSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const currentData = onboardingSteps[currentStep];

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Skip button */}
        <div className="flex justify-end mb-8">
          <Link to="/login" className="text-gray-500 text-sm">
            skip
          </Link>
        </div>

        {/* Main content */}
        <div className="text-center space-y-8">
          {/* Illustration */}
          <div className="flex justify-center">
            <div className="w-64 h-48 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl flex items-center justify-center">
              <span className="text-6xl">{currentData.illustration}</span>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-4">
            <h1 className="text-2xl font-bold text-gray-900">
              {currentData.title}
            </h1>
            <p className="text-gray-600 leading-relaxed">
              {currentData.description}
            </p>
          </div>

          {/* Progress indicators */}
          <div className="flex justify-center space-x-2">
            {onboardingSteps.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentStep ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          {/* Navigation */}
          <div className="pt-8">
            {currentStep === onboardingSteps.length - 1 ? (
              <Link to="/signup">
                <Button className="w-full h-12 bg-blue-600 hover:bg-blue-700 rounded-full">
                  Get Started
                </Button>
              </Link>
            ) : (
              <Button 
                onClick={nextStep}
                className="w-full h-12 bg-blue-600 hover:bg-blue-700 rounded-full"
              >
                Next
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;

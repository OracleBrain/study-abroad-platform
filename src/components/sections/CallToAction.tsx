import Link from 'next/link'
import { ArrowRight, CheckCircle, Users, Clock, Award } from 'lucide-react'

export default function CallToAction() {
  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Guidance",
      description: "Get personalized advice from certified counselors"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Free Consultation",
      description: "Book a free session to discuss your study abroad plans"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Proven Success",
      description: "Join thousands of students who achieved their dreams"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-white bg-opacity-5 rounded-full blur-3xl -translate-x-48 -translate-y-48"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white bg-opacity-5 rounded-full blur-3xl translate-x-48 translate-y-48"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Get personalized guidance from our experts and take the first step towards your global education goals.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-opacity-20 transition-all duration-300">
                <div className="text-yellow-300">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-blue-100">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Main CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Link
            href="/consultancy"
            className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center group"
          >
            Find a Consultancy
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link
            href="/universities"
            className="bg-white bg-opacity-10 backdrop-blur-sm hover:bg-opacity-20 text-white border-2 border-white border-opacity-30 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center group"
          >
            Explore Universities
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Free Consultation CTA */}
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto">
          <div className="mb-6">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Book FREE Counselling Session
            </h3>
            <p className="text-blue-100 text-lg">
              Get expert guidance tailored to your academic goals and career aspirations. 
              Our certified counselors are here to help you every step of the way.
            </p>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-left">
            {[
              "Personalized university recommendations",
              "Course selection guidance",
              "Application process support",
              "Scholarship opportunities",
              "Visa application assistance",
              "Pre-departure orientation"
            ].map((benefit, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                <span className="text-blue-100">{benefit}</span>
              </div>
            ))}
          </div>

          <button className="bg-green-500 hover:bg-green-400 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Book Now - It's Free!
          </button>

          <p className="text-blue-200 text-sm mt-4">
            ✨ No hidden fees • Expert counselors • Personalized advice
          </p>
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">8M+</div>
            <div className="text-blue-100">Happy Students</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">750+</div>
            <div className="text-blue-100">Partner Universities</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">50+</div>
            <div className="text-blue-100">Countries</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">95%</div>
            <div className="text-blue-100">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  )
}

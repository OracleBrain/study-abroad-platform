import Link from 'next/link'
import { Search, Filter, BookOpen, Users, Award, TrendingUp, ArrowRight } from 'lucide-react'

const journeySteps = [
  {
    step: "01",
    title: "Search",
    description: "Surf through 61K+ courses from 750+ universities across the globe",
    icon: <Search className="w-8 h-8" />
  },
  {
    step: "02", 
    title: "Compare",
    description: "Compare, analyse and narrow down your options all in one place",
    icon: <Filter className="w-8 h-8" />
  },
  {
    step: "03",
    title: "Connect", 
    description: "Meet our team of certified counsellors and get FREE guidance",
    icon: <Users className="w-8 h-8" />
  },
  {
    step: "04",
    title: "Apply",
    description: "Get assistance to apply for your student VISA",
    icon: <BookOpen className="w-8 h-8" />
  },
  {
    step: "05",
    title: "Start your studies",
    description: "Finally, get started with your new study journey",
    icon: <Award className="w-8 h-8" />
  }
]

export default function StudyJourneyProcess() {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            StudyAbroad+ simplifies your <br />
            <span className="text-blue-600">study abroad journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Follow our proven 5-step process to achieve your global education dreams
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600 transform -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
            {journeySteps.map((step, index) => (
              <div key={index} className="text-center group">
                {/* Step Circle */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 lg:w-24 lg:h-24 bg-white border-4 border-blue-200 rounded-full flex items-center justify-center mx-auto group-hover:border-blue-400 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                    <div className="text-blue-600 group-hover:text-blue-700 transition-colors">
                      {step.icon}
                    </div>
                  </div>
                  {/* Step Number */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
                  {step.description}
                </p>

                {/* Arrow for larger screens */}
                {index < journeySteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-4 text-blue-400">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-gray-600 mb-6">
              Book a FREE consultation with our expert counselors and take the first step towards your global education goals.
            </p>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Book a FREE consultation
            </button>
            <p className="text-sm text-gray-500 mt-3">
              ✨ No hidden fees • Expert guidance • Personalized advice
            </p>
          </div>
        </div>

        {/* Success Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">8M+</div>
            <div className="text-gray-600">Students Empowered</div>
          </div>
          <div className="text-center bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">750+</div>
            <div className="text-gray-600">Partner Universities</div>
          </div>
          <div className="text-center bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">61K+</div>
            <div className="text-gray-600">Courses Available</div>
          </div>
          <div className="text-center bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-gray-600">Countries</div>
          </div>
        </div>
      </div>
    </section>
  )
}

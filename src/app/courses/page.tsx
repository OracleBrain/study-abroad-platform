import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Search, Filter, Clock, Award, BookOpen, DollarSign } from 'lucide-react'

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-8">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Explore 61,000+ Courses Worldwide
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find the perfect course that matches your career aspirations and academic goals
            </p>
          </div>

          {/* Advanced Search Filters */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search courses..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="">All Fields</option>
                <option value="business">Business & Management</option>
                <option value="engineering">Engineering</option>
                <option value="computer-science">Computer Science</option>
                <option value="medicine">Medicine</option>
              </select>
              <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="">All Levels</option>
                <option value="bachelor">Bachelor</option>
                <option value="master">Master</option>
                <option value="phd">PhD</option>
              </select>
              <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="">All Countries</option>
                <option value="australia">Australia</option>
                <option value="usa">United States</option>
                <option value="uk">United Kingdom</option>
              </select>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Search Courses
              </button>
            </div>

            {/* Advanced Filters */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <select className="px-4 py-3 border border-gray-300 rounded-lg">
                <option value="">Duration</option>
                <option value="1-year">1 Year</option>
                <option value="2-years">2 Years</option>
                <option value="3-years">3 Years</option>
              </select>
              <select className="px-4 py-3 border border-gray-300 rounded-lg">
                <option value="">Intake</option>
                <option value="january">January 2025</option>
                <option value="september">September 2025</option>
              </select>
              <select className="px-4 py-3 border border-gray-300 rounded-lg">
                <option value="">Budget</option>
                <option value="0-20000">$0 - $20,000</option>
                <option value="20000-50000">$20,000 - $50,000</option>
              </select>
              <div className="flex items-center">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-sm">Scholarships Available</span>
                </label>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="flex justify-between items-center mb-6">
            <div className="text-sm text-gray-600">
              Showing 1-20 of 61,000+ courses
            </div>
            <select className="px-4 py-2 border border-gray-300 rounded-lg text-sm">
              <option value="relevance">Sort by Relevance</option>
              <option value="ranking">University Ranking</option>
              <option value="tuition-low">Tuition: Low to High</option>
              <option value="tuition-high">Tuition: High to Low</option>
            </select>
          </div>

          {/* Course Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                    <Award className="w-4 h-4 inline mr-1" />
                    Master
                  </span>
                  <span className="text-sm text-gray-500">Engineering</span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Master of Computer Science
                </h3>

                <div className="flex items-center text-gray-600 mb-4">
                  <BookOpen className="w-4 h-4 mr-2" />
                  <span className="text-sm">University of Melbourne</span>
                </div>

                <div className="space-y-2 mb-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>Duration: 2 Years</span>
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="w-4 h-4 mr-2" />
                    <span>Tuition: $45,000/year</span>
                  </div>
                </div>

                <div className="flex gap-3 mb-4">
                  <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm">
                    View Details
                  </button>
                  <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors text-sm">
                    Compare
                  </button>
                </div>

                <div className="text-xs text-gray-500 flex justify-between">
                  <span>Next intake: Sep 2025</span>
                  <span>Scholarships available</span>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Load More Courses
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

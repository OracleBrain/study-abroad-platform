import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Search, Filter, MapPin, Star, Users, Calendar, Award, Building2 } from 'lucide-react'

export default function UniversitiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-8">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Find Your Perfect University
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse through 750+ universities worldwide and find the perfect match for your academic goals
            </p>
          </div>

          {/* Search and Filters */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search universities..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="">All Countries</option>
                <option value="australia">Australia</option>
                <option value="usa">United States</option>
                <option value="uk">United Kingdom</option>
                <option value="canada">Canada</option>
              </select>
              <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option value="">All Rankings</option>
                <option value="top-100">Top 100</option>
                <option value="top-200">Top 200</option>
                <option value="top-500">Top 500</option>
              </select>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Search Universities
              </button>
            </div>
          </div>

          {/* Results */}
          <div className="text-sm text-gray-600 mb-6">
            Showing 1-20 of 750+ universities
          </div>

          {/* University Cards */}
          <div className="space-y-6">
            {/* Sample university entries would go here */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-24 md:h-24 w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center mb-4 md:mb-0 md:mr-6">
                  <Building2 className="w-8 h-8 text-gray-600" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full">Featured</span>
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">Scholarship Available</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">University of Melbourne</h3>
                  <p className="text-gray-600 mb-3">Melbourne, Australia</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div className="flex items-center">
                      <Award className="w-4 h-4 text-yellow-500 mr-2" />
                      <span>Ranking: 33</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 text-blue-500 mr-2" />
                      <span>Students: 50K+</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 text-green-500 mr-2" />
                      <span>Est. 1853</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-orange-500 mr-2" />
                      <span>4.8/5</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 md:ml-6">
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors w-full md:w-auto">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex space-x-2">
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">Previous</button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">1</button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">2</button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">3</button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">Next</button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

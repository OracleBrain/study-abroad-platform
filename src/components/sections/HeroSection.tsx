'use client'

import { useState } from 'react'
import { Search, MapPin, GraduationCap, Building2 } from 'lucide-react'

export default function HeroSection() {
  const [searchType, setSearchType] = useState('courses')

  return (
    <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Your Gateway to <span className="text-yellow-300">Global Education</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Discover consultancies, universities, and courses tailored to your global academic aspirations.
          </p>
        </div>

        {/* Search Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
            {/* Search Tabs */}
            <div className="flex flex-wrap gap-2 mb-6">
              <button
                onClick={() => setSearchType('courses')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  searchType === 'courses'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <GraduationCap className="w-4 h-4 inline mr-2" />
                Courses
              </button>
              <button
                onClick={() => setSearchType('universities')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  searchType === 'universities'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Building2 className="w-4 h-4 inline mr-2" />
                Universities
              </button>
              <button
                onClick={() => setSearchType('destinations')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  searchType === 'destinations'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <MapPin className="w-4 h-4 inline mr-2" />
                Destinations
              </button>
            </div>

            {/* Search Form */}
            <form className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What do you want to study?
                </label>
                <input
                  type="text"
                  placeholder="Search courses, subjects..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Where do you want to study?
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900">
                  <option value="">Select destination</option>
                  <option value="australia">Australia</option>
                  <option value="canada">Canada</option>
                  <option value="uk">United Kingdom</option>
                  <option value="usa">United States</option>
                  <option value="germany">Germany</option>
                  <option value="new-zealand">New Zealand</option>
                  <option value="ireland">Ireland</option>
                  <option value="singapore">Singapore</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What level do you want to study?
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900">
                  <option value="">Select level</option>
                  <option value="certificate">Certificate</option>
                  <option value="diploma">Diploma</option>
                  <option value="bachelor">Bachelor</option>
                  <option value="master">Master</option>
                  <option value="phd">PhD</option>
                </select>
              </div>
            </form>

            <button className="w-full mt-6 bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
              <Search className="w-5 h-5 mr-2" />
              Search Now
            </button>

            {/* Quick Links */}
            <div className="mt-6 text-center">
              <p className="text-gray-600 mb-3">Or explore by:</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/career-outcomes" className="text-blue-600 hover:text-blue-800 font-medium">
                  Search by Careers
                </a>
                <a href="/universities" className="text-blue-600 hover:text-blue-800 font-medium">
                  Search by Universities
                </a>
                <a href="/scholarships" className="text-blue-600 hover:text-blue-800 font-medium">
                  Search by Scholarships
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-yellow-300">61K+</div>
            <div className="text-blue-100">Courses</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-yellow-300">750+</div>
            <div className="text-blue-100">Universities</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-yellow-300">8M+</div>
            <div className="text-blue-100">Students Helped</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-yellow-300">50+</div>
            <div className="text-blue-100">Countries</div>
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

import { useState } from 'react'
import { Search, Filter, MapPin, GraduationCap, Building2, DollarSign, Clock, Star } from 'lucide-react'

export default function AdvancedSearchSection() {
  const [activeTab, setActiveTab] = useState('courses')
  const [filters, setFilters] = useState({
    level: '',
    destination: '',
    field: '',
    tuitionRange: [0, 100000],
    duration: '',
    intake: '',
    scholarship: false
  })

  const popularSearches = [
    'Business Management',
    'Computer Science', 
    'Engineering',
    'Medicine',
    'Design',
    'MBA'
  ]

  const destinations = [
    { name: 'Australia', flag: '🇦🇺', universities: 43 },
    { name: 'United States', flag: '🇺🇸', universities: 180 },
    { name: 'Canada', flag: '🇨🇦', universities: 96 },
    { name: 'United Kingdom', flag: '🇬🇧', universities: 130 },
    { name: 'Germany', flag: '🇩🇪', universities: 380 },
    { name: 'New Zealand', flag: '🇳🇿', universities: 8 }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Discover Your Path to Success
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            In just a few minutes, explore, compare and choose the best universities and courses that suit your academic goals
          </p>
        </div>

        {/* Advanced Search Card */}
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
          {/* Search Tabs */}
          <div className="border-b border-gray-200">
            <div className="flex flex-wrap">
              {[
                { id: 'courses', label: 'Search Courses', icon: <GraduationCap className="w-5 h-5" /> },
                { id: 'universities', label: 'Search Universities', icon: <Building2 className="w-5 h-5" /> },
                { id: 'careers', label: 'Search by Careers', icon: <Star className="w-5 h-5" /> }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center px-6 py-4 font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {tab.icon}
                  <span className="ml-2">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Search Form */}
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  What do you want to study?
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search subjects, courses..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Where do you want to study?
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white">
                    <option value="">Select destination</option>
                    {destinations.map((dest) => (
                      <option key={dest.name} value={dest.name.toLowerCase()}>
                        {dest.flag} {dest.name} ({dest.universities} universities)
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Study Level
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="">Select level</option>
                  <option value="certificate">Certificate</option>
                  <option value="diploma">Diploma</option>
                  <option value="bachelor">Bachelor</option>
                  <option value="master">Master</option>
                  <option value="phd">PhD</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Budget Range
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white">
                    <option value="">Select budget</option>
                    <option value="0-20000">$0 - $20,000</option>
                    <option value="20000-50000">$20,000 - $50,000</option>
                    <option value="50000-100000">$50,000 - $100,000</option>
                    <option value="100000+">$100,000+</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Advanced Filters */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Duration
                </label>
                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white">
                    <option value="">Any duration</option>
                    <option value="6-months">6 months</option>
                    <option value="1-year">1 year</option>
                    <option value="2-years">2 years</option>
                    <option value="3-years">3 years</option>
                    <option value="4-years">4+ years</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Intake
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="">Any intake</option>
                  <option value="january">January 2025</option>
                  <option value="march">March 2025</option>
                  <option value="september">September 2025</option>
                  <option value="february">February 2026</option>
                </select>
              </div>

              <div className="flex items-center">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    checked={filters.scholarship}
                    onChange={(e) => setFilters({...filters, scholarship: e.target.checked})}
                  />
                  <span className="ml-3 text-sm font-medium text-gray-700">
                    Scholarships Available
                  </span>
                </label>
              </div>
            </div>

            {/* Search Button */}
            <button className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors flex items-center justify-center mb-6">
              <Search className="w-5 h-5 mr-2" />
              Search {activeTab === 'courses' ? '61,000+ Courses' : activeTab === 'universities' ? '750+ Universities' : 'Career Outcomes'}
            </button>

            {/* Popular Searches */}
            <div className="text-center">
              <p className="text-gray-600 mb-3">Popular searches:</p>
              <div className="flex flex-wrap justify-center gap-2">
                {popularSearches.map((search, index) => (
                  <button
                    key={index}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors text-sm font-medium"
                  >
                    {search}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quick Help Section */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Unsure where to start? Get end-to-end study abroad assistance, for FREE!</p>
          <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
            Help me decide
          </button>
        </div>
      </div>
    </section>
  )
}

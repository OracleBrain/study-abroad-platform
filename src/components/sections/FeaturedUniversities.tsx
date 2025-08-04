import Link from 'next/link'
import { Award, Users, Calendar, Home, TrendingUp, Zap } from 'lucide-react'

const universities = [
  {
    id: 1,
    name: "Deakin University",
    location: "Melbourne, Australia",
    logo: "/images/universities/deakin.jpg",
    ranking: "251 - 300",
    established: 1974,
    students: "61K+",
    featured: true,
    scholarship: true,
    fastOffers: true,
    onCampusAccommodation: true,
    slug: "deakin-university"
  },
  {
    id: 2,
    name: "RMIT University",
    location: "Melbourne, Australia",
    logo: "/images/universities/rmit.jpg",
    ranking: "251 - 300",
    established: 1887,
    students: "87K+",
    featured: true,
    scholarship: true,
    fastOffers: false,
    onCampusAccommodation: true,
    slug: "rmit-university"
  },
  {
    id: 3,
    name: "Australian Catholic University",
    location: "Sydney, Australia",
    logo: "/images/universities/acu.jpg",
    ranking: "401 - 500",
    established: 1991,
    students: "34K+",
    featured: true,
    scholarship: true,
    fastOffers: true,
    onCampusAccommodation: true,
    slug: "australian-catholic-university"
  },
  {
    id: 4,
    name: "La Trobe University",
    location: "Melbourne, Australia",
    logo: "/images/universities/latrobe.jpg",
    ranking: "251 - 300",
    established: 1964,
    students: "36K+",
    featured: true,
    scholarship: true,
    fastOffers: true,
    onCampusAccommodation: true,
    slug: "la-trobe-university"
  },
  {
    id: 5,
    name: "University of Wollongong",
    location: "Sydney, Australia",
    logo: "/images/universities/uow.jpg",
    ranking: "201 - 250",
    established: 1951,
    students: "31K+",
    featured: true,
    scholarship: true,
    fastOffers: false,
    onCampusAccommodation: true,
    slug: "university-of-wollongong"
  },
  {
    id: 6,
    name: "Auckland University of Technology",
    location: "Auckland, New Zealand",
    logo: "/images/universities/aut.jpg",
    ranking: "401 - 500",
    established: 2000,
    students: "29K+",
    featured: true,
    scholarship: false,
    fastOffers: false,
    onCampusAccommodation: true,
    slug: "auckland-university-of-technology"
  }
]

export default function FeaturedUniversities() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Universities
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore top institutions worldwide with excellent rankings and opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {universities.map((university) => (
            <Link
              key={university.id}
              href={`/university/${university.slug}`}
              className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
            >
              <div className="p-6">
                {/* Header with badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {university.featured && (
                    <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full font-medium">
                      Featured
                    </span>
                  )}
                  {university.scholarship && (
                    <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">
                      Scholarship Available
                    </span>
                  )}
                  {university.fastOffers && (
                    <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded-full font-medium">
                      <Zap className="w-3 h-3 inline mr-1" />
                      Fast offers
                    </span>
                  )}
                </div>

                {/* University Info */}
                <div className="flex items-start mb-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-sm font-bold text-gray-600">
                      {university.name.split(' ').map(word => word[0]).join('').slice(0, 2)}
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
                      {university.name}
                    </h3>
                    <p className="text-gray-600 text-sm">{university.location}</p>
                  </div>
                </div>

                {/* Rankings & Stats */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Award className="w-4 h-4 mr-2 text-yellow-500" />
                    <span>Rankings {university.ranking}</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-600">
                    <Home className="w-4 h-4 mr-2 text-blue-500" />
                    <span>
                      On campus accommodation {university.onCampusAccommodation ? 'Available' : 'Not Available'}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-green-500" />
                      <span>Year established {university.established}</span>
                    </div>
                  </div>

                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="w-4 h-4 mr-2 text-purple-500" />
                    <span>Students {university.students}</span>
                  </div>
                </div>

                {/* Action Button */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center">
                    <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                    <span className="text-sm text-gray-600">High demand</span>
                  </div>
                  <button className="text-blue-600 font-medium text-sm hover:text-blue-800">
                    View Details →
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/universities"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            View All Universities →
          </Link>
        </div>
      </div>
    </section>
  )
}

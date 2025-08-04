import Link from 'next/link'
import { MapPin, Users, TrendingUp, Star } from 'lucide-react'

const destinations = [
  {
    id: 1,
    name: "Australia",
    image: "/images/destinations/australia.jpg",
    students: "650K+",
    universities: "43",
    averageRanking: "Top 100",
    flag: "🇦🇺",
    description: "World-class education with stunning landscapes",
    slug: "study-in-australia",
    highlights: ["Post-study work visa", "Quality education", "Multicultural society"]
  },
  {
    id: 2,
    name: "United States",
    image: "/images/destinations/usa.jpg",
    students: "1M+",
    universities: "180",
    averageRanking: "Top 50",
    flag: "🇺🇸",
    description: "Home to the world's top universities",
    slug: "study-in-usa",
    highlights: ["Research opportunities", "Innovation hub", "Diverse programs"]
  },
  {
    id: 3,
    name: "Canada",
    image: "/images/destinations/canada.jpg",
    students: "500K+",
    universities: "96",
    averageRanking: "Top 200",
    flag: "🇨🇦",
    description: "Affordable education with high quality of life",
    slug: "study-in-canada",
    highlights: ["Affordable tuition", "Immigration pathways", "Safe environment"]
  },
  {
    id: 4,
    name: "United Kingdom",
    image: "/images/destinations/uk.jpg",
    students: "460K+",
    universities: "130",
    averageRanking: "Top 100",
    flag: "🇬🇧",
    description: "Rich academic heritage and prestigious institutions",
    slug: "study-in-uk",
    highlights: ["Historic universities", "Research excellence", "Cultural diversity"]
  },
  {
    id: 5,
    name: "Germany",
    image: "/images/destinations/germany.jpg",
    students: "380K+",
    universities: "380",
    averageRanking: "Top 300",
    flag: "🇩🇪",
    description: "Engineering excellence with low tuition fees",
    slug: "study-in-germany",
    highlights: ["Low/no tuition", "Engineering focus", "Strong economy"]
  },
  {
    id: 6,
    name: "New Zealand",
    image: "/images/destinations/new-zealand.jpg",
    students: "125K+",
    universities: "8",
    averageRanking: "Top 400",
    flag: "🇳🇿",
    description: "Innovative education in a beautiful setting",
    slug: "study-in-new-zealand",
    highlights: ["Work opportunities", "Adventure sports", "Small class sizes"]
  },
  {
    id: 7,
    name: "Ireland",
    image: "/images/destinations/ireland.jpg",
    students: "35K+",
    universities: "7",
    averageRanking: "Top 500",
    flag: "🇮🇪",
    description: "Tech hub of Europe with friendly culture",
    slug: "study-in-ireland",
    highlights: ["Tech industry", "EU access", "English speaking"]
  },
  {
    id: 8,
    name: "Singapore",
    image: "/images/destinations/singapore.jpg",
    students: "65K+",
    universities: "3",
    averageRanking: "Top 50",
    flag: "🇸🇬",
    description: "Asia's education hub with global outlook",
    slug: "study-in-singapore",
    highlights: ["Asian gateway", "Business hub", "Multicultural"]
  }
]

export default function StudyDestinations() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Journey through popular student destinations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the world's top study destinations and find your perfect match
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination) => (
            <Link
              key={destination.id}
              href={`/study/${destination.slug}`}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3"
            >
              {/* Background Image */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-700"></div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>

              {/* Content */}
              <div className="relative p-6 h-80 flex flex-col justify-between text-white">
                {/* Top Section */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-4xl">{destination.flag}</span>
                    <div className="flex items-center bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-3 py-1">
                      <Star className="w-4 h-4 mr-1 text-yellow-400" />
                      <span className="text-sm font-medium">{destination.averageRanking}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-yellow-200 transition-colors">
                    {destination.name}
                  </h3>
                  
                  <p className="text-sm text-gray-100 mb-4 opacity-90">
                    {destination.description}
                  </p>

                  {/* Stats */}
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      <span>{destination.students} international students</span>
                    </div>
                    <div className="flex items-center">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      <span>{destination.universities} top universities</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Section */}
                <div>
                  {/* Highlights */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {destination.highlights.slice(0, 2).map((highlight, index) => (
                        <span
                          key={index}
                          className="text-xs bg-white bg-opacity-20 backdrop-blur-sm px-2 py-1 rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="w-full bg-white bg-opacity-20 backdrop-blur-sm text-white py-2 px-4 rounded-lg font-medium hover:bg-opacity-30 transition-all group-hover:bg-blue-600 group-hover:bg-opacity-80">
                    Explore Programs
                  </button>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-white bg-opacity-10 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-500"></div>
              <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-white bg-opacity-10 rounded-full blur-xl group-hover:scale-110 transition-transform duration-500"></div>
            </Link>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600">50+</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">750+</div>
              <div className="text-gray-600">Universities</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">61K+</div>
              <div className="text-gray-600">Courses</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">8M+</div>
              <div className="text-gray-600">Students Helped</div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/destinations"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            View All Destinations →
          </Link>
        </div>
      </div>
    </section>
  )
}

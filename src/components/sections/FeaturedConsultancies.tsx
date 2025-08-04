import Link from 'next/link'
import { CheckCircle, MapPin, Users } from 'lucide-react'

const consultancies = [
  {
    id: 1,
    name: "AECC Nepal",
    logo: "/images/consultancies/aecc-nepal.jpg",
    location: "Kamalpokhari, Kathmandu",
    verified: true,
    destinations: ["Australia", "Canada", "USA", "UK", "New Zealand"],
    additionalDestinations: 5,
    studentsHelped: "5000+",
    rating: 4.8,
    slug: "aecc-nepal"
  },
  {
    id: 2,
    name: "Education Tree Global",
    logo: "/images/consultancies/education-tree.jpg",
    location: "Kamalpokhari, Kathmandu",
    verified: true,
    destinations: ["Australia", "Canada", "USA", "UK", "New Zealand"],
    additionalDestinations: 2,
    studentsHelped: "3000+",
    rating: 4.7,
    slug: "education-tree-global"
  },
  {
    id: 3,
    name: "Edwise Foundation",
    logo: "/images/consultancies/edwise.jpg",
    location: "New Plaza, Kathmandu",
    verified: true,
    destinations: ["Australia", "Canada", "USA", "UK"],
    additionalDestinations: 0,
    studentsHelped: "2500+",
    rating: 4.6,
    slug: "edwise-foundation"
  },
  {
    id: 4,
    name: "NIEC",
    logo: "/images/consultancies/niec.jpg",
    location: "Putalisadak, Kathmandu",
    verified: true,
    destinations: ["Australia", "Canada", "USA", "UK", "New Zealand"],
    additionalDestinations: 3,
    studentsHelped: "4000+",
    rating: 4.9,
    slug: "niec"
  },
  {
    id: 5,
    name: "KIEC",
    logo: "/images/consultancies/kiec.jpg",
    location: "Putalisadak, Kathmandu",
    verified: true,
    destinations: ["Australia", "Canada", "USA", "UK", "New Zealand"],
    additionalDestinations: 5,
    studentsHelped: "3500+",
    rating: 4.8,
    slug: "kiec"
  },
  {
    id: 6,
    name: "The Next Education Consultancy",
    logo: "/images/consultancies/next-education.jpg",
    location: "New Baneshwor, Kathmandu",
    verified: true,
    destinations: ["Australia", "Canada", "USA", "UK", "New Zealand"],
    additionalDestinations: 1,
    studentsHelped: "2000+",
    rating: 4.5,
    slug: "the-next-education-consultancy"
  }
]

export default function FeaturedConsultancies() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Consultancies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with trusted education consultants to guide your study abroad journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {consultancies.map((consultancy) => (
            <Link
              key={consultancy.id}
              href={`/consultancy/${consultancy.slug}`}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-lg font-bold text-gray-600">
                        {consultancy.name.split(' ').map(word => word[0]).join('').slice(0, 2)}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 transition-colors">
                        {consultancy.name}
                      </h3>
                      {consultancy.verified && (
                        <div className="flex items-center text-green-600 text-sm">
                          <CheckCircle className="w-4 h-4 mr-1" />
                          Verified Consultancy
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm">{consultancy.location}</span>
                </div>

                {/* Students Helped */}
                <div className="flex items-center text-gray-600 mb-4">
                  <Users className="w-4 h-4 mr-2" />
                  <span className="text-sm">{consultancy.studentsHelped} students helped</span>
                </div>

                {/* Destinations */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {consultancy.destinations.map((destination, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                      >
                        {destination}
                      </span>
                    ))}
                    {consultancy.additionalDestinations > 0 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        +{consultancy.additionalDestinations}
                      </span>
                    )}
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="text-yellow-500 mr-1">★</span>
                    <span className="font-semibold text-gray-900">{consultancy.rating}</span>
                    <span className="text-gray-500 text-sm ml-1">(4.8/5)</span>
                  </div>
                  <button className="text-blue-600 font-medium text-sm hover:text-blue-800">
                    Learn More →
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/consultancy"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            View All Consultancies →
          </Link>
        </div>
      </div>
    </section>
  )
}

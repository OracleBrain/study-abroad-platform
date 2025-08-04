import Link from 'next/link'
import { TrendingUp, Users, ChevronRight } from 'lucide-react'

const studyAreas = [
  {
    id: 1,
    title: "Business & Management",
    studentsChose: "3k+",
    image: "/images/study-areas/business.jpg",
    description: "Develop leadership skills and business acumen",
    slug: "study-business-management",
    color: "from-blue-500 to-blue-600"
  },
  {
    id: 2,
    title: "Engineering",
    studentsChose: "3k+",
    image: "/images/study-areas/engineering.jpg",
    description: "Build the future with innovative engineering solutions",
    slug: "study-engineering",
    color: "from-green-500 to-green-600"
  },
  {
    id: 3,
    title: "IT & Computer Science",
    studentsChose: "3k+",
    image: "/images/study-areas/computer-science.jpg",
    description: "Shape the digital world with cutting-edge technology",
    slug: "study-it-computer-science",
    color: "from-purple-500 to-purple-600"
  },
  {
    id: 4,
    title: "Media & Communication",
    studentsChose: "3k+",
    image: "/images/study-areas/media.jpg",
    description: "Tell stories and connect with global audiences",
    slug: "study-media-communication",
    color: "from-pink-500 to-pink-600"
  },
  {
    id: 5,
    title: "Travel & Hospitality",
    studentsChose: "3k+",
    image: "/images/study-areas/hospitality.jpg",
    description: "Create memorable experiences in the service industry",
    slug: "study-travel-hospitality",
    color: "from-orange-500 to-orange-600"
  }
]

export default function TrendingStudyAreas() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Search across our trending study areas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the most popular fields of study chosen by thousands of students worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {studyAreas.map((area) => (
            <Link
              key={area.id}
              href={`/courses/${area.slug}`}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-90`}></div>
              
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              
              {/* Content */}
              <div className="relative p-6 h-64 flex flex-col justify-between text-white">
                {/* Top Section */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <TrendingUp className="w-6 h-6" />
                    <div className="flex items-center text-sm">
                      <Users className="w-4 h-4 mr-1" />
                      <span>{area.studentsChose} students chose this</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-200 transition-colors">
                    {area.title}
                  </h3>
                  
                  <p className="text-sm text-gray-100 opacity-90">
                    {area.description}
                  </p>
                </div>

                {/* Bottom Section */}
                <div className="flex items-center justify-between">
                  <button className="bg-white bg-opacity-20 backdrop-blur-sm text-white px-4 py-2 rounded-lg font-medium hover:bg-opacity-30 transition-all text-sm">
                    Explore
                  </button>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-white bg-opacity-10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-white bg-opacity-10 rounded-full blur-xl"></div>
            </Link>
          ))}
        </div>

        {/* Additional Study Areas */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">More Study Areas</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Health & Medicine',
              'Law & Legal Studies',
              'Education & Teaching',
              'Arts & Humanities',
              'Science & Research',
              'Agriculture & Environment',
              'Architecture & Design',
              'Finance & Accounting'
            ].map((area, index) => (
              <Link
                key={index}
                href={`/courses/study-${area.toLowerCase().replace(/\s+/g, '-').replace('&', 'and')}`}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-blue-100 hover:text-blue-700 transition-colors text-sm font-medium"
              >
                {area}
              </Link>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/courses"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            View All Study Areas →
          </Link>
        </div>
      </div>
    </section>
  )
}

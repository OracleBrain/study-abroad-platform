import Link from 'next/link'
import { Clock, BookOpen, Award } from 'lucide-react'

const courses = [
  {
    id: 1,
    title: "Master of Fine Arts",
    university: "University of Auckland",
    level: "Master",
    duration: "Varies",
    category: "Arts & Design",
    slug: "master-of-fine-arts-university-of-auckland"
  },
  {
    id: 2,
    title: "Master of Design",
    university: "University of Auckland",
    level: "Master",
    duration: "Varies",
    category: "Arts & Design",
    slug: "master-of-design-university-of-auckland"
  },
  {
    id: 3,
    title: "Bachelor of Fine Arts",
    university: "University of Auckland",
    level: "Bachelor",
    duration: "3 Years",
    category: "Arts & Design",
    slug: "bachelor-of-fine-arts-university-of-auckland"
  },
  {
    id: 4,
    title: "Bachelor of Design",
    university: "University of Auckland",
    level: "Bachelor",
    duration: "3 Years",
    category: "Arts & Design",
    slug: "bachelor-of-design-university-of-auckland"
  },
  {
    id: 5,
    title: "Master of Social Work",
    university: "University of Auckland",
    level: "Master",
    duration: "Varies",
    category: "Social Sciences",
    slug: "master-of-social-work-university-of-auckland"
  },
  {
    id: 6,
    title: "Bachelor of Social Work (Honours)",
    university: "University of Auckland",
    level: "Bachelor",
    duration: "4 Years",
    category: "Social Sciences",
    slug: "bachelor-of-social-work-honours-university-of-auckland"
  }
]

const levelColors = {
  'Bachelor': 'bg-green-100 text-green-700',
  'Master': 'bg-blue-100 text-blue-700',
  'PhD': 'bg-purple-100 text-purple-700',
  'Certificate': 'bg-orange-100 text-orange-700',
  'Diploma': 'bg-yellow-100 text-yellow-700'
}

export default function FeaturedCourses() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Courses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Popular programs to kickstart your career and achieve your academic goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Link
              key={course.id}
              href={`/course/${course.slug}`}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
            >
              <div className="p-6">
                {/* Course Level Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${levelColors[course.level as keyof typeof levelColors] || 'bg-gray-100 text-gray-700'}`}>
                    <Award className="w-4 h-4 inline mr-1" />
                    {course.level}
                  </span>
                  <span className="text-sm text-gray-500">{course.category}</span>
                </div>

                {/* Course Title */}
                <h3 className="font-bold text-xl text-gray-900 group-hover:text-blue-600 transition-colors mb-3">
                  {course.title}
                </h3>

                {/* University */}
                <div className="flex items-center text-gray-600 mb-4">
                  <BookOpen className="w-4 h-4 mr-2" />
                  <span className="text-sm">{course.university}</span>
                </div>

                {/* Duration */}
                <div className="flex items-center text-gray-600 mb-6">
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="text-sm">Duration: {course.duration}</span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm">
                    View Details
                  </button>
                  <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors text-sm">
                    Compare
                  </button>
                </div>

                {/* Quick Info */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>International students welcome</span>
                    <span>Scholarships available</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/courses"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            View All Courses →
          </Link>
        </div>
      </div>
    </section>
  )
}

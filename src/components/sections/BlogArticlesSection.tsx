import Link from 'next/link'
import { Calendar, User, ArrowRight, Clock, TrendingUp } from 'lucide-react'

const articles = [
  {
    id: 1,
    title: "IVY League Universities In USA : Colleges, Ranking",
    excerpt: "Complete guide to Ivy League universities, admission requirements, and how to get accepted into America's most prestigious institutions.",
    author: "StudyAbroad+ Team",
    date: "5 Aug 2024",
    readTime: "8 min read",
    category: "University Rankings",
    image: "/images/articles/ivy-league.jpg",
    slug: "ivy-league-universities-usa-colleges-ranking",
    trending: true
  },
  {
    id: 2,
    title: "MD in UK: Top University, Cost, Eligibility, Career",
    excerpt: "Everything you need to know about pursuing an MD degree in the UK, including top universities, costs, eligibility criteria, and career prospects.",
    author: "Dr. Sarah Johnson",
    date: "29 Jul 2024", 
    readTime: "12 min read",
    category: "Medical Studies",
    image: "/images/articles/md-uk.jpg",
    slug: "md-uk-top-university-cost-eligibility-career"
  },
  {
    id: 3,
    title: "Robotics Engineering - Fees, Syllabus, Eligibility, Career Scope",
    excerpt: "Comprehensive guide to Robotics Engineering programs worldwide, including course details, fees, eligibility, and future career opportunities.",
    author: "Prof. Michael Chen",
    date: "29 Jul 2024",
    readTime: "10 min read", 
    category: "Engineering",
    image: "/images/articles/robotics-engineering.jpg",
    slug: "robotics-engineering-fees-syllabus-eligibility-career"
  },
  {
    id: 4,
    title: "Biomedical Engineering : Course, Admission 2024, Career, Scope",
    excerpt: "Discover biomedical engineering programs, admission requirements for 2024, career prospects, and scope in this rapidly growing field.",
    author: "Dr. Emily Rodriguez",
    date: "29 Jul 2024",
    readTime: "9 min read",
    category: "Engineering",
    image: "/images/articles/biomedical-engineering.jpg",
    slug: "biomedical-engineering-course-admission-2024-career"
  },
  {
    id: 5,
    title: "DCA : Course, Full Form, Syllabus, Admission 2024",
    excerpt: "Complete information about Diploma in Computer Applications (DCA), including course structure, syllabus, admission process for 2024.",
    author: "Tech Team",
    date: "18 Jul 2024",
    readTime: "6 min read",
    category: "Computer Science",
    image: "/images/articles/dca-course.jpg",
    slug: "dca-course-full-form-syllabus-admission-2024"
  },
  {
    id: 6,
    title: "Study Abroad Scholarships 2024: Complete Guide",
    excerpt: "Comprehensive list of study abroad scholarships available for 2024, including eligibility criteria, application process, and deadlines.",
    author: "Scholarship Team",
    date: "15 Jul 2024",
    readTime: "15 min read",
    category: "Scholarships",
    image: "/images/articles/scholarships-2024.jpg",
    slug: "study-abroad-scholarships-2024-complete-guide",
    featured: true
  }
]

const categories = [
  'All Articles',
  'University Rankings',
  'Medical Studies', 
  'Engineering',
  'Computer Science',
  'Scholarships',
  'Visa Guide',
  'Country Guides'
]

export default function BlogArticlesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Surf through our latest articles
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest trends, guides, and insights in international education
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                index === 0
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-blue-100 hover:text-blue-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Article */}
        <div className="mb-12">
          {articles.filter(article => article.featured).map((article) => (
            <Link
              key={article.id}
              href={`/blog/${article.slug}`}
              className="group block bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="h-64 md:h-full bg-gradient-to-r from-blue-500 to-indigo-600 relative">
                    <div className="absolute top-4 left-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </div>
                    <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
                      {article.category}
                    </span>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {article.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-4">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2 text-gray-500" />
                      <span className="text-sm text-gray-600">{article.author}</span>
                    </div>
                    <div className="flex items-center text-blue-600 font-medium">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.filter(article => !article.featured).map((article) => (
            <Link
              key={article.id}
              href={`/blog/${article.slug}`}
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              {/* Article Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-400 to-indigo-600 overflow-hidden">
                {article.trending && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    Trending
                  </div>
                )}
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white bg-opacity-90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                    {article.category}
                  </span>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                  <div className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {article.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {article.readTime}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3 line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <User className="w-3 h-3 mr-1 text-gray-400" />
                    <span className="text-xs text-gray-500">{article.author}</span>
                  </div>
                  <div className="flex items-center text-blue-600 text-sm font-medium">
                    Read More
                    <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            View All Articles →
          </Link>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="text-blue-100 mb-6">
            Subscribe to our newsletter and get the latest articles and study abroad tips delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:ring-opacity-50"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

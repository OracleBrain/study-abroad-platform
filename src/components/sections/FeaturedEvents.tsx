import Link from 'next/link'
import { Calendar, MapPin, Clock, Users, Building2 } from 'lucide-react'

const events = [
  {
    id: 1,
    title: "Study Abroad Day",
    organizer: "NIEC",
    type: "In Person",
    date: "August 1, 2025",
    location: "Kathmandu, Nepal",
    image: "/images/events/study-abroad-day.jpg",
    description: "Comprehensive study abroad fair with university representatives",
    status: "upcoming",
    slug: "study-abroad-day"
  },
  {
    id: 2,
    title: "ETG Multi Destination Admissions Day",
    organizer: "Education Tree Global",
    type: "In Person",
    date: "August 12, 2025",
    location: "Kathmandu, Nepal",
    image: "/images/events/etg-admissions.jpg",
    description: "Multi-destination admissions event with on-spot offers",
    status: "upcoming",
    slug: "etg-multi-destination-admissions-day"
  },
  {
    id: 3,
    title: "Education Loan Meet & Greet",
    organizer: "AECC Nepal",
    type: "In Person",
    date: "July 24, 2025",
    location: "Kathmandu, Nepal",
    image: "/images/events/education-loan.jpg",
    description: "Learn about education financing options and loan procedures",
    status: "closed",
    slug: "education-loan-meet-greet"
  }
]

const statusColors = {
  'upcoming': 'bg-green-100 text-green-700 border-green-200',
  'ongoing': 'bg-blue-100 text-blue-700 border-blue-200',
  'closed': 'bg-gray-100 text-gray-700 border-gray-200'
}

export default function FeaturedEvents() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Events
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our educational events and fairs to connect with universities and consultants
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <Link
              key={event.id}
              href={`/event/${event.slug}`}
              className="group bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Event Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-500 to-indigo-600 overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium border ${statusColors[event.status as keyof typeof statusColors]}`}>
                    {event.status === 'upcoming' ? 'Upcoming' : event.status === 'closed' ? 'Closed' : 'Ongoing'}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-white bg-opacity-90 text-gray-800 rounded-full text-sm font-medium">
                    {event.type}
                  </span>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent opacity-50"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <Calendar className="w-5 h-5" />
                </div>
              </div>

              {/* Event Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3">
                  {event.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {event.description}
                </p>

                {/* Event Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <Building2 className="w-4 h-4 mr-3 text-blue-500" />
                    <span>By {event.organizer}</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-3 text-green-500" />
                    <span>{event.date}</span>
                  </div>

                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-3 text-red-500" />
                    <span>{event.location}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {event.status === 'upcoming' ? (
                    <>
                      <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm">
                        Register Now
                      </button>
                      <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors text-sm">
                        Learn More
                      </button>
                    </>
                  ) : event.status === 'closed' ? (
                    <button className="w-full bg-gray-300 text-gray-600 py-2 px-4 rounded-lg font-medium cursor-not-allowed text-sm">
                      Event Closed
                    </button>
                  ) : (
                    <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-green-700 transition-colors text-sm">
                      Join Live
                    </button>
                  )}
                </div>

                {/* Event Stats */}
                {event.status === 'upcoming' && (
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center">
                        <Users className="w-3 h-3 mr-1" />
                        <span>150+ expected</span>
                      </div>
                      <span>Free admission</span>
                    </div>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>

        {/* Upcoming Events Calendar */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Don't Miss Out!</h3>
            <p className="text-gray-600">Subscribe to our event notifications and never miss an important education fair</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/events"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            View All Events →
          </Link>
        </div>
      </div>
    </section>
  )
}

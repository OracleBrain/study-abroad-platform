import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Twitter, Youtube, Phone, Mail, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-blue-400 mb-4">StudyAbroad+</h3>
            <p className="text-gray-300 mb-4">
              Your gateway to global education. Discover the best universities, courses, and consultancies for your study abroad journey.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                Kathmandu, Nepal
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                +977 9845362017
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                info@studyabroadplus.com
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/universities" className="hover:text-blue-400">Universities</Link></li>
              <li><Link href="/colleges" className="hover:text-blue-400">Colleges</Link></li>
              <li><Link href="/courses" className="hover:text-blue-400">Courses</Link></li>
              <li><Link href="/consultancies" className="hover:text-blue-400">Consultancies</Link></li>
              <li><Link href="/destinations" className="hover:text-blue-400">Destinations</Link></li>
              <li><Link href="/scholarships" className="hover:text-blue-400">Scholarships</Link></li>
              <li><Link href="/events" className="hover:text-blue-400">Events</Link></li>
              <li><Link href="/offers" className="hover:text-blue-400">Offers</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/register-consultancy" className="hover:text-blue-400">Register Consultancy</Link></li>
              <li><Link href="/application-status" className="hover:text-blue-400">Check Status</Link></li>
              <li><Link href="/login" className="hover:text-blue-400">Login</Link></li>
              <li><Link href="/complaint" className="hover:text-blue-400">File Complaint</Link></li>
              <li><Link href="/services" className="hover:text-blue-400">Our Services</Link></li>
              <li><Link href="/advertise" className="hover:text-blue-400">Advertise with Us</Link></li>
              <li><Link href="/about" className="hover:text-blue-400">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-blue-400">Contact Us</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/exams" className="hover:text-blue-400">Exams</Link></li>
              <li><Link href="/featured" className="hover:text-blue-400">Featured</Link></li>
              <li><Link href="/blog" className="hover:text-blue-400">Blog</Link></li>
              <li><Link href="/news" className="hover:text-blue-400">News</Link></li>
              <li><Link href="/faqs" className="hover:text-blue-400">FAQs</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-blue-400">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-blue-400">Terms of Use</Link></li>
            </ul>
          </div>
        </div>

        {/* Social Media & Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 md:mb-0">
              <Link href="#" className="text-gray-400 hover:text-blue-400">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400">
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-blue-400">
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
            <p className="text-sm text-gray-400">
              © 2025 StudyAbroad+. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Free Consultation Banner */}
      <div className="bg-blue-600 py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white font-medium">
            Need guidance? Get FREE counseling with our education experts!
            <button className="ml-4 bg-white text-blue-600 px-4 py-1 rounded font-semibold hover:bg-gray-100 transition-colors">
              Book Now
            </button>
          </p>
        </div>
      </div>
    </footer>
  )
}

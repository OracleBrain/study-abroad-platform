// University Types
export interface University {
  id: number
  name: string
  location: string
  country: string
  logo: string
  ranking: string
  established: number
  students: string
  featured: boolean
  scholarship: boolean
  fastOffers: boolean
  onCampusAccommodation: boolean
  slug: string
  description?: string
  courses?: Course[]
  programs?: string[]
  tuitionFee?: {
    min: number
    max: number
    currency: string
  }
  requirements?: {
    ielts?: number
    toefl?: number
    gpa?: number
  }
}

// Course Types
export interface Course {
  id: number
  title: string
  university: string
  universityId: number
  level: 'Certificate' | 'Diploma' | 'Bachelor' | 'Master' | 'PhD'
  duration: string
  category: string
  slug: string
  description?: string
  tuitionFee?: number
  currency?: string
  intake?: string[]
  requirements?: {
    academicRequirements: string
    englishRequirements: string
    additionalRequirements?: string[]
  }
}

// Consultancy Types
export interface Consultancy {
  id: number
  name: string
  logo: string
  location: string
  verified: boolean
  destinations: string[]
  additionalDestinations: number
  studentsHelped: string
  rating: number
  slug: string
  description?: string
  services?: string[]
  certifications?: string[]
  contactInfo?: {
    phone: string
    email: string
    website: string
    address: string
  }
}

// Event Types
export interface Event {
  id: number
  title: string
  organizer: string
  organizerId: number
  type: 'In Person' | 'Online' | 'Hybrid'
  date: string
  endDate?: string
  location: string
  image: string
  description: string
  status: 'upcoming' | 'ongoing' | 'closed'
  slug: string
  registrationLink?: string
  features?: string[]
  speakers?: {
    name: string
    title: string
    organization: string
  }[]
}

// Destination Types
export interface Destination {
  id: number
  name: string
  country: string
  image: string
  students: string
  universities: string
  averageRanking: string
  flag: string
  description: string
  slug: string
  highlights: string[]
  popularCities?: string[]
  costOfLiving?: {
    min: number
    max: number
    currency: string
  }
  workRights?: {
    duringStudy: string
    afterStudy: string
  }
}

// Scholarship Types
export interface Scholarship {
  id: number
  title: string
  provider: string
  amount: number
  currency: string
  level: string[]
  destinations: string[]
  eligibility: string[]
  deadline: string
  description: string
  applicationLink: string
  slug: string
}

// User Types
export interface User {
  id: number
  email: string
  firstName: string
  lastName: string
  phone?: string
  country: string
  interestedDestinations: string[]
  interestedLevel: string
  interestedField: string
  profileComplete: boolean
  createdAt: string
  updatedAt: string
}

// Application Types
export interface Application {
  id: number
  userId: number
  courseId: number
  universityId: number
  consultancyId?: number
  status: 'draft' | 'submitted' | 'under-review' | 'accepted' | 'rejected' | 'waitlisted'
  submittedAt?: string
  updatedAt: string
  documents: ApplicationDocument[]
  timeline: ApplicationTimelineEntry[]
}

export interface ApplicationDocument {
  id: number
  type: string
  name: string
  url: string
  verified: boolean
  uploadedAt: string
}

export interface ApplicationTimelineEntry {
  id: number
  status: string
  message: string
  date: string
  important: boolean
}

// Search and Filter Types
export interface SearchFilters {
  query?: string
  level?: string[]
  destination?: string[]
  field?: string[]
  tuitionRange?: [number, number]
  duration?: string[]
  intake?: string[]
  scholarship?: boolean
  fastTrack?: boolean
}

export interface SearchResult<T> {
  items: T[]
  total: number
  page: number
  limit: number
  hasMore: boolean
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean
  data: T
  message?: string
  error?: string
}

export interface PaginatedResponse<T> {
  success: boolean
  data: SearchResult<T>
  message?: string
}

// Form Types
export interface ContactForm {
  name: string
  email: string
  phone: string
  message: string
  preferredContactMethod: 'email' | 'phone' | 'whatsapp'
  interestedIn: string[]
}

export interface ConsultationBookingForm {
  firstName: string
  lastName: string
  email: string
  phone: string
  country: string
  interestedDestination: string
  interestedLevel: string
  interestedField: string
  preferredDate: string
  preferredTime: string
  additionalNotes?: string
}

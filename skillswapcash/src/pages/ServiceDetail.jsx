import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';
import { 
  Star, 
  MapPin, 
  Clock, 
  DollarSign, 
  Calendar,
  MessageSquare,
  Award,
  CheckCircle
} from 'lucide-react';

export const ServiceDetail = () => {
  const { id } = useParams();
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  // Mock data - would come from API
  const service = {
    id: parseInt(id),
    title: 'Professional Web Development',
    description: 'Full-stack web development services for modern applications. I specialize in building scalable, high-performance web applications using the latest technologies. With over 5 years of experience, I can help you bring your ideas to life.',
    provider: {
      name: 'John Doe',
      avatar: 'https://ui-avatars.com/api/?name=John+Doe&size=200',
      rating: 4.9,
      reviews: 127,
      completedJobs: 342,
      responseTime: '2 hours',
      memberSince: '2020',
      bio: 'Passionate full-stack developer with expertise in modern web technologies.',
      skills: ['React', 'Node.js', 'MongoDB', 'TypeScript', 'AWS'],
    },
    category: 'Web Development',
    price: 75,
    duration: '60 min',
    location: 'New York, NY',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=500&fit=crop',
    tags: ['React', 'Node.js', 'MongoDB'],
    features: [
      'Custom web application development',
      'API integration and development',
      'Database design and optimization',
      'Code review and consultation',
      'Deployment and hosting setup',
    ],
    reviews: [
      {
        id: 1,
        author: 'Sarah Johnson',
        avatar: 'https://ui-avatars.com/api/?name=Sarah+Johnson',
        rating: 5,
        date: '2 weeks ago',
        comment: 'Excellent work! Very professional and delivered exactly what I needed.',
      },
      {
        id: 2,
        author: 'Mike Chen',
        avatar: 'https://ui-avatars.com/api/?name=Mike+Chen',
        rating: 5,
        date: '1 month ago',
        comment: 'Great communication and expertise. Highly recommend!',
      },
      {
        id: 3,
        author: 'Emma Williams',
        avatar: 'https://ui-avatars.com/api/?name=Emma+Williams',
        rating: 4,
        date: '2 months ago',
        comment: 'Very knowledgeable. Helped me solve complex problems.',
      },
    ],
  };

  const handleBooking = (e) => {
    e.preventDefault();
    // Handle booking logic
    alert('Booking functionality would be implemented here');
  };

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <nav className="flex text-sm text-gray-600">
            <Link to="/services" className="hover:text-primary">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900">{service.title}</span>
          </nav>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Service Image */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-96 object-cover"
              />
            </div>

            {/* Service Details */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="mb-4">
                <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
                  {service.category}
                </span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h1>
              
              <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 fill-current mr-1" />
                  <span className="font-semibold text-gray-900">{service.provider.rating}</span>
                  <span className="ml-1">({service.provider.reviews} reviews)</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-1" />
                  {service.location}
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-1" />
                  {service.duration}
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                {service.description}
              </p>

              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">What's included:</h3>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Skills & Expertise:</h3>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Provider Info */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">About the Provider</h2>
              <div className="flex items-start mb-6">
                <img
                  src={service.provider.avatar}
                  alt={service.provider.name}
                  className="w-20 h-20 rounded-full mr-4"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">{service.provider.name}</h3>
                  <p className="text-gray-600 mb-2">{service.provider.bio}</p>
                  <div className="flex items-center text-sm text-gray-600">
                    <Award className="h-4 w-4 mr-1" />
                    Member since {service.provider.memberSince}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{service.provider.completedJobs}</div>
                  <div className="text-sm text-gray-600">Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{service.provider.rating}</div>
                  <div className="text-sm text-gray-600">Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{service.provider.responseTime}</div>
                  <div className="text-sm text-gray-600">Response</div>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Skills:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.provider.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                to={`/messages?user=${service.provider.name}`}
                className="w-full inline-flex items-center justify-center bg-white border-2 border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary hover:text-white transition-colors"
              >
                <MessageSquare className="h-5 w-5 mr-2" />
                Contact Provider
              </Link>
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Reviews</h2>
              <div className="space-y-6">
                {service.reviews.map((review) => (
                  <div key={review.id} className="border-b border-gray-200 pb-6 last:border-0">
                    <div className="flex items-start mb-3">
                      <img
                        src={review.avatar}
                        alt={review.author}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-semibold text-gray-900">{review.author}</h4>
                          <span className="text-sm text-gray-500">{review.date}</span>
                        </div>
                        <div className="flex items-center mb-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < review.rating
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <p className="text-gray-700">{review.comment}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl font-bold text-gray-900">${service.price}</span>
                  <span className="text-gray-600">/{service.duration}</span>
                </div>
                <p className="text-sm text-gray-600">Per session</p>
              </div>

              <form onSubmit={handleBooking} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Date
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Select Time
                  </label>
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Choose a time</option>
                    <option value="09:00">9:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="15:00">3:00 PM</option>
                    <option value="16:00">4:00 PM</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
                >
                  <Calendar className="inline h-5 w-5 mr-2" />
                  Book Now
                </button>

                <div className="text-center">
                  <p className="text-sm text-gray-600">
                    You won't be charged yet
                  </p>
                </div>
              </form>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3">Payment Options:</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <DollarSign className="h-4 w-4 mr-2 text-green-600" />
                    Pay with cash
                  </li>
                  <li className="flex items-center">
                    <Star className="h-4 w-4 mr-2 text-yellow-600" />
                    Barter with your skills
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

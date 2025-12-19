import { useState } from 'react';
import { MainLayout } from '../layouts/MainLayout';
import { Calendar as CalendarIcon, Clock, User, DollarSign, MapPin, CheckCircle, XCircle } from 'lucide-react';

export const Bookings = () => {
  const [activeTab, setActiveTab] = useState('upcoming');

  const bookings = {
    upcoming: [
      {
        id: 1,
        service: 'Web Development Consultation',
        provider: 'John Doe',
        avatar: 'https://ui-avatars.com/api/?name=John+Doe',
        date: '2025-12-20',
        time: '10:00 AM',
        duration: '60 min',
        price: 75,
        location: 'New York, NY',
        status: 'confirmed',
      },
      {
        id: 2,
        service: 'Logo Design Session',
        provider: 'Jane Smith',
        avatar: 'https://ui-avatars.com/api/?name=Jane+Smith',
        date: '2025-12-21',
        time: '2:00 PM',
        duration: '90 min',
        price: 120,
        location: 'Los Angeles, CA',
        status: 'pending',
      },
    ],
    past: [
      {
        id: 3,
        service: 'SEO Strategy Session',
        provider: 'Mike Johnson',
        avatar: 'https://ui-avatars.com/api/?name=Mike+Johnson',
        date: '2025-12-15',
        time: '11:00 AM',
        duration: '45 min',
        price: 50,
        location: 'Chicago, IL',
        status: 'completed',
      },
      {
        id: 4,
        service: 'Digital Marketing Consultation',
        provider: 'Sarah Williams',
        avatar: 'https://ui-avatars.com/api/?name=Sarah+Williams',
        date: '2025-12-10',
        time: '3:00 PM',
        duration: '120 min',
        price: 100,
        location: 'San Francisco, CA',
        status: 'completed',
      },
    ],
    cancelled: [
      {
        id: 5,
        service: 'Video Editing Tutorial',
        provider: 'David Brown',
        avatar: 'https://ui-avatars.com/api/?name=David+Brown',
        date: '2025-12-12',
        time: '1:00 PM',
        duration: '60 min',
        price: 85,
        location: 'Austin, TX',
        status: 'cancelled',
      },
    ],
  };

  const tabs = [
    { id: 'upcoming', label: 'Upcoming', count: bookings.upcoming.length },
    { id: 'past', label: 'Past', count: bookings.past.length },
    { id: 'cancelled', label: 'Cancelled', count: bookings.cancelled.length },
  ];

  const currentBookings = bookings[activeTab];

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Bookings</h1>
          <p className="text-gray-600 mt-2">Manage your service bookings</p>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-md mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 py-4 px-6 text-center font-medium border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? 'border-primary text-primary'
                      : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
                  }`}
                >
                  {tab.label}
                  <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                    activeTab === tab.id
                      ? 'bg-primary text-white'
                      : 'bg-gray-200 text-gray-700'
                  }`}>
                    {tab.count}
                  </span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Bookings List */}
        {currentBookings.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <CalendarIcon className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No bookings found</h3>
            <p className="text-gray-600 mb-6">
              {activeTab === 'upcoming' && "You don't have any upcoming bookings"}
              {activeTab === 'past' && "You don't have any past bookings"}
              {activeTab === 'cancelled' && "You don't have any cancelled bookings"}
            </p>
            {activeTab === 'upcoming' && (
              <a
                href="/services"
                className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                Browse Services
              </a>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            {currentBookings.map((booking) => (
              <div
                key={booking.id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex items-start mb-4 lg:mb-0">
                    <img
                      src={booking.avatar}
                      alt={booking.provider}
                      className="w-16 h-16 rounded-full mr-4"
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">
                        {booking.service}
                      </h3>
                      <div className="flex items-center text-gray-600 mb-2">
                        <User className="h-4 w-4 mr-2" />
                        {booking.provider}
                      </div>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <CalendarIcon className="h-4 w-4 mr-1" />
                          {booking.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {booking.time} ({booking.duration})
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {booking.location}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-end space-y-3">
                    <div className="text-2xl font-bold text-primary">
                      ${booking.price}
                    </div>
                    <span className={`px-4 py-2 rounded-full text-sm font-medium flex items-center ${
                      booking.status === 'confirmed'
                        ? 'bg-green-100 text-green-800'
                        : booking.status === 'pending'
                        ? 'bg-yellow-100 text-yellow-800'
                        : booking.status === 'completed'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {booking.status === 'confirmed' && <CheckCircle className="h-4 w-4 mr-1" />}
                      {booking.status === 'cancelled' && <XCircle className="h-4 w-4 mr-1" />}
                      {booking.status === 'completed' && <CheckCircle className="h-4 w-4 mr-1" />}
                      {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                    </span>
                    {booking.status === 'upcoming' && (
                      <div className="flex gap-2">
                        <button className="px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
                          Reschedule
                        </button>
                        <button className="px-4 py-2 text-sm border border-red-300 text-red-700 rounded-lg hover:bg-red-50">
                          Cancel
                        </button>
                      </div>
                    )}
                    {booking.status === 'completed' && (
                      <button className="px-4 py-2 text-sm bg-primary text-white rounded-lg hover:bg-primary-700">
                        Leave Review
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </MainLayout>
  );
};

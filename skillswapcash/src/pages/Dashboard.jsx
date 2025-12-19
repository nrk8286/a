import { MainLayout } from '../layouts/MainLayout';
import { 
  TrendingUp, 
  Calendar, 
  DollarSign, 
  Star,
  Clock,
  CheckCircle
} from 'lucide-react';

export const Dashboard = () => {
  const stats = [
    {
      label: 'Total Earnings',
      value: '$2,450',
      change: '+12.5%',
      icon: DollarSign,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      label: 'Active Bookings',
      value: '8',
      change: '+3',
      icon: Calendar,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      label: 'Completed Jobs',
      value: '42',
      change: '+8',
      icon: CheckCircle,
      color: 'text-primary',
      bgColor: 'bg-primary-50',
    },
    {
      label: 'Average Rating',
      value: '4.8',
      change: '+0.2',
      icon: Star,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
    },
  ];

  const upcomingBookings = [
    {
      id: 1,
      service: 'Web Development Consultation',
      client: 'Sarah Johnson',
      date: '2025-12-20',
      time: '10:00 AM',
      price: 75,
      status: 'confirmed',
    },
    {
      id: 2,
      service: 'Logo Design',
      client: 'Mike Chen',
      date: '2025-12-21',
      time: '2:00 PM',
      price: 120,
      status: 'pending',
    },
    {
      id: 3,
      service: 'SEO Strategy Session',
      client: 'Emma Williams',
      date: '2025-12-22',
      time: '11:30 AM',
      price: 90,
      status: 'confirmed',
    },
  ];

  const recentActivity = [
    {
      id: 1,
      type: 'booking',
      message: 'New booking from Sarah Johnson',
      time: '2 hours ago',
    },
    {
      id: 2,
      type: 'payment',
      message: 'Payment received: $120',
      time: '5 hours ago',
    },
    {
      id: 3,
      type: 'review',
      message: 'New 5-star review from Mike Chen',
      time: '1 day ago',
    },
    {
      id: 4,
      type: 'message',
      message: 'New message from Emma Williams',
      time: '2 days ago',
    },
  ];

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-2">Welcome back! Here's what's happening with your services.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                    <Icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <span className="text-sm font-medium text-green-600 flex items-center">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    {stat.change}
                  </span>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Upcoming Bookings */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Upcoming Bookings</h2>
              <a href="/bookings" className="text-sm text-primary hover:text-secondary font-medium">
                View All
              </a>
            </div>
            <div className="space-y-4">
              {upcomingBookings.map((booking) => (
                <div key={booking.id} className="border border-gray-200 rounded-lg p-4 hover:border-primary transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-gray-900">{booking.service}</h3>
                      <p className="text-sm text-gray-600">{booking.client}</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      booking.status === 'confirmed' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {booking.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {booking.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      {booking.time}
                    </div>
                    <div className="font-semibold text-primary">
                      ${booking.price}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h2>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start">
                  <div className={`p-2 rounded-full mr-3 ${
                    activity.type === 'booking' ? 'bg-blue-100' :
                    activity.type === 'payment' ? 'bg-green-100' :
                    activity.type === 'review' ? 'bg-yellow-100' :
                    'bg-purple-100'
                  }`}>
                    {activity.type === 'booking' && <Calendar className="h-4 w-4 text-blue-600" />}
                    {activity.type === 'payment' && <DollarSign className="h-4 w-4 text-green-600" />}
                    {activity.type === 'review' && <Star className="h-4 w-4 text-yellow-600" />}
                    {activity.type === 'message' && <Clock className="h-4 w-4 text-purple-600" />}
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-900">{activity.message}</p>
                    <p className="text-sm text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

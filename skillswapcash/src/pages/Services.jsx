import { useState } from 'react';
import { MainLayout } from '../layouts/MainLayout';
import { Search, Filter, Star, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Services = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  const categories = [
    'All Categories',
    'Web Development',
    'Design',
    'Writing',
    'Marketing',
    'Consulting',
    'Video & Animation',
    'Music & Audio',
  ];

  const services = [
    {
      id: 1,
      title: 'Professional Web Development',
      provider: {
        name: 'John Doe',
        avatar: 'https://ui-avatars.com/api/?name=John+Doe',
        rating: 4.9,
        reviews: 127,
      },
      category: 'Web Development',
      price: 75,
      duration: '60 min',
      location: 'New York, NY',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop',
      description: 'Full-stack web development services for modern applications',
      tags: ['React', 'Node.js', 'MongoDB'],
    },
    {
      id: 2,
      title: 'Brand Identity & Logo Design',
      provider: {
        name: 'Jane Smith',
        avatar: 'https://ui-avatars.com/api/?name=Jane+Smith',
        rating: 5.0,
        reviews: 89,
      },
      category: 'Design',
      price: 120,
      duration: '90 min',
      location: 'Los Angeles, CA',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop',
      description: 'Create stunning brand identities and logos',
      tags: ['Branding', 'Logo', 'Adobe'],
    },
    {
      id: 3,
      title: 'SEO Content Writing',
      provider: {
        name: 'Mike Johnson',
        avatar: 'https://ui-avatars.com/api/?name=Mike+Johnson',
        rating: 4.8,
        reviews: 156,
      },
      category: 'Writing',
      price: 50,
      duration: '45 min',
      location: 'Chicago, IL',
      image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=400&h=300&fit=crop',
      description: 'High-quality SEO-optimized content for your business',
      tags: ['SEO', 'Blog', 'Content'],
    },
    {
      id: 4,
      title: 'Digital Marketing Strategy',
      provider: {
        name: 'Sarah Williams',
        avatar: 'https://ui-avatars.com/api/?name=Sarah+Williams',
        rating: 4.9,
        reviews: 203,
      },
      category: 'Marketing',
      price: 100,
      duration: '120 min',
      location: 'San Francisco, CA',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
      description: 'Comprehensive digital marketing strategies for growth',
      tags: ['Marketing', 'Social Media', 'Analytics'],
    },
    {
      id: 5,
      title: 'Professional Video Editing',
      provider: {
        name: 'David Brown',
        avatar: 'https://ui-avatars.com/api/?name=David+Brown',
        rating: 4.7,
        reviews: 94,
      },
      category: 'Video & Animation',
      price: 85,
      duration: '60 min',
      location: 'Austin, TX',
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=400&h=300&fit=crop',
      description: 'Expert video editing for content creators',
      tags: ['Video', 'Premiere Pro', 'After Effects'],
    },
    {
      id: 6,
      title: 'Business Consulting',
      provider: {
        name: 'Emily Davis',
        avatar: 'https://ui-avatars.com/api/?name=Emily+Davis',
        rating: 4.9,
        reviews: 178,
      },
      category: 'Consulting',
      price: 150,
      duration: '90 min',
      location: 'Boston, MA',
      image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=400&h=300&fit=crop',
      description: 'Strategic business consulting for startups and SMEs',
      tags: ['Strategy', 'Growth', 'Finance'],
    },
  ];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Browse Services</h1>
            <p className="text-gray-600 mt-2">Discover talented professionals</p>
          </div>
          <Link
            to="/services/create"
            className="mt-4 sm:mt-0 bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-lg font-medium hover:shadow-lg transition-all"
          >
            Create Service
          </Link>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search services..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none"
                >
                  {categories.map((category) => (
                    <option key={category} value={category === 'All Categories' ? 'all' : category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing <span className="font-semibold">{filteredServices.length}</span> services
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredServices.map((service) => (
            <Link
              key={service.id}
              to={`/services/${service.id}`}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 overflow-hidden" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
                  {service.description}
                </p>

                {/* Provider Info */}
                <div className="flex items-center mb-4">
                  <img
                    src={service.provider.avatar}
                    alt={service.provider.name}
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">
                      {service.provider.name}
                    </p>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">
                        {service.provider.rating} ({service.provider.reviews})
                      </span>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center text-gray-600 text-sm">
                    <MapPin className="h-4 w-4 mr-1" />
                    {service.location}
                  </div>
                  <div className="text-xl font-bold text-primary">
                    ${service.price}
                    <span className="text-sm text-gray-600 font-normal">/{service.duration}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

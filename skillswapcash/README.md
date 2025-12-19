# SkillSwapCash.com - Peer-to-Peer Skill Marketplace

A modern, full-featured peer-to-peer skill marketplace built with React 18, Vite, and Tailwind CSS. Exchange skills for services or cash in a secure, professional environment.

## 🚀 Features

### Core Functionality
- **Service Marketplace**: Browse and search thousands of professional services
- **Booking System**: Schedule sessions with service providers
- **Barter System**: Exchange skills instead of cash payment
- **Secure Payments**: Integrated Stripe payment processing
- **Reviews & Ratings**: Verified reviews from real users
- **Real-time Messaging**: Communicate with providers and clients
- **User Profiles**: Showcase skills, portfolio, and reviews

### Pages & Components
- **Landing Page**: Hero section, search, featured services grid
- **Authentication**: Login and registration with JWT
- **Dashboard**: Stats, upcoming bookings, recent activity
- **Services Browser**: Advanced filtering and search
- **Service Detail**: Comprehensive service information and booking
- **Create Service**: List your own services
- **Bookings Management**: Track all your bookings (upcoming/past/cancelled)
- **Messages**: 2-column chat interface
- **Profile**: Manage personal info, skills, portfolio, and reviews

## 🛠️ Technology Stack

- **React 18**: Modern React with hooks
- **Vite**: Lightning-fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework
- **React Router**: Client-side routing
- **React Query (@tanstack/react-query)**: Powerful data synchronization
- **Axios**: HTTP client with interceptors
- **Zod**: Schema validation
- **Lucide React**: Beautiful, consistent icons
- **Stripe**: Payment processing (ready for integration)

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn

## 🚀 Getting Started

### Installation

1. Clone the repository:
```bash
git clone https://github.com/nrk8286/a.git
cd a/skillswapcash
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5173
```

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 🎨 Design System

### Color Scheme
- **Primary**: Indigo-600 (`#4f46e5`)
- **Secondary**: Purple-600 (`#9333ea`)
- **Gradients**: Primary to Secondary for CTAs and highlights

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly interface elements
- Fully responsive navigation

### Accessibility
- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support
- Color contrast compliance (WCAG AA)

## 📁 Project Structure

```
skillswapcash/
├── src/
│   ├── components/           # Reusable components
│   │   └── ProtectedRoute.jsx
│   ├── hooks/               # Custom React hooks
│   │   └── useAuth.jsx
│   ├── layouts/             # Layout components
│   │   └── MainLayout.jsx
│   ├── lib/                 # Library configurations
│   │   ├── api.js          # Axios setup with JWT
│   │   ├── queryClient.js  # React Query config
│   │   └── validations.js  # Zod schemas
│   ├── pages/              # Page components
│   │   ├── Landing.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Services.jsx
│   │   ├── ServiceDetail.jsx
│   │   ├── CreateService.jsx
│   │   ├── Bookings.jsx
│   │   ├── Messages.jsx
│   │   └── Profile.jsx
│   ├── App.jsx             # Main app with routes
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── public/                 # Static assets
├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
├── vite.config.js          # Vite configuration
└── package.json            # Dependencies
```

## 🔐 Authentication Flow

The app uses JWT (JSON Web Tokens) for authentication:

1. User logs in via `/login` or registers via `/register`
2. Backend returns JWT token and user data
3. Token is stored in localStorage
4. Axios interceptor adds token to all API requests
5. Protected routes check for valid token
6. Token refresh on 401 responses

## 🌐 API Integration

The app is configured to connect to:
```
https://skillswapcash.com/api/v1
```

### API Endpoints (Expected)
- `POST /auth/login` - User login
- `POST /auth/register` - User registration
- `GET /services` - List services
- `GET /services/:id` - Get service details
- `POST /services` - Create service
- `GET /bookings` - List user bookings
- `POST /bookings` - Create booking
- `GET /messages` - Get messages
- `POST /messages` - Send message
- `GET /profile` - Get user profile
- `PUT /profile` - Update profile

## 💳 Stripe Integration

The app is ready for Stripe integration:

1. Add your Stripe publishable key to environment variables
2. The booking flow includes payment processing hooks
3. Stripe Elements can be integrated in the booking flow

## 🧪 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_BASE_URL=https://skillswapcash.com/api/v1
VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key
```

## 📱 Mobile Support

The application is fully responsive and optimized for:
- iOS Safari
- Android Chrome
- Desktop browsers (Chrome, Firefox, Safari, Edge)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Lucide for the beautiful icon set
- Unsplash for placeholder images

## 📞 Support

For support, email support@skillswapcash.com or open an issue in the repository.

---

Built with ❤️ by the SkillSwapCash Team


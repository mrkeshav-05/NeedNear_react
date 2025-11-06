# NeedNear - Service Booking Platform

A modern, responsive web application built with React and Vite that connects users with local service providers. NeedNear offers a seamless booking experience with an intuitive interface and smooth animations.

## 📋 Description

NeedNear is a comprehensive service booking platform designed to bridge the gap between service providers and customers. The application features a beautiful, user-friendly interface that allows users to browse various services, view portfolios, book appointments, and make payments securely.

### Key Features

- 🎨 **Modern UI/UX** - Built with React and styled using Tailwind CSS for a sleek, responsive design
- 🔐 **Authentication** - Secure user authentication powered by Auth0
- 🎠 **Interactive Carousel** - Dynamic service showcases with smooth transitions
- 💳 **Payment Integration** - Integrated UPI payment system for seamless transactions
- 📱 **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- ⚡ **Fast Performance** - Powered by Vite for lightning-fast development and builds
- 🎭 **Smooth Animations** - Enhanced user experience with Framer Motion
- 📧 **Contact System** - Easy-to-use contact forms for customer inquiries
- 🗓️ **Slot Booking** - Convenient appointment scheduling system
- 👥 **Team Showcase** - Meet the team behind the platform

## 🛠️ Technologies Used

### Frontend
- **React 18** - Modern React with hooks
- **React Router DOM** - Client-side routing
- **Vite** - Next-generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React

### UI Components & Styling
- **Radix UI** - Accessible component primitives
- **Bootstrap 5** - Additional styling components
- **React Icons** - Comprehensive icon library
- **PostCSS** - CSS transformation tool

### Authentication & API
- **Auth0 React** - Authentication and authorization
- **Axios** - HTTP client for API requests

### Development Tools
- **ESLint** - Code linting and quality
- **Autoprefixer** - CSS vendor prefixing

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/mrkeshav-05/NeedNear_react.git
cd NeedNear_react
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory and add your configuration:
```env
VITE_AUTH0_DOMAIN=your_auth0_domain
VITE_AUTH0_CLIENT_ID=your_auth0_client_id
VITE_API_BASE_URL=your_api_base_url
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173`

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 📂 Project Structure

```
NeedNear_react/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images, icons, and media files
│   │   ├── carousel_assets/
│   │   ├── images/
│   │   └── teampics/
│   ├── components/        # React components
│   │   ├── About.jsx
│   │   ├── cards.jsx
│   │   ├── Contact.jsx
│   │   ├── Crousal.jsx
│   │   ├── Footer.jsx
│   │   ├── Home.jsx
│   │   ├── horizontal_slider.jsx
│   │   ├── Layout.jsx
│   │   ├── Login.jsx
│   │   ├── Navbar.jsx
│   │   ├── Payment.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Services.jsx
│   │   ├── Signup.jsx
│   │   └── Slot.jsx
│   ├── sections/          # Page sections
│   │   ├── Service.jsx
│   │   └── Upi.jsx
│   ├── services/          # API services and helpers
│   │   ├── Helper.js
│   │   └── user-service.js
│   ├── index.css          # Global styles
│   └── main.jsx           # Application entry point
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎨 Features Overview

### Home Page
- Eye-catching carousel showcasing featured services
- Horizontal slider for service categories
- Service cards with hover effects
- Quick access to booking system

### Services
- Comprehensive service catalog
- Detailed service descriptions
- Visual service gallery
- Direct booking links

### About Us
- Company mission and vision
- Team member profiles
- Achievement highlights
- Company values and culture

### Portfolio
- Showcase of completed projects
- Client testimonials
- Success stories
- Visual gallery

### Booking System
- Interactive slot selection
- Real-time availability
- Confirmation notifications
- Easy rescheduling

### Payment
- Secure UPI integration
- Multiple payment options
- Transaction history
- Payment confirmation

## 📸 Screenshots

### Home Page
<img width="1435" height="807" alt="image" src="https://github.com/user-attachments/assets/1832877b-e76b-4ea4-bf1a-ff49245a10d0" />


### Services
<img width="1440" height="808" alt="image" src="https://github.com/user-attachments/assets/e7d79c75-61e3-4d65-ab86-12a936eb7363" />


### About Us
<img width="1397" height="711" alt="image" src="https://github.com/user-attachments/assets/8e8245d3-276b-48cf-b885-b693aa52d367" />

### Contact Us
<img width="1437" height="520" alt="image" src="https://github.com/user-attachments/assets/21cea265-7472-45aa-a808-4d7f836b0e68" />


### Booking
<img width="1440" height="716" alt="image" src="https://github.com/user-attachments/assets/b2455c31-9a8d-4e1f-bacd-0f8582488d4e" />
<img width="1435" height="675" alt="image" src="https://github.com/user-attachments/assets/f3e8aaa0-84b8-40bc-be65-771035f6e050" />


### Payment
<img width="1156" height="531" alt="image" src="https://github.com/user-attachments/assets/d2522bbc-7519-4def-8598-bb1afb86b19d" />
<img width="884" height="549" alt="image" src="https://github.com/user-attachments/assets/56ee6072-bf72-4d0b-9cab-2bac61332c0f" />


## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**Keshav Thakur**
- GitHub: [@mrkeshav-05](https://github.com/mrkeshav-05)

## 🙏 Acknowledgments

- React team for the amazing framework
- Vite team for the blazing fast build tool
- Tailwind CSS for the utility-first CSS framework
- Auth0 for authentication services
- All contributors who have helped shape this project

## 📞 Contact

For any queries or support, please reach out through the contact form on the website or open an issue on GitHub.

---

Made with ❤️ by Keshav Thakur

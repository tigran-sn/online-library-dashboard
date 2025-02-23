# 📚 Library Admin Dashboard

A modern admin dashboard for library management built with Angular 19 and Material Design. This application provides a comprehensive interface for managing users, products/books, and persons with advanced features like authentication, real-time updates, and responsive design.

## 🚀 Features

### Authentication & Security
- 🔐 Token-based authentication
- 🛡️ Route guards for protected pages
- 🔄 Auto-logout on token expiration
- 📱 Responsive login interface

### Dashboard
- 📊 Real-time statistics
- 📈 Key metrics visualization
- 🎯 Quick action buttons
- 💫 Animated data updates

### User Management
- 👥 CRUD operations for users
- 📝 Form validation
- 🔍 Search functionality
- ⚡ Real-time updates
- ✅ Confirmation dialogs

### Products/Books Management
- 📚 Card-based layout
- 🔄 Load more functionality
- ⬆️ Sorting capabilities
- 🖼️ Image display
- 📱 Responsive grid

### Person Management
- 👤 Table view with pagination
- 🔍 Advanced search
- ⬆️ Column sorting
- 📱 Mobile-friendly display

## 🛠️ Technical Stack

- **Framework**: Angular 19
- **UI Library**: Angular Material
- **State Management**: Signals
- **Styling**: SCSS
- **HTTP Client**: Angular HTTP
- **Routing**: Angular Router
- **Authentication**: JWT
- **Code Style**: ESLint & Prettier

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)
- Angular CLI (v19)

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/library-admin.git
   cd library-admin
   
2. **Install dependencies**
   ```bash
   npm install
3. **Start development server**
   ```bash
   ng serve
4. **Start development server**
   ```bash
   ng build --configuration production

## 🔑 API Integration

### Authentication API (ReqRes)

#### Login
```typescript
POST https://reqres.in/api/login
Content-Type: application/json

{
 "email": "eve.holt@reqres.in",
 "password": "cityslicka"
}
// Note: correct username accepts any password

// Response
{
 "token": [TOKEN]
}
```

## 📱 Responsive Design

### Layout Breakpoints

- 💻 Desktop (1200px+)
 - Full sidebar navigation
 - Grid layout: 4 columns for products
 - Full table view
 - Expanded dashboard widgets

- 💻 Laptop (992px-1199px)
 - Collapsible sidebar
 - Grid layout: 3 columns
 - Scrollable tables
 - Adaptable dashboard layout

- 📱 Tablet (768px-991px)
 - Collapsed sidebar with overlay
 - Grid layout: 2 columns
 - Responsive tables
 - Stacked dashboard widgets

- 📱 Mobile (< 768px)
 - Hidden sidebar with hamburger menu
 - Single column layout
 - Card view for tables
 - Full-width dashboard widgets

### Component Adaptations

#### Tables
- Desktop: Full table view
- Tablet: Horizontal scroll
- Mobile: Card layout with stacked data

#### Forms
- Desktop: Multi-column layout
- Mobile: Single column, full-width inputs

#### Navigation
- Desktop: Fixed sidebar
- Mobile: Overlay menu with gesture support

#### Dashboard
- Desktop: 4-column grid
- Tablet: 2-column grid
- Mobile: Single column stack

## 🔧 Development

### Code Style
```bash
# Install dependencies
npm install
```

# Lint code
  ```bash
  npm run lint
  ```

# Format code
npm run format

# Check types
npm run type-check

## 🤝 Contributing

### Getting Started
1. Fork the repository
2. Create your feature branch
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. Commit your changes
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. Push to the branch
   ```bash
   git push origin feature/AmazingFeature
   ```
5. Open a Pull Request

## 📄 License

### MIT License

Copyright (c) 2024 Your Name

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## 📞 Support

### Getting Help

- 📧 Email: soghomonyantigran@gmail.com
- 🐛 Issues: [GitHub Issues](https://github.com/yourusername/library-admin/issues)

### FAQ

1. **How do I report a bug?**
  - Create a new issue on GitHub
  - Use the bug report template
  - Include steps to reproduce

2. **How can I request a feature?**
  - Create a new issue on GitHub
  - Use the feature request template
  - Explain the use case

3. **Where can I find documentation?**
  - Check the `/docs` directory
  - Visit our wiki page
  - Read inline code comments

## ✨ Credits

### Core Team
- 👤 **Tigran Soghomonyan** - [@tigran-sn](https://github.com/tigran-sn)

### Contributors
- 👥 List of [contributors](https://github.com/yourusername/library-admin/contributors) who participated in this project

### Built With
- [Angular](https://angular.dev/) - The web framework used
- [Angular Material](https://material.angular.io/) - UI Component library
- [ReqRes](https://reqres.in/) - Testing API
- [Faker API](https://fakerapi.it/) - Mock data provider

### Acknowledgments
- Hat tip to anyone whose code was used
- Angular team for the amazing framework
- Material Design team for the components
- All open source contributors

### Inspiration
- Modern dashboard designs
- Material Design principles
- User feedback and suggestions

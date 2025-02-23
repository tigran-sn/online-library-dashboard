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

// Response
{
 "token": [TOKEN]
}


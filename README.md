# React Booking App

A modern, accessible React application for managing appointment bookings with form validation and real-time booking display.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Available Scripts](#available-scripts)
- [Testing](#testing)
- [Project Structure](#project-structure)
- [Building for Production](#building-for-production)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

This React Booking App is a user-friendly application that allows users to book appointments by filling out a simple form. The app features robust validation to ensure data integrity and accessibility features for an inclusive user experience.

Built as part of the Meta Front-End Developer Capstone project, this application demonstrates modern React development practices, component architecture, form handling, and comprehensive testing.

## ✨ Features

- **Interactive Booking Form**: Easy-to-use form for creating new bookings
- **Real-time Validation**: 
  - All fields are required
  - Date validation (must be in the future)
  - Immediate error feedback
- **Booking Management**: View all submitted bookings in an organized list
- **Accessibility**: ARIA labels and semantic HTML for screen reader compatibility
- **Responsive Design**: Works seamlessly across different screen sizes
- **Form State Management**: Efficient state handling with React hooks
- **Unit Testing**: Comprehensive test coverage with Jest and React Testing Library

## 🛠 Tech Stack

- **React** 19.2.0 - UI library for building component-based interfaces
- **React Scripts** 5.0.1 - Build tooling and development server
- **JavaScript (ES6+)** - Modern JavaScript features
- **CSS3** - Styling
- **Jest** - Testing framework
- **React Testing Library** - Component testing utilities
- **Create React App** - Project bootstrapping and configuration

## 📦 Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 14.0 or higher)
- **npm** (version 6.0 or higher) or **yarn** (version 1.22 or higher)

To check if you have Node.js and npm installed, run:

```bash
node --version
npm --version
```

## 🚀 Installation

Follow these steps to set up the project locally:

1. **Clone the repository**

```bash
git clone <your-repository-url>
cd meta-fe-capstone-react
```

2. **Install dependencies**

Using npm:
```bash
npm install
```

Or using yarn:
```bash
yarn install
```

This will install all the required packages listed in `package.json`, including:
- React and React DOM
- Testing libraries
- Web Vitals for performance monitoring
- All development dependencies

## 🏃 Running the Project

### Development Mode

To start the development server:

```bash
npm start
```

Or with yarn:
```bash
yarn start
```

This will:
- Start the development server
- Open [http://localhost:3000](http://localhost:3000) in your default browser
- Enable hot-reloading (the page automatically reloads when you make changes)
- Display lint errors in the console

The app will automatically reload if you make changes to the code.

## 📜 Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.  
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes. You may also see any lint errors in the console.

### `npm test`

Launches the test runner in interactive watch mode.  
Tests will automatically re-run when you make changes.

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.  
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is:
- Minified for smaller file sizes
- Optimized for best performance
- File names include hashes for cache busting
- Ready to be deployed

### `npm run eject`

**Warning: this is a one-way operation. Once you `eject`, you can't go back!**

If you need full control over the build configuration, you can `eject` at any time. This command will copy all configuration files and dependencies into your project.

**Note:** You don't need to use `eject` for most projects. The default configuration is suitable for most use cases.

## 🧪 Testing

This project uses Jest and React Testing Library for unit and integration testing.

### Running Tests

Run all tests:
```bash
npm test
```

Run tests with coverage report:
```bash
npm test -- --coverage
```

Run tests in CI mode (non-interactive):
```bash
npm test -- --watchAll=false
```

### Test Files

Test files are located in:
- `src/__tests__/` - Component tests
- Files with `.test.js` or `.spec.js` extensions

Example test structure:
```javascript
import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "../components/BookingForm";

test("renders booking form correctly", () => {
    render(<BookingForm />);
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
});
```

## 📁 Project Structure

```
meta-fe-capstone-react/
├── public/                  # Static files
│   ├── favicon.ico         # App favicon
│   ├── index.html          # HTML template
│   ├── logo192.png         # App logo (small)
│   ├── logo512.png         # App logo (large)
│   ├── manifest.json       # PWA manifest
│   └── robots.txt          # Search engine instructions
│
├── src/                    # Source files
│   ├── components/         # React components
│   │   ├── Header.js       # App header component
│   │   ├── Footer.js       # App footer component
│   │   ├── BookingForm.js  # Booking form with validation
│   │   └── BookingList.js  # Display list of bookings
│   │
│   ├── utils/              # Utility functions
│   │   └── validators.js   # Form validation logic
│   │
│   ├── __tests__/          # Test files
│   │   └── BookingForm.test.js
│   │
│   ├── App.js              # Main App component
│   ├── App.css             # App-specific styles
│   ├── index.js            # Entry point
│   ├── index.css           # Global styles
│   ├── App.test.js         # App component tests
│   ├── setupTests.js       # Test configuration
│   └── reportWebVitals.js  # Performance monitoring
│
├── package.json            # Project dependencies and scripts
├── package-lock.json       # Locked dependency versions
└── README.md              # This file
```

## 🏗 Building for Production

To create an optimized production build:

```bash
npm run build
```

This creates a `build` folder with:
- Minified and optimized JavaScript bundles
- Optimized CSS files
- Compressed assets
- Production-ready HTML

The build folder is ready to be deployed to any static hosting service.

### Performance Optimization

The production build includes:
- Code splitting for faster load times
- Tree shaking to remove unused code
- Minification and compression
- Cache optimization with content hashes

## 🚀 Deployment

The app can be deployed to various platforms:

### Deploy to Netlify

```bash
npm run build
# Drag and drop the build folder to Netlify
```

Or use Netlify CLI:
```bash
netlify deploy --prod --dir=build
```

### Deploy to Vercel

```bash
npm install -g vercel
vercel --prod
```

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to package.json:
```json
"homepage": "https://yourusername.github.io/your-repo-name",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

3. Deploy:
```bash
npm run deploy
```

### Other Deployment Options

- **AWS S3 + CloudFront**
- **Firebase Hosting**
- **Heroku**
- **Surge**

See [Create React App deployment documentation](https://facebook.github.io/create-react-app/docs/deployment) for detailed instructions.

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please ensure your code:
- Follows the existing code style
- Includes appropriate tests
- Updates documentation as needed

## 📝 License

This project is part of the Meta Front-End Developer Capstone program.

## 🔗 Additional Resources

- [Create React App Documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React Documentation](https://react.dev/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Jest Documentation](https://jestjs.io/)

## 🐛 Troubleshooting

### Common Issues

**Issue: `npm start` doesn't open the browser**
- Solution: Manually open [http://localhost:3000](http://localhost:3000)

**Issue: Port 3000 is already in use**
- Solution: Kill the process using port 3000 or set a different port:
```bash
PORT=3001 npm start
```

**Issue: Module not found errors**
- Solution: Delete `node_modules` and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

**Issue: Tests fail unexpectedly**
- Solution: Clear Jest cache:
```bash
npm test -- --clearCache
```

## 📧 Support

For questions or issues, please open an issue in the GitHub repository.

---

**Built with ❤️ using React**

# CRUD User Management Application

A modern user management application built with React and Vite, featuring Create, Read, Update, and Delete operations with local storage persistence.

## 🚀 Features

- **Create User**: Add new users with name, email, and profile picture
- **Read Users**: View all users in a responsive table/list
- **Update User**: Edit existing user information
- **Delete User**: Remove users from the system
- **Local Storage**: Data persists in browser's local storage
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Dark/Light Theme**: Toggle between light and dark modes
- **Image Upload**: Upload and display user profile pictures
- **User Details View**: Detailed view for each user
- **Form Validation**: Client-side validation for user inputs
- **Error Handling**: Proper error handling and user feedback

## 🛠️ Technologies Used

- React 19
- Vite 7.2.4 (build tool)
- Tailwind CSS 4.1.18 (styling)
- JavaScript (ES6+)
- Local Storage API
- React Router DOM
- Heroicons (for UI icons)

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your system:

- Node.js (version 18 or higher)
- npm package manager (comes with Node.js)

## 📦 Installation

Follow these steps to set up the project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/m-sharique-sabir/crud-user.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd crud-user
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

5. **Open your browser** and visit the URL shown in the terminal (usually http://localhost:5173)

## 🧪 Running Tests

This project uses Vite's testing capabilities. To run tests:

```bash
npm run test
```

## 🚀 Building for Production

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── assets/
│   ├── m-sharique-sabir.jpeg
│   └── react.svg
├── components/
│   ├── users/
│   │   ├── AddUser.jsx
│   │   ├── EditUser.jsx
│   │   ├── UserDetails.jsx
│   │   └── UserList.jsx
│   ├── DeveloperBanner.jsx
│   ├── Footer.jsx
│   ├── Home.jsx
│   └── ThemeToggle.jsx
├── context/
│   ├── ThemeContext.jsx
│   └── UserContext.jsx
├── services/
│   └── localStorageService.js
├── utils/
│   └── imageUtils.js
├── App.jsx
├── index.css
└── main.jsx
```

## 📝 API Reference

This application uses browser's local storage for data persistence. No external API is required.

## 💡 Usage

1. **Add User**: Click the "Add User" button to create a new user
2. **View Users**: All users are displayed in the main dashboard
3. **Edit User**: Click the edit icon next to any user to modify their details
4. **Delete User**: Click the delete icon to remove a user (with confirmation)
5. **View Details**: Click on any user to see their detailed information
6. **Theme Toggle**: Use the theme toggle in the header to switch between light/dark modes

## 🔧 Environment Variables

No environment variables are required for this project.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 🐛 Bug Reports and Feature Requests

If you find any bugs or have feature requests, please create an issue in the GitHub repository.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Developer Information

**Developer Name:** Mohammad Sharique Sabir  
**Developer Email:** mohammadsharique2409950@gmail.com  
**LinkedIn:** https://www.linkedin.com/in/m-sharique-sabir/  
**Developer WhatsApp:** +92 339 2409950

## 🙏 Acknowledgements

- React Team for the amazing React library
- Vite Team for the fast build tool
- Tailwind CSS for the utility-first CSS framework
- All open-source contributors whose libraries power this project

## 📞 Support

If you need help with the application, feel free to contact the developer at the email or WhatsApp number provided above.
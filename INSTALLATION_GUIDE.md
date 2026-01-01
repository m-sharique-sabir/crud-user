# Installation Guide - CRUD User Management Application

## System Requirements

### Minimum Requirements
- **Operating System:** Windows 10/11, macOS 10.14+, or Linux (Ubuntu 18.04+)
- **Node.js:** Version 16.0 or higher
- **RAM:** 4GB minimum, 8GB recommended
- **Storage:** 500MB free space
- **Browser:** Chrome 90+, Firefox 88+, Safari 14+, or Edge 90+

### Recommended Development Environment
- **Node.js:** Latest LTS version (18.x or higher)
- **Package Manager:** npm (comes with Node.js) or Yarn
- **Code Editor:** Visual Studio Code with React extensions
- **Git:** Latest version for version control

## Step-by-Step Installation

### Step 1: Install Node.js

#### Windows:
1. **Download Node.js** from [nodejs.org](https://nodejs.org/)
2. **Choose the LTS version** (recommended for most users)
3. **Run the installer** and follow the setup wizard
4. **Verify installation:**
   ```cmd
   node --version
   npm --version
   ```

#### macOS:
```bash
# Using Homebrew (recommended)
brew install node

# Or download from nodejs.org
```

#### Linux (Ubuntu/Debian):
```bash
# Update package index
sudo apt update

# Install Node.js and npm
sudo apt install nodejs npm

# Verify installation
node --version
npm --version
```

### Step 2: Clone the Repository

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/crud-user-management.git

# Navigate to project directory
cd crud-user-management
```

### Step 3: Install Dependencies

```bash
# Install project dependencies
npm install

# Or if you prefer Yarn
yarn install
```

**Expected Output:**
```
added 1234 packages in 15s
```

### Step 4: Start Development Server

```bash
# Start the development server
npm run dev

# Or with Yarn
yarn dev
```

**Expected Output:**
```
  VITE v4.x.x  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

### Step 5: Open in Browser

1. **Open your web browser**
2. **Navigate to:** `http://localhost:5173`
3. **You should see the CRUD User Management Application**

## Alternative Installation Methods

### Using Yarn Instead of npm

```bash
# Install Yarn globally (if not already installed)
npm install -g yarn

# Clone and setup project
git clone https://github.com/YOUR_USERNAME/crud-user-management.git
cd crud-user-management
yarn install
yarn dev
```

### Using pnpm (Faster Package Manager)

```bash
# Install pnpm globally
npm install -g pnpm

# Clone and setup project
git clone https://github.com/YOUR_USERNAME/crud-user-management.git
cd crud-user-management
pnpm install
pnpm dev
```

## Development Setup

### VS Code Extensions (Recommended)
Install these extensions for better development experience:
- **ES7+ React/Redux/React-Native snippets**
- **Prettier - Code formatter**
- **ESLint**
- **Auto Rename Tag**
- **Bracket Pair Colorizer**
- **Tailwind CSS IntelliSense**

### Environment Configuration

Create a `.env.local` file in the project root (optional):

```env
# Development environment variables
VITE_APP_TITLE=CRUD User Management
VITE_APP_VERSION=1.0.0
VITE_API_BASE_URL=http://localhost:5173
```

## Building for Production

### Create Production Build

```bash
# Build for production
npm run build

# Or with Yarn
yarn build
```

**Output:** Creates `dist/` folder with optimized files

### Preview Production Build

```bash
# Preview production build locally
npm run preview

# Or with Yarn
yarn preview
```

### Deploy to Web Server

1. **Upload `dist/` folder contents** to your web server
2. **Configure server** to serve `index.html` for all routes
3. **Access your application** via your domain

## Deployment Options

### Option 1: GitHub Pages

1. **Enable GitHub Pages** in repository settings
2. **Select source:** Deploy from a branch
3. **Choose branch:** main
4. **Your site will be available at:** `https://YOUR_USERNAME.github.io/crud-user-management`

### Option 2: Netlify

1. **Connect your GitHub repository** to Netlify
2. **Build settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`
3. **Deploy automatically** on every push

### Option 3: Vercel

1. **Import project** from GitHub
2. **Framework preset:** Vite
3. **Deploy automatically** with custom domain support

### Option 4: Traditional Web Hosting

1. **Run build command:** `npm run build`
2. **Upload `dist/` folder** contents via FTP/SFTP
3. **Configure server** for single-page application routing

## Troubleshooting

### Common Issues and Solutions

#### Issue: "Node.js version not supported"
```bash
# Check Node.js version
node --version

# Update Node.js to latest LTS version
# Download from nodejs.org or use nvm
```

#### Issue: "Permission denied" during npm install
```bash
# Fix npm permissions
sudo chown -R $(whoami) ~/.npm
npm cache clean --force
npm install
```

#### Issue: "Port 5173 already in use"
```bash
# Kill process using the port
npx kill-port 5173

# Or start on different port
npm run dev -- --port 3000
```

#### Issue: "Module not found" errors
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### Issue: Build fails with memory errors
```bash
# Increase Node.js memory limit
export NODE_OPTIONS="--max-old-space-size=4096"
npm run build
```

### Performance Optimization

#### For Development:
```bash
# Enable fast refresh
npm run dev -- --fast-refresh

# Use React DevTools browser extension
```

#### For Production:
```bash
# Analyze bundle size
npm install -g webpack-bundle-analyzer
npm run build
npx webpack-bundle-analyzer dist/assets/*.js
```

## Verification Steps

After installation, verify everything works:

1. **Application loads** without errors
2. **Add User** functionality works
3. **Edit User** functionality works
4. **Delete User** functionality works
5. **Theme toggle** works
6. **Responsive design** works on mobile
7. **Local storage** persists data

## Support and Help

If you encounter issues:

1. **Check the console** for error messages
2. **Verify Node.js version** is 16+
3. **Clear browser cache** and reload
4. **Restart development server**
5. **Contact developer:** mohammadsharique2409950@gmail.com
6. **WhatsApp:** +92 339 2409950

## Next Steps

After successful installation:

1. **Explore the application** features
2. **Review the code** structure
3. **Customize** as needed for your use case
4. **Deploy** to production environment
5. **Share feedback** with the developer

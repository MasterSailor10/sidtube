# 🎬 SidTube - YouTube Clone

A fully functional YouTube clone built with React and Vite, featuring a modern UI, real-time search, video playback, and a complete watch page experience.

## 🌟 Live Demo

**[View Live Site](https://sidtube.vercel.app/)** ← Replace with your actual Vercel URL

## ✨ Features

### 🎥 Video Browsing
- Grid layout with video thumbnails
- Hover effects with play button overlay
- Channel avatars and metadata (views, upload time)
- Smooth animations and transitions

### 🔍 Search Functionality
- **Real-time search** - Results update as you type
- Search by video title or channel name
- Instant filtering with no delays

### 🎬 Watch Page
- Full-width video player with YouTube embed
- Channel information with subscriber count
- Interactive buttons (Like, Share, Download)
- Video description with "Show more/less" toggle
- Comments section UI
- Suggested videos sidebar with thumbnails

### 🌓 Theme Toggle
- Dark mode (default)
- Light mode
- Smooth theme transitions
- Persistent across pages

### 📱 Responsive Design
- Mobile-friendly layout
- Collapsible sidebar
- Adaptive video grid (1-4 columns based on screen size)
- Touch-optimized controls

### ⏰ Additional Features
- Live clock on welcome banner
- Subscribe/Unsubscribe toggle
- Like button with state management
- Smooth page transitions
- YouTube-style UI elements

## 🛠️ Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Custom styling (no frameworks)
- **Font Awesome** - Icons
- **YouTube Embed API** - Video playback

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Steps

1. **Clone the repository**

git clone https://github.com/MasterSailor10/sidtube.git
cd sidtube

2. **Install dependencies**

npm install


3. **Run development server**

npm run dev


4. **Open in browser**

http://localhost:5173


## 📁 Project Structure

sidtube-app/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   ├── App.jsx          # Main component
│   ├── App.css          # All styles
│   ├── index.css        # Global styles
│   └── main.jsx         # Entry point
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md


## 🎨 Features Breakdown

### Home Page
- Welcome banner with live clock
- Subscribe button
- Video grid with 12 sample videos
- Sidebar navigation
- Search bar

### Watch Page
- Large video player
- Video title and metadata
- Channel info section
- Action buttons (Like, Dislike, Share, Download)
- Description box
- Comments section
- Suggested videos (right sidebar)

### Navigation
- Collapsible sidebar
- Home, Shorts, Subscriptions
- Library, History, Watch Later
- Explore section (Trending, Music, Gaming, etc.)
- Settings and Help

## 🚀 Deployment

### Deploy to Vercel (Recommended)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click "Deploy"
5. Done! ✅

### Deploy to Netlify
1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Import repository
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Deploy!

### Deploy to GitHub Pages

npm install --save-dev gh-pages


Add to `package.json`:

"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}


Update `vite.config.js`:

export default defineConfig({
  base: '/sidtube/'
})


Deploy:

npm run deploy


## 📸 Screenshots

### Home Page
![Home Page]
![Uploading image.png…]()


### Watch Page
![Watch Page](https://via.placeholder.com/800x400?text=Add+your+screenshot+here)

### Mobile View
![Mobile View](https://via.placeholder.com/400x800?text=Add+your+screenshot+here)

## 🎯 Key Functionalities

| Feature | Description |
|---------|-------------|
| Video Grid | Responsive grid with 1-4 columns |
| Real-time Search | Filters videos as you type |
| Watch Page | Full video player with metadata |
| Theme Toggle | Switch between dark/light modes |
| Sidebar | Collapsible navigation menu |
| Subscribe Button | Toggle subscription state |
| Like Button | Toggle like state with count |
| Suggested Videos | Show related content |

## 🔧 Configuration

### Add Your Own Videos

Edit the `videoData` array in `App.jsx`:


{
  id: 13,
  videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
  thumbnail: "https://i.ytimg.com/vi/YOUR_VIDEO_ID/hqdefault.jpg",
  title: "Your Video Title",
  channel: "Your Channel Name",
  views: "1M",
  time: "2 days ago",
  likes: "50K",
  subscribers: "2M",
  description: "Your video description",
  avatar: "your-avatar-url.jpg"
}


### Customize Theme Colors

Edit `App.css`:


/* Dark theme colors */
.dark-theme {
  background-color: #0f0f0f;
  color: #fff;
}

/* Light theme colors */
.light-theme {
  background-color: #fff;
  color: #0f0f0f;
}


## 🐛 Known Issues

- Video embeds require internet connection
- Some videos may have embedding restrictions
- Comments section is UI-only (no backend)

## 🚧 Future Enhancements

- [ ] User authentication
- [ ] Real backend with database
- [ ] Actual comment functionality
- [ ] Video upload feature
- [ ] Playlists
- [ ] Notifications
- [ ] Advanced search filters
- [ ] Video recommendations algorithm
- [ ] Channel pages
- [ ] Watch history tracking

## 📝 License

MIT License

Copyright (c) 2025 [Your Name]

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

## 👨‍💻 Author

**Your Name**
- GitHub: [@YOUR_USERNAME](https://github.com/YOUR_USERNAME)
- LinkedIn: [Your Profile](https://linkedin.com/in/yourprofile)
- Twitter: [@yourhandle](https://twitter.com/yourhandle)

## 🙏 Acknowledgments

- YouTube for design inspiration
- React community for excellent documentation
- Vite for blazing fast development experience
- Font Awesome for beautiful icons

## 💬 Contact

Have questions or suggestions? Feel free to:
- Open an issue on GitHub
- Reach out on social media
- Submit a pull request

---

**⭐ If you found this project helpful, please give it a star!** ⭐

Made with ❤️ by Siddhartha Singh

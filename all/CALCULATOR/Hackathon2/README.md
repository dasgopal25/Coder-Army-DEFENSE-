# 🚀 CoderStrike - Premium Online Courses Platform

![CoderStrike Banner](https://img.shields.io/badge/CoderStrike-Learning%20Platform-orange?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)


A modern, responsive online learning platform showcasing premium courses in Web Development, System Design, and Data Structures & Algorithms. Built with pure HTML, CSS with stunning animations and interactive UI elements.

## ✨ Features

- 🎨 **Modern UI/Design** - Gradient color scheme inspired by Indian tricolor
- 🔄 **Interactive Course Cards** - 3D flip animations on hover
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- 🎬 **Video Integration** - Autoplay promotional video section
- 💬 **Contact Form** - Easy-to-use contact interface
- 🌐 **Social Media Links** - Quick access to social platforms
- ⚡ **Smooth Animations** - CSS-based animations throughout the site
- 🎯 **Navigation** - Fixed navbar with smooth scrolling

## 🎓 Course Offerings

1. **MERN Stack Web Development**
   - 45 Lectures | 20 Hours
   - Frontend & Backend Development
   - Real-world Projects

2. **High-Level Design (System Design)**
   - 38 Lectures | 25 Hours
   - Scalability & Architecture
   - Industry Case Studies

3. **Data Structures & Algorithms**
   - 42 Lectures | 18 Hours
   - 500+ Practice Problems
   - FAANG Interview Preparation

## 📁 Project Structure

```
coderstrike/
│
├── index.html          # Main HTML file
├── style3.css          # Stylesheet
├── README.md           # Project documentation
│
├── images/
│   ├── web.png        # Web Development course image
│   ├── HLD.png        # System Design course image
│   ├── DSA.png        # DSA course image
│   └── content.png    # Contact section image
│
└── video/
    └── video.mp4      # Promotional video
```

## 🛠️ Setup Instructions

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- VS Code or any code editor
- Basic understanding of HTML/CSS/JavaScript (for customization)

### Installation Steps

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/coderstrike.git
   cd coderstrike
   ```

2. **Open in VS Code**
   ```bash
   code .
   ```

3. **Add Required Assets**
   
   Create an `images` folder and add the following images:
   - `web.png` - Web development course image
   - `HLD.png` - High-level design course image
   - `DSA.png` - Data structures & algorithms image
   - `content.png` - Contact section illustration
   
   Create a `video` folder and add:
   - `video.mp4` - Promotional video

4. **Update Image Paths**
   
   If your folder structure differs, update the image paths in `index.html`:
   ```html
   <img src="your-path/web.png" alt="" class="course-image">
   ```

5. **Launch the Website**
   
   **Option A: Using Live Server (Recommended)**
   - Install "Live Server" extension in VS Code
   - Right-click on `index.html`
   - Select "Open with Live Server"
   
   **Option B: Direct File Opening**
   - Double-click `index.html` to open in your default browser
   
   **Option C: Using Python Server**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Then visit: http://localhost:8000
   ```

## 🎨 Customization Guide

### Color Scheme

The project uses CSS variables for easy theming. Edit in `style3.css`:

```css
:root {
    --saffron: #FF9933;     /* Primary orange */
    --white: #FFFFFF;        /* White */
    --green: #138808;        /* Primary green */
    --navy: #000080;         /* Navy blue */
    --dark-bg: #0a0a0a;     /* Dark background */
    --text-light: #f5f5f5;  /* Light text */
}
```

### Navigation Links

Update navigation links in `index.html`:

```html
<ul class="nav-links">
    <li><a href="#home">Home</a></li>
    <li><a href="#tutorials">Tutorials</a></li>
    <li><a href="#about">About Us</a></li>
    <li><a href="#contact">Contact Us</a></li>
    <li><a href="#login" class="login-btn">Login</a></li>
</ul>
```

### Social Media Links

Replace `#` with your actual social media URLs:

```html
<a href="https://facebook.com/yourpage" class="social-icon">
    <!-- SVG icon -->
</a>
```

### Course Content

Modify course details in the course cards section:

```html
<div class="course-card">
    <!-- Update course information here -->
</div>
```

## 📱 Responsive Breakpoints

- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px
- **Small Mobile**: < 480px

## 🚀 Deployment

### GitHub Pages

1. Push your code to GitHub
2. Go to repository Settings
3. Navigate to Pages section
4. Select branch (main/master)
5. Click Save
6. Your site will be live at: `https://yourusername.github.io/coderstrike`

### Netlify

1. Sign up at [Netlify](https://www.netlify.com)
2. Drag and drop your project folder
3. Your site will be deployed instantly



## 🔧 Browser Compatibility

- ✅ Chrome (90+)
- ✅ Firefox (88+)
- ✅ Safari (14+)
- ✅ Edge (90+)

## 📝 Features Breakdown

### Navigation Bar
- Fixed positioning with backdrop blur
- Gradient border animation
- Smooth scroll to sections
- Responsive hamburger menu (to be implemented)

### Hero Section
- Animated gradient background
- Floating shape animations
- Social media integration
- Responsive text sizing

### Course Section
- 3D flip card animations
- Course statistics display
- Enroll buttons with hover effects
- Grid layout for responsiveness

### Instructor Section
- Profile image with gradient border
- Animated entrance effects
- Bio and credentials display

### Video Section
- Autoplay promotional video
- Full-width responsive display
- Muted with loop functionality

### Contact Section
- Form with validation-ready inputs
- Contact illustration
- Submit button with gradient

### Footer
- Multi-column layout
- Quick links navigation
- Social media icons
- Copyright information

## 🐛 Known Issues & Solutions

### Video Not Playing
- Ensure video.mp4 is in correct path
- Check browser autoplay policies
- Add `playsinline` attribute for mobile

### Images Not Loading
- Verify image paths are correct
- Check file extensions match (case-sensitive)
- Ensure images are in the correct folder

### Layout Breaking on Mobile
- Check viewport meta tag is present
- Test responsive breakpoints
- Validate CSS media queries

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**CoderStrike Team**
- Website: [https://coder-strike.netlify.app/#home](#)
- LinkedIn: [https://x.com/GopiD2911](#)
- Twitter: [https://www.linkedin.com/in/gopal-das-mern25/](#)

## 🙏 Acknowledgments

- Font Awesome for social media icons
- Inspiration from modern ed-tech platforms
- Community feedback and support

## 📧 Contact

For any queries or support:
- Email: dasgopal01978@gmail.com
- Website: [](https://coder-strike.netlify.app/#home)

---

⭐ **Star this repository if you found it helpful!**

Made with ❤️ by CoderStrike Team
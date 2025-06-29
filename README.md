# 🎭 Quote Gallery App

A simple React project that combines:
- 🖼️ A **grid-based image gallery** with search, powered by the Unsplash API
- ✨ A **random quote generator** to inspire users


---

## 📌 **Features**
✅ Fetch and display images dynamically from Unsplash  
✅ Search images by keyword  
✅ Responsive grid layout using CSS Grid and Flexbox  
✅ Download button to save any image  
✅ Random quote generator with a clean UI  

---

## 🚀 **Getting Started**

### Clone the repository
```bash
git clone https://github.com/YOUR_USERNAME/react-quote-gallery-app
cd react-quote-gallery-app

Tech Stack
React

Axios (for API calls)

CSS Grid & Flexbox (for layout)

Unsplash API

Install dependencies

npm install
Add Unsplash Access Key
Create a .env file in the root and add:

REACT_APP_UNSPLASH_ACCESS_KEY=your_access_key_here
Then replace in Gallery.js:

Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`

Start the app

npm start

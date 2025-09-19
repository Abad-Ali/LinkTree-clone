# 🌳 **LinkTree Clone** – All Your Links in One Place

A fast, organized, and beautiful **LinkTree clone** built with **Next.js**, **Tailwind CSS**, and **MongoDB**. Perfect for organizing and showcasing your important links in a single, user-friendly page.

## ✨ **Features**

* **📎 Add Multiple Links:** Easily organize all your social and important URLs in one spot.
* **🚦 Modern UI:** A clean, accessible, and mobile-first interface built with **Tailwind CSS**.
* **💨 Lightning Fast:** Powered by **Next.js** for optimal performance.
* **🗂️ Easy Link Management:** Effortlessly add, edit, remove, or rearrange your links.
* **☁️ Cloud Ready:** Easily deployable and scalable with **Vercel**.

## 🛠️ **Tech Stack**

* ⚛️ **Next.js**: React-based framework for SSR (Server-Side Rendering) and routing. Ideal for performance and SEO.
* 💨 **Tailwind CSS**: Utility-first CSS framework for responsive and customizable design.
* 🍃 **MongoDB**: NoSQL database for scalable and flexible data storage.

## 📂 **Project Structure**

```bash
├── app/
│   ├── favicon.ico           # App favicon
│   ├── globals.css           # Global styles (Tailwind base)
│   ├── layout.js             # Layout wrapper for all pages
│   └── page.js               # Main landing page
├── components/               # Reusable UI components
│   ├── AddLinkForm.jsx       # Form to add a new link
│   ├── LinkCard.jsx          # Component to display individual link
│   └── LinkList.jsx          # Component to render list of links
├── lib/                      # Utility libraries
│   └── mongodb.js            # MongoDB connection setup
├── models/                   # Mongoose data models
│   └── Link.js               # Link schema model
├── public/                   # Static assets (images, icons, etc.)
├── .env.local                # Local environment variables (not committed)
├── tailwind.config.js        # Tailwind CSS configuration
├── next.config.js            # Next.js configuration settings
├── package.json              # Project dependencies and scripts
└── README.md                 # Project documentation (you’re here!)

````

## ⚡ **Getting Started**

### 1. Clone the repo

```bash
git clone https://github.com/Abad-Ali/LinkTree-clone.git
cd LinkTree-clone
```

### 2. Install dependencies

```bash
npm install
```

Or, if you prefer, use your package manager of choice:

```bash
yarn install
# or
pnpm install
# or
bun install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory and add the necessary environment variables:

```bash
MONGODB_URI=your_mongodb_connection_string
NEXT_PUBLIC_API_URL=your_api_url
```

### 4. Run the app locally

```bash
npm run dev
```

Or use the corresponding command for your package manager:

```bash
yarn dev
# or
pnpm dev
# or
bun dev
```

### 5. Open your browser

Go to [http://localhost:3000](http://localhost:3000) to see the app in action.

## 📸 **Screenshots**

<details>
  <summary>Click to expand</summary>

  ![Screenshot 1](https://github.com/Abad-Ali/LinkTree-clone/blob/584cb07deb4d2b5976eae37f551f2df0a138fbea/Screenshot%202025-09-17%20094058.png)
  
  ![Screenshot 2](https://github.com/Abad-Ali/LinkTree-clone/blob/584cb07deb4d2b5976eae37f551f2df0a138fbea/Screenshot%202025-09-17%20094118.png)

   ![Screenshot 3](https://github.com/Abad-Ali/LinkTree-clone/blob/584cb07deb4d2b5976eae37f551f2df0a138fbea/Screenshot%202025-09-17%20094142.png)

</details>

## 👤 **Author**

**Abad Ali**

* 💼 **GitHub:** [Abad-Ali](https://github.com/Abad-Ali)
* 🔗 **LinkedIn:** \[Your LinkedIn URL]

## About

This is a clone of **LinkTree**, allowing users to organize and display all their important links in one place. It’s built with **Next.js**, **Tailwind CSS**, and **MongoDB** for a fast, responsive, and scalable web application.

---

Feel free to star ⭐ the repo or contribute 🚀.

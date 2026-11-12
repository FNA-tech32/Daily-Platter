# 🍔 Daily Platter - Fresh, Fast & Gourmet Food Delivery

<p align="center">
  <strong>Crafted for Food Lovers • Delivered Sizzling Hot in 30 Minutes</strong>
</p>

---

## 📌 Project Overview

**Daily Platter** is a modern, responsive web application for an artisanal food delivery service and gourmet burger eatery. Built with **React 18**, **Vite 5**, **Redux Toolkit**, and **React-Bootstrap**, the website provides a seamless browsing and ordering experience. Customers can explore handcrafted platters, add items to their real-time cart, review daily chef specials, and connect directly with customer support through primary and alternative communication channels.

---

## ✨ Key Features

- **🍔 Signature Hero Showcase**: Eye-catching hero banner highlighting daily chef specials with discount pricing badges and direct calls-to-action.
- **🌟 Brand Story & Value Proposition**: Engaging sections showcasing Daily Platter's commitment to 100% prime ingredients, original house recipes, and insulated thermal delivery.
- **🛒 Dynamic Menu & Redux Cart Management**:
  - 8+ curated gourmet platters and burgers with real-time star ratings and pricing.
  - Interactive "Add To Cart" functionality powered by **Redux Toolkit** (`counterSlice`).
  - Live cart badge indicator integrated seamlessly into the sticky navigation header.
- **🚀 30-Minute Delivery Guarantee & Contact Hub**:
  - Dedicated contact section guaranteeing fast 30-minute delivery.
  - One-click primary phone call integration.
  - Alternative order/support phone number & WhatsApp hotline.
  - Primary order email and alternative customer support email.
  - Express pickup hub details for local takeout.
- **📱 Mobile App & Promotional Integration**: Download section for iOS App Store and Google Play with partner brand logos carousel.
- **💬 Verified Testimonials**: Customer review carousel featuring authentic feedback from real diners.
- **📱 Fully Responsive Design**: Mobile-first architecture tested across desktops, tablets, and mobile devices.
- **🎯 Smooth Navigation**: Sticky navbar with scroll-spy style smooth scrolling to key sections (`#home`, `#about`, `#menu`, `#shop`, `#blog`, `#contact`).
- **⬆️ Scroll-to-Top Utility**: Smooth floating back-to-top button appearing automatically on page scroll.

---

## 📞 Contact Details & Alternative Channels

Daily Platter provides multiple direct communication channels so customers and partners can always get in touch:

| Channel | Primary Details | Alternative / Secondary Details |
| :--- | :--- | :--- |
| **Brand Name** | **Daily Platter** | *Daily Platter Gourmet & Delivery* |
| **Toll-Free Hotline / Orders** | [`+1 (800) 555-7528`](tel:+18005557528) *(1-800-555-PLATTER)* | [`+1 (555) 987-6543`](tel:+15559876543) *(Local / WhatsApp Line)* |
| **Email Inquiries** | [`orders@dailyplatter.com`](mailto:orders@dailyplatter.com) *(Order Processing)* | [`support@dailyplatter.com`](mailto:support@dailyplatter.com) *(Customer Care & Catering)* |
| **Physical Address** | **Main Restaurant & Kitchen:**<br>1420 Platter Boulevard, Suite 100<br>Miami, FL 33126, United States | **Alternative Pickup / Express Hub:**<br>Express Hub: 280 Grand Avenue<br>Downtown Miami, FL 33132, United States |
| **Operating Hours** | **Mon – Fri:** 9:00 AM – 10:00 PM<br>**Saturday:** 10:00 AM – 11:00 PM<br>**Sunday:** 11:00 AM – 9:00 PM | **Online Order Processing:** 24/7 Daily |

---

## 🛠️ Technology Stack

- **Frontend Library:** [React 18](https://react.dev/)
- **Build Tool & Bundler:** [Vite 5](https://vitejs.dev/)
- **State Management:** [Redux Toolkit](https://redux-toolkit.js.org/) & [React-Redux](https://react-redux.js.org/)
- **Styling & UI Framework:** [React-Bootstrap 2](https://react-bootstrap.netlify.app/) & [Bootstrap 5.3](https://getbootstrap.com/)
- **Icons:** [Bootstrap Icons](https://icons.getbootstrap.com/)
- **Routing:** [React Router DOM v6](https://reactrouter.com/)
- **Typography:** Google Fonts (*Oswald*, *Lilita One*, *Roboto*)
- **Code Quality:** ESLint 8 with React hooks & refresh rules

---

## 📁 Project Structure

```text
Daily-Platter/
├── public/
│   └── vite.svg                      # Vite placeholder icon
├── src/
│   ├── assets/                       # Static media assets
│   │   ├── about/                    # About section images (bike, pizza, salad)
│   │   ├── blog/                     # Customer review author avatars
│   │   ├── brands/                   # Partner brand logos (brand-11 to 18)
│   │   ├── footer/                   # Footer banner background
│   │   ├── hero/                     # Hero burger banner and price badges
│   │   ├── logo/
│   │   │   ├── logo.svg              # Daily Platter vector logo
│   │   │   └── logo.png              # Legacy brand asset
│   │   ├── menu/                     # Gourmet burger menu item images
│   │   ├── parallax/                 # Background parallax banners
│   │   ├── promotion/                # Promotional combo graphics
│   │   ├── shop/                     # App Store, Google Play & mobile mockups
│   │   └── favicon.svg               # Daily Platter branded vector favicon
│   ├── Components/
│   │   └── Layouts/
│   │       ├── Cards.jsx             # Menu food card with rating & Redux cart dispatch
│   │       ├── Footer.jsx            # Multi-column footer with contact details & legal links
│   │       ├── Header.jsx            # Sticky responsive navigation bar with live cart count
│   │       └── Layout.jsx            # Root layout wrapper (Header + Main Content + Footer)
│   ├── Pages/
│   │   └── Home/
│   │       ├── Home.jsx              # Main landing page assembling sections 1-7
│   │       ├── Section1.jsx          # Hero Banner with special pricing
│   │       ├── Section2.jsx          # About Daily Platter & ingredient quality
│   │       ├── Section3.jsx          # Menu grid with cards & promotion banners
│   │       ├── Section4.jsx          # Promotion section & parallax scroll divider
│   │       ├── Section5.jsx          # Mobile App download & partner brand carousel
│   │       ├── Section6.jsx          # Customer reviews & testimonials carousel
│   │       └── Section7.jsx          # 30-Minute Guarantee & Contact Channels Hub
│   ├── Redux/
│   │   ├── Counter/
│   │   │   └── counterSlice.js       # Redux slice managing cart item count
│   │   └── Store.js                  # Configured Redux store
│   ├── Styles/
│   │   ├── HeaderStyle.css           # Header, navigation, and mobile menu styles
│   │   └── HomeStyle.css             # Section, card, carousel, and footer styles
│   ├── App.css
│   ├── App.jsx                       # Root React router application component
│   ├── index.css                     # Global design tokens, fonts, and scroll behavior
│   └── main.jsx                      # React DOM render entry point wrapped in Redux Provider
├── .eslintrc.cjs                     # ESLint configuration
├── .gitignore                        # Git exclusion rules
├── index.html                        # HTML template with Daily Platter metadata & favicon
├── package.json                      # Project dependencies and script declarations
├── package-lock.json                 # Lockfile for reproducible builds
├── vite.config.js                    # Vite bundler configuration
└── README.md                         # Comprehensive documentation
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js**: `v18.0.0` or later (tested on Node v24)
- **npm**: `v9.0.0` or later

### Installation

1. **Clone the repository** (or navigate to the workspace directory):
   ```bash
   cd Daily-Platter
   ```

2. **Install all dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```
   The application will be running locally at `http://localhost:5173`.

---

## 📜 Available Scripts

In the project directory, you can run:

| Command | Description |
| :--- | :--- |
| `npm run dev` | Runs the app in development mode with Hot Module Replacement (HMR). |
| `npm run build` | Bundles and optimizes the app for production in the `dist` folder. |
| `npm run preview` | Locally serves the production build for testing and verification. |
| `npm run lint` | Runs ESLint across all `.js` and `.jsx` files to ensure code quality. |

---

## 🎯 Verification & Testing

To verify code quality and build integrity:

```bash
# Verify ESLint rules
npm run lint

# Build production bundle
npm run build
```

---

## 📄 License

This project is licensed under the MIT License. Feel free to use, customize, and build upon it.

---

<p align="center">
  Made with ❤️ for <strong>Daily Platter</strong> • Taste the Difference Everyday!
</p>

# 📺 StreamVault — OTT TV & VOD Streaming Platform (Frontend)[cite: 1]

StreamVault is a modern, responsive OTT (Over-The-Top) TV and Video-on-Demand (VOD) streaming frontend built with **React** and **Vite**[cite: 1, 2]. Designed for high performance, it delivers a sleek streaming interface for Live TV channels, movies, TV series, interactive EPG guides, user account management, and a full-featured admin management portal[cite: 1, 2].

---

## 📸 Core Features

### 🎬 Client Portal

* **Onboarding & Authentication:** Animated splash screens, onboarding walkthrough, email/password login, registration with OTP verification, and password reset flows[cite: 1, 2].
* **Featured Hero Slider:** Dynamic banner featuring trending titles, new releases, and live event quick-access[cite: 1].
* **Live TV & Interactive EPG:** Real-time channel list with category filters (Sports, News, Entertainment, Kids) and a time-slot TV Guide (EPG)[cite: 1].
* **VOD Library (Movies & TV Shows):** Browse content by genre, tags, releases, ratings, and cast details[cite: 1].
* **Custom Video Player:** Complete media playback controls including play/pause, seek scrub bar, volume control, audio/subtitles toggle, and fullscreen mode[cite: 1].
* **User Library:** Continue Watching, My List (Bookmarks), and Offline Downloads simulation[cite: 1].
* **Monetization & Plans:** Subscription tier selection (Basic, Premium, Ultimate) and payment checkout flow with multiple payment methods (Card, PayPal, GPay, Apple Pay)[cite: 1, 2].
* **User Settings & Profile:** Stream quality settings (4K/1080p/720p), parental controls, subtitle management, and notification preferences[cite: 1].

### 🛡️ Admin CMS & Operations Portal

* **Dashboard & Analytics:** Real-time KPI cards (Users, Revenue, Active Streams, Subscriptions) with Chart.js analytics for revenue growth and traffic breakdowns[cite: 1].
* **Content Management:** CRUD interfaces for Live Channels, Movies, TV Shows, and Categories[cite: 1, 2].
* **Media Upload Flow:** Video and thumbnail upload forms with format/quality tagging[cite: 1].
* **Ad & Campaign Management:** Track impressions, CTR, and statuses for pre-roll and mid-roll ads[cite: 1, 2].
* **Financial & Subscription Management:** Monitor active subscriptions, payment logs, and report exports[cite: 1, 2].

---

## 🛠️ Tech Stack

* **Framework:** React 18+[cite: 1]
* **Build Tool:** Vite[cite: 1]
* **Routing:** React Router DOM (v6)
* **Icons:** FontAwesome 6+ / Lucide React[cite: 1]
* **Charts & Analytics:** Chart.js / React-Chartjs-2[cite: 1]
* **Video Playback:** Video.js / HLS.js (compatible with HLS / DASH feeds)[cite: 3]
* **Styling:** Vanilla Modern CSS variables (Dark OTT Theme) or Tailwind CSS[cite: 1]

---

## 📁 Project Structure

```text
streamvault-frontend/
├── public/
│   ├── favicon.ico
│   └── assets/
├── src/
│   ├── assets/             # Icons, images, placeholders
│   ├── components/         # Reusable UI components
│   │   ├── common/         # Navbar, Topbar, Sidebar, Modal, Toast
│   │   ├── player/         # Custom Video Player & Controls
│   │   └── cards/          # MediaCard, LiveChannelCard, CastCard
│   ├── layouts/            # AppLayout, AuthLayout, AdminLayout
│   ├── pages/
│   │   ├── auth/           # Login, Register, OTP, ForgotPassword
│   │   ├── client/         # Home, LiveTV, EPG, Movies, Player, Subscription, Profile
│   │   └── admin/          # Dashboard, Users, Upload, Analytics, Channels, Ads
│   ├── context/            # AuthContext, PlayerContext, ThemeContext
│   ├── services/           # API services (Axios / Fetch)
│   ├── hooks/              # Custom React hooks (usePlayer, useAuth)
│   ├── styles/             # Global CSS and themes
│   ├── App.jsx             # Main Router configuration
│   └── main.jsx            # Entry point
├── index.html
├── package.json
├── vite.config.js
└── README.md

```

---

## 🚀 Getting Started

### Prerequisites

* Node.js (`v18.x` or higher recommended)
* npm, yarn, or pnpm

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/your-username/OTT-TV-Channel-frontend.git
cd OTT-TV-Channel-frontend

```


2. **Install dependencies:**
```bash
npm install
# or
yarn install

```


3. **Configure Environment Variables:**
Create a `.env` file in the root directory:
```env
VITE_API_BASE_URL=http://localhost:5000/api/v1
VITE_STREAMING_SERVER_URL=https://streaming.yourdomain.com

```


4. **Run Development Server:**
```bash
npm run dev
# or
yarn dev

```


Open `http://localhost:5173` to view the application.
5. **Build for Production:**
```bash
npm run build

```



---

## 📺 Key Screens & Navigation Routes

| Route | View | Description |
| --- | --- | --- |
| `/` | Splash / Onboarding | Animated entry & feature showcase[cite: 1, 2] |
| `/auth/login` | Login | User authentication & social login[cite: 1] |
| `/home` | Home Portal | Featured hero banner, Continue Watching, Trending[cite: 1] |
| `/live-tv` | Live Channels | Grid view with live status filters[cite: 1] |
| `/epg` | TV Guide | Interactive electronic program guide schedule[cite: 1] |
| `/watch/:id` | Video Player | Custom streaming player for VOD/Live streams[cite: 1] |
| `/subscription` | Plans & Billing | Pricing matrix and checkout modal[cite: 1] |
| `/admin` | Admin Dashboard | Operations, analytics charts, and content CMS[cite: 1] |

---

## 📄 License

This project is licensed under the [MIT License](https://www.google.com/search?q=LICENSE).

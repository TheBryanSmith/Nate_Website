# 🚗 NJE_AUTO - Garage Management System

NJE_AUTO is a modern, full-stack Garage Management System (GMS) tailored for Nathan's auto repair shops. It helps Nate manage customers, vehicles, appointments, invoices, and inventory — all in one place. Built with scalability and ease of use in mind.

---

## 🔧 Features (MVP)

✅ Customer Management (CRM Lite)  
✅ Vehicle History Tracking  
✅ Appointment Scheduling with Calendar  
✅ Estimates & Invoicing (PDF Export + Email)  
✅ Inventory Management (Parts & Tools)  
✅ Basic QuickBooks Integration (Customer + Invoice Sync)  
✅ SMS/Email Notifications (Twilio, SendGrid)  
✅ Secure Authentication with Roles (Admin, Staff)

---

## 🧱 Tech Stack

| Layer       | Technology                         |
|------------|-------------------------------------|
| Frontend   | Next.js, React, Tailwind CSS        |
| Backend    | Node.js, Express / NestJS           |
| Auth       | Clerk / Auth.js                     |
| Database   | PostgreSQL (via Prisma ORM)         |
| Calendar   | FullCalendar                        |
| Emails     | SendGrid / Resend                   |
| SMS        | Twilio                              |
| Invoicing  | PDFKit / html-pdf                   |
| Accounting | QuickBooks Online API               |
| Hosting    | Vercel (frontend), Railway/Render (backend) |

---

## 📂 Project Structure (Example)
```NJE_AUTO/
├── apps/
│ ├── frontend/ # Next.js app
│ └── backend/ # Node.js API
├── prisma/ # DB schema and migrations
├── packages/
│ ├── ui/ # Shared UI components
│ └── utils/ # Shared utilities
├── .env # Environment variables
├── README.md
└── package.json
```


---

<!-- ## ⚙️ Environment Variables

You'll need to configure the following in your `.env` file:

```env
# QuickBooks API
QB_CLIENT_ID=
QB_CLIENT_SECRET=
QB_REDIRECT_URI=
QB_ENVIRONMENT=sandbox

# Twilio
TWILIO_ACCOUNT_SID=
TWILIO_AUTH_TOKEN=
TWILIO_PHONE_NUMBER=

# SendGrid
SENDGRID_API_KEY=

# Database
DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DATABASE

# Auth (Clerk or Auth.js)
NEXT_PUBLIC_CLERK_FRONTEND_API=
CLERK_API_KEY=

``` -->

# 🛠️ Getting Started

## 1. Clone the repo
git clone https://github.com/your-username/garageflow.git
cd garageflow

## 2. Install dependencies
npm install

## 3. Set up the database
npx prisma migrate dev

## 4. Start development servers
### (Frontend and backend)
npm run dev



---

## 🔧 Optional Add-Ons You Can Include Later:
- Badges (e.g. build status, license)
- Screenshots or demo GIF
- Hosted demo link

## 🧪 Testing

- **Coming soon:** Unit + Integration tests using **Jest** and **Playwright**
- **Linting:** ESLint + Prettier

---

## 📅 Roadmap

### Phase 1 – MVP
- [x] Customer & Vehicle Management  
- [x] Appointment Scheduling  
- [x] Estimate & Invoice Generation  
- [x] Basic QuickBooks Integration  
- [x] Inventory Management  
- [x] Email/SMS Notifications  


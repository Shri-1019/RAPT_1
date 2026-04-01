# 🏠 RAPT - Rental Agreements & Payments Tracking

> A complete web platform for landlords and tenants to manage rental agreements, track payments, and maintain digital contracts.

---

## 📌 Quick Links

| Link | Description |
|------|-------------|
| 🔗 **GitHub Repository** | https://github.com/Shri-1019/RAPT_1 |
| 🚀 **Local App** | http://localhost:4200 |
| 📁 **Project Root** | `D:\RAPT_1` |

---

## 👥 Team Members & Assignments

| Team Member | Branch Name | Responsibilities |
|-------------|-------------|------------------|
| **Ashen** | `ashen/auth` | Login, Signup, Landing Page, Forgot Password |
| **Shaggy** | `shaggy/properties` | Landlord Dashboard, Properties, Add/Edit Property |
| **Thisa** | `thisa/tenants` | Tenants List, Leases, Tenant Pages, My Property, My Lease |
| **Abi** | `abi/payments` | Payment Processing, Invoices, Financial Reports |

### 📄 Pages by Team

#### Abi & Ashen (Authentication - 7 pages)
- `/home` - Landing/Welcome page
- `/auth/login` - Login form
- `/auth/signup` - Choose role (Landlord/Tenant)
- `/auth/signup/landlord` - Landlord registration
- `/auth/signup/tenant` - Tenant registration
- `/auth/forgot-password` - Reset password request
- `/auth/reset-password` - Set new password

#### Thisa & Shaggy (Property Management - 5 pages)
- `/landlord/dashboard` - Overview with stats
- `/landlord/properties` - List all properties
- `/landlord/properties/add` - Add new property form
- `/landlord/properties/:id` - Property details
- `/landlord/properties/:id/edit` - Edit property

#### Thisa & Shaggy (Tenant & Lease - 7 pages)
- `/landlord/tenants` - Manage tenants list
- `/landlord/tenants/:id` - Tenant details
- `/landlord/tenants/add` - Add new tenant
- `/landlord/leases` - All leases
- `/landlord/leases/create` - Create new lease
- `/tenant/dashboard` - Tenant home page
- `/tenant/my-property` - View current property
- `/tenant/my-lease` - View current lease

#### Abi & Ashen  (Payments & Financials - 5 pages)
- `/tenant/payments` - Make payment
- `/tenant/payment/history` - Payment history
- `/tenant/payment/methods` - Manage payment methods
- `/landlord/payments/invoices` - All invoices
- `/landlord/reports` - Financial reports

---

## 🛠️ Technology Stack

| Category | Technology | Version |
|----------|------------|---------|
| **Frontend** | Angular | 20+ (Standalone Components) |
| **Language** | TypeScript | 5.0+ |
| **Styling** | SCSS | - |
| **Icons** | Lucide Angular | Latest |
| **State** | Angular Signals | 20+ |
| **Package** | npm | Latest |

---

## 🚀 Getting Started (First Time Setup)

### 1. Install Prerequisites

| Tool | Download Link | Command (after install) |
|------|---------------|------------------------|
| **Node.js 18+** | https://nodejs.org | `node --version` |
| **Git** | https://git-scm.com | `git --version` |
| **Angular CLI** | - | `npm install -g @angular/cli` |

### 2. Clone the Repository


git clone https://github.com/Shri-1019/RAPT_1.git
cd RAPT_1


## 📁 Project Structure

<details>
<summary><b>Click to expand folder structure</b></summary>

RAPT_1/
├── frontend/                    # Angular application
│   ├── src/
│   │   ├── app/
│   │   │   ├── core/           # Services, guards, interceptors
│   │   │   │   ├── services/   # API services (auth, payment, etc.)
│   │   │   │   ├── guards/     # Route guards (auth, role)
│   │   │   │   └── interceptors/ # HTTP interceptors (auth token)
│   │   │   ├── shared/         # Reusable components
│   │   │   │   ├── components/ # Button, card, modal, etc.
│   │   │   │   ├── layouts/    # Header, sidebar layouts
│   │   │   │   └── pipes/      # Custom pipes
│   │   │   ├── pages/          # 📍 YOUR WORK GOES HERE
│   │   │   │   ├── home/       # Public pages (Ashen)
│   │   │   │   │   ├── landing/
│   │   │   │   │   ├── login/
│   │   │   │   │   └── signup/
│   │   │   │   ├── landlord/   # Landlord pages (Shaggy, Thisa, Abi)
│   │   │   │   │   ├── dashboard/
│   │   │   │   │   ├── properties/
│   │   │   │   │   ├── tenants/
│   │   │   │   │   ├── leases/
│   │   │   │   │   ├── payments/
│   │   │   │   │   └── reports/
│   │   │   │   └── tenant/     # Tenant pages (Thisa, Abi)
│   │   │   │       ├── dashboard/
│   │   │   │       ├── my-property/
│   │   │   │       ├── my-lease/
│   │   │   │       └── payments/
│   │   │   ├── app.config.ts
│   │   │   └── app.routes.ts
│   │   ├── assets/
│   │   ├── styles.scss
│   │   └── index.html
│   ├── angular.json
│   ├── package.json
│   └── .gitignore
├── .gitignore
└── README.md

</details>



### Creating a New Feature Branch
# 1. Start of day - get latest changes
git checkout main
git pull origin main

# 2. Switch to your branch
git checkout your-name/feature-name

# 3. Merge latest changes into your branch
git merge main

# 4. Work on your code...

# 5. End of day - save your work
git add .
git commit -m "feat: what you did today"
git push origin your-name/feature-name

### Creating a New Feature Branch
# Create branch from main
git status                  # Check current state
git add .                   # Stage all changes
git add filename            # Stage specific file
git commit -m "message"     # Commit changes
git push                    # Push to GitHub
git pull                    # Pull latest changes
git branch                  # List branches
git checkout -b new-branch  # Create and switch to branch
git log --oneline           # View commit history
git checkout main
git pull origin main
git checkout -b your-name/feature-name

# Examples:
git checkout -b ashen/login-page
git checkout -b shaggy/property-list
git checkout -b thisa/tenant-dashboard
git checkout -b abi/payment-integration

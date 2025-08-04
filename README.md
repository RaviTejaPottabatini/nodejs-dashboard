# nodejs-dashboard

# Command Center Dashboard

A functional web application mimicking the **Command Center** interface to serve as a **project management and monitoring dashboard** for construction/solar network projects.

---

## 🚀 Tech Stack
- **Frontend:** React (Vite), TailwindCSS, Google Maps API, Axios
- **Backend:** Node.js, Express, PostgreSQL (pg)
- **Database:** PostgreSQL (seeded with demo data)

---

Backend Setup
Install dependencies

cd backend
npm install

Configure .env
DATABASE_URL=postgresql://user:password@localhost:5432/alfred_dashboard

Create DB tables
psql -U your_user -d alfred_dashboard -f init.sql

demo data
psql -U your_user -d alfred_dashboard -f seed.sql

Start backend
npm run dev

Frontend Setup
cd frontend
npm install

Replace YOUR_GOOGLE_MAPS_API_KEY in components.js with your key.

start -> npm run dev


 API Endpoints
GET /api/projects → List all projects with progress & capacity

GET /api/updates → List all communication hub updates

GET /api/actions → List all actions with priorities and due dates

POST /api/actions → Add a new action

NOTE : 
Data is static in seed (for demo)
Weather info mocked
Real-time updates simulated via polling
No authentication in demo version

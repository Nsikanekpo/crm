# Django CRM Project

## Overview
This is a Customer Relationship Management (CRM) web application built using Django. The project provides a user-friendly interface for managing customer data, tracking interactions, and improving business relationships.

## Live Demo
**URL:** [https://crm-i8gl.onrender.com] (https://crm-i8gl.onrender.com)

⚠ **Important:** The PostgreSQL database used in this project is hosted on Render's free tier, which will expire on **March 25, 2025**. After this date, the database will no longer be available unless upgraded or migrated.

## Features
- User authentication (registration, login, logout)
- Customer data management
- Search and filtering functionality
- Responsive UI with Bootstrap
- Secure password storage using Django authentication system

## Technologies Used
- **Backend:** Django
- **Frontend:** HTML, CSS, JavaScript, Bootstrap, Awesomefonts
- **Database:** PostgreSQL (hosted on Render)
- **Deployment:** Render (for both backend and database)

---

## Installation & Setup

### Prerequisites
Ensure you have the following installed:
- Python 3.x
- pip (Python package manager)
- PostgreSQL
- Git

### Clone the Repository
```bash
git clone https://github.com/Nsikanekpo/crm.git
cd crm
```

### Create and Activate a Virtual Environment
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

### Install Dependencies
```bash
pip install -r requirements.txt
```

### Configure Environment Variables
Create a `.env` file in the project root and add:
```
SECRET_KEY=your_secret_key
DATABASE_URL=your_database_url
```

On Windows, set the environment variables manually:
```bash
set SECRET_KEY=your_secret_key
set DATABASE_URL=your_database_url
```

On Mac/Linux:
```bash
export SECRET_KEY=your_secret_key
export DATABASE_URL=your_database_url
```

### Apply Migrations
```bash
python manage.py migrate
```

### Collect Static Files
```bash
python manage.py collectstatic --noinput
```

### Run the Development Server
```bash
python manage.py runserver
```
Access the app at `http://127.0.0.1:8000/`

---

## Deployment to Render

### Step 1: Create a Render Web Service
1. Go to [Render](https://dashboard.render.com/) and create a **new Web Service**.
2. Connect your GitHub repository.
3. Set the **Build Command** to:
   ```bash
   pip install -r requirements.txt && python manage.py collectstatic --noinput
   ```
4. Set the **Start Command** to:
   ```bash
   gunicorn crm.wsgi:application
   ```
5. Add **Environment Variables** in the Render dashboard:
   - `SECRET_KEY=your_secret_key`
   - `DATABASE_URL=your_render_postgres_url`

### Step 2: Create a PostgreSQL Database on Render
1. In Render, create a **new PostgreSQL database**.
2. Copy the database URL and add it to your environment variables.

### Step 3: Deploy
Render will automatically detect changes and redeploy the application when you push to the repository.

To manually trigger a deployment, push changes to GitHub:
```bash
git add .
git commit -m "Updated project"
git push origin main
```

---

## Troubleshooting
### Common Issues & Solutions

1. **Database Connection Error:**
   - Ensure `DATABASE_URL` is correctly set in environment variables.
   - Run `echo %DATABASE_URL%` (Windows) or `echo $DATABASE_URL` (Mac/Linux) to verify.

2. **Static Files Not Loading:**
   - Run `python manage.py collectstatic --noinput` and redeploy.
   - Ensure `whitenoise` middleware is included in `MIDDLEWARE`.

3. **Gunicorn Not Found:**
   - Install Gunicorn manually: `pip install gunicorn`
   - Ensure `gunicorn` is added in `requirements.txt`.

---

## Contributors
- **Nsikan Ekpo** – [GitHub](https://github.com/Nsikanekpo)

---



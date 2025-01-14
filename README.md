# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

```
instamedirx-frontend
├─ .gitignore
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ postcss.config.js
├─ public
│  └─ vite.svg
├─ README.md
├─ src
│  ├─ app
│  │  ├─ features
│  │  │  └─ signupSlice.js
│  │  ├─ services
│  │  │  └─ apiSlice.js
│  │  └─ store.js
│  ├─ App.jsx
│  ├─ assets
│  │  ├─ account_selection
│  │  │  ├─ client.svg
│  │  │  ├─ doctor.svg
│  │  │  ├─ image 34.png
│  │  │  ├─ image 35.png
│  │  │  ├─ pharmacist.svg
│  │  │  └─ side_image.svg
│  │  ├─ client_signup_image.svg
│  │  ├─ Frame 22.png
│  │  ├─ Group 37.png
│  │  ├─ Group 40.png
│  │  ├─ image 29.png
│  │  ├─ login
│  │  │  ├─ apple.svg
│  │  │  ├─ facebook.svg
│  │  │  ├─ google.svg
│  │  │  └─ side_image.svg
│  │  ├─ Logo.png
│  │  ├─ Logo.svg
│  │  └─ user.png
│  ├─ components
│  │  ├─ Back.jsx
│  │  ├─ Button.jsx
│  │  ├─ Card.jsx
│  │  └─ index.js
│  ├─ features
│  │  ├─ Auth
│  │  │  ├─ components
│  │  │  │  ├─ BackgroundColor.jsx
│  │  │  │  └─ form
│  │  │  │     ├─ CertificationForm.jsx
│  │  │  │     ├─ FileInput.jsx
│  │  │  │     ├─ FormInput.jsx
│  │  │  │     ├─ index.js
│  │  │  │     ├─ QualificationForm.jsx
│  │  │  │     └─ Select.jsx
│  │  │  └─ pages
│  │  │     ├─ accountSelection.jsx
│  │  │     ├─ AccountType.jsx
│  │  │     ├─ client
│  │  │     │  └─ pages
│  │  │     │     └─ EmailVerification.jsx
│  │  │     ├─ doctor
│  │  │     │  └─ pages
│  │  │     │     └─ DoctorSignup.jsx
│  │  │     ├─ index.js
│  │  │     ├─ Login.jsx
│  │  │     ├─ pharmacist
│  │  │     │  └─ pages
│  │  │     │     └─ PharmacistSignup.jsx
│  │  │     ├─ Qualifications.jsx
│  │  │     ├─ RegistrationDetails.jsx
│  │  │     └─ Signup.jsx
│  │  └─ Dashboards
│  │     ├─ Client
│  │     │  ├─ components
│  │     │  │  ├─ SideBar.jsx
│  │     │  │  └─ TopBar.jsx
│  │     │  ├─ layout.jsx
│  │     │  └─ pages
│  │     ├─ components
│  │     │  ├─ ProfileImage.jsx
│  │     │  └─ SearchBar.jsx
│  │     ├─ layouts
│  │     │  └─ DashboardLayout.jsx
│  │     └─ ProtectedRoutes.jsx
│  ├─ index.css
│  ├─ main.jsx
│  ├─ router
│  │  └─ router.jsx
│  └─ utils
│     └─ data.js
├─ tailwind.config.js
└─ vite.config.js

```
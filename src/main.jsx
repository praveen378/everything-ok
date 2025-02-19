import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import store from "./store/store.js";
import { Provider } from "react-redux";
import { AuthProvider } from "./context/AuthContext.jsx";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Login from "./components/Login/Login.jsx";
import Signup from "./components/Login/Signup.jsx";
import Profile from "./components/Profile/Profile.jsx";
import CompleteProfile from "./components/Profile/CompleteProfile.jsx";

import PaymentPage from "./components/Payment/PaymentPage.jsx";
import Donation from "./components/Payment/Donation.jsx";
import Scanner from "./components/Payment/Scanner.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="profile" element={<Profile />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="contact" element={<Contact />} />
      <Route path="CompleteProfile" element={<CompleteProfile />} />
      <Route path="scanner" element={<Scanner />} />
      <Route path="Paymentpage" element={<PaymentPage />} />
      <Route path="donation" element={<Donation />} />
      {/* <Route path="user" element={<User />} /> */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </AuthProvider>
  </React.StrictMode>
);

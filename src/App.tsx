import "./globals.css";
import { Routes, Route } from "react-router-dom";

import { Home } from "./_root/pages/Home";
import { AuthLayout } from "./_auth/forms/AuthLayout";
import { SignInForm } from "./_auth/forms/SignInForm";
import { SignUpForm } from "./_auth/forms/SignUpForm";
import { RootLayout } from "./_root/pages/RootLayout";

export const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        //* Public Route
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SignInForm />} />
          <Route path="/sign-up" element={<SignUpForm />} />
        </Route>
        //* Private Route
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </main>
  );
};

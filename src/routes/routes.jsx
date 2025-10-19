import { createBrowserRouter } from "react-router-dom";
import { Suspense } from "react";

import RootLayoutOne from "../layout/RootLayoutOne";
import HomeOne from "../pages/index-one/HomeOne";
import Error from "../pages/error/Error";
import Preloader from "@/components/Preloader/Preloader";
import { ScrollRestoration } from "react-router-dom";

import EpisodesPage from "@/pages/latest-episodes/EpisodesPage";
import ContactUsPage from "@/pages/contact-us/ContactUsPage";
import AdminLogin from "@/pages/admin/AdminLogin";
import AdminDashboard from "@/pages/admin-dashboard/AdminDashboard";

const router = createBrowserRouter([
  {
    element: (
      <Suspense fallback={<Preloader />}>
        <RootLayoutOne />
        <ScrollRestoration />
      </Suspense>
    ),
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <HomeOne />,
      },
      {
        path: "/latest-episode",
        element: <EpisodesPage />,
      },
      {
        path: "/contact",
        element: <ContactUsPage />,
      },
    ],
  },
  {
    path: "/admin/login",
    element: <AdminLogin />,
  },
  {
    path: "/admin/dashboard",
    element: <AdminDashboard />,
  }
]);

export default router;

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
import ProtectedAdminRoute from "@/components/ProtectedAdminRoute";
import PitchContest from "@/components/pitch/pitchContest";
import AboutPage from "@/pages/about-us/AboutPage";
import TermsOfService from "@/pages/common/terms";
import PrivacyPolicy from "@/pages/common/PrivacyPolicy";
import ProductsPage from "@/pages/products/Products";
import ReturnusRulesPage from "@/pages/common/ReturnusRulesPage";

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
      {
        path: "/pitch",
        element: <PitchContest />,
      },
      {
        path: "/about-us",
        element: <AboutPage />,
      },
      {
        path: "/terms-and-conditions",
        element: <TermsOfService />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/pitch-consent-rules",
        element: <ReturnusRulesPage />,
      },
    ],
  },
  {
    path: "/admin/login",
    element: <AdminLogin />,
  },
  {
    path: "/admin/dashboard",
    element: (
      <ProtectedAdminRoute>
        <AdminDashboard />
      </ProtectedAdminRoute>
    ),
  },
]);

export default router;

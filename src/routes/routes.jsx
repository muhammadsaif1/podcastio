import { createBrowserRouter } from "react-router-dom";
import { Suspense } from "react";

import RootLayoutOne from "../layout/RootLayoutOne";
import RootLayoutTwo from "../layout/RootLayoutTwo";
import RootLayoutThree from "../layout/RootLayoutThree";
import RootLayoutFour from "../layout/RootLayoutFour";
import RootLayoutFive from "../layout/RootLayoutFive";

import HomeOne from "../pages/index-one/HomeOne";
import HomeTwo from "../pages/index-two/HomeTwo";
import HomeThree from "../pages/index-three/HomeThree";
import HomeFour from "../pages/index-four/HomeFour";
import BlogGrid from "../pages/blog-grid/BlogGrid";
import BlogList from "../pages/blog-list/BlogList";
import BlogDetails from "../pages/blog-details/BlogDetailsPage";
import FavoriteEpisodes from "../pages/favorite-episodes/FavoriteEpisodesPage";
import EpisodeDetails from "../pages/episodes-details/EpisodeDetailsPage";
import AboutUs from "../pages/about-us/AboutUsPage";
import ContactUs from "../pages/contact-us/ContactUsPage";
import HostProfile from "../pages/host-profile/HostProfilePage";
import HostDetails from "../pages/host-details/HostDetailsPage";
import PricingPlan from "../pages/pricing-plan/PricingPlanPage";
import Faqs from "../pages/faqs/FaqsPage";
import Error from "../pages/error/Error";
import SignIn from "../pages/sign-in/SignIn";
import SignUp from "../pages/sign-up/SignUp";
import RootAuthLayout from "../layout/RootAuthLayout";
import Dashboard from "../pages/user/dashboard/Dashboard";
import CreatePodcast from "../pages/user/podcasts/CreatePodcast";
import AllPodcast from "../pages/user/podcasts/AllPodcast";
import CreateEpisode from "../pages/user/episodes/CreateEpisode";
import AllEpisodes from "../pages/user/episodes/AllEpisodes";
import Transactions from "../pages/user/transactions/Transactions";
import Subscriptions from "../pages/user/subscribe/Subscriptions";
import SubscriberList from "../pages/user/subscribe/SubscriberList";
import Bookmark from "../pages/user/bookmark/Bookmark";
import SupportTicket from "../pages/user/support-tickets/SupportTickets";
import NewTicket from "../pages/user/support-tickets/NewTicket";
import ProfileSetting from "../pages/user/profile/ProfileSetting";
import ChangePassword from "../pages/user/profile/ChangePassword";
import TwoFactorAuthentication from "../pages/user/profile/TwoFactorAuthentication";
import AddBalance from "../pages/user/balance/AddBalance";
import BalanceHistory from "../pages/user/balance/BalanceHistory";
import WithdrawBalance from "../pages/user/withdraw/WithdrawBalance";
import LogWithdrawal from "../pages/user/withdraw/LogWithdrawal";
import SidebarLayout from "../layout/SidebarLayout";
import EpisodesPage from "@/pages/latest-episodes/EpisodesPage";
import Preloader from "@/components/Preloader/Preloader";
import { ScrollRestoration } from "react-router-dom";

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
    ],
  },
  {
    element: (
      <Suspense fallback={<Preloader />}>
        <RootLayoutTwo />
        <ScrollRestoration />
      </Suspense>
    ),
    errorElement: <Error />,
    children: [
      {
        path: "/index-two",
        element: <HomeTwo />,
      },
      {
        path: "/latest-episode",
        element: <EpisodesPage />,
      },
      {
        path: "/favorite-episode",
        element: <FavoriteEpisodes />,
      },
      {
        path: "/episode-details",
        element: <EpisodeDetails />,
      },
      {
        path: "/blog-grid",
        element: <BlogGrid />,
      },
      {
        path: "/blog-list",
        element: <BlogList />,
      },
      {
        path: "/blog-details",
        element: <BlogDetails />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/host-profile",
        element: <HostProfile />,
      },
      {
        path: "/host-details",
        element: <HostDetails />,
      },
      {
        path: "/pricing",
        element: <PricingPlan />,
      },
      {
        path: "/faq",
        element: <Faqs />,
      },
    ],
  },
  {
    element: (
      <Suspense fallback={<Preloader />}>
        <RootLayoutThree />
        <ScrollRestoration />
      </Suspense>
    ),
    errorElement: <Error />,
    children: [
      {
        path: "/index-three",
        element: <HomeThree />,
      },
    ],
  },
  {
    element: (
      <Suspense fallback={<Preloader />}>
        <RootLayoutFour />
        <ScrollRestoration />
      </Suspense>
    ),
    errorElement: <Error />,
    children: [
      {
        path: "/index-four",
        element: <HomeFour />,
      },
    ],
  },
  {
    element: (
      <Suspense fallback={<Preloader />}>
        <RootLayoutFive />
        <ScrollRestoration />
      </Suspense>
    ),
    errorElement: <Error />,
    children: [
      {
        path: "/login",
        element: <SignIn />,
      },
      {
        path: "/register",
        element: <SignUp />,
      },
    ],
  },
  {
    element: (
      <Suspense fallback={<Preloader />}>
        <RootAuthLayout />
        <ScrollRestoration />
      </Suspense>
    ),
    errorElement: <Error />,
    children: [
      {
        path: "/user",
        element: <SidebarLayout />,
        children: [
          {
            path: "/user/dashboard",
            element: <Dashboard />,
          },
          {
            path: "/user/create-podcast",
            element: <CreatePodcast />,
          },
          {
            path: "/user/all-podcast",
            element: <AllPodcast />,
          },
          {
            path: "/user/create-episode",
            element: <CreateEpisode />,
          },
          {
            path: "/user/all-episodes",
            element: <AllEpisodes />,
          },
          {
            path: "/user/transactions",
            element: <Transactions />,
          },
          {
            path: "/user/subscriptions",
            element: <Subscriptions />,
          },
          {
            path: "/user/subscriber-list",
            element: <SubscriberList />,
          },
          {
            path: "/user/bookmarks",
            element: <Bookmark />,
          },
          {
            path: "/user/support-ticket",
            element: <SupportTicket />,
          },
          {
            path: "/user/new-ticket",
            element: <NewTicket />,
          },
          {
            path: "/user/profile-setting",
            element: <ProfileSetting />,
          },
          {
            path: "/user/change-password",
            element: <ChangePassword />,
          },
          {
            path: "/user/two-factor-authentication",
            element: <TwoFactorAuthentication />,
          },
          {
            path: "/user/add-balance",
            element: <AddBalance />,
          },
          {
            path: "/user/balance-history",
            element: <BalanceHistory />,
          },
          {
            path: "/user/withdraw-balance",
            element: <WithdrawBalance />,
          },
          {
            path: "/user/withdraw-history",
            element: <LogWithdrawal />,
          },
        ],
      },
    ],
  },
]);

export default router;

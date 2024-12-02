import {lazy} from "react";

const HomePage = lazy(() => import("../pages/homePage/HomePage"))
const BlogPage = lazy(() => import("../pages/blogPage/BlogPage"))
const PodcastPage = lazy(() => import("../pages/podcastPage/PodcastPage"))
const ResourcePage = lazy(() => import("../pages/resourcesPage/ResourcePage"))
const ContactPage = lazy(() => import("../pages/contactPage/ContactPage"))
const NewsPage = lazy(() => import("../pages/newsPage/NewsPage"))

const UserRoutes = [
    {
        path: "/",
        Component: HomePage
    },
    {
        path: "/news",
        Component: NewsPage
    },
    {
        path: "/blogs/:id",
        Component: BlogPage
    },
    {
        path: "/podcast",
        Component: PodcastPage
    },
    {
        path: "/resource",
        Component: ResourcePage
    },
    {
        path: "/contact",
        Component: ContactPage
    }
]

export default UserRoutes
import {lazy} from "react";

const HomePage = lazy(() => import("../builds/desktop/pages/homePage/HomePage"))
const BlogPage = lazy(() => import("../builds/desktop/pages/blogPage/BlogPage"))
const PodcastPage = lazy(() => import("../builds/desktop/pages/podcastPage/PodcastPage"))
const ResourcePage = lazy(() => import("../builds/desktop/pages/resourcesPage/ResourcePage"))
const ContactPage = lazy(() => import("../builds/desktop/pages/contactPage/ContactPage"))
const NewsPage = lazy(() => import("../builds/desktop/pages/newsPage/NewsPage"))

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
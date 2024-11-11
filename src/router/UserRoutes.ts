import NewsPage from "../builds/desktop/pages/newsPage/NewsPage";
import HomePage from "../builds/desktop/pages/homePage/HomePage";
import BlogPage from "../builds/desktop/pages/blogPage/BlogPage";
import PodcastPage from "../builds/desktop/pages/podcastPage/PodcastPage";
import ResourcePage from "../builds/desktop/pages/resourcesPage/ResourcePage";

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
        path: "/blog/:id",
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
]

export default UserRoutes
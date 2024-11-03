import NewsPage from "../builds/desktop/pages/newsPage/NewsPage";
import HomePage from "../builds/desktop/pages/homePage/HomePage";
import BlogPage from "../builds/desktop/pages/blogPage/BlogPage";

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
]

export default UserRoutes
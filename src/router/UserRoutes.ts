import NewsPage from "../builds/desktop/pages/news_page/NewsPage";
import HomePage from "../builds/desktop/pages/HomePage/HomePage";

const UserRoutes = [
    {
        path: "/",
        Component: HomePage
    },
    {
        path: "/news",
        Component: NewsPage
    },
]

export default UserRoutes
import NewsPage from "../builds/desktop/pages/newsPage/NewsPage";
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
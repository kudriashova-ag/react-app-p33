import { createBrowserRouter } from "react-router";
import App from "./App";
import TodoList from "./components/todo/TodoList";
import WeatherToday from "./components/weather/WeatherToday";
import Users from "./pages/Users";
import { getUser, getUsers, searchUsers } from "./loaders/usersLoader";
import User from "./pages/User";
import SearchResults from "./pages/SearchResults";
import Ref from "./components/learn/Ref";
import Register from "./pages/Register";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <TodoList />
            },
            {
                path: 'weather',
                element: <WeatherToday />
            },
            {
                path: 'ref',
                element: <Ref />
            },
            {
                path: 'users/:page?',
                loader: getUsers,
                element: <Users />
            },
            {
                path: 'user/:login',
                loader: getUser,
                element: <User />
            },
            {
                path: 'search',
                loader: searchUsers,
                element: <SearchResults />
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: "*",
                element: <h1>Page Not Found</h1>
            }
        ]
    },
])


export default router
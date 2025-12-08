import { createBrowserRouter } from "react-router";
import App from "./App";
import TodoList from "./components/todo/TodoList";
import WeatherToday from "./components/weather/WeatherToday";
import Users from "./pages/Users";
import { getUsers } from "./loaders/usersLoader";
import User from "./pages/User";

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
                path: 'users',
                loader: getUsers,
                element: <Users />
            },
            {
                path: 'users/:login',
                element: <User />
            },
            {
                path: "*",
                element: <h1>Page Not Found</h1>
            }
        ]
    },
])


export default router
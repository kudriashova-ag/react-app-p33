import { createBrowserRouter } from "react-router";
import App from "./App";
import TodoList from "./components/todo/TodoList";
import WeatherToday from "./components/weather/WeatherToday";

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
                path: "*",
                element: <h1>Page Not Found</h1>
            }
        ]
    },
])


export default router
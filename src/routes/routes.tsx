import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import HomePage from "../pages/HomePage";
import DetailPage from "../pages/DetailPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "/country/:code",
                element: <DetailPage />,
            },
        ],
    },
]);

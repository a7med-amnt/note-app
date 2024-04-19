import { createBrowserRouter, RouterProvider } from "#rrd";
import Main from "#layouts/main/Main";
import Auth from "#layouts/auth/Auth";
import Home from "#pages/home/Home";
import Signin from "#pages/signin/Signin";

export default function () {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Main />,
            children: [
                {
                    index: true,
                    element: <Home />
                }
            ]
        },
        {
            path: "/auth",
            element: <Auth />,
            children: [
                {
                    index: true,
                    element: <Signin />
                }
            ]
        }
    ]);
    return <RouterProvider router={router} />;
}

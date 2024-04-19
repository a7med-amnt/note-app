import { createBrowserRouter, RouterProvider } from "#rrd";
import Main from "#layouts/main/Main";
import Auth from "#layouts/auth/Auth";
import Home from "#pages/home/Home";
import AuthPage from "#pages/auth/Auth";
import Signin from "#pages/signin/Signin";
import Signup from "#pages/signup/Signup";

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
                    element: <AuthPage />
                },
                {
                    path: "signin",
                    element: <Signin />
                },
                {
                    path: "signup",
                    element: <Signup />
                }
            ]
        }
    ]);
    return <RouterProvider router={router} />;
}

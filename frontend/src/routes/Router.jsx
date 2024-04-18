import { createBrowserRouter,RouterProvider } from "#rrd";
import Main from "#layouts/main/Main";
import Home from "#pages/home/Home";

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
        }
    ]);
    return <RouterProvider router={router} />;
}

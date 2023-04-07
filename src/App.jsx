import React from "react";
import {
	createBrowserRouter,
	RouterProvider,
	Outlet,
} from "react-router-dom";
import Home from "./routes/Home";
import Portfolio from "./routes/Portfolio";
import About from "./routes/About";
import NotFound from "./routes/NotFound";
import Navbar from "./components/navbar/Navbar";
import "./index.css";

const Layout = () => {
    return (
        <>
        <Navbar />
        <div id="main">
            <Outlet />
        </div>
        </>
    )
}

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Home />,
				errorElement: <NotFound />,
			},
			{
				path: "/portfolio",
				element: <Portfolio />,
			},
			{
				path: "/about",
				element: <About />,
			},
		],
	},
]);

export default function App() {
	return (
		<React.StrictMode>
            <RouterProvider router={router} />
		</React.StrictMode>
	);
}

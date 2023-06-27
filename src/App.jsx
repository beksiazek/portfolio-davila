import React from "react";
import {
	createBrowserRouter,
	RouterProvider,
	Outlet,
} from "react-router-dom";
import Home from "./routes/Home";
import Portfolio from "./routes/Portfolio/Portfolio";
import About from "./routes/About/About";
import NotFound from "./routes/NotFound";
import Navbar from "./components/Navbar/Navbar";
import Socials from "./components/socials/Socials";
import "./index.css";
import Contact from "./routes/Contact/Contact";

const Layout = () => {
    return (
        <>
        <Navbar />
		<Socials />
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
				path: "/about",
				element: <About />,
			},
			{
				path: "/portfolio",
				element: <Portfolio />,
			},
			{path: "/contact",
		element: <Contact />},
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

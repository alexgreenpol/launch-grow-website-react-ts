import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import ApproachPage from "../pages/ApproachPage";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import PayerPage from "../pages/PayerPage";

const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <HomePage />,
        },
        {
            path: "/payers",
            element: <PayerPage />,
        },
        {
            path: "/approach",
            element: <ApproachPage />,
        },
        {
            path: "/about",
            element: <AboutPage />,
        },
        {
            path: "/contact",
            element: <ContactPage />,
        },
    ]);

    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    );
};

export default App;

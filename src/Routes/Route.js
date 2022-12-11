import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Aboute from "../Pages/Home/Aboute/Aboute";
import Contact from "../Pages/Home/Contact/Contact";
import Home from "../Pages/Home/Home/Home";
import ProjectDetails from "../Pages/Home/ProjectDetails/ProjectDetails";
import Projects from "../Pages/Home/Projects/Projects";
import Skills from "../Pages/Home/Skills/Skills";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/skill',
                element: <Skills></Skills>
            },
            {
                path: '/project',
                element: <Projects></Projects>
            },
            {
                path: '/aboute',
                element: <Aboute></Aboute>
            },
            {
                path: '/projects/:id',
                element: <ProjectDetails></ProjectDetails>
            }


        ]
    }
])
export default router;
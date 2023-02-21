import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Main from "../../Layout/Main";
import GetPetById from "../../Pages/GetPetById/GetPetById";

import Homepage from "../../Pages/Homepage/Homepage";
import About from "../../Pages/Profile/About/About";
import AddPet from "../../Pages/Profile/AddPet/AddPet";
import MyPosts from "../../Pages/Profile/MyPosts/MyPosts";

import ProfilePage from "../../Pages/Profile/ProfilePage/ProfilePage";
import Settings from "../../Pages/Profile/Settings/Settings";
import SinglePetPage from "../../Pages/Profile/SinglePetPage/SinglePetPage";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",

        element: <Homepage></Homepage>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoutes>
            <ProfilePage></ProfilePage>
          </PrivateRoutes>
        ),
      },
      {
        path: "/add-pet",
        element: <PrivateRoutes><AddPet></AddPet></PrivateRoutes>,
      },
      {
        path: "/my-posts",
        element: <PrivateRoutes><MyPosts></MyPosts></PrivateRoutes>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/settings",
        element: <PrivateRoutes><Settings></Settings></PrivateRoutes>,
      },
      {
        path: "/petById",
        element: <GetPetById></GetPetById>,
      },
      {
        path: '/pets/:id',
        loader: ({ params }) => fetch(`http://localhost:5000/pets/${params.id}`),
        element: <SinglePetPage></SinglePetPage>
      }
    ],
  },
]);

export default router;

import React, { lazy } from "react";
import { Navigate } from "react-router-dom";

const Home = lazy(() => import("@/views/home/index"));
const Page1 = lazy(() => import("@/views/page1/index"));
const Page2 = lazy(() => import("@/views/page2/index"));
const Page3 = lazy(() => import("@/views/page3/index"));

const loadingElement = (component: JSX.Element) => (
  <React.Suspense fallback={<div>loading...</div>}>{component}</React.Suspense>
);

const routes = [
  {
    path: "/",
    element: <Navigate to="/page1" />,
  },
  {
    path: "/",
    element: loadingElement(<Home />),
    children: [
      {
        path: "/page1",
        element: loadingElement(<Page1 />),
      },
      {
        path: "/page2",
        element: loadingElement(<Page2 />),
      },
      {
        path: "/page3",
        element: loadingElement(<Page3  />),
      },
    ],
  },
];

// const baseRouter = () => (
//   <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<App />}>
//         <Route path="/" element={<Navigate to="/home" />}></Route>
//         <Route path="/home" element={<Home />}></Route>
//       </Route>
//     </Routes>
//   </BrowserRouter>
// );

export default routes;

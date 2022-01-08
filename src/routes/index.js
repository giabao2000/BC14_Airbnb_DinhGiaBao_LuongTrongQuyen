import { lazy } from "react";
import HomeTemplate from "../containers/HomeTemplate";

const routesHome = [
  {
    // localhost:3000
    exact: true,
    path: "/",
    component: lazy(() => import("../containers/HomeTemplate/HomePage")),
  },

  {
    exact: false,
    path: "/list-room/:id",
    component: lazy(() => import("../containers/HomeTemplate/ListRoomPage")),
  },

  {
    exact: false,
    path: "/detail/:id",
    component: lazy(() => import("../containers/HomeTemplate/DetailPage")),
  },
];

function renderRoutesHome() {
  return routesHome.map((route, index) => {
    return (
      <HomeTemplate
        key={index}
        exact={route.exact}
        path={route.path}
        Component={route.component}
      />
    );
  });
}

export { renderRoutesHome };

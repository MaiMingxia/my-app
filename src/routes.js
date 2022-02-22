const PATH_USER = "/home";
const PATH_ABOUT = "/about";
export const routes = [
  {
    path: PATH_USER,
    load: () => import("./pages/Home"),
  },
  {
    path: PATH_ABOUT,
    load: () => import("./pages/About"),
  },
];
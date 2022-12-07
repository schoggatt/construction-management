import "./App.scss";
import { Project } from "./models/class/Project";
import { NavigationBar } from "./shared/components/NavigationBar";
import { Home } from "./views/Home";
import { useRoutes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { AboutMe } from "./views/AboutMe";

function App() {
  const routes = useRoutes([
    {
      path: "/",
      element: <NavigationBar />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/aboutme",
          element: <AboutMe />,
        },
      ],
    },
    {
      path: "*",
      element: <h1>This page does not exist but Waifu.pics does...</h1>,
    },
  ]);

  return <div className="App">{routes}</div>;
}

export default App;

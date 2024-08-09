import "./App.css";
import Body from "./components/Body/Body";
import Head from "./components/Head/Head";
import { Provider } from "react-redux";
import store from "./store/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer/MainContainer";
import WatchPage from "./components/WatchPage/WatchPage";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <Head />
      <RouterProvider router={AppRouter} />
    </Provider>
  );
}

export default App;

import "./App.css";
import Body from "./components/Body/Body";
import Head from "./components/Head/Head";
import { Provider } from "react-redux";
import store from "./store/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer/MainContainer";
import WatchPage from "./components/WatchPage/WatchPage";
import Demo from "./components/Demo";
import Demo2 from "./components/Demo2";

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
      {
        path: "demo",
        element: (
          <>
            <Demo /> <Demo2 />
          </>
        ),
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

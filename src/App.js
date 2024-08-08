import "./App.css";
import Body from "./components/Body/Body";
import Head from "./components/Head/Head";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <Head />
      <Body />
    </Provider>
  );
}

export default App;

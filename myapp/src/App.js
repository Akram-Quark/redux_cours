import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/cakes/store";
import Hookes from "./components/Hookes";
import IceCream from "./components/IceCream";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Hookes></Hookes>
        <IceCream></IceCream>
      </div>
    </Provider>
  );
}

export default App;

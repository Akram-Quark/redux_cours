import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import ItemContainer from "./components/ItemContainer";
import store from "./redux/cakes/store";
import IceCream from "./components/IceCream";
import CackeContainer from "./components/CackeContainer";
import UserContainer from "./components/UserContainer";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer></UserContainer>
      </div>
    </Provider>
  );
}

export default App;

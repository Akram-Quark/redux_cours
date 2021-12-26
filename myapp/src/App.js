import logo from "./logo.svg";
import "./App.css";
import CackeContainer from "./components/CackeContainer";
import { Provider } from "react-redux";
import store from "./redux/cakes/store";
import Hookes from "./components/Hookes";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Hookes></Hookes>
        <CackeContainer></CackeContainer>
      </div>
    </Provider>
  );
}

export default App;

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { Router } from "./routes";
import { store } from "@store/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  );
}

export default App;

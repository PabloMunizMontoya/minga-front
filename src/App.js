import indexRouter from "./routes/index.js";
import { RouterProvider } from "react-router-dom";
import "./App.css";

import { Provider } from "react-redux";
import store from "./store/store.js";
function App() {
  return (
            <Provider store={store}>
              <RouterProvider router={indexRouter}/>
            </Provider>
  );
}

export default App;
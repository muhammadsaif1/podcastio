import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import BackToTop from "./components/BackToTop/BackToTop";

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
      <BackToTop />
    </Provider>
  );
};

export default App;

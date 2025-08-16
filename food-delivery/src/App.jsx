import { BrowserRouter} from "react-router-dom";
import Header from "./components/inc/Header";
import BadSignupForm from "./signUp";
import AppRoutes from "./routes";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="p-5 my-10">
        <ToastContainer/>
        <AppRoutes />
      </main>
    </BrowserRouter>
  );
}

export default App;

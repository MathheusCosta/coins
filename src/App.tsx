import { Toaster } from "react-hot-toast";
import { Router } from "./router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;

import { RouterProvider } from "react-router-dom";
import './App.css';
import ProductProvider from "./context/ProductProvider";
import routes from "./routes/routes.js";
function App() {
  return (
    <div>
      <ProductProvider>
        <RouterProvider router={routes}/>
      </ProductProvider>
    </div>
  );
}

export default App;
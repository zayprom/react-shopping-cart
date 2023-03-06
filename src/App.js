import ProductApiCall from "./apis/ProductsApi";
import Header from "./components/Header";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="main">
      <NavBar />
      <Header />
      <ProductApiCall />
    </div>
  );
}

export default App;

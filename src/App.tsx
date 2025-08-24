import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import FilterPanel from "./components/FilterPanel";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import "./styles.css"; 
import "./index.css";

export default function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <FilterPanel />
      <MainContent />
      <Footer />
    </div>
  );
}

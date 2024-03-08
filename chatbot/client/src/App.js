import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OutletPage from "./Outlet/OutletPage";
import Home from "./components/main_pages/home";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<OutletPage />}>
          <Route index element={<Home />}></Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

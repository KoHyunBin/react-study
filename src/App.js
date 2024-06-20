import "./css/header_footer.css";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import Header from "./component/header";
import Footer from "./component/footer";
import Component1 from "./component/contents1";
import Component2 from "./component/contents2";
import Calculator from "./component/calculator/calculator";

const Layout = () => {
  const locate = useLocation();
  console.log(locate);

  return (
    <>
      {/*!locate.pathname.includes("/component2") && <Header />*/}
      {!locate.pathname.includes("/component2") && <Header />}
      <Routes>
        <Route exact path="/component1" element={<Component1 />} />
        <Route exact path="/component2" element={<Component2 />} />
        <Route exact path="/calculator" element={<Calculator />} />
      </Routes>
      <Footer />
    </>
  );
};
function App() {
  return (
    <>
      <Router>
        <Layout />
      </Router>
    </>
  );
}

export default App;

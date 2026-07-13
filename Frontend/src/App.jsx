import Header from "./components/Header.jsx";

import Footer from "./components/Footer.jsx";
import { AppRoutes } from "./routes/AppRoutes.jsx";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith("/admin-panel");
  return (
    <>
      <Header />
      <AppRoutes />
      {!isAdmin && <Footer />}
    </>
  );
}

export default App;

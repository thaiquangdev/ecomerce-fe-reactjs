import { Route, Routes } from "react-router-dom";
import { path } from "./utils/path";
import MainLayout from "./layouts/main-layout";
import Home from "./pages/home";

function App() {
  return (
    <>
      <Routes>
        <Route path={path.HOME} element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

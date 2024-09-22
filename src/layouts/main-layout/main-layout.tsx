import { Outlet } from "react-router-dom";
import Header from "../../components/header";
import TopHeader from "../../components/top-header";
import Footer from "../../components/footer";

const MainLayout = () => {
  return (
    <div>
      <TopHeader />
      <Header />
      {<Outlet />}
      <Footer />
    </div>
  );
};

export default MainLayout;

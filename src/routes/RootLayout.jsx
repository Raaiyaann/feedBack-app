import MainHeader from "../components/MainHeader";
import { Outlet } from "react-router-dom"; // jadi Outlet ini komponen khusus yang
// berfungsi untuk merender children route di main.jsx, karena kalau tidak pakai ini nanti tidak tampil komponen route children

function RootLayout() {
  return (
    <div className="app-container">
      <MainHeader />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
export default RootLayout;

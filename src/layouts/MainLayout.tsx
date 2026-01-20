import Header from "@/components/Header";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="w-full max-w-5xl mx-auto min-h-screen bg-background">
      <Header />
      <main className="py-6">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;

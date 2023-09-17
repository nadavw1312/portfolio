import Header from "./Header";
import Footer from "./Footer";
import { PreloadProvider } from "@/context/PreloadContext";
import { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative">
      <Header />
      <PreloadProvider>{children}</PreloadProvider>
      <Footer />
    </div>
  );
};
export default Layout;

import { motion, useScroll } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";
import { PreloadProvider } from "@/context/PreloadContext";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { scrollYProgress } = useScroll();

  return (
    <div className=" relative">
      <div className="fixed z-10 h-2 w-full bg-white dark:bg-black main-transition"></div>
      <motion.div
        className="fixed top-0 left-0 right-0 z-10 h-2 bg-primary-color transform origin-left"
        style={{ scaleX: scrollYProgress }}
      />
      <Header />
      <PreloadProvider>{children}</PreloadProvider>
      <Footer />
    </div>
  );
};
export default Layout;

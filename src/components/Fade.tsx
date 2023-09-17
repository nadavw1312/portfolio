import { cn } from "@/lib/utils";
import { useInView } from "react-intersection-observer";

const Fade = ({ children }: { children: React.ReactNode }) => {
  const { ref, inView } = useInView({ rootMargin: "-30% 0px -30% 0px" });

  return (
    <div
      ref={ref}
      className={cn(
        "transition-opacity ease-in !duration-1000 opacity-100",
        inView ? "opacity-100" : "opacity-0"
      )}
    >
      {children}
    </div>
  );
};
export default Fade;

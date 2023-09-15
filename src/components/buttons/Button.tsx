import { cn } from "@/lib/utils";

type ButtonProps = {
  variant?: "outline";
} & React.ComponentPropsWithRef<"button">;

const Button = ({ children, className, variant = "outline" }: ButtonProps) => {
  return (
    <button
      className={cn(
        "inline-flex items-center rounded font-medium",
        "focus-visible:ring-primary-500 focus:outline-none focus-visible:ring",
        "shadow-sm",
        "transition-colors duration-75",
        [
          variant === "outline" && [
            "text-primary-500",
            "border-primary-500 border",
            "hover:bg-primary-50 active:bg-primary-100 disabled:bg-primary-100",
            "dark:hover:bg-gray-900 dark:active:bg-gray-800 dark:disabled:bg-gray-800",
          ],
        ]
      )}
    >
      {children}
    </button>
  );
};
export default Button;

import { VscTerminalCmd } from "react-icons/vsc";

const ShellContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" box-border dark:shadow-cyan-900 shadow-2xl max-w-[500px]">
      <header className="px-1 flex flex-row items-center gap-2 bg-black text-gray-200 dark:bg-white dark:text-gray-600">
        <VscTerminalCmd className="h-4 w-4 bg-black" />
        <p>Command Prompt</p>
      </header>
      <div className="overflow-y-scroll max-h-[400px] px-2">
        <div className="flex flex-row">
          <p>{"C:\\Users\\nadav>"}</p>
          <p className="transition transition-opacity">_</p>
        </div>
        <div>{children}</div>
        <div className="min-h-[3000px]"></div>
      </div>
    </div>
  );
};
export default ShellContainer;

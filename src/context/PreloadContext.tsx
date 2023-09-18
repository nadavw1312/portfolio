import clsx from "clsx";
import * as React from "react";

const PreloadContext = React.createContext<boolean>(false);

export function PreloadProvider({ children }: { children: React.ReactNode }) {
  /** If the dom is loaded */
  const [preloaded, setIsPreloaded] = React.useState<boolean>(false);
  const [headerFooterHeight, setHeaderFooterHeight] = React.useState(0);

  React.useEffect(() => {
    setTimeout(() => {
      setIsPreloaded(true);
      const headerHeight = document.getElementById("main-header")?.offsetHeight;
      const footerHeight = document.getElementById("main-footer")?.offsetHeight;
      if (headerHeight && footerHeight) {
        const totalHeight = headerHeight + footerHeight;
        setHeaderFooterHeight(totalHeight);
        const style = document.createElement("style");
        style.textContent = `
        .min-h-footer-header{
          min-height: calc(100vh - ${totalHeight}px);
        }
        .min-h-header{
          min-height: calc(100vh - ${headerHeight}px);
        }
        `;
        document.head.appendChild(style);
      }
    }, 200);
  }, []);

  return (
    <PreloadContext.Provider value={preloaded}>
      <div />
      {children}
    </PreloadContext.Provider>
  );
}

export const usePreloadState = () => React.useContext(PreloadContext);

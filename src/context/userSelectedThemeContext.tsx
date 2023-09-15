import { useTheme } from "next-themes";
import { createContext, useEffect, useState } from "react";

export const userSelectedThemeContext = createContext({
  selectedTheme: "",
  setSelectedTheme: (theme: string) => {},
} as { selectedTheme: string; setSelectedTheme: (theme: string) => void });

export const UserSelectedThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selectedTheme, setSelectedTheme] = useState("");
  const { theme } = useTheme();

  useEffect(() => {
    setSelectedTheme(theme as string);
  }, []);

  return (
    <userSelectedThemeContext.Provider
      value={{ selectedTheme, setSelectedTheme }}
    >
      {children}
    </userSelectedThemeContext.Provider>
  );
};

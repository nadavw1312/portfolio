"use client";
import React, { useContext, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { userSelectedThemeContext } from "@/context/userSelectedThemeContext";

const LightDarkModeButton = () => {
  const { setSelectedTheme } = useContext(userSelectedThemeContext);
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const isDarkMode = theme === "dark";

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const hanldeThemeChange = () => {
    if (isDarkMode) {
      setTheme("light");
      setSelectedTheme("light");
    } else {
      setTheme("dark");
      setSelectedTheme("dark");
    }
  };

  return isMounted ? (
    <button
      aria-labelledby="light-dark-mode"
      onClick={hanldeThemeChange}
      className="p-2 h-full w-full flex items-center justify-center border-2 border-gray-300 dark:border-gray-700 rounded-md hover:text-primary-color hover:border-primary-color dark:hover:border-primary-color"
    >
      {theme === "dark" ? (
        <SunIcon className="h-4 w-4 " />
      ) : (
        <MoonIcon className="h-4 w-4" />
      )}
    </button>
  ) : (
    <></>
  );
};

export default LightDarkModeButton;

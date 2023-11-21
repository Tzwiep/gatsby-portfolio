import React, { useState, useEffect } from "react";


const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  useEffect(() => {
    const className = 'dark';
    const bodyClass = window.document.body.classList;
    darkMode ? bodyClass.add(className) : bodyClass.remove(className);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
      <input 
        type="checkbox" 
        name="toggle" 
        id="toggle" 
        className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
        onClick={() => setDarkMode(!darkMode)}
        checked={darkMode}
      />
      <label htmlFor="toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer p-3">
      </label>
    </div>
  );
};

export default ThemeToggle;

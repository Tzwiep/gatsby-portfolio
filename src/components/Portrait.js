
   
   import React, { useState, useEffect } from 'react';
   import { StaticImage } from 'gatsby-plugin-image';
   
   export function Portrait() {
       const [isDarkMode, setIsDarkMode] = useState(false);
   
       useEffect(() => {
           // Check if the 'dark' class is applied to the body
           const checkDarkMode = () => {
               setIsDarkMode(document.body.classList.contains('dark'));
           };
   
           // Set the initial state
           checkDarkMode();
   
           // Add an event listener for class changes on the body
           // This can be replaced with your dark mode toggle logic
           const observer = new MutationObserver(checkDarkMode);
           observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
   
           // Clean up the observer on component unmount
           return () => observer.disconnect();
       }, []);
   
       return (
           <div>
               {isDarkMode ? (
                   <StaticImage src="../images/squareTZ-dark.jpg" alt="Tyler in Dark Mode" className="mt-8 mx-0 xl:mx-8 xl:mt-4" />
               ) : (
                   <StaticImage src="../images/squareTZ.png" alt="Tyler" className="mt-8 mx-0 xl:mx-8 xl:mt-4" />
               )}
           </div>
       );
   }
   
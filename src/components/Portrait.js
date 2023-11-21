import { StaticImage } from "gatsby-plugin-image"
import React from 'react'

export function Portrait() {
   return <>
      <StaticImage src="../images/squareTZ-dark.jpg" alt="Tyler in Dark Mode" className="hidden mt-8 mx-0 xl:mx-8 xl:mt-4 dark:block" />
   <StaticImage src="../images/squareTZ.png" alt="Tyler" className="mt-8 mx-0 xl:mx-8 xl:mt-4 dark:hidden" />
</>
   }
   

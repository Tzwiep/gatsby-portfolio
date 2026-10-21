import React from 'react'
import WorkCard from './WorkCard'

 const Work = () => {
    return (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 gap-y-16 xl:gap-4 mb-8 ">
             <WorkCard
                work="Interkom"
                role="Web Developer"
                year="2021 – Present"
                online="true"
                location="interkom.ca"
                duty="I take ownership of most of Interkom's website projects from planning through launch. That usually means scoping the work with the client, sorting out the information architecture and UX, designing the site, and building it in WordPress with ACF content structures, Gravity Forms, and WooCommerce or Shopify where there's a store. I also set up the pieces around the site: GA4 and Tag Manager, Cloudflare, DNS, hosting and SSL, migrations, third-party integrations, QA, launch, and client training. After launch I'm the person who supports it, which includes debugging the odd legacy site or hosting environment nobody else wants to touch. Clients include municipalities, tourism organizations, arts organizations, nonprofits, and businesses."
            />
            <WorkCard
                work="Caleidoscope"
                role="Design & Development · Digital Media"
                year="2016 – 2021"
                online="false"
                location="Ontario"
                duty="Designed and built Squarespace and Shopify websites with custom CSS and JavaScript, handled ongoing content updates and ecommerce setup, and produced photography and digital media for product and brand work."
            />
         </div>
    )
}

 export default Work

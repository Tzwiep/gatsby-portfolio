import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import NavLinks from "../components/navLinks"
import Project from "../components/Project"
import Seo from "../components/Seo"
import { Fade } from 'react-awesome-reveal';
import "../styles/projects.css"

// A small thumbnail card used in the Other work and Things I make grids.
const Thumb = ({ name, note, url, image }) => (
  <div>
    <a href={url} target="_blank" rel="noreferrer" className="thumb_link block border border-black dark:border-off-white">
      {image}
    </a>
    <p className="mt-2 leading-snug">
      <a className="other_link font-bold" href={url} target="_blank" rel="noreferrer">{name}</a>
      <br />
      <span className="font-light text-sm">{note}</span>
    </p>
  </div>
)

const earlierWork = [
  { name: "BabySteps", note: "iOS baby-milestone scrapbook app, Swift", url: "https://github.com/Tzwiep/BabySteps" },
  { name: "Baby Milestones", note: "CRUD web app, Node.js, Express, Handlebars, MongoDB" },
  { name: "BabySprinkle", note: "virtual baby shower web app, ASP.NET", url: "https://github.com/Tzwiep/BabySprinkle" },
  { name: "Dictionary App", note: "Java desktop app using the WordsAPI", url: "https://github.com/Tzwiep/DictionaryApp" },
  { name: "Barrie Dental Hygiene", note: "custom Squarespace website", url: "https://www.barriedentalhygiene.ca" },
  { name: "Thght Snctry", note: "3D product renders in Adobe Dimension", url: "https://thghtsnctry.co/" },
]

const ProjectsPage = () => {
    return (

        <main className="mx-8 page">
            <NavLinks />
            <h1 className="titleText">Projects</h1>
            <p className="font-light ml-2 md:ml-0 max-w-prose -mt-2">
                Selected sites I've designed, built, or supported. Most of this work was done at Interkom, a marketing
                agency in Ontario, and the role line on each one says what I actually did.
            </p>

            <Project
                title="Town of South Bruce Peninsula"
                category="Municipal website"
                url="https://southbrucepeninsula.com/"
                role="Design · Development · Technical Implementation"
                attribution="Completed at Interkom"
                tags={["Platform migration", "Information architecture", "WordPress", "ACF Pro", "Search", "Events", "Gravity Forms", "Brevo", "GA4 / GTM", "Cloudflare", "Accessibility", "Ongoing support"]}
                image={<StaticImage src="../images/projects/south-bruce-peninsula.png" alt="Town of South Bruce Peninsula homepage, with the main navigation, site search, and popular links bar" />}
            >
                <p>
                    A large municipal website that has to work for residents, visitors, council, and staff at the same time.
                    The project was a migration off a proprietary municipal vendor platform onto WordPress, and I took
                    ownership of the web work from planning through launch: reorganizing the site's information architecture
                    from the ground up, the design, and the WordPress build, with custom content structures for services,
                    public notices, and events, site search tuned with Relevanssi, The Events Calendar, Gravity Forms, a Brevo
                    newsletter integration, and GA4 and Tag Manager. The site runs behind Cloudflare, and I handled hosting,
                    deployment, and accessibility, and have supported it since launch.
                </p>
                <p>
                    The interesting part wasn't the stack. It was getting a few hundred pages of municipal content out of a
                    locked-down vendor system and into a structure people can find things in, and building it so staff can
                    keep it that way.
                </p>
            </Project>

            <Project
                title="Visit Markham"
                category="Tourism website"
                url="https://visitmarkham.ca/"
                role="Web Development · Design Support · Analytics · Ongoing Support"
                attribution="Completed at Interkom"
                tags={["WordPress", "Flexible content", "Landing pages", "Events", "Reservation links", "GA4 / GTM", "Ongoing support"]}
                image={<StaticImage src="../images/projects/visit-markham.png" alt="Visit Markham Things to Do page, with a full-width photo and introduction to attractions and activities" />}
            >
                <p>
                    Destination Markham's site is less a one-time build than a platform that changes with the tourism
                    calendar. I handle ongoing development on the WordPress site: flexible content structures for things
                    to do, dining, events, and seasonal campaigns, landing pages for new initiatives, custom content types,
                    and reservation and partner links with GA4 and Tag Manager conversion tracking behind them.
                </p>
                <p>
                    Most of the work is making sure the next campaign can launch quickly without the site turning into a
                    pile of one-offs.
                </p>
            </Project>

            <Project
                title="Whitby Tourism"
                category="Tourism landing page"
                url="https://whitbytourism.ca/"
                role="Design & Development"
                attribution="Completed at Interkom"
                tags={["Web design", "Landing page", "Responsive front end", "Cloudflare", "Campaign tracking"]}
                image={<StaticImage src="../images/projects/whitby-tourism.png" alt="Whitby Tourism homepage with a large photo and bold headline" />}
            >
                <p>
                    A focused landing page for Whitby's new tourism brand, deployed on Cloudflare: big photography, a bold
                    headline treatment, and a short path to planning a visit. I designed and built it, including the
                    responsive front end and the campaign tracking behind it. It's the first piece of the destination's web
                    presence, ahead of a larger tourism website that's currently in development, and the most current example
                    of how I like to turn a brand into a web page.
                </p>
            </Project>

            <Project
                title="Interkom"
                category="Agency website"
                url="https://interkom.ca/"
                role="Design · Development"
                attribution="Interkom's own site"
                tags={["Site architecture", "Web design", "Responsive front end", "WordPress", "Content structure", "Ongoing development"]}
                image={<StaticImage src="../images/projects/interkom.png" alt="Interkom homepage featured work section with a grid of project photography" />}
            >
                <p>
                    I designed and developed Interkom's current website: the site architecture, the visual design, the
                    responsive front end, the WordPress implementation, the content structure, and the ongoing development
                    since. It's the one project here
                    where the design decisions are entirely mine, so it's a fair sample of my taste when nobody else is
                    holding the pen.
                </p>
            </Project>

            <Project
                title="MacLaren Art Centre"
                category="Public art gallery · Ecommerce"
                url="https://maclarenart.com/"
                role="Web Development · Ecommerce · Ongoing Support"
                attribution="Completed at Interkom"
                tags={["WordPress", "WooCommerce", "Moneris", "Events", "Content", "Ongoing support"]}
                image={<StaticImage src="../images/projects/maclaren-art-centre.png" alt="MacLaren Art Centre adult classes and workshops listing, with photos, dates, and prices for each program" />}
            >
                <p>
                    The MacLaren is a public art gallery with a shop, memberships, classes, and events all running through
                    one WordPress and WooCommerce site, with payments through Moneris. I handle development and ongoing
                    support: keeping the commerce side working through plugin, payment, and theme updates, adding content
                    and event features as the gallery's programming changes, and sorting out the problems a live store
                    produces.
                </p>
                <p>Commerce sites break in interesting ways. This one has taught me most of them.</p>
            </Project>

            <Project
                title="Ethereal Body"
                category="Shopify storefront"
                url="https://ethereal-body.com/"
                linkLabel="View store"
                role="Design & Development"
                tags={["Shopify", "Theme customization", "Front-end design", "Product merchandising", "Responsive storefront"]}
                image={<StaticImage src="../images/projects/ethereal-body.png" alt="Ethereal Body shop page, with a grid of botanical oil products on coloured fabric backgrounds" />}
            >
                <p>
                    A small botanical body-care brand on Shopify. I customized the theme and built out the storefront: the
                    front-end design, product and collection merchandising, and a responsive shopping experience that
                    stays out of the way of the photography. Ongoing work includes product launches and seasonal updates.
                </p>
            </Project>

            <div className="flex-col mt-16 ml-2 md:ml-0">
                <h2 className="font-bold text-2xl pb-2">Other work</h2>
                <p className="font-light mb-4 max-w-prose">A few more sites I've worked on.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    <Thumb name="Schwartz Legacy Planning Group" note="Financial planning firm" url="https://slpg.ca/"
                        image={<StaticImage src="../images/projects/other-slpg.png" alt="Schwartz Legacy Planning Group homepage" />} />
                    <Thumb name="Centre In The Square" note="Performing arts venue" url="https://centreinthesquare.com/"
                        image={<StaticImage src="../images/projects/other-centre-in-the-square.png" alt="Centre In The Square homepage with a featured performer" />} />
                    <Thumb name="Georgian Triangle Humane Society" note="Animal shelter and nonprofit" url="https://gths.ca/"
                        image={<StaticImage src="../images/projects/other-gths.png" alt="Georgian Triangle Humane Society dogs for adoption page" />} />
                </div>
            </div>

            <h1 className="titleText mt-16">Things I make</h1>
            <div className="ml-2 md:ml-0 -mt-2">
                <p className="font-light mb-6 max-w-prose">Side projects, a few sites in progress, and experiments. None of these are products yet. All of them are fun.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-10">
                    <Thumb name="Tiny Atlas" note="Map maker made with my son · React · Vite · ongoing" url="https://tinyatlas.app/"
                        image={<StaticImage src="../images/projects/tiny-atlas.png" alt="Tiny Atlas homepage with an illustrated map of roads, houses, and a train line" />} />
                    <Thumb name="Craig Gouweloos" note="Portfolio site for a director and filmmaker · Astro · in progress · Netlify" url="https://starlit-squirrel-5db630.netlify.app/"
                        image={<StaticImage src="../images/projects/craig-gouweloos.png" alt="Craig Gouweloos portfolio homepage with large black type on yellow" />} />
                    <Thumb name="Ace Contracting" note="Website for a renovation contractor · in progress · Cloudflare Pages" url="https://4aec26bc.ace-contracting.pages.dev/"
                        image={<StaticImage src="../images/projects/ace-contracting.png" alt="Ace Contracting homepage hero with a renovated bathroom and the headline Spaces made for living" />} />
                </div>

                <h2 className="font-bold text-2xl pb-1">Fleetwood's Field Guide</h2>
                <p className="text-sm mb-2"><span className="font-bold">Family project</span></p>
                <p className="font-light mb-8">
                    A field guide to everything: photos, discoveries, and the things the kids bring home from outside.
                </p>

                <h2 className="font-bold text-2xl pb-1">Daisy Dogs</h2>
                <p className="text-sm mb-2"><span className="font-bold">Tiny experiment</span></p>
                <p className="font-light mb-8">
                    A very small site built for my daughter. Dogs, mostly.
                </p>
            </div>

            <div className="flex-col mt-8 ml-2 md:ml-0 max-w-prose">
                <h2 className="font-bold text-2xl pb-2">Earlier work</h2>
                <p className="font-light mb-3">School and early projects, kept for the record.</p>
                <ul className="font-light">
                    {earlierWork.map(({ name, url, note }) => (
                        <li key={name} className="mb-1">
                            {url
                                ? <a className="other_link" href={url} target="_blank" rel="noreferrer">{name}</a>
                                : <span>{name}</span>}
                            <span> · {note}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="flex-col mt-16 mb-8 text-center">
                <div className="border-t border-gray-300 w-4/5 mx-auto mb-16">
                <Fade direction="up">
                    <div>
                    <StaticImage src="../images/tech/gatsby.png" alt="Gatsby Icon" className="tech_thumb" />
                    <StaticImage src="../images/tech/react.png" alt="React Icon" className="tech_thumb" />
                    <StaticImage src="../images/tech/tailwind.png" alt="Tailwind CSS Icon" className="tech_thumb" />
                    <StaticImage src="../images/icons/logo-vercel.svg" alt="Vercel Icon" className="tech_thumb dark:invert" />
                    </div>
                    <p className="font-light mt-1 mb-6">This site runs on <b>Gatsby</b>, <b>React</b>, and <b>Tailwind CSS</b>, is deployed on <b>Vercel</b>, and gets maintained with some help from <b>Claude</b>.</p>
                    <a className="link_btn" href="https://github.com/Tzwiep/gatsby-portfolio" target="_blank" rel="noreferrer">View on GitHub</a>
                    </Fade>
                </div>
            </div>

        </main>

    )
}

export default ProjectsPage

export const Head = () => (
  <Seo
    title="Projects | Tyler Zwiep"
    description="Selected websites designed, built, and supported by Tyler Zwiep: municipal, tourism, arts, agency, and ecommerce work on WordPress and Shopify."
  />
)

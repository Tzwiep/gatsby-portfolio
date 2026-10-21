import React, { useState } from "react"

const foundations = [
  { group: "Core", items: ["HTML", "CSS / Sass", "JavaScript", "PHP", "SQL", "Git"] },
  { group: "Web & CMS", items: ["WordPress", "ACF Pro", "WooCommerce", "Gravity Forms", "Shopify", "React"] },
  { group: "Infrastructure", items: ["Cloudflare", "DNS", "Linux", "Hosting", "SSL", "Migrations", "Performance", "Security"] },
  { group: "Analytics", items: ["GA4", "Google Tag Manager", "Looker Studio"] },
  { group: "Other", items: ["REST APIs", "GitHub", "Command line / SSH"] },
]

const now = ["Claude", "Codex", "Terminal"]

const tabClass = (active) =>
  "border border-black px-4 py-1 min-w-full md:min-w-0 dark:border-off-white " +
  (active ? "bg-black text-white dark:bg-off-white dark:text-dark-theme" : "")

const Skills = () => {
  const [showNow, setShowNow] = useState(false)

  return (
    <div className="mx-4 mb-8">
      <div className="grid grid-cols-2 md:inline-grid md:grid-cols-2 mb-8" role="group" aria-label="Choose which list to show">
        <button type="button" className={tabClass(!showNow)} aria-pressed={!showNow} onClick={() => setShowNow(false)}>
          Things I know
        </button>
        <button type="button" className={tabClass(showNow) + " border-l-0"} aria-pressed={showNow} onClick={() => setShowNow(true)}>
          Things I actually type
        </button>
      </div>

      {showNow ? (
        <div className="mb-8">
          <ul className="flex flex-row flex-wrap gap-x-10 gap-y-4 text-3xl md:text-5xl font-bold mb-4">
            {now.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="font-light">The fundamentals are still doing some work.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-6 mb-8">
          {foundations.map(({ group, items }) => (
            <div key={group}>
              <h3 className="font-bold pb-1 mb-2 border-b border-black dark:border-off-white">{group}</h3>
              <ul className="font-light">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      <p className="font-light max-w-prose">
        I use AI heavily in my day-to-day development: implementation, debugging, research, refactoring, repetitive
        tasks, and quick prototypes. Tools like Claude and Codex are part of how I work, not a secret. The practical
        effect is that more of my time goes to architecture, UX, testing, problem solving, project decisions, and what
        the client actually needs. If that's how your team works, or you'd like it to be, we'll get along.
      </p>
    </div>
  )
}

export default Skills

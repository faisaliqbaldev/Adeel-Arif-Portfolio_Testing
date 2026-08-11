import React from 'react'

const Language_About = () => {
    const languageData = [
  { language: 'English', proficiency: 'Fluent' },
  { language: 'Urdu', proficiency: 'Mother Tongue' },
  { language: 'Punjabi', proficiency: 'Good' },
]
  return (
     <div className="md:col-span-12 mt-8 md:mt-0">
      <h2 classNameName="text-headline-md font-headline-md text-primary mb-8 border-b border-border-subtle pb-4">Languages</h2>

      <div className="flex flex-wrap gap-4">
        {languageData.map((item) => (
          <div
            key={item.language}
            className="bg-surface-ivory border border-border-subtle px-6 py-4 flex items-center justify-between min-w-[200px]"
          >
            <span className="text-body-md font-body-md text-primary font-semibold">
              {item.language}
            </span>
            <span className="text-label-caps font-label-caps text-secondary ml-4">
              {item.proficiency}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Language_About
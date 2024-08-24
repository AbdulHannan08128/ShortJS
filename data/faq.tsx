import * as React from 'react'

const faq = {
  title: 'Frequently Asked Questions',
  items: [
    {
      q: 'How many projects can I use ArchetJS for?',
      a: (
        <>
          A single license allows you to use ArchetJS for one commercial project
          or application. You can buy additional licenses for more projects or
          applications. There are no restrictions with the unlimited license.
        </>
      ),
    },
    {
      q: 'Can I use ArchetJS for client work?',
      a: "Yes, you can use ArchetJS for client projects as long as it complies with the license you purchase.",
    },
    {
      q: 'Can I use ArchetJS for open source projects?',
      a: 'Currently, ArchetJS is not available for open source projects. We focus on providing high-quality solutions for commercial use.',
    },
    {
      q: 'Does ArchetJS include design files or assets?',
      a: 'No, ArchetJS does not include design assets like Figma or Sketch files. Our focus is on providing a lightweight, developer-friendly library that streamlines your coding process.',
    },
  ],
}

export default faq

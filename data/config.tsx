import { Button } from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import { NextSeoProps } from 'next-seo'
import { FaGithub, FaTwitter } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'

const siteConfig = {
  seo: {
    title: 'ArchetJS',
    description: 'A Lightweight JavaScript Library That Enhances Your Development Process with Flexibility and Efficiency',
  } as NextSeoProps,
  termsUrl: '#',
  privacyUrl: '#',
  header: {
    links: [
      {
        id: 'features',
        label: 'Features',
      },
      {
        id: 'pricing',
        label: 'Pricing',
      },
      {
        id: 'faq',
        label: 'FAQ',
      },
      {
        label: 'Quick Start',
        href: '/quick-start',
      },
      {
        label: 'Documentation',
        href: '/documentation',
        variant: 'primary',
      },
    ],
  },
  footer: {
    copyright: (
      <>
        &copy; {new Date().getFullYear()} ArchetJS. All rights reserved.
      </>
    ),
    links: [
      {
        href: 'mailto:hello@archetjs.dev',
        label: 'Contact',
      },
      {
        href: 'https://twitter.com/archet_js',
        label: <FaTwitter size="14" />,
      },
      {
        href: 'https://github.com/archet-js/archetjs',
        label: <FaGithub size="14" />,
      },
    ],
  },
  signup: {
    title: 'Start building with ArchetJS',
    features: [
      {
        icon: FiCheck,
        title: 'Flexible Architecture',
        description: 'ArchetJS offers a highly adaptable architecture for diverse project needs, allowing for easy customization and extension.',
      },
      {
        icon: FiCheck,
        title: 'Integrated Solutions',
        description: 'Built-in integrations with essential tools streamline your development workflow, including authentication and data management.',
      },
      {
        icon: FiCheck,
        title: 'Comprehensive Documentation',
        description: 'Extensive documentation with detailed examples and best practices ensures you have the resources needed to leverage ArchetJS effectively.',
      },
      {
        icon: FiCheck,
        title: 'Seamless Onboarding',
        description: 'Create user-friendly onboarding experiences with interactive tours and hints to enhance user engagement from the start.',
      },
    ],
  },
}

export default siteConfig

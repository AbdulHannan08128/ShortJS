import * as React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import {
  Container,
  Box,
  Stack,
  HStack,
  ButtonGroup,
  Button,
  Icon,
  Heading,
  Text,
  Wrap,
  Tag,
  useClipboard,
  IconButton,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { SEO } from "components/seo/seo";

import { FallInPlace } from "components/motion/fall-in-place";
import { Hero } from "components/hero";
import { Link, Br } from "@saas-ui/react";
import { Em } from "components/typography";
import { NextjsLogo, ChakraLogo } from "components/logos";
import {
  FiArrowRight,
  FiBox,
  FiCheck,
  FiCode,
  FiCopy,
  FiFlag,
  FiGrid,
  FiLock,
  FiSearch,
  FiSliders,
  FiSmile,
  FiTerminal,
  FiThumbsUp,
  FiToggleLeft,
  FiTrendingUp,
  FiUserPlus,
} from "react-icons/fi";
import { Features } from "components/features";
import { BackgroundGradient } from "components/gradients/background-gradient";
import { Faq } from "components/faq";
import { Pricing } from "components/pricing/pricing";

import { ButtonLink } from "components/button-link/button-link";
import { Testimonial, Testimonials } from "components/testimonials";

import faq from "data/faq";
import testimonials from "data/testimonials";
import pricing from "data/pricing";

import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from "components/highlights";

const Home: NextPage = () => {
  return (
    <Box>
      <SEO
        title="Archet.js"
        description="A Lightweight Javascript Library That Makes Your Javascript Code Shorter and Readable"
      />
      <Box>
        <HeroSection />

        <HighlightsSection />

        <FeaturesSection />

        <TestimonialsSection />

        {/* <PricingSection /> */}

        <FaqSection />
      </Box>
    </Box>
  );
};

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
        <Stack direction={{ base: "column", lg: "row" }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
                Code Less
                <Br /> Build More
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                Archetjs is a lightweight <Em>Javascript library</Em>
                <Br /> that helps you to build your code faster, readable and reliable <Br />{" "}
                Build intuitive Javascript projects with speed.
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>

              <ButtonGroup spacing={4} alignItems="center" marginTop={5}>
                <ButtonLink colorScheme="primary" size="lg" href="/documentation">
                  Documentation
                </ButtonLink>
                <ButtonLink
                  size="lg"
                  href="/quick-start"
                  variant="outline"
                  rightIcon={
                    <Icon
                      as={FiArrowRight}
                      sx={{
                        transitionProperty: "common",
                        transitionDuration: "normal",
                        ".chakra-button:hover &": {
                          transform: "translate(5px)",
                        },
                      }}
                    />
                  }
                >
                  Quick Start
                </ButtonLink>
              </ButtonGroup>
            </FallInPlace>
          </Hero>
          <Box
            height="600px"
            position="absolute"
            display={{ base: "none", lg: "block" }}
            left={{ lg: "60%", xl: "55%" }}
            width="80vw"
            maxW="1100px"
            margin="0 auto"
          >
            <FallInPlace delay={1}>
              <Box overflow="hidden" height="100%">
                <Image
                  src="/static/screenshots/list.png"
                  layout="fixed"
                  width={1200}
                  height={762}
                  alt="Screenshot of a ListPage in Saas UI Pro"
                  quality="75"
                  priority
                />
              </Box>
            </FallInPlace>
          </Box>
        </Stack>
      </Container>

      <Features
        id="benefits"
        columns={[1, 2, 4]}
        iconSize={4}
        innerWidth="container.xl"
        pt="20"
        features={[
          {
            title: "Clean Code",
            icon: FiSmile,
            description: "Archet.js provides a set of straightforward, developer-friendly functions, ensuring that your code remains clean and easy to maintain.",
            iconPosition: "left",
            delay: 0.6,
          },
          {
            title: "Developer Friendly",
            icon: FiSliders,
            description: "Archet.js is designed with developers in mind, offering a simple API and extensive documentation to streamline your development process.",
            iconPosition: "left",
            delay: 0.8,
          },
          {
            title: "Lightweight",
            icon: FiGrid,
            description: "Archet.js is a lightweight library that allows you to compose and customize components effortlessly, keeping your applications fast and responsive.",
            iconPosition: "left",
            delay: 1,
          },
          {
            title: "Productive",
            icon: FiThumbsUp,
            description: "Built to minimize boilerplate code and fully typed, Archet.js helps you develop applications rapidly and efficiently.",
            iconPosition: "left",
            delay: 1.1,
          },
        ]}        
        reveal={FallInPlace}
      />
    </Box>
  );
};

const HighlightsSection = () => {
  const { value, onCopy, hasCopied } = useClipboard("yarn add @archetjs/core");

  return (
    <Highlights>
      <HighlightsItem colSpan={[1, null, 2]} title="Core features">
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="xl">
            Get started with <Em>Archet.js</Em> using our <Em>lightweight</Em> and <Em>developer-friendly</Em> features. 
            Easily integrate with popular tools and frameworks while enjoying a seamless development experience. 
            Archet.js comes with a rich set of features designed to streamline your workflow and enhance productivity.
          </Text>

          <Flex
            rounded="full"
            borderWidth="1px"
            flexDirection="row"
            alignItems="center"
            py="1"
            ps="8"
            pe="2"
            bg="primary.900"
            _dark={{ bg: "gray.900" }}
          >
            <Box>
              <Text color="yellow.400" display="inline">
                yarn add
              </Text>{" "}
              <Text color="cyan.300" display="inline">
                @archetjs/core
              </Text>
            </Box>
            <IconButton
              icon={hasCopied ? <FiCheck /> : <FiCopy />}
              aria-label="Copy install command"
              onClick={onCopy}
              variant="ghost"
              ms="4"
              isRound
              color="white"
            />
          </Flex>
        </VStack>
      </HighlightsItem>
      <HighlightsItem title="Strong foundation">
        <Text color="muted" fontSize="lg">
          Archet.js is built on robust, time-tested principles, providing a solid foundation for your projects. 
          We leverage established tools and modern practices to ensure that Archet.js integrates seamlessly into your workflow.
        </Text>
      </HighlightsItem>
      <HighlightsTestimonialItem
        name="Renata Alink"
        description="Founder"
        avatar="/static/images/avatar.jpg"
        gradient={["pink.200", "purple.500"]}
      >
        “Archet.js has significantly accelerated our development process. The clean and intuitive API allowed us to focus on our core business logic without getting bogged down by boilerplate code. A game-changer for our team!”
      </HighlightsTestimonialItem>
      <HighlightsItem
        colSpan={[1, null, 2]}
        title="Get ahead with essential tools"
      >
        <Text color="muted" fontSize="lg">
          Archet.js covers all your essential development needs so you can focus on crafting unique features for your project. 
          With support for various development aspects, it ensures a smooth start and a productive development journey.
        </Text>
        <Wrap mt="8">
          {[
            "component composition",
            "API integration",
            "state management",
            "responsive design",
            "performance optimization",
            "documentation",
            "testing",
            "modular architecture",
            "theme customization",
            "error handling",
            "analytics integration",
            "user authentication",
            "accessibility",
            "dynamic routing",
            "form handling",
            "internationalization",
            "performance monitoring",
          ].map((value) => (
            <Tag
              key={value}
              variant="subtle"
              colorScheme="purple"
              rounded="full"
              px="3"
            >
              {value}
            </Tag>
          ))}
        </Wrap>
      </HighlightsItem>
    </Highlights>
  );
};


const FeaturesSection = () => {
  return (
    <Features
      id="features"
      title={
        <Heading
          lineHeight="short"
          fontSize={["2xl", null, "4xl"]}
          textAlign="left"
          as="p"
        >
          Not your standard
          <Br /> development toolkit.
        </Heading>
      }
      description={
        <>
          Archet.js offers a versatile set of tools designed to streamline and
          enhance your development process.
          <Br />
          Use it as a powerful foundation for your projects or to enhance your
          existing applications with cutting-edge features.
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: "Flexible Architecture",
          icon: FiBox,
          description:
            "Archet.js provides a highly flexible architecture that adapts to various project needs. Easily customize and extend components to fit your specific requirements.",
          variant: "inline",
        },
        {
          title: "Integrated Solutions",
          icon: FiLock,
          description:
            "Built-in integrations with essential tools and services streamline your development process. Whether it's authentication, data management, or UI enhancements, Archet.js has you covered.",
          variant: "inline",
        },
        {
          title: "Comprehensive Documentation",
          icon: FiSearch,
          description:
            "Access extensive documentation with detailed examples, best practices, and use-cases. Archet.js ensures you have all the resources needed to make the most out of its features.",
          variant: "inline",
        },
        {
          title: "Seamless Onboarding",
          icon: FiUserPlus,
          description:
            "Archet.js simplifies user onboarding with built-in tools for creating interactive tours, tooltips, and onboarding guides to enhance user experience from the start.",
          variant: "inline",
        },
        {
          title: "Advanced Feature Management",
          icon: FiFlag,
          description:
            "Manage and toggle features effortlessly using Archet.js's advanced feature management system. Easily implement feature flags and integrate with remote configuration services for dynamic control.",
          variant: "inline",
        },
        {
          title: "Effortless Upgrades",
          icon: FiTrendingUp,
          description:
            "Design upgrade pathways that minimize friction with Archet.js's upgrade components. Smoothly guide users through new features and improvements without disrupting their experience.",
          variant: "inline",
        },
        {
          title: "Customizable Themes",
          icon: FiToggleLeft,
          description:
            "Start with a variety of pre-built themes and easily customize them to match your project's branding. Archet.js supports dark mode and other visual preferences to fit any design needs.",
          variant: "inline",
        },
        {
          title: "Code Generators",
          icon: FiTerminal,
          description:
            "Utilize built-in code generators to streamline the creation of new components and maintain consistency across your design system. Archet.js helps you keep your codebase clean and organized.",
          variant: "inline",
        },
        {
          title: "Modular Codebase",
          icon: FiCode,
          description: (
            <>
              Archet.js is structured into modular packages, allowing you full
              control to adapt and extend the toolkit as needed. Leverage a high-performance{" "}
              <Link href="https://turborepo.com">Turborepo</Link> setup to manage
              and optimize your development workflow efficiently.
            </>
          ),
          variant: "inline",
        },
      ]}
    />
  );
};



const TestimonialsSection = () => {
  const columns = React.useMemo(() => {
    return testimonials.items.reduce<Array<typeof testimonials.items>>(
      (columns, t, i) => {
        columns[i % 3].push(t);

        return columns;
      },
      [[], [], []]
    );
  }, []);

  return (
    <Testimonials
      title={testimonials.title}
      columns={[1, 2, 3]}
      innerWidth="container.xl"
    >
      <>
        {columns.map((column, i) => (
          <Stack key={i} spacing="8">
            {column.map((t, i) => (
              <Testimonial key={i} {...t} />
            ))}
          </Stack>
        ))}
      </>
    </Testimonials>
  );
};

const PricingSection = () => {
  return (
    <Pricing {...pricing}>
      <Text p="8" textAlign="center" color="muted">
        VAT may be applicable depending on your location.
      </Text>
    </Pricing>
  );
};

const FaqSection = () => {
  return <Faq {...faq} />;
};

export default Home;

export async function getStaticProps() {
  return {
    props: {
      announcement: {
        title: "Support Us by Contributing to ArchetJS 🚀 ",
        href: "https://github.com/AbdulHannan08128/archet.js/",
        action: false,
      },
    },
  };
}

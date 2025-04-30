import { IExperience, ISkill } from "../interfaces"
import {
  awsIcon,
  dockerIcon,
  expressIcon,
  figmaIcon,
  gitIcon,
  googleCloudIcon,
  javascriptIcon,
  jestIcon,
  mongoDbIcon,
  nextIcon,
  nodeIcon,
  reactIcon,
  reactNativeIcon,
  tailwindcssIcon,
  typescriptIcon,
  viteIcon,
} from "../assets"

export const SKILLSS = [
  "Javascript",
  "Typescript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "react native",
  "MongoDB",
  "Git",
  "Docker",
  "Vite",
  "Figma",
  "Jest",
  "AWS",
  "GCP",
]

export const SKILLS: ISkill[] = [
  {
    title: "Javascript",
    imgName: javascriptIcon,
  },
  {
    title: "Typescript",
    imgName: typescriptIcon,
  },
  {
    title: "React.js",
    imgName: reactIcon,
  },
  {
    title: "Next.js",
    imgName: nextIcon,
  },
  {
    title: "Tailwindcss",
    imgName: tailwindcssIcon,
  },
  {
    title: "Node.js",
    imgName: nodeIcon,
  },
  {
    title: "Express.js",
    imgName: expressIcon,
  },
  {
    title: "React Native",
    imgName: reactNativeIcon,
  },
  {
    title: "MongoDB",
    imgName: mongoDbIcon,
  },
  {
    title: "Git",
    imgName: gitIcon,
  },
  {
    title: "Docker",
    imgName: dockerIcon,
  },
  {
    title: "Vite",
    imgName: viteIcon,
  },
  {
    title: "Figma",
    imgName: figmaIcon,
  },
  {
    title: "Jest",
    imgName: jestIcon,
  },
  {
    title: "AWS",
    imgName: awsIcon,
  },
  {
    title: "Google Cloud Platform",
    imgName: googleCloudIcon,
  },
]

export const EXPERIENCES: IExperience[] = [
  {
    title: "Software Developer Engineer II",
    company: "Byteridge Software Pvt Ltd",
    period: "2023 - 2024",
    description:
      "Led the frontend team for a Competency Tracking System, improved UI and features for a finance management app, and mentored junior developers through code reviews and technical guidance.",
  },
  {
    title: "Senior Software Engineer",
    company: "Mobio Solutions",
    period: "2022 - 2023",
    description:
      "Contributed to building multiple modules for a Chrome extension and developed its admin panel for managing all types of bookmarks and extension settings.",
  },
  {
    title: "Software Engineer",
    company: "National Informatics Centre",
    period: "2020 - 2022",
    description:
      "Contributed to the Digital India initiative by developing multiple applications for various Government of Assam departments. Digitized the certificate application process by converting offline workflows to fully online systems with automation for faster, more efficient certificate generation.",
  },
  {
    title: "Junior Developer",
    company: "Cognitive Technologies",
    period: "2019 - 2020",
    description:
      "Took full ownership of projects from development to deployment and maintenance. Built an online job application portal for Assam Police under the Government of Assam, allowing applicants to view and apply for positions based on their eligibility through smart filtering. Also contributed to building a digital recruitment process that generated comprehensive reports at the end of the selection process.",
  },
]

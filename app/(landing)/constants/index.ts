import type { StaticImageData } from 'next/image';
import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

// Define TypeScript interfaces for the data structures

interface NavigationItem {
  id: string;
  title: string;
  url: string;
  onlyMobile?: boolean;
}

interface IconItem {
  id: string;
  title: string;
  icon: StaticImageData;
  width: number;
  height: number;
}

interface RoadmapItem {
  id: string;
  title: string;
  text: string;
  date: string;
  status: "done" | "progress";
  imageUrl: StaticImageData;
  colorful?: boolean;
}

interface CollabContentItem {
  id: string;
  title: string;
  text?: string;
}

interface PricingItem {
  id: string;
  title: string;
  description: string;
  price: string | null;
  features: string[];
}

interface BenefitItem {
  id: string;
  title: string;
  text: string;
  backgroundUrl: string;
  iconUrl: StaticImageData;
  imageUrl: StaticImageData;
  light?: boolean;
}

interface SocialItem {
  id: string;
  title: string;
  iconUrl: StaticImageData;
  url: string;
}

// Data

export const navigation: NavigationItem[] = [
  {
    id: "0",
    title: "Features",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
];

export const heroIcons: StaticImageData[] = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages: StaticImageData[] = [notification4, notification3, notification2];

export const companyLogos: StaticImageData[] = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices: string[] = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons: StaticImageData[] = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap: RoadmapItem[] = [
  {
    id: "0",
    title: "open source Block-Based rich text editor",
    text: "A beautiful text editor that just works. Easily add an editor to your app that users will love",
    // date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
    date: ''
  },
  {
    id: "1",
    title: "Note Customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "2",
    title: "Make your notes Public",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "3",
    title: "Collaboration",
    text: "Collaborate with others in real-time",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText = "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent: CollabContentItem[] = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps: IconItem[] = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing: PricingItem[] = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits: BenefitItem[] = [
  {
    id: "0",
    title: "Ask anything",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  // {
  //   id: "1",
  //   title: "Improve everyday",
  //   text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
  //   backgroundUrl: "./src/assets/benefits/card-2.svg",
  //   iconUrl: benefitIcon2,
  //   imageUrl: benefitImage2,
  //   light: true,
  // },
  // {
  //   id: "2",
  //   title: "Connect everywhere",
  //   text: "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
  //   backgroundUrl: "./src/assets/benefits/card-3.svg",
  //   iconUrl: benefitIcon3,
  //   imageUrl: benefitImage2,
  // },
  // {
  //   id: "3",
  //   title: "Fast responding",
  //   text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
  //   backgroundUrl: "./src/assets/benefits/card-4.svg",
  //   iconUrl: benefitIcon4,
  //   imageUrl: "benefitImage2",
  //   light: true,
  // },
  // {
  //   id: "4",
  //   title: "Ask anything",
  //   text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
  //   backgroundUrl: "./src/assets/benefits/card-5.svg",
  //   iconUrl: benefitIcon1,
  //   imageUrl: benefitImage2,
  // },
  // {
  //   id: "5",
  //   title: "Improve everyday",
  //   text: "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
  //   backgroundUrl: "./src/assets/benefits/card-6.svg",
  //   iconUrl: benefitIcon2,
  //   imageUrl: benefitImage2,
  // },
];

export const socials: SocialItem[] = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];

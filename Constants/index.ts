export const nav_links = [
  {
    name: "About Me",
    path: "/",
  },
  {
    name: "Work Experiences",
    path: "/work",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  // {
  //   name: "Skills",
  //   path: "/skills",
  // },
  {
    name: "Testimonials",
    path: "/testimonials",
  },
];

// experience data
export const experience = {
  icon: "/assets/resume/badge.svg",
  title: "Professional Work Experiences",
  description:
    "I have completed 6 works term during my undergraduates studies.",
  items: [
    {
      company: "NilePay",
      location: "Waterloo, Canada",
      position: "Founder & Software Engineer",
      duration: "June 2024 - Present",
      description:
        "NilePay is a money transfer app that offers South Sudanese in the diaspora a smarter way to send money home; saving time, reducing costs and making the transfer process hasle-free.",

      summary:
        "Led the technical and business development efforts for NilePay, achieving over $10,000 in funding from pitch competitions and driving 300+ active waitlist signups for the MVP launch in just 3 months.",
      image: "/assets/nilepayMock.svg",
      icon: "/assets/nilepay-icon.png",
      stack: [
        { name: "Swift" },
        { name: "UIkit" },
        { name: "Next.js" },
        { name: "TypeScript" },
        { name: "RESTful API" },
        { name: "AWS" },
      ],
    },

    {
      company: "Openlane",
      location: "San Francisco, California, USA",
      position: "Software Engineer Intern",
      duration: "Jan 2023 - Apr 2023",
      description:
        "Openlane is the world's greatest digital marketplace for used vehicles that offer a fast, easy and transparent way to sell and source used vehicle inventory—anytime, anywhere.",

      summary:
        "As a Software Engineer Intern on the Mobile Platform team at Openlane, I contributed to the development and implementation of the watchlist feature, directly enhancing the shopping experience for millions of users and driving over 1.3 million vehicle sales in the year 2023.",
      image: "/assets/openlanetask.svg",
      icon: "/assets/openlane.svg",
      stack: [
        { name: "Swift" },
        { name: "SwiftUI" },
        { name: "Combine" },
        { name: "XCTest" },
        { name: "Git" },
        { name: "Jira" },
      ],
    },
    {
      company: "Carta",
      location: "Kitchener, Ontario, Canada",
      position: "Software Engineer Intern",
      duration: "May - Aug 2022",
      summary:
        "Software engineer intern on the platform team, focused on integrating new services. Over four months, I integrated the Plaid API into the Carta app, simplifying ACH transfers and making it easier to exercise options.",
      description:
        "I conducted in-depth research on UI testing strategies, developed a nightly UI smoke test automation pipeline using Fastlane and CircleCI, and created test suites for critical iOS app components, reducing bug reports by 25% and improving CI resource efficiency.",
      image: "/assets/cartawork.svg",
      icon: "/assets/carta.svg",
      stack: [
        { name: "Swift" },
        { name: "XCTest" },
        { name: "CircleCI" },
        { name: "Fastlane" },
        { name: "Plaid API" },
      ],
    },
    {
      company: "Wonolo",
      location: "San Francisco, California, USA",
      position: "iOS Software Engineer Intern",
      duration: "Aug - Dec 2021",
      description:
        "Wonolo is a convenient online staffing service that connects job seekers with companies who are looking to fill part-time or temporary positions on a daily basis.",
      summary:
        "During my internship at Wonolo, I worked on the mobile engineering team, designing and implementing the Toast View feature for enhanced communication via pop-up notifications. I also focused on improving the app’s stability by achieving 95% unit test coverage for core functionalities.",
      image: "/assets/wonolo-illustration.svg",
      icon: "/assets/wonolo.svg",
      stack: [
        { name: "APNs" },
        { name: "Coredata" },
        { name: "Firebase" },
        { name: "Swift" },
        { name: "REST API" },
        { name: "CI/CD" },
      ],
    },

    {
      company: "Canada Post",
      location: "Ottawa, Ontario, Canada",
      position: "Software Engineer intern",
      duration: "Jan - May 2021",
      description:
        "Canada Post is the Canada leading and primary postal operator that facilitate mailing and shipping of goods and services.",
      summary:
        "At Canada Post, I researched and planned the app's transition to dark mode, presenting a roadmap that modernized its UX. I also researched, design and implemented a functional prototype for a smart coupon in Swift. A new feature that was envisioned to improved neighborhood mail delivery. The project earns 100% stakeholder approval and give me the title of 'Co-op Student of the Term'.",
      image: "/assets/canadapost-illustration.svg",
      icon: "/assets/canadapost.svg",
      stack: [
        { name: "Swift" },
        { name: "PassKit" },
        { name: "CoreData" },
        { name: "Confluence" },
        { name: "Figma" },
      ],
    },
    {
      company: "theScore",
      location: "Toronto, Ontario, Canada",
      position: "iOS Engineer Intern",
      duration: "May - Aug 2020",
      summary:
        "During my internship at theScore as an iOS Software Engineer, I played a key role in enhancing the theScore Bet app. I implemented adaptive UI designs, ensured reliable backend integrations, and maintained data persistence. My efforts in creating rigorous unit tests improved the app's stability and user trust.",
      description:
        "theScore Bet is a mobile sportsbook app by theScore that enables users to place bets on various sports events. The app provides a seamless and user-friendly platform for sports enthusiasts to engage in legal sports betting, offering options such as moneylines, point spreads, parlays, prop bets, and live in-game wagers.",
      image: "/assets/thescore-illustion.svg",
      icon: "/assets/thescore.svg",
      stack: [
        { name: "Swift" },
        { name: "UIkit" },
        { name: "Combine" },
        { name: "CoreData" },
        { name: "GraphQL" },
        { name: "Firebase analytic" },
      ],
    },
  ],
};

import thumbnail from "./assets/images/about.jpeg";
import tour1 from "./assets/images/tour-1.jpeg";
import tour2 from "./assets/images/tour-2.jpeg";
import tour3 from "./assets/images/tour-3.jpeg";
import tour4 from "./assets/images/tour-4.jpeg";

export const pageLink = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const heroData = {
  heading: "CONTINUE EXPLORING",
  para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae explicabo debitis est autem dicta",
  href: "#tours",
};

export const aboutData = {
  subHeading: "Explore The Difference",
  para: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quisquam harum nam cumque temporibus explicabo dolorum sapiente odio unde dolor?

  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur quisquam harum nam cumque temporibus explicabo dolorum sapiente odio unde dolor?`,
  href: "#home",
  thumbnail: thumbnail,
};

export const ourServices = [
  {
    id: 1,
    heading: "Saving Money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia",
    icon: "fas fa-wallet fa-fw",
  },
  {
    id: 2,
    heading: "Endless Hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
    icon: "fas fa-tree fa-fw",
  },
  {
    id: 3,
    heading: "Amazing Comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
    icon: "fas fa-socks fa-fw",
  },
];

export const featuredTopics = [
  {
    id: 1,
    thumbnail: tour1,
    date: "august 26th, 2020",
    heading: "Tibet Adventure",
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
    vitae tempore voluptatum maxime reprehenderit eum quod
    exercitationem fugit, qui corporis.`,
    duration: "6 days",
    payment: "from $2100",
    icon: "fas fa-map",
    country: "Tibet",
  },
  {
    id: 2,
    thumbnail: tour2,
    date: "october 1th, 2020",
    heading: "best of java",
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
    vitae tempore voluptatum maxime reprehenderit eum quod
    exercitationem fugit, qui corporis.`,
    duration: "11 days",
    payment: "from $1400",
    icon: "fas fa-map",
    country: "Malaysia",
  },
  {
    id: 3,
    thumbnail: tour3,
    date: "september 15th, 2020",
    heading: "Texplore hong kong",
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
    vitae tempore voluptatum maxime reprehenderit eum quod
    exercitationem fugit, qui corporis.`,
    duration: "8 days",
    payment: "from $5000",
    icon: "fas fa-map",
    country: "China",
  },
  {
    id: 4,
    thumbnail: tour4,
    date: "december 5th, 2019",
    heading: "kenya highlights",
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
    vitae tempore voluptatum maxime reprehenderit eum quod
    exercitationem fugit, qui corporis.`,
    duration: "20 days",
    payment: "from $3300",
    icon: "fas fa-map",
    country: "Kenya",
  },
];

export const copyright = {
  text: `Backroads travel tours company all rights reserved`,
};

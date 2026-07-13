const PHONE = "+92 3085748927";

const YEARS_EXPERIENCE = 40;
const FOOTER_NAVIGATION = ["home", "pages", "about us", "services"];
const FOOTER_QUICK_LINK = ["contact us", "faqs", "booking", "pages"];
const FOOTER_SERVICES = ["home", "contact", "blog", "404"];

const EMAIL = "hi.revaz@gmail.com";
const ADDRESS = "101 street, East Chicago, United States";

const MENU_ITEMS = [
  {
    id: "dashboard",
    text: "Dashboard",
    icon: "dashboard",
    subItems: [
      { label: "Overview", path: "/dashboard/overview" },
      { label: "Analytics", path: "/dashboard/analytics" },
      { label: "Reports", path: "/dashboard/reports" },
    ],
  },
  {
    id: "listing",
    text: "Listing",
    icon: "listing",
    subItems: ["Draft", "Published", "Archieve"],
  },
  {
    id: "media",
    text: "Media Library",
    icon: "media",
    subItems: ["Images", "Videos", "Documents"],
  },
  {
    id: "performance",
    text: "Performance",
    icon: "performance",
    subItems: ["Sales", "Traffic"],
  },
  {
    id: "visit",
    text: "Visit Requests",
    icon: "visit",
    subItems: ["New Requests", "Scheduled", "Completed"],
  },
];

export {
  PHONE,
  YEARS_EXPERIENCE,
  FOOTER_NAVIGATION,
  FOOTER_QUICK_LINK,
  FOOTER_SERVICES,
  EMAIL,
  ADDRESS,
  MENU_ITEMS,
};

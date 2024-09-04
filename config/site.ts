export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Cheeseburger Network Shop",
  description:
    "Beautifully designeddd components built with Radix UI and Tailwind CSS.",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Shop",
      href: "/browse",
    },
  ],
  links: {
    discord: "https://discord.gg/M8vqyybrAj",
    github: "https://github.com/ka-studios",
    eagler: "https://cburger.net/client",
    root: "http://localhost:3000"
  },
  secrets: {
    SQUARE_ACCESS_TOKEN:
      "EAAAl1O-VPkD28dnteEjTMX8SZ--MvoNUNB5fsXoVC1g5u5nbCXUNn6_IU6Imq7c",
  },
}

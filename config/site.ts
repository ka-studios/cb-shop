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
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: "pk_test_51PWrXYRr2E64mcJc4By23uTzGeTmLCMzDFWFGYqnT5IPemBNX8HRpagWEX13qFvEamoeScEYzzOYoUWBM63fzGZh0090KG5Jli",
    STRIPE_SECRET_KEY: "sk_test_51PWrXYRr2E64mcJctEc9lkAcIlPCCXWTtUUh6CGtr3igmItT4gX5tNS8uRbSp2Mug5y8wjCzwyqW2pJsRvPWiHYL00pqzTORWt"
  },
  products: {
    fan: {
      name: 'Burger Fan',
      description: 'price_1PyCHMRr2E64mcJcEf5bNtVx',
      price: '$3',
      stripePriceId: 'price_123',
    },
    lover: {
      name: 'Burger Lover',
      description: '',
      price: '$5',
      stripePriceId: 'price_1PyCHxRr2E64mcJc9Ryawn4e',
    },
    king: {
      name: 'Burger King',
      description: '',
      price: '$8',
      stripePriceId: 'price_1PyCJ4Rr2E64mcJcMTLRSQqM',
    },
    god: {
      name: 'Burger God',
      description: '',
      price: '$12',
      stripePriceId: 'price_1PyCJNRr2E64mcJc8tvZ898Z',
    },  
  },

}

import { BuyCard } from "@/components/buy-card"
import { siteConfig } from "@/config/site"

export default function BuyMmo() {
  return (
    <BuyCard
      name={siteConfig.products.god.name}
      price={siteConfig.products.god.price}   
      img="https://us-east-1.tixte.net/uploads/i.kasd.nl/cblogo.png"
      desc={siteConfig.products.god.description}
      stripePriceId={siteConfig.products.god.stripePriceId}
    />
  )
}
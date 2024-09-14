import { BuyCard } from "@/components/buy-card"
import { siteConfig } from "@/config/site"

export default function BuyMmo() {
  return (
    <BuyCard
      name={siteConfig.products.lover.name}
      price={siteConfig.products.lover.price}   
      img="https://us-east-1.tixte.net/uploads/i.kasd.nl/cblogo.png"
      desc={siteConfig.products.lover.description}
      stripePriceId={siteConfig.products.lover.stripePriceId}
    />
  )
}
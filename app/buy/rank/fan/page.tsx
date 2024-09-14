import { BuyCard } from "@/components/buy-card"
import { siteConfig } from "@/config/site"

export default function BuyMmo() {
  return (
    <BuyCard
      name={siteConfig.products.fan.name}
      price={siteConfig.products.fan.price}   
      img="https://us-east-1.tixte.net/uploads/i.kasd.nl/cblogo.png"
      desc={siteConfig.products.fan.description}
      stripePriceId={siteConfig.products.fan.stripePriceId}
    />
  )
}
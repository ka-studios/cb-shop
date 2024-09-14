import { BuyCard } from "@/components/buy-card"
import { siteConfig } from "@/config/site"

export default function BuyMmo() {
  return (
    <BuyCard
      name={siteConfig.products.king.name}
      price={siteConfig.products.king.price}   
      img="https://us-east-1.tixte.net/uploads/i.kasd.nl/cblogo.png"
      desc={siteConfig.products.king.description}
      stripePriceId={siteConfig.products.king.stripePriceId}
    />
  )
}
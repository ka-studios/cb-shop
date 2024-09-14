import { Stripe, loadStripe } from "@stripe/stripe-js"
import { siteConfig } from "@/config/site"
let stripePromise: Promise<Stripe | null>;
const getStripe = () => {
    if (!stripePromise) {
        stripePromise = loadStripe(siteConfig.secrets.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
    }
    return stripePromise
}

export default getStripe;
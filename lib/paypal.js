import checkoutNodeJssdk from "@paypal/checkout-server-sdk"
import { siteConfig } from "@/config/site"
const configureEnvironment = function() {
    const clientId = siteConfig.PAYPAL_CLIENT_ID
    const clientSecret = siteConfig.PAYPAL_CLIENT_SECRET

    return process.env.NODE_ENV === 'production'
        ? new checkoutNodeJssdk.core.LiveEnvironment(clientId, clientSecret)
        : new checkoutNodeJssdk.core.SandboxEnvironment(clientId, clientSecret)
}

const client = function() {
    return new checkoutNodeJssdk.core.PayPalHttpClient(configureEnvironment)
}

export default client
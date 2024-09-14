// app/api/checkout/route.ts

import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { siteConfig } from "@/config/site"

const stripe = new Stripe(siteConfig.secrets.STRIPE_SECRET_KEY, {
  apiVersion: '2024-06-20',
});

interface CheckoutRequestBody {
  priceId: string;
}

interface CheckoutResponse {
  id: string;
}

export async function POST(request: Request) {
  try {
    const { priceId }: CheckoutRequestBody = await request.json();

    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
            {
            price: priceId,
            quantity: 1,
            },
        ],
        mode: 'payment',
        success_url: `${siteConfig.links.root}/success`,
        cancel_url: `${siteConfig.links.root}/cancel`,
        custom_fields: [
            {
                key: 'mcuser',
                label: {
                    type: 'custom',
                    custom: "Minecraft/Eaglercraft Username"
                },
                type: "text"
            },
        ],
    });

    const response: CheckoutResponse = { id: session.id };
    return NextResponse.json(response);
  } catch (error) {
    console.error('Error creating checkout session:', error);
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}

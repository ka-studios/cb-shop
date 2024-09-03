import { Client } from "square";
import { randomUUID } from "crypto";
import { siteConfig } from "@/config/site";
import { NextResponse } from 'next/server';

const { paymentsApi } = new Client({
    accessToken: siteConfig.secrets.SQUARE_ACCESS_TOKEN,
    environment: 'sandbox'
});

BigInt.prototype.toJSON = function() { return this.toString(); }

export async function POST(request) {
    const reqBody = await request.json();

    try {
        const { result } = await paymentsApi.createPayment({
            idempotencyKey: randomUUID(),
            sourceId: reqBody.sourceId,
            amountMoney: {
                currency: 'USD',
                amount: reqBody.amount,
            }  
        });

        console.log(result);

        return NextResponse.json(result, { status: 200 });
    } catch (error) {
        console.error("error processing payment:", error);
        return NextResponse.json({ error: 'internal server error' }, { status: 500 });
    }
}

"use client"    

import * as React from "react";
import {
    Card,
    CardContent,
    CardFooter,
    CardTitle,
    CardDescription,
    CardHeader
} from "@/components/ui/card"
import { CreditCard, PaymentForm, GooglePay } from 'react-square-web-payments-sdk'
import {
    SiSquare,
    SiGooglepay,
} from "@icons-pack/react-simple-icons"

interface BuyCardProps {
    name: string,
    price: string,
    img?: string,
    desc?: string,
}

export function BuyCard({ name, price, img, desc }: BuyCardProps) {
    let ription;
    if (desc) {
        ription = desc
    } else {
        ription = "No Description Provided"
    }
    return (
        <div className="flex flex-wrap flex-row w-full gap-[2vw]">
            <Card className="w-[55vw] ml-[3vw] h-[85vh]">
                <CardHeader>
                    <CardTitle></CardTitle>
                </CardHeader>
                <CardContent className="grid place-items-center object-cover hover:object-scale-down place-content-center h-[90%]">
                    <img className="object-cover" src={img}></img>
                </CardContent>
            </Card>
            <div className="w-[25vw] h-[85vh] flex">
                <Card className="w-full p-6">
                    <CardTitle>100 mcMMO Levels</CardTitle>
                    <CardDescription className="mt-[2vh]">{ription}</CardDescription>
                    <CardContent className="grid place-items-center h-[75svh]">
                        <div className="grid w-full mt-[20vh] -mb-[10vh] grid-cols-2 place-items-start">
                            <h2 className="text-6xl font-extrabold leading-tight tracking-tighter md:text-7xl">
                                ${price}
                            </h2>
                            <Card className="p-3 w-full mt-[1.5vh]">   
                                <div className="grid grid-cols-2 place-items-center">
                                    <SiSquare /><SiGooglepay />       
                                </div>
                            </Card>
                            
                        </div>
                        <div className="grid w-full place-items-start">
                            <div className="w-full gap-10">
                                <PaymentForm
                                        formProps={{
                                            className: ""
                                        }}
                                        applicationId="sandbox-sq0idb-hS6CBaHEhNWZeUNNQO0wiw"
                                        cardTokenizeResponseReceived={async (token, verifiedBuyer) => {
                                            const response = await fetch('/api/pay', {
                                                method: "POST",
                                                headers: {
                                                    "Content-Type": "application/json",
                                                },
                                                body: JSON.stringify({
                                                    sourceId: token.token,
                                                    amount: Number(price) * 100,
                                                }),
                                            })
                                            console.log(await response.json())
                                        }}
                                        createPaymentRequest={() => ({
                                            countryCode: "US",
                                            currencyCode: "USD",
                                            total: {    
                                                amount: `${price}.00`,
                                                label: "Total",
                                            },
                                        })}
                                        locationId='LS0VCAXY9C2GB'                 
                                >
                                    <GooglePay className="mb-[3vh] rounded-md" buttonColor="white" buttonType="long"/>
                                    <CreditCard className="rounded-lg -mb-[1.5vh]" />
                                    
                                </PaymentForm>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
       
        
    )
}
"use client"

import * as React from "react"
import { SiGooglepay, SiSquare } from "@icons-pack/react-simple-icons"
import { siteConfig } from "@/config/site"
import {
  CreditCard,
  GooglePay,
  PaymentForm,
} from "react-square-web-payments-sdk"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import { redirect, usePathname } from "next/navigation"
import path from "path"
interface BuyCardProps {
  name: string
  price: string
  img?: string
  desc?: string
}

export function BuyCard({ name, price, img, desc }: BuyCardProps) {
  let ription
  if (desc) {
    ription = desc
  } else {
    ription = "No Description Provided"
  }
  const pathname = usePathname()
  return (
    <div className="-mt-[2vh] flex w-full flex-row flex-wrap gap-[2vw]">
      <Card className="ml-[3vw] h-[85vh] w-[55vw]">
        <CardHeader>
          <CardTitle></CardTitle>
        </CardHeader>
        <CardContent className="grid h-[90%] place-content-center place-items-center object-cover hover:object-scale-down">
          <img className="object-cover" src={img} alt={desc}></img>
        </CardContent>
      </Card>
      <div className="flex h-[85vh] w-[25vw]">
        <Card className="w-full p-6">
          <CardTitle>{name}</CardTitle>
          <CardDescription className="mt-[2vh]">{ription}</CardDescription>
          <CardContent className="grid h-[75vh] place-items-center">
            <div className="-mb-[10vh] mt-[20vh] grid w-full grid-cols-2 place-items-start">
              <h2 className="text-6xl font-extrabold leading-tight tracking-tighter md:text-7xl">
                ${price}
              </h2>
              <Card className="mt-[1.5vh] w-full p-3">
                <div className="grid grid-cols-2 place-items-center">
                  <SiSquare />
                  <SiGooglepay />
                </div>
              </Card>
            </div>
            <div className="grid w-full place-items-start">
              <div className="w-full">
                <PaymentForm
                  formProps={{
                    className: "",
                  }}
                  applicationId="sandbox-sq0idb-hS6CBaHEhNWZeUNNQO0wiw"
                  cardTokenizeResponseReceived={async (
                    token,
                    verifiedBuyer
                  ) => {
                    const response = await fetch("/api/pay", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify({
                        sourceId: token.token,
                        amount: Number(price) * 100,
                      }),
                    })
                    console.info("token:", token)
                    console.info("buyer:", verifiedBuyer)
                    console.log(await response.json())
                  }}
                  createPaymentRequest={() => ({
                    countryCode: "US",
                    currencyCode: "USD",
                    lineItems: [
                        {
                            amount: `${price}.00`,
                            label: name,
                            imageUrl: img || "https://us-east-1.tixte.net/uploads/i.kasd.nl/cblogo.png",
                            productUrl: `${siteConfig.links.root}/${pathname}`,
                        },
                    ],
                    total: {
                      amount: `${price}.00`,  
                      label: "Total",
                    },
                    requestBillingContact: true,
                  })}     
                  locationId="LS0VCAXY9C2GB"
                >
                  <CreditCard 
                    className="rounded-lg h-[15vh] mb-[2vh]"
                    callbacks={{
                      submit: (event) => redirect('/post-purchase')
                    }} />
                  <GooglePay
                    className="-mb-[4vh] mt-[2vh] rounded-md"
                    buttonColor="white"
                    buttonType="long"
                  />
                  {/* <CreditCard className="rounded-lg -mb-[1.5vh]" /> */}
                </PaymentForm>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

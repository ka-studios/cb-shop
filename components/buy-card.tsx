"use client"

import * as React from "react";
import { SiGooglepay, SiStripe } from "@icons-pack/react-simple-icons";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import getStripe from "@/lib/stripe";

interface BuyCardProps {
  name: string;
  price: string;
  img?: string;
  desc?: string;
  stripePriceId: string;
}

export function BuyCard({ name, price, img, desc, stripePriceId }: BuyCardProps) {
  const handleCheckout = async () => {
    const stripe = await getStripe();
    if (!stripe) return;

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ priceId: stripePriceId }),
      });
      const { id } = await response.json();
      await stripe.redirectToCheckout({ sessionId: id });
    } catch (error) {
      console.error("Error:", error); 
    }
  };

  return (
    <div className="-mt-[2vh] flex w-full flex-row flex-wrap gap-[2vw]">
      <Card className="ml-[3vw] h-[85vh] w-[55vw]">
        <CardHeader>
          <CardTitle></CardTitle>
        </CardHeader>
        <CardContent className="grid h-[90%] place-content-center place-items-center scale-75">
          <img className="object-cover" src={img} alt={desc}></img>
        </CardContent>
      </Card>
      <div className="flex h-[85vh] w-[25vw]">
        <Card className="w-full p-6">
          <CardTitle>{name}</CardTitle>
          <CardDescription className="mt-[2vh]">{desc || "No Description Provided"}</CardDescription>
          <CardContent className="grid h-[75vh] place-items-center">
            <div className="-mb-[10vh] mt-[20vh] grid w-full grid-cols-2 place-items-start">
              <h2 className="text-6xl font-extrabold place-self-start leading-tight tracking-tighter md:text-7xl">
                {price}
              </h2>
              <Card className="mt-[1.5vh] w-full p-3">
                <div className="grid grid-cols-2 place-items-center place-self-end">
                  <SiStripe />
                  <SiGooglepay />
                </div>
              </Card>
            </div>
            <div className="grid w-full place-items-start">
              <div className="w-full">
                <Button 
                  onClick={handleCheckout}
                  className="w-full bg-blue-500 text-white rounded"
                >
                  Buy Now
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

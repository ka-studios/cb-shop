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
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Label } from "@/components/ui/label"
import {
    SiPaypal
} from "@icons-pack/react-simple-icons"
import Link from "next/link";

interface BuyCardProps {
    name: string,
    price: string,
    img?: string,
    available: string,
    desc?: string,
    payUri: string,
    isMmo: boolean,
}

export function BuyCard({ name, price, img, available, desc, payUri, isMmo }: BuyCardProps) {
    let ription;
    if (desc) {
        ription = desc
    } else {
        ription = "No Description Provided"
    }
    return (
        <div className="flex flex-wrap flex-row w-full gap-[5vw]">
            <Card className="w-[60vw] h-[85vh]">
                <CardHeader>
                    <CardTitle></CardTitle>
                </CardHeader>
                <CardContent className="grid place-items-center object-cover hover:object-scale-down place-content-center h-[90%]">
                    <img className="object-cover" src={img}></img>
                </CardContent>
            </Card>
            <div className="w-[25vw] h-[85vh] flex">
                <Card className="w-full p-6">
                    <CardTitle>100  mcMMO Levels</CardTitle>
                    <CardDescription className="mt-[2vh]">{ription}</CardDescription>
                    <CardContent className="grid place-items-center h-[75svh]">
                        <div className="grid w-full mt-[20vh] -mb-[10vh] grid-cols-2 place-items-start">
                            <h2 className="text-6xl font-extrabold leading-tight tracking-tighter md:text-7xl">
                                ${price}
                            </h2>
                            <Card className="p-3 w-full mt-[1.5vh]">   
                                <div className="grid place-items-center">
                                    <SiPaypal />
                                </div>
                            </Card>
                            
                        </div>
                        <div className="grid w-full place-items-center mb-[25vh]">
                            <Button asChild className="w-full"><Link href="placehold.this">Buy Now</Link></Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
       
        
    )
}
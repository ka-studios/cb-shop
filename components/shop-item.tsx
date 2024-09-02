import * as React from "react"
import Link from "next/link"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardTitle,
    CardHeader
} from "@/components/ui/card"
import { SiPaypal } from "@icons-pack/react-simple-icons"
import { Button } from "@/components/ui/button"
export interface cardProps {
    name: string,
    desc: string,   
    price: string,
    img: string,
    isMmo?: string,
    available: string,
    buyUri: string,
}
export function Item({ name, desc, price, img, available, buyUri, isMmo }: cardProps) {
    let button;
    let mmo;
    let mar;
    if (available === "false") {
        button = <Button variant="outline">Unavailable</Button>
    } else {
        button = <Button asChild><Link href={buyUri}>Buy</Link></Button>
    }
    if (isMmo) {
        mmo = <p className="font-extralight leading-tight tracking-tighter md:text-xl">per 100 levels</p>
        mar = "grid place-items-end w-full mt-10"
    } else {
        mmo = ""
        mar = "grid place-items-end w-full"
    }
    return (
        <Card className="w-[300px] mx-2.5 my-2.5">
            <CardHeader>
                <CardTitle>{name}</CardTitle>
                <CardDescription>{desc}</CardDescription>   
            </CardHeader>
            <CardContent>
                <div className="grid w-full items-center">
                    <img src={img}></img>
                </div>  
            </CardContent>
            <CardFooter>
            <div className="grid place-items-start">
                <h2 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
                    ${price}
                </h2>
                {mmo}
            </div>
            <div className={mar}>
                {button}
            </div>
            </CardFooter>
        </Card>
    )
}
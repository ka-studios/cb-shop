import { Item } from "@/components/shop-item"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs"
export default function BrowsePage() {
    return (
        <div className="flex flex-wrap">
            <Tabs defaultValue="ranks" className="w-[1300px]">
                <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="ranks">Ranks</TabsTrigger>
                    <TabsTrigger value="crates">Crates</TabsTrigger>
                    <TabsTrigger value="mmo">MMO Levels</TabsTrigger>
                </TabsList>
                <TabsContent value="ranks" className="flex flex-wrap">
                    <Item 
                        name="Burger God" 
                        desc="Example"   
                        price="12"
                        img="https://us-east-1.tixte.net/uploads/i.kasd.nl/cblogo.png"  
                        available="true" 
                        buyUri="https://buymeplease.biz"
                    />
                    <Item 
                        name="Burger King" 
                        desc="Example" 
                        price="8" 
                        img="https://us-east-1.tixte.net/uploads/i.kasd.nl/cblogo.png" 
                        available="true" 
                        buyUri="https://buymeplease.biz"
                    />
                    <Item 
                        name="Burger Lover" 
                        desc="Example" 
                        price="5" 
                        img="https://us-east-1.tixte.net/uploads/i.kasd.nl/cblogo.png" 
                        available="true" 
                        buyUri="https://buymeplease.biz"
                    />
                    <Item 
                        name="Burger Fan" 
                        desc="Example" 
                        price="3" 
                        img="https://us-east-1.tixte.net/uploads/i.kasd.nl/cblogo.png" 
                        available="true" 
                        buyUri="https://buymeplease.biz"
                    />
                </TabsContent>
                <TabsContent value="crates" className="flex flex-wrap">
                    <Item
                        name="God Crate"
                        desc="Example"
                        price="tbd"
                        img="https://us-east-1.tixte.net/uploads/i.kasd.nl/cblogo.png"
                        available="true"
                        buyUri="https://buymeplease.biz"
                    />      
                    <Item
                        name="King Crate"
                        desc="Example"
                        price="tbd"
                        img="https://us-east-1.tixte.net/uploads/i.kasd.nl/cblogo.png"
                        available="true"
                        buyUri="https://buymeplease.biz"
                    />
                    <Item
                        name="Lover Crate"
                        desc="Example"
                        price="tbd"
                        img="https://us-east-1.tixte.net/uploads/i.kasd.nl/cblogo.png"
                        available="true"
                        buyUri="https://buymeplease.biz"
                    />
                    <Item
                        name="Fan Crate"
                        desc="Example"
                        price="tbd"
                        img="https://us-east-1.tixte.net/uploads/i.kasd.nl/cblogo.png"
                        available="true"
                        buyUri="https://buymeplease.biz"
                    />
                </TabsContent>
                <TabsContent value="mmo" className="flex place-items-center">
                    <Item
                        name="mcMMO Levels"
                        desc="Example"
                        price="2"
                        isMmo="true"
                        img="https://us-east-1.tixte.net/uploads/i.kasd.nl/cblogo.png"
                        available="true"
                        buyUri="https://buymeplease.biz"
                    />
                </TabsContent>
            </Tabs>    
        </div>
    )
}

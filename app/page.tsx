import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          The best Eaglercraft server.
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          We are a team of people that want to provide a flawless Eaglercraft
          experience. With gamemodes from Lifesteal to Bedwars, everyone has
          something to play.
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          href={siteConfig.links.eagler}
          rel="noreferrer"
          className={buttonVariants()}
        >
          Play Now
        </Link>
        <Link
          rel="noreferrer"
          href="/browse"
          className={buttonVariants({ variant: "outline" })}
        >
          Browse Shop
        </Link>
      </div>
    </section>
  )
}

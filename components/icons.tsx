import {
  LucideProps,
  Moon,
  SunMedium,
  type Icon as LucideIcon,
} from "lucide-react"

import { 
  SiDiscord,
  SiNextdotjs,
  SiGithub
} from "@icons-pack/react-simple-icons"


export type Icon = LucideIcon

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  discord: SiDiscord,
  logo: SiNextdotjs,
  gitHub: SiGithub,
}

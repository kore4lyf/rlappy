import { StaticImageData } from "next/image"
import sarahImg from "./images/sarah-thompson.png"

interface Itestimonials {
  name: string,
  occupation: string,
  imagePath: StaticImageData,
  message: string
}

export const testimonials: Itestimonials[] = [
  {
    name: "sarah thompson",
    occupation: "freelance designer",
    imagePath: sarahImg,
    message: "RLappy made it easy to earn extra income with my laptop. Highly recommended!"
  },
  {
    name: "ifeanyi james",
    occupation: "software developer",
    imagePath: sarahImg,
    message: "Finding a quality laptop for my project was a breeze. Great service!"
  },
  {
    name: "Dare Adekunle",
    occupation: "content creator",
    imagePath: sarahImg,
    message: "I love how simple is it to list my laptop and start earning. RLappy is a game changer!"
  },
  {
    name: "ibrahim hassan",
    occupation: "marketing consultant",
    imagePath: sarahImg,
    message: "Renting a laptop through Rlappy was seamless and hassle-free. I'll definitely use it again"
  },
  {
    name: "michael lee",
    occupation: "online tutor",
    imagePath: sarahImg,
    message: "RLappy has turned my unused laptop into a steady income stream. Fantastic experience!"
  }
]
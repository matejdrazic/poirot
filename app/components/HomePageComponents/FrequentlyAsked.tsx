import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import cirlcesScatter from "../../../public/circle-scatter-haikei.svg"
import { ChevronRight } from "lucide-react"

export function ButtonOutline() {
  return <Button variant="outline">Outline</Button>
}

export default function FrequentlyAsked() {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-24">
        <div className="flex flex-col items-center justify-evenly lg:w-6/12  mx-auto rounded-lg overflow-hidden bg-transparent">
          <div className="flex flex-col items-center justify-center gap-4 w-fit">
            <p className="text-2xl mx-4 font-bold">Find out more about Poirot</p>
            <Button variant="outline" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          <Image
            src={cirlcesScatter}
            alt="faq-design"
            className="mix-blend-dodge"
          />
        </div>

        <Accordion type="single" collapsible className="w-full lg:w-6/12">
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it styled?</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that match the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is it animated?</AccordionTrigger>
            <AccordionContent>
              Yes. It&apos;s animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Is it safe?</AccordionTrigger>
            <AccordionContent>
              Yes. We ensure top safety.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  )
}

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
      <div className="flex flex-row gap-4">
        <p className="text-2xl mx-4 font-bold mb-12 mt-1">Find out more about Poirot</p>
        <Button variant="outline" size="icon">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
      <div className="flex flex-col lg:flex-row-reverse gap-24">
        <div className="flex flex-col items-center justify-evenly  rounded-lg overflow-hidden bg-transparent">
         
          <Image
            src={cirlcesScatter}
            alt="faq-design"
            className="w-10/12"
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
          <AccordionItem value="item-5">
            <AccordionTrigger>Is it safe?</AccordionTrigger>
            <AccordionContent>
              Yes. We ensure top safety.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
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

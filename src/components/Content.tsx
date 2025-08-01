import React from 'react'

import { Button } from './ui/button'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'


const ContentSection = () => {
  return (
   <section className="py-16 md:py-32 bg-black/90 text-white">
    <div className="mx-auto max-w-5xl px-6">
        <div className="grid gap-6 md:grid-cols-2 md:gap-12">
            <h2 className="text-4xl font-medium text-white">
                 Rent N&apos;Go brings together cars, convenience, and control.
            </h2>
            <div className="space-y-6">
                <p className="text-white/90">
                 Rent N&apos;Go isn&apos;t just a rental service it&apos;s your all-in-one mobility partner. From compact cars to SUVs, from daily bookings to long-term plans, we make it effortless to get on the road with speed and confidence.
                </p>
                <p className="text-white/90">
                <span className="font-bold text-white"> Rent N&apos;Go is your go-to for all things mobility. </span> 
                 We offer a wide range of cars, from compact sedans topremium luxury vehicles and spacious SUVs, ensuring you find the perfect ride for your needs.
                </p>
                <Button
                    asChild
                    size="sm"
                    variant="secondary"   
                    className="gap-1 pr-1.5 bg-white text-black hover:bg-white/90"
                >
                    <Link href="#">
                        <span>Learn More</span>
                        <ChevronRight className="size-2" />
                    </Link>
                </Button>
            </div>
        </div>
    </div>

   </section>
  )
}

export default ContentSection


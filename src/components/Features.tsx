import React from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { CarFront,SmartphoneCharging, HatGlasses} from 'lucide-react'
import { CardDecorator } from './ui/card-decorator'

const Features = () => {
  return (
    <section className="py-16 md:py-32 bg-black/90 text-white">
        <div className="@container mx-auto max-w-5xl px-6">
            <div className="text-center">
                <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
                    Built for every journey
                </h2>
                <p className="mt-4">
                    Whether it’s a quick errand or a weekend escape, RentnGo gets you there — simply and reliably.
                </p>
            </div>

            <div className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-6 *:text-center md:mt-16">
                <Card className="group shadow-zinc-950/5 bg-black/50 border-white/10 text-white hover:border-white/20 hover:bg-black/60 transition-all duration-300">
                    <CardHeader className="pb-3">
                        <CardDecorator>
                            <CarFront className="size-6" />
                        </CardDecorator>
                        <h3 className="mt-5 font-medium">
                            Wide Vehicle Selection
                        </h3>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm">From fuel-efficient compacts to spacious SUVs  RentN&apos;Go offers vehicles for every trip, need, and budget.</p>
                    </CardContent>
                </Card>

                <Card className="group shadow-zinc-950/5 bg-black/50 border-white/10 text-white hover:border-white/20 hover:bg-black/60 transition-all duration-300">
                    <CardHeader className="pb-3">
                        <CardDecorator>
                            <SmartphoneCharging className="size-6" />
                        </CardDecorator>
                        <h3 className="mt-5 font-medium">
                            Instant Booking & Smart App
                        </h3>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm">Book, manage, and track your rental all from your phone. No paperwork, no waiting in line.</p>
                    </CardContent>
               </Card>

               <Card className="group shadow-zinc-950/5 bg-black/50 border-white/10 text-white hover:border-white/20 hover:bg-black/60 transition-all duration-300">
                    <CardHeader className="pb-3">
                        <CardDecorator>
                             <HatGlasses className="size-6" />  
                        </CardDecorator>
                        <h3 className="mt-5 font-medium">
                            Transparent Pricing & Insurance
                        </h3>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm">No hidden fees, no surprises. Our transparent pricing and insurance options ensure you get the best value for your money.</p>
                    </CardContent>
               </Card>
            </div>

        </div>
    </section>
  )
}

export default Features
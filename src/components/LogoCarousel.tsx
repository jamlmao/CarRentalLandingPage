import React from 'react'
import Image from 'next/image'
import { InfiniteSlider } from './ui/infinite-slider'
import { ProgressiveBlur } from './ui/progressive-blur'


const LogoCarousel = () => {
  return (
    <section className="bg-background overflow-hidden py-16">
      <div className="group relative m-auto max-w-7xl px-6">
        <div className="flex flex-col items-center md:flex-row">
              <div className="md:max-w-44 md:border-r md:pr-6">
                  <p className="text-end text-sm text-muted-foreground"> Powering the drive of leading brands</p>
              </div> 
              <div className="relative py-6 md:w-[calc(100%-11rem)]">
                  <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent"></div>
                      <div className="absolute inset-0 bg-gradient-to-l from-background to-transparent"></div>
                  </div>
                  <InfiniteSlider
                      speedOnHover={20}
                      speed={40}
                      gap={112}>
                      <div className="flex">
                          <Image
                              className="mx-auto h-20 w-fit dark:invert"
                              src="/logos/bmw.webp"
                              alt="BMW Logo"
                              height={60}
                              width={120}
                          />
                      </div>

                      <div className="flex">
                          <Image
                              className="mx-auto h-20 w-fit dark:invert"
                              src="/logos/ferrari.png"
                              alt="Ferrari Logo"
                              height={60}
                              width={120}
                          />
                      </div>
                      <div className="flex">
                          <Image
                              className="mx-auto h-20 w-fit dark:invert"
                              src="/logos/mercedes.png"
                              alt="Mercedes Logo"
                              height={60}
                              width={120}
                          />
                      </div>
                      <div className="flex">
                          <Image
                              className="mx-auto h-20 w-fit dark:invert"
                              src="/logos/Porsche.png"
                              alt="Porsche Logo"
                              height={60}
                              width={120}
                          />
                      </div>
                      <div className="flex">
                          <Image
                              className="mx-auto h-20 w-fit dark:invert"
                              src="/logos/mclaren.png"
                              alt="McLaren Logo"
                              height={60}
                              width={120}
                          />
                      </div>
                      <div className="flex">
                          <Image
                              className="mx-auto h-20 w-fit dark:invert"
                              src="/logos/honda.webp"
                              alt="Honda Logo"
                              height={60}
                              width={120}
                          />
                      </div>
                      <div className="flex">
                          <Image
                              className="mx-auto h-20 w-fit dark:invert"
                              src="/logos/ford.webp"
                              alt="Ford Logo"
                              height={60}
                              width={120}
                          />
                      </div>
                  </InfiniteSlider>

                  <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                  <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                  <ProgressiveBlur
                      className="pointer-events-none absolute left-0 top-0 h-full w-20"
                      direction="left"
                      blurIntensity={1}
                  />
                  <ProgressiveBlur
                      className="pointer-events-none absolute right-0 top-0 h-full w-20"
                      direction="right"
                      blurIntensity={1}
                  />
              </div>
          </div>
       </div>
    </section>
  )
}

export default LogoCarousel
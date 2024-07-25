"use client"

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { ArtworkQuery } from "@/tina/__generated__/types"
import { format } from "date-fns"
import Image from "next/image"
import { useState, MouseEvent, useRef, useEffect } from "react"
import { useTina } from "tinacms/dist/react"

interface Props {
  query: string
  variables: {
    relativePath: string
  }
  data: ArtworkQuery
  lang: string
}

const Landing = () => {
  const [showPrev, setShowPrev] = useState(false)
  const [showNext, setShowNext] = useState(false)

  return (
    <div className="flex flex-col items-center justify-center bg-background">
      {false ? (
        <div className="max-w-4xl w-full px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-lg overflow-hidden shadow-lg animate-pulse">
            <Image src={"/placeholder.svg"} alt="placeholder" width={900} height={600} className="w-full h-[600px] object-cover bg-muted" />
            <div className="p-6 sm:p-8 space-y-4">
              <div className="h-6 bg-muted rounded w-1/2" />
              <div className="h-4 bg-muted rounded w-1/3" />
              <div className="h-5 bg-muted rounded w-full" />
              <div className="h-4 bg-muted rounded w-2/3" />
            </div>
          </div>
        </div>
      ) : (
        <div className="max-w-4xl w-full px-4 sm:px-6 lg:px-8">
          {/* <div className="bg-card rounded-lg overflow-hidden shadow-lg"> */}
          <Carousel className="w-full" opts={{ loop: true }}>
            <CarouselContent>
              {new Array(3).fill(-1).map((item, index) => (
                <CarouselItem key={index}>
                  <div className="flex">
                    <div className="p-8" onMouseOver={() => setShowPrev(true)} onMouseLeave={() => setShowPrev(false)}></div>
                    <div className="flex-1 z-10">
                      <Image src={"/placeholder.svg"} alt="Artwork" width={900} height={600} />
                    </div>
                    <div className="p-8" onMouseOver={() => setShowNext(true)} onMouseLeave={() => setShowNext(false)}></div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {true && (
              <>
                <CarouselPrevious className={`${!showPrev && "opacity-25"}`} />
                <CarouselNext className={`${!showNext && "opacity-25"}`} />
              </>
            )}
          </Carousel>
          <div className="p-6 sm:p-8">
            {[-1, -1].map((block, i) => {
              return (
                <div key={i} className="flex flex-col [&>:not(:last-child)]:mt-4">
                  <h6 className="">dummy</h6>
                  <p className="text-card-foreground text-base sm:text-lg ">const subtitle = props.lang === ? block?.subtitle_en : block?.subtitle_ja // const paragraph = props.lang === ? block?.paragraph_en : block?.paragraph_ja</p>
                </div>
              )
            })}
          </div>
          {/* </div> */}
        </div>
      )}
    </div>
  )
}

export default Landing

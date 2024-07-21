"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ArtworkConnectionQuery } from "@/tina/__generated__/types";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  query: string;
  data: ArtworkConnectionQuery;
}

const ArtworkList = ({
  data: {
    artworkConnection: { edges },
  },
}: Props) => {
  const pathname = usePathname();
  console.log("pathname", pathname);
  return (
    <div className="p-4">
      <div className="columns-1 gap-2 sm:columns-2 sm:gap-4 md:columns-3 [&>img:not(:first-child)]:mt-4">
        {edges?.map((artwork) => {
          const pattern = /\/([^/]+)\.mdx$/;
          const match = (artwork?.node?.id || "").match(pattern);
          const arr = [artwork?.node?.heroImg];
          artwork?.node?.additionalImgs?.forEach((img) => {
            if (img) arr.push(img.imgSrc);
          });
          return (
            <div key={artwork?.node?.id} className="pb-2 md:pb-1">
              <Link href={`/artworks/${match && match[1]}`}>
                {arr.length === 1 ? (
                  <Image
                    width={500}
                    height={400}
                    src={artwork?.node?.heroImg!}
                    alt={artwork?.node?.title!}
                  />
                ) : (
                  <Carousel
                    className="w-full "
                    opts={{ loop: true }}
                    plugins={[
                      Autoplay({
                        delay: 2000,
                      }),
                    ]}
                  >
                    <CarouselContent>
                      {arr.map((item, index) => (
                        <CarouselItem key={index}>
                          <Image
                            src={item || "/placeholder.svg"}
                            alt="Artwork"
                            width={900}
                            height={600}
                            className="w-full h-[600px] object-cover"
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                  </Carousel>
                )}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ArtworkList;





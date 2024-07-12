import { Hero } from "@/components/blocks/hero";
import Link from "next/link";

export default function NotFound() {
  return (
    <Hero
      data={{
        color: "default",
        headline: "404 – Page Not Found",
        text: "Oops! It seems there's nothing here, how embarrassing.",
        actions: [
          {
            label: "Return Home",
            type: "button",
            icon: true,
            link: "/",
          },
        ],
      }}
    />
    // <div>
    //   <h2>Not Found??</h2>
    //   <p>Could not find requested resource</p>
    //   <Link href="/">Return Home</Link>
    // </div>
  );
}


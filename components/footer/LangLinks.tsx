"use client"

import { localeNames, locales } from "@/config/i18n"
import { Link, usePathname } from "@/i18n/routing"


const LangLinks = () => {
  const pathname = usePathname()
  return (
    <div className="flex space-x-2 flex-wrap justify-center">
      {locales.map((key: string) => {
        const name = localeNames[key]
        return (
          <span key={key}>
            <Link href={pathname} locale={key}>
              {name}
            </Link>
          </span>
        )
      })}
    </div>
  )
}

export default LangLinks

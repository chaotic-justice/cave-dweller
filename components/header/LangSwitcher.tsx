"use client"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { defaultLocale, localeNames, locales } from "@/lib/i18n"
import { usePathname, useRouter } from "@/lib/navigation"
import { useParams } from "next/navigation"

export const LangSwitcher = () => {
  const params = useParams()
  const pathname = usePathname()
  const lang = params.lang
  const router = useRouter()

  // const lang = (params.lang && params.lang[0]) || defaultLocale;
  let langName = lang && lang[0] && lang[0] !== "index" ? lang[0] : defaultLocale

  const handleSwitchLanguage = (value: string) => {
    const newPath = `/${value}/${pathname}`
    console.log("params", params)
    router.replace(pathname, { locale: value })
  }

  return (
    <Select value={langName} onValueChange={handleSwitchLanguage}>
      <SelectTrigger className="w-fit">
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent>
        {locales.map((key: string) => {
          const name = localeNames[key]
          return (
            <SelectItem className="cursor-pointer" key={key} value={key}>
              {name}
            </SelectItem>
          )
        })}
      </SelectContent>
    </Select>
  )
}

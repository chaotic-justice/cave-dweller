"use client"
import HeaderLinks from "@/components/header/HeaderLinks"
import { LangSwitcher } from "@/components/header/LangSwitcher"
import { Link } from "@/lib/navigation"
import { MenuIcon } from "lucide-react"
import { useTranslations } from "next-intl"
import { useState } from "react"
import { CgClose } from "react-icons/cg"

const Header = () => {
  const t = useTranslations("Header")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="py-10 px-4 sm:px-6 lg:px-8">
      <nav className="z-50 flex justify-between">
        <div className="flex items-center md:gap-x-12">
          <Link href="/" aria-label="landing page" title="homepage" className="flex items-center space-x-1 font-bold">
            <span className="text-gray-950 dark:text-gray-300 hidden md:block">{t("title")}</span>
          </Link>
        </div>

        <ul className="hidden items-center gap-8 md:flex">
          {new Array(2).fill(null).map((_, i) => {
            const itemLabel = t(`links.item${i}.label`)
            const itemLink = t(`links.item${i}.link`)
            return (
              <li key={i}>
                <Link href={itemLink} aria-label={itemLabel} title={itemLabel} className="tracking-wide transition-colors duration-200 font-norma">
                  {itemLabel}
                </Link>
              </li>
            )
          })}
        </ul>

        <div className="hidden md:flex items-center gap-x-6">
          <HeaderLinks />
          {/* <ThemedButton /> */}
          <LangSwitcher />
        </div>

        <div className="md:hidden">
          <button aria-label="Open Menu" title="Open Menu" className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50" onClick={() => setIsMenuOpen(true)}>
            <MenuIcon />
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full z-50">
              <div className="p-5 bg-background border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link href="/" aria-label="shukagi" title="shukagi" className="inline-flex items-center">
                      <span className="ml-2 text-xl font-bold tracking-wide text-gray-950 dark:text-gray-300">shukagi</span>
                    </Link>
                  </div>
                  <div>
                    <button aria-label="Close Menu" title="Close Menu" className="tracking-wide transition-colors duration-200 font-norma" onClick={() => setIsMenuOpen(false)}>
                      <CgClose />
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    {new Array(2).fill(null).map((_, i) => {
                      const itemLabel = t(`links.item${i}.label`)
                      const itemLink = t(`links.item${i}.link`)
                      return (
                        <li key={itemLabel}>
                          <Link href={itemLink} aria-label={itemLabel} title={itemLabel} className="font-medium tracking-wide  transition-colors duration-200 hover:text-deep-purple-accent-400" onClick={() => setIsMenuOpen(false)}>
                            {itemLabel}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </nav>
                <div className="pt-2">
                  <div className="py-2 font-bold">Links</div>
                  <div className="flex items-center gap-x-5 justify-between">
                    <HeaderLinks />
                    <div className="flex items-center justify-end gap-x-5">
                      <LangSwitcher />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  )
}

export default Header

"use client"
import { useTranslations } from "next-intl"

type Props = {
  lang: string
}

const About = ({ lang }: Props) => {
  const t = useTranslations("About")

  return (
    <div className="flex min-h-lvh items-center justify-center">
      <div className="container px-4 md:px-6">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="mx-auto max-w-[700px] text-medium sm:text-lg animate-fade-in-up">{t("line0")}</p>
          </div>
          <div className="space-y-4">
            <p className="mx-auto max-w-[700px] text-sm sm:text-base">{t("line1")}</p>
          </div>
          <div className="space-y-4">
            <p className="mx-auto max-w-[700px] text-xs sm:text-sm">{t("line2")}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

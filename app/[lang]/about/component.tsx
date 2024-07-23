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
        <div className="space-y-8 text-center">
          <div className="space-y-4 animate-fade-in-up">
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl lg:text-2xl animate-fade-in-up delay-200">{t("line0")}</p>
          </div>
          <div className="space-y-4 animate-fade-in-up delay-400">
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg lg:text-xl">{t("line1")}</p>
          </div>
          <div className="space-y-4 animate-fade-in-up delay-600">
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-base lg:text-lg">{t("line2")}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

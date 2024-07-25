import About from "@/app/[lang]/about/component"
import { CoreProps } from "@/app/[lang]/layout"

const page = ({ params: { lang } }: CoreProps) => {
  return <About lang={lang} />
}

export default page

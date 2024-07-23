import About from "@/app/[lang]/about/component"
import { CoreParams } from "@/app/[lang]/layout"

const page = ({ params: { lang } }: CoreParams) => {
  return <About lang={lang} />
}

export default page

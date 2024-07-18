import { useMessages, useTranslations } from "next-intl";

type Props = {
  params: { lang: string };
};

const HomePage = ({ params: { lang } }: Props) => {
  const t = useTranslations("CompanyStats");
  const messages = useMessages();
  const keys = Object.keys(messages.CompanyStats);

  return (
    <ul>
      {keys.map((key) => (
        <li key={key}>
          <h2>{t(`${key}.title`)}</h2>
          <p>{t(`${key}.value`)}</p>
        </li>
      ))}
    </ul>
  );
};

export default HomePage;


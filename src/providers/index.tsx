import { LANGUAGE__COOKIE_KEY } from "@/constants/data";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { LanguageContext } from "./context";
import { LANGUAGE_KEY } from "./types";

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [cookies, setCookie] = useCookies([LANGUAGE__COOKIE_KEY]);
  const [language, setLanguage] = useState<LANGUAGE_KEY>(
    cookies[LANGUAGE__COOKIE_KEY] ?? "jp"
  );
  const handleSetLanguage = (language: LANGUAGE_KEY) => {
    setLanguage(language);
    setCookie(LANGUAGE__COOKIE_KEY, language, {
      path: "/",
      maxAge: 30 * 24 * 60 * 60,
    });
  };
  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: handleSetLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

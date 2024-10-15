import { useState } from "react"
import { useTranslation } from "react-i18next"

// setting language
export const useLanguage = () => {
  const { i18n } = useTranslation()
  const lng = document.documentElement.lang
  const [language, setLanguage] = useState(lng)
  const changeLanguage = (language: string) => {
    setLanguage(language)
    // i18n 
    i18n.changeLanguage(language)
    document.documentElement.lang = language
  }
  return { language, changeLanguage }
}
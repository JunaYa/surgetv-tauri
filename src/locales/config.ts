// i18n.js
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

export async function usei18n(): Promise<any> {
  const fallbackLng = document.documentElement.lang
  const lng = fallbackLng
  const resources: Record<string, any> = {}
  const languages: string[] = []
  Object.entries(
    import.meta.glob<{ default: any }>('./**/*.json', {
      eager: true,
    }),
  ).forEach(([key, value]) => {
    const startIndex = key.indexOf('/')
    const endIndex = key.lastIndexOf('.json')
    const language = key.slice(startIndex + 1, endIndex)
    // add language code to languages
    if (!languages.includes(language)) {
      languages.push(language)
    }
    if (!resources[language]) {
      resources[language] = { translation: {} }
    }
    resources[language].translation = { ...resources[language].translation, ...(value as any).default }
  })

  i18n.use(initReactI18next).init({
    returnNull: false,
    resources,
    fallbackLng,
    lng,
    // keySeparator: true, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  })
  return i18n
}

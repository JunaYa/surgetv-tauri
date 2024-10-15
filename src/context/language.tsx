// import { createContext, useContext, useState } from "react";
// import { user } from "~/locales/i18n";
// interface LanguageContextType {
//   language: string;
//   setLanguage: React.Dispatch<React.SetStateAction<string>>;
//   t: (key: string, ...args: any[]) => string;
// }

// const LanguageContext = createContext<LanguageContextType | null>(null);

// // Language provider component
// export const LanguageProvider = ({ children }: { children: React.ReactElement }) => {
//   const [language, setLanguage] = useState('en-US');
//   const value = {
//     language,
//     setLanguage,
//     t: (key: string, ...args: any[]) => {
//       const translation = translations[language][key];
//       if (typeof translation === 'function') {
//         return translation(...args);
//       }
//       return translation;
//     }
//   };

//   return (
//     <LanguageContext.Provider value={value}>
//       {children}
//     </LanguageContext.Provider>
//   );
// };

// // Custom hook to use translations
// const useTranslation = () => {
//   const context = useContext(LanguageContext);
//   if (!context) {
//     throw new Error('useTranslation must be used within a LanguageProvider');
//   }
//   return context;
// };

// export default useTranslation;
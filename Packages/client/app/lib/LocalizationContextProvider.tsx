'use client';
import { createContext, ReactNode, useContext } from 'react';

interface LocalizationContextProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dictionaries: any;
  locale: string;
}

const LocalizationContext = createContext<LocalizationContextProps | null>(
  null
);

export const LocalizationProvider = ({
  children,
  dictionaries,
  locale,
}: {
  children: ReactNode;
  dictionaries: unknown;
  locale: string;
}) => {
  return (
    <LocalizationContext.Provider value={{ dictionaries, locale }}>
      {children}
    </LocalizationContext.Provider>
  );
};

export const useLocalization = () => {
  const context = useContext(LocalizationContext);
  if (!context) {
    throw new Error(
      'useLocalization must be used within a LocalizationProvider'
    );
  }
  return context;
};

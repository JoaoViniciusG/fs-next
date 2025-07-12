"use client"

import {
  useState,
  useEffect,
  createContext
} from 'react';

export const ApplicationContext = createContext();

export default function ApplicationProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(true);
  const [errorModalMessage, setErrorModalMessage] = useState("Tes");

  const callError = (message) => {
    setErrorModalMessage(message);
    setIsErrorModalOpen(true);

    setTimeout(() => {
      setIsErrorModalOpen(false);
      setErrorModalMessage("");
    }, 5000);
  };

  const values = {
    setIsLoading,
    isLoading,
    callError,
    isErrorModalOpen,
    errorModalMessage
  };

  return (
    <ApplicationContext.Provider value={values}>
      {children}
    </ApplicationContext.Provider>
  );
}
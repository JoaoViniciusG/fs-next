"use client"

import {
  useState,
  useEffect,
  createContext
} from 'react';

export const ApplicationContext = createContext();

export default function ApplicationProvider({ children }) {
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [isFailModalOpen, setIsFailModalOpen] = useState(false);
  const [errorModalMessage, setErrorModalMessage] = useState("");
  const [errorFailMessage, setErrorFailMessage] = useState("");
  const [modalErrorTimeout, setModalErrorTimeout] = useState(null);
  const [modalFailTimeout, setModalFailTimeout] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingPage, setIsLoadingPage] = useState(false);

  const [lateralBarIsOpen, setLateralBarIsOpen] = useState(true);
  const [globalFilterIsOpen, setGlobalFilterIsOpen] = useState(false);

  const [globalFilterChildren, setGlobalFilterChildren] = useState(<></>);
  const [globalFilterProperty, setGlobalFilterProperty] = useState({});
  const [filterPropertyUpdater, setFilterPropertyUpdater] = useState(true);

  useEffect(() => {
    console.log(globalFilterProperty);
  }, [globalFilterProperty]);

  const loadingPageDefine = (value) => {
    setIsLoadingPage(value);
    setIsLoading(value);
  }

  const loadingDefine = (value) => {
    setIsLoading(value);
    !value && setIsLoadingPage(value);
  }

  const timeoutErrorModal = () => {
    return setTimeout(() => {
      setIsErrorModalOpen(false);
      setErrorModalMessage("");
    }, 5000);
  };
  const timeoutFailModal = () => {
    return setTimeout(() => {
      setIsFailModalOpen(false);
      setErrorFailMessage("");
    }, 5000);
  };

  const callError = (message) => {
    clearTimeout(modalErrorTimeout);    
    setErrorModalMessage(message);
    setIsErrorModalOpen(true);
    
    setModalErrorTimeout(timeoutErrorModal());
  };

  const callFail = (message) => {
    clearTimeout(modalFailTimeout);    
    setErrorFailMessage(message);
    setIsFailModalOpen(true);
    
    setModalFailTimeout(timeoutFailModal());
  };

  const toggleLateralBar = () => {
    setLateralBarIsOpen(!lateralBarIsOpen);
    if(globalFilterIsOpen) setGlobalFilterIsOpen(false);
  }

  const toggleFilterBar = () => {
    setGlobalFilterIsOpen(!globalFilterIsOpen);
    if(lateralBarIsOpen) setLateralBarIsOpen(false);
  }

  const updateGlobalFilterProperty = (propertyName, value) => {
    let oldProperty = globalFilterProperty;
    oldProperty[propertyName] = value;

    console.log(oldProperty);
    setGlobalFilterProperty(oldProperty);
  };

  const values = {
    loadingDefine,
    isLoading,
    errorFailMessage,
    isFailModalOpen,
    callError,
    callFail,
    loadingPageDefine,
    isLoadingPage,
    isErrorModalOpen,
    errorModalMessage,
    lateralBarIsOpen,
    toggleLateralBar,
    globalFilterIsOpen,
    toggleFilterBar,
    setGlobalFilterChildren,
    globalFilterChildren,
    globalFilterProperty,
    updateGlobalFilterProperty
  };

  return (
    <ApplicationContext.Provider value={values}>
      {children}
    </ApplicationContext.Provider>
  );
}
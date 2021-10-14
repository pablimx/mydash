import { useEffect, createContext, ReactNode, useContext } from 'react'
import { useRouter } from 'next/router'
import { useDisclosure } from '@chakra-ui/react'

interface SidebarDrawerProviderProps {
  children: ReactNode;
}

type SidebarDrawerContextData = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData)

export function SidebarDrawerProvider({ children }: SidebarDrawerProviderProps) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { asPath } = useRouter()

  useEffect(() => {
    onClose()
  }, [asPath, onClose])

  return (
    <SidebarDrawerContext.Provider value={{ isOpen, onOpen, onClose }}>
      {children}
    </SidebarDrawerContext.Provider>
  )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)
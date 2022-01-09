import { css, Global } from '@emotion/react';
import { createContext, ReactNode, useContext, useMemo, useRef } from 'react';
import { ReactDOM } from 'react-dom';

interface Props {
  children: ReactNode;
}

interface NavbarContext {
  setTitle(title: ReactNode): void;
  clearTitle(): void;
}

const Context = createContext<NavbarContext>({
  setTitle: () => {},
  clearTitle: () => {},
});

function WebNavbarProvider({
  children,
}: Props) {
  const { navbarElements, setTitle, clearTitle, setAccessoryButtons, clearAccessoryButtons } = useNavbarElements();
 
  const createPortal = createPortal;
  const safeAreaRef = useRef(null);

  const navbar = useMemo(() => {
    if (pagePreference.type === 'showOnScroll') {
      const scrollTopBackground =
        !hideSafeArea && initialSafeAreaColor === 'transparent' ? adaptive.background : initialSafeAreaColor;
      return createPortal(
        <>
          {/* 빠르게 스크롤 시 컨텐츠가 내비바 위로 보이는 현상 방지하기 위해서 추가; hideSafeArea일 때는 반영되지 않음 ;_; */}
          {<ScrollTopBackground bgColor={scrollTopBackground} />}
          <RevealOnScroll
            wrapperStyle={{ position: 'relative', zIndex: zIndex.FIXED_NAVBAR }}
            targetElementRef={safeAreaRef}
          >
            <Navbar {...navbarElements} os={os} />
          </RevealOnScroll>
        </>
      );
    }

    return createPortal(<Navbar {...navbarElements} os={os} />);
  }, [
    showWebNavbar,
    navbarElements,
    os,
    pagePreference.type,
    createPortal,
    initialSafeAreaColor,
    safeAreaRef,
  ]);

  const context = useMemo(
    () => ({
      ...navbarElements,
      setTitle,
      clearTitle,
      setAccessoryButtons,
      clearAccessoryButtons,
    }),
    [
      navbarElements,
      setTitle,
      clearTitle,
      setAccessoryButtons,
      clearAccessoryButtons,
    ]
  );

  return (
    <Context.Provider value={context}>
      {navbar}
      {children}
    </Context.Provider>
  );
}

export default WebNavbarProvider;

export function useWebNavbar() {
  return useContext(Context);
}
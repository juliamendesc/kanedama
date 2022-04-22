import React, { useContext } from 'react';
import useWindowSize from 'hooks/useWindowSize';

export const DisplayContext = React.createContext([0, 0]);

export function DisplayPortProvider({ children }: { children: JSX.Element }) {
  const value = useWindowSize();
  return <DisplayContext.Provider value={value}>{children}</DisplayContext.Provider>;
}

export function useIsDeviceWidthGreaterThan(size: 'desktop' | 'tablet' | 'mobile'): boolean {
  const [displayWidth] = useContext(DisplayContext);

  if (displayWidth > 768 && size === 'desktop') return true;
  if (displayWidth > 576 && size === 'tablet') return true;
  if (displayWidth > 320 && size === 'mobile') return true;

  return false;
}

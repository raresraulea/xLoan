import React, { useState, createContext } from 'react';
import { PaletteMode, ThemeProvider } from '@mui/material';
import theme from '../theme';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ModeContext = createContext<any>([]);

interface Props {
  children: React.ReactElement;
}
const ModeProvider = ({ children }: Props) => {
  const [mode, setMode] = useState<PaletteMode>('dark');

  const value = React.useMemo(() => [mode, setMode], [mode]);

  return (
    <ModeContext.Provider value={value}>
      <ThemeProvider theme={theme(mode)}>{children}</ThemeProvider>
    </ModeContext.Provider>
  );
};

export default ModeProvider;

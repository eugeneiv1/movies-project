import {Outlet} from "react-router-dom";
import * as React from 'react';

import {ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

import 'normalize.css';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });
const MainLayout = () => {
    const [mode, setMode] = React.useState<'light' | 'dark'>('light');
    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
            }),
        [mode],
    );


    const hideGenres = (ev: { stopPropagation: () => void }) => {
        ev.stopPropagation();
        const genres:HTMLElement | null= document.getElementById('genres');
        if(genres.classList.length === 2) {
            genres.classList.remove('Header_show__2wD1t');
        }
    }

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: 'background.default',
                        color: 'text.primary',
                        borderRadius: 1,
                        p: 3,
                    }}
                >
            <div onClick={hideGenres}>
                <Outlet/>
            </div>
                </Box>
            </ThemeProvider>
        </ColorModeContext.Provider>

    );
};

export {
    MainLayout,
    ColorModeContext
};
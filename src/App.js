import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline, createTheme, darkScrollbar } from '@mui/material'
import config from './config.json'
import * as color from "@mui/material/colors";
import Home from './Home';
import './App.css'
import {
  Outlet,
  Route,
  Routes
} from "react-router-dom";

import NotFound from './NotFound';
import React from 'react';
// import ArabClinic from './Clients/ArabClinic';
// import JeepCity from './Clients/JeepCity';
// import BaitWard from './Clients/BaitWard';
// import Elshamy from './Clients/Elshamy';
// import ICare from './Clients/ICare';
// import FayekPhilip from './Clients/FayekPhilip';
const Clients = React.lazy(() => import('./Clients/Clients'));

export default function App() {
  const darkMode = true

  const primaryColor = darkMode ? config.theme.primaryColorDark : config.theme.primaryColorLight

  const theme = createTheme({
    components: {
      MuiCssBaseline: {
        styleOverrides: (themeParam) => ({
          body: themeParam.palette.mode === 'dark' ? darkScrollbar() : darkScrollbar(),
        }),
      },
      MuiIcon: {
        styleOverrides: {
          root: {
            fontFamily: "'Material Icons Outlined' !important",
          },
        },
      },
      MuiToolbar: {
        styleOverrides: {
          root: {
            textTransform: "capitalize",
          },
        },
      },

      MuiTableCell: {
        styleOverrides: {
          root: {
            padding: "0 16px",
            maxHeight: "45px",
            height: "45px",
            whiteSpace: "nowrap",
          },
          head: {
            // fontWeight: 600,
          },
        },
      },
      MuiSelect: {
        defaultProps: {
          variant: "filled",
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            backgroundImage: "none"
          }
        }
      },
      MuiFormControl: {
        styleOverrides: {
          root: {
            "& label ,& input ,& .MuiSelect-select": {
              // fontSize: "0.800rem",
            },
          },
        },
      },
    },

    palette: {
      mode: darkMode ? 'dark' : 'light',
      // mode: "dark",
      primary: {
        main: primaryColor.startsWith("#")
          ? primaryColor
          : color[`${primaryColor}`][500],
      },
      ...(darkMode ? {
        background: {
          default: "#18191a",
          paper: "#2f3031",
        }
      }
        : {
          background: {
            default: "#fafafa",
            paper: "#fff",
          }
        })
      // secondary: { main: color.blue[400] }
    },
    typography: {
      fontFamily: [`"Exo 2"`, "sans-serif"].join(','),
      fontSize: 12.5,
    },
  });

  return (
    <ThemeProvider
      theme={theme}
    >
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Outlet></Outlet>}>
          <Route index element={<Home />} />
          <Route index path=":id" element={<Clients />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  )
}

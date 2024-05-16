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
// import ArabClinic from './Clients/ArabClinic';
// import JeepCity from './Clients/JeepCity';
// import BaitWard from './Clients/BaitWard';
// import Elshamy from './Clients/Elshamy';
// import ICare from './Clients/ICare';
// import FayekPhilip from './Clients/FayekPhilip';
import Clients from './Clients/Clients';

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
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
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
        {/* <Route exact path="/" element={<Home />} />
        <Route path="/arab-clinic" element={<ArabClinic />} /> */}
        {/* <Route path="/jeep-city" element={<JeepCity />} />
        <Route path="/bait-ward" element={<BaitWard />} />
        <Route path="/elshamy" element={<Elshamy />} />
        <Route path="/i-Care" element={<ICare />} />
        <Route path="/Fayek-Philip" element={<FayekPhilip />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  )
}

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StudentRemembersProvider } from './GlobalContext/StudentRemembersContext'
import { RememberListProvider } from './GlobalContext/RememberListContext'
import { RememberTagListProvider } from './GlobalContext/RememberTagListContext'
import { TagsListRememberProvider } from './GlobalContext/TagsListRememberContext'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import 'semantic-ui-css/semantic.min.css'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import { orange } from '@mui/material/colors'


const root = ReactDOM.createRoot(document.getElementById('root'));

// orange[500]
// "#fefefe"

const theme = createTheme({
    // spacing: {
    //   margin: 10,
            
    // },
    palette: {
      primary: {
        main: "#fefefe"
      },
      secondary: {
        main: orange[500]
      }
    },
    typography: {
      myVariant: {
        fontSize: "1rem",
        // color: orange[500]
      }
    }

  })

root.render(



  <ThemeProvider theme={theme}>
<RememberListProvider>
<StudentRemembersProvider>
  <RememberTagListProvider>
    <TagsListRememberProvider>
<App />
  </TagsListRememberProvider>
  </RememberTagListProvider>
</StudentRemembersProvider>
</RememberListProvider>
</ThemeProvider>


);






















{/* <UserProvider>
<App />
</UserProvider> */}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

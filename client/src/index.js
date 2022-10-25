import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RememberListProvider } from './GlobalContext/RememberListContext'
import { RememberTagListProvider } from './GlobalContext/RememberTagListContext'
import { StudentRemembersProvider } from './GlobalContext/StudentRemembersContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <RememberListProvider>
      <StudentRemembersProvider>
        <RememberTagListProvider>
    <App />
        </RememberTagListProvider>
      </StudentRemembersProvider>
    </RememberListProvider>
  // </React.StrictMode>
);

{/* <UserProvider>
<App />
</UserProvider> */}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

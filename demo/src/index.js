import React from "react";
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import Main from "./Main";
import Store from "./Store";

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <Provider store={Store}>
            <Main />
        </Provider>
    </React.StrictMode>
)

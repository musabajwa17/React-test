import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './utility/QueryClient.jsx'
import { EstoreContext } from './EstoreContext.jsx'
import { Provider } from 'react-redux'
import store from './store.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <QueryClientProvider client={queryClient}>
  <BrowserRouter >
  <Provider store={store}>
  <EstoreContext>
    <App />
    </EstoreContext>
    </Provider>
    </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
)

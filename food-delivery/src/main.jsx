import { createRoot } from 'react-dom/client'
import './assets/css/index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
import { Suspense } from 'react'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
   <Suspense fallback='Loading ....'>
     <App />
   </Suspense>
  </Provider>,
)

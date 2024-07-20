import { createRoot } from 'react-dom/client'
import App from './App'
import './styles.css'
import './index.css'
import Loading from './conponents/Loading/Loading';
import { Suspense } from 'react';

createRoot(document.getElementById('root')).render(
  <>
  
    <Loading />
    <Suspense fallback={null}>
      <App />
    </Suspense>
  </>
)

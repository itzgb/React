import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter ,Routes , Route} from "react-router-dom";
import { AuthProvider } from './components/AuthProvider';
import {Provider} from 'react-redux';
import store from './store/store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
        <AuthProvider>
          <Provider store={store}>
            <Routes>
              <Route path="/*" element={<App />}/>
            </Routes>
          </Provider>
        </AuthProvider>
      </BrowserRouter>  
    
  </React.StrictMode>
);

reportWebVitals();

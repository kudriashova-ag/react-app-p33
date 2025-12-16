import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router';
import router from './router';
import ThemeProvider from './providers/ThemeProvider';
import L18nProvider from './providers/l18nProvider';
import { Provider } from 'react-redux';
import { store } from './app/store';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <L18nProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </L18nProvider>
  </Provider>
);







// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

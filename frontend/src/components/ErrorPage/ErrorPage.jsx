import { useRouteError } from "react-router-dom";
import {Header} from '../Header/Header';
import {Footer} from '../Footer/Footer';
import './ErrorPage.css';
import ErrorBackHomeButton from './ErrorBackHomeButton';

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div>
      <Header></Header>
      <div id='error-page'>
        <div className="error-container">
          <h1>
            Somethings wrong here…
          </h1>
          <p>Page not found</p>
          <ErrorBackHomeButton></ErrorBackHomeButton>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

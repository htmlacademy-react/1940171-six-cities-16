import {Link} from 'react-router-dom';
import {AppRoute} from '../../utils/const';

function NotFoundPage(): JSX.Element {
  return (
    <nav style={{placeContent: 'center',display: 'grid', placeItems: 'center', blockSize: '100svh'}}>
      <p>404 Not Found</p>
      <Link to={AppRoute.Root} className="button form__submit">
        Go to Main page
      </Link>
    </nav>
  );
}

export default NotFoundPage;

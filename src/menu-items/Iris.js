// This is example of menu item without group for horizontal layout. There will be no children.

// third-party
import { FormattedMessage } from 'react-intl';
import '../scss/irid.scss';
// assets
import { IconBrandChrome } from '@tabler/icons-react';

// ==============================|| MENU ITEMS - SAMPLE PAGE ||============================== //

const icons = {
  IconBrandChrome
};
const i = () => (
  <div
    style={{
      width: '20px',
      height: '20px',
      borderRadius: '50%'
    }}
    className="icon"
  />
);
const Iris = {
  id: 'Iris',
  title: <FormattedMessage id="Iris" />,
  icon: i,
  type: 'group',
  url: '/Iris'
};

export default Iris;

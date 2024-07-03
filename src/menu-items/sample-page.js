// This is example of menu item without group for horizontal layout. There will be no children.

// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconBrandChrome } from '@tabler/icons-react';

// ==============================|| MENU ITEMS - SAMPLE PAGE ||============================== //

const icons = {
  IconBrandChrome
};
const i = () => {
  return <i className='iconfont icon-shouye'></i>
}

const Search = {
  id: 'home',
  title: <FormattedMessage id="home"></FormattedMessage>,
  icon: i,
  type: 'group',
  url: '/home'
};

export default Search;

// This is example of menu item without group for horizontal layout. There will be no children.

// third-party
import { FormattedMessage } from 'react-intl';

// assets
import { IconBrandChrome } from '@tabler/icons-react';

// ==============================|| MENU ITEMS - SAMPLE PAGE ||============================== //

const icons = {
  IconBrandChrome
};
const i = () => <i className="iconfont icon-sousuo" />;
const Search = {
  id: 'Search',
  title: <FormattedMessage id="Search" />,
  icon: i,
  type: 'group',
  url: '/Search'
};

export default Search;

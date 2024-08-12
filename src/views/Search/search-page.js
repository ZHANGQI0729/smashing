'use client';

import * as React from 'react';
import MainCard from 'components/ui-component/cards/MainCard';
import SecondaryAction from 'components/ui-component/cards/CardSecondaryAction';
import LinkIcon from '@mui/icons-material/Link';
import Button from '@mui/material/Button';
import Image from 'next/image';
import LayersTwoToneIcon from '@mui/icons-material/LayersTwoTone';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import '../../scss/search.scss';

const backImg = '/assets/images/reports/backImg.png';

// ==============================|| SAMPLE PAGE ||============================== //

const SearchPage = () => {
  // filter
  const initialState = {
    search: '',
    sort: 'low',
    gender: [],
    categories: ['all'],
    colors: [],
    price: '',
    rating: 0
  };
  const [filter, setFilter] = React.useState(initialState);
  // search filter
  const handleSearch = async (event) => {
    const newString = event?.target.value;
    setFilter({ ...filter, search: newString });
  };

  // sort options
  const [anchorEl, setAnchorEl] = React.useState(null);
  const openSort = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const SortOptions = [
    {
      value: 'high',
      label: 'Price: High To Low'
    },
    {
      value: 'low',
      label: 'Price: Low To High'
    },
    {
      value: 'popularity',
      label: 'Popularity'
    },
    {
      value: 'discount',
      label: 'Discount'
    },
    {
      value: 'new',
      label: 'Fresh Arrivals'
    }
  ];

  const sortLabel = SortOptions.filter((items) => items.value === filter.sort);
  const handleMenuItemClick = (event, index) => {
    setFilter({ ...filter, sort: index });
    setAnchorEl(null);
  };

  return (
    <div className="box">
      <MainCard
        title="search"
        secondary={<SecondaryAction icon={<LinkIcon fontSize="small" />} link="https://formik.org/docs/examples/with-material-ui" />}
      >
        <div className="tabcontent">
          {/* <Image src={backImg} alt="Berry" width={700} height={260} style={{ maxWidth: '100%', height: 'auto' }} /> */}
          <h1 className="title">Make a search to get started.</h1>
          <div className="searchInput">
            <TextField
              style={{ marginRight: '10px' }}
              //   sx={{ width: { xs: 140, md: 'auto' } }}
              sx={{ width: 440 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon fontSize="small" />
                  </InputAdornment>
                )
              }}
              value={filter.search}
              placeholder="Search Product"
              size="small"
              onChange={handleSearch}
            />
            <Button
              id="demo-positioned-button"
              aria-controls="demo-positioned-menu"
              aria-haspopup="true"
              aria-expanded={openSort ? 'true' : undefined}
              onClick={handleClickListItem}
              sx={{ color: 'grey.500', fontWeight: 400 }}
              endIcon={<KeyboardArrowDownIcon />}
            >
              {sortLabel.length > 0 && sortLabel[0].label}
            </Button>
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={anchorEl}
              open={openSort}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right'
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
            >
              {SortOptions.map((option, index) => (
                <MenuItem
                  sx={{ p: 1.5 }}
                  key={index}
                  selected={option.value === filter.sort}
                  onClick={(event) => handleMenuItemClick(event, option.value)}
                >
                  {option.label}
                </MenuItem>
              ))}
            </Menu>
          </div>
          <p className="content">Suggested searches will appear here once you’ve linked your Instagram account</p>
          <Button className="btn" startIcon={<LayersTwoToneIcon />}>
            Link Instagram Account
          </Button>
        </div>
      </MainCard>
    </div>
  );
};

export default SearchPage;

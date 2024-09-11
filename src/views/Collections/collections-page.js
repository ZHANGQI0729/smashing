'use client';

import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import LayersTwoToneIcon from '@mui/icons-material/LayersTwoTone';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Avatar from 'components/ui-component/extended/Avatar';
import SubCard from 'components/ui-component/cards/SubCard';
import { gridSpacing } from 'store/constant';
import MainCard from 'components/ui-component/cards/MainCard';
import SecondaryAction from 'components/ui-component/cards/CardSecondaryAction';
import LinkIcon from '@mui/icons-material/Link';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste';
import Cloud from '@mui/icons-material/Cloud';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { useFormik } from 'formik';
import * as yup from 'yup';
import DialogContentText from '@mui/material/DialogContentText';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import EmojiPicker from 'components/ui-component/third-party/EmojiPicker';
import { dispatch } from 'store';
import { openSnackbar } from 'store/slices/snackbar';
import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';
import Menu from '@mui/material/Menu';

import '../../scss/collections.scss';
import { gcollection, pcollection, dcollection } from '../../api/collection/index';

const backImg = '/assets/images/reports/backImg.png';
const Avatar3 = '/assets/images/users/avatar-3.png';
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2)
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1)
  }
}));

// ==============================|| SAMPLE PAGE ||============================== //

const CollectionsPage = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // 请求new Collection
  const [CollectionList, setCollectionList] = React.useState([]);
  // 请求Collection
  const gcollectionFun = async () => {
    const res = await gcollection();
    console.log('CollectionList', res);
    if (res.status === 200) {
      setCollectionList(res.data.items);
    }
  };
  // 添加
  const [openco, setOpenco] = React.useState(false);
  const handleClickOpenco = () => {
    setOpenco(true);
  };
  const handleCloseco = () => {
    setOpenco(false);
  };
  const [message, setMessage] = React.useState('https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f604.png');
  const validationSchema = yup.object({
    Name: yup.string().required('Name is required')
  });
  const formik = useFormik({
    initialValues: {
      Name: ''
    },
    validationSchema,
    onSubmit: async (value) => {
      console.log('value', value, message);
      const res = await pcollection({ Name: value.Name, iconUrl: message });
      console.log('添加Collection', res);
      if (res.status === 200) {
        handleCloseco();
        gcollectionFun();
        formik.values.Name = '';
        dispatch(
          openSnackbar({
            open: true,
            message: '成功',
            variant: 'alert',
            alert: {
              color: 'success'
            },
            close: false
          })
        );
      }
    }
  });

  // ...
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClickSort = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseSort = () => {
    setAnchorEl(null);
  };

  // 删除
  const handleDelete = async () => {
    const res = await dcollection('3a1441dd-cdef-d853-042e-f0b0084f25fb');
    console.log('删除', res);
    if (res.status === 204) {
      dispatch(
        openSnackbar({
          open: true,
          message: '成功',
          variant: 'alert',
          alert: {
            color: 'success'
          },
          close: false
        })
      );
    }
  };

  React.useEffect(() => {
    gcollectionFun();
  }, []);
  return (
    <div className="boxs">
      <MainCard
        title="0 hashtags stored"
        secondary={<SecondaryAction icon={<LinkIcon fontSize="small" />} link="https://formik.org/docs/examples/with-material-ui" />}
      >
        <div style={{ display: 'flex' }}>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Paper sx={{ width: 300, maxWidth: '100%' }}>
              <MenuList>
                <MenuItem>
                  <ListItemIcon>
                    <ContentCut fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Hashtags Used</ListItemText>
                  <Typography variant="body2" color="text.secondary">
                    ⌘X
                  </Typography>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContentCopy fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Recently Ranked</ListItemText>
                  <Typography variant="body2" color="text.secondary">
                    ⌘C
                  </Typography>
                </MenuItem>
                <MenuItem>
                  <ListItemIcon>
                    <ContentPaste fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Top Performing</ListItemText>
                  <Typography variant="body2" color="text.secondary">
                    ⌘V
                  </Typography>
                </MenuItem>
                <Divider />
                {CollectionList.map((item, index) => (
                  <MenuItem key={index}>
                    <ListItemIcon>
                      {/* <ContentPaste fontSize="small" /> */}
                      <Avatar alt="" sx={{ width: 20, height: 20 }} src={item.iconUrl} />
                    </ListItemIcon>
                    <ListItemText>{item.name}</ListItemText>
                    <Typography variant="body2" color="text.secondary">
                      0
                    </Typography>
                  </MenuItem>
                ))}
                <MenuItem>
                  <ListItemIcon>
                    <Cloud fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>My First Collection</ListItemText>
                </MenuItem>
              </MenuList>
            </Paper>
            <Button className="newc" onClick={handleClickOpenco}>
              <AddBoxIcon fontSize="small" />
              &nbsp; New Collection
            </Button>
            {/* 添加 */}
            <Dialog open={openco} onClose={handleCloseco} aria-labelledby="form-dialog-title">
              {openco && (
                <>
                  <DialogTitle id="form-dialog-title">Create a new collection</DialogTitle>
                  <DialogContent>
                    <Stack spacing={3}>
                      <DialogContentText>
                        <Typography variant="body2" component="span">
                          Emoji &nbsp; Collection name
                        </Typography>
                      </DialogContentText>
                      {/* <TextField autoFocus size="small" id="name" label="kelly@monet.com" type="email" fullWidth /> */}
                      <form onSubmit={formik.handleSubmit}>
                        <Grid container spacing={gridSpacing}>
                          <Grid item xs={12} style={{ display: 'flex' }}>
                            <InputAdornment position="start" style={{ marginTop: '25px' }}>
                              <EmojiPicker value={message} setValue={setMessage} />
                            </InputAdornment>
                            <TextField
                              fullWidth
                              id="Name"
                              name="Name"
                              label="Name"
                              value={formik.values.Name}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              error={formik.touched.Name && Boolean(formik.errors.Name)}
                              helperText={formik.touched.Name && formik.errors.Name}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <Stack direction="row" justifyContent="flex-end">
                              <Button variant="contained" type="submit">
                                Create
                              </Button>
                            </Stack>
                          </Grid>
                        </Grid>
                      </form>
                    </Stack>
                  </DialogContent>
                  {/* <DialogActions sx={{ pr: 2.5 }}>
                  <AntButton sx={{ color: 'error.dark' }} onClick={handleClosetc} color="secondary">
                    Cancel
                  </AntButton>
                  <AntButton variant="contained" size="small" onClick={handleClosetc}>
                    Send Invite(s)
                  </AntButton>
                </DialogActions> */}
                </>
              )}
            </Dialog>
          </div>
          {/* all */}
          <div>
            <div className="headerTitle">
              <div>555 收藏</div>
              <div>
                <IconButton onClick={handleClickSort} size="small" aria-label="more options">
                  <MoreHorizTwoToneIcon fontSize="small" />
                </IconButton>
                <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleCloseSort}>
                  <MenuItem onClick={handleCloseSort}>Export as CSV</MenuItem>
                  <MenuItem onClick={handleCloseSort}>Date</MenuItem>
                  <MenuItem onClick={handleCloseSort}>Add to favourites</MenuItem>
                  <MenuItem onClick={handleDelete}>Delete collection</MenuItem>
                </Menu>
              </div>
            </div>
            <div>内容</div>
          </div>
          {/* smart */}
          <div className="tabcontent">
            <Image src={backImg} alt="Berry" width={700} height={260} style={{ maxWidth: '100%', height: 'auto' }} />
            <h1 className="title">Link Instagram account to view Analytics! 🔗</h1>
            <div>
              <h2 className="once">Once your business/creator profile is linked you’ll be able to:</h2>
              <p className="content">See which hashtags your posts are ranking on and working best for your account</p>
              <p className="content">Identify which content is resonating best with your audience</p>
              <p className="content">Find out the best time to post for your account</p>
            </div>
            <Button className="btn" variant="contained" startIcon={<LayersTwoToneIcon />} onClick={handleClickOpen}>
              Link Instagram Account
            </Button>
            {/* 弹出层 */}
            <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
              <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                Edit Socials for 张琪
              </DialogTitle>
              <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  color: (theme) => theme.palette.grey[500]
                }}
              >
                <CloseIcon />
              </IconButton>
              <DialogContent
                style={{
                  width: '750px',
                  backgroundColor: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderRadius: '10px'
                }}
              >
                <Grid container spacing={gridSpacing}>
                  <Grid item lg={6} xs={12}>
                    <div style={{ fontSize: '16px', marginBottom: '20px' }}>You may link one of each Social type to a .</div>
                    <SubCard
                      title={
                        <Grid container spacing={2} alignItems="center">
                          <Grid item>
                            <Avatar alt="User 1" src={Avatar3} />
                          </Grid>
                          <Grid item xs zeroMinWidth>
                            <Typography variant="subtitle1">账号</Typography>
                            <Typography variant="subtitle2">UI/UX Designer</Typography>
                          </Grid>
                          <Grid item>
                            {/* <Chip size="small" label="Pro" color="primary" /> */}
                            <Button variant="contained" onClick={handleClickOpen}>
                              connect
                            </Button>
                          </Grid>
                        </Grid>
                      }
                    >
                      <Grid container spacing={2} alignItems="center">
                        <Grid item>
                          <Avatar alt="User 1" src={Avatar3} />
                        </Grid>
                        <Grid item xs zeroMinWidth>
                          <Typography variant="subtitle1">账号</Typography>
                          <Typography variant="subtitle2">UI/UX Designer</Typography>
                        </Grid>
                        <Grid item>
                          <Button variant="contained" onClick={handleClickOpen}>
                            connect
                          </Button>
                        </Grid>
                      </Grid>
                    </SubCard>
                    <SubCard
                      title={
                        <Grid container spacing={2} alignItems="center">
                          <Grid item>
                            <Avatar alt="User 1" src={Avatar3} />
                          </Grid>
                          <Grid item xs zeroMinWidth>
                            <Typography variant="subtitle1">账号</Typography>
                            <Typography variant="subtitle2">UI/UX Designer</Typography>
                          </Grid>
                          <Grid item>
                            <Button variant="contained" onClick={handleClickOpen}>
                              connect
                            </Button>
                          </Grid>
                        </Grid>
                      }
                    >
                      <Grid container spacing={2} alignItems="center">
                        <Grid item>
                          <Avatar alt="User 1" src={Avatar3} />
                        </Grid>
                        <Grid item xs zeroMinWidth>
                          <Typography variant="subtitle1">账号</Typography>
                          <Typography variant="subtitle2">UI/UX Designer</Typography>
                        </Grid>
                        <Grid item>
                          <Button variant="contained" onClick={handleClickOpen}>
                            connect
                          </Button>
                        </Grid>
                      </Grid>
                    </SubCard>
                  </Grid>
                  <Grid item lg={6} xs={12}>
                    <div style={{ fontSize: '16px', marginBottom: '20px' }}>Save time. Improve results. Get productive.</div>
                    <Grid container spacing={gridSpacing}>
                      <Grid item xs={12}>
                        <SubCard>
                          <Grid container spacing={2}>
                            <Grid item xs={12}>
                              <Typography variant="subtitle1">Once linked you can...</Typography>
                              <Typography variant="subtitle2">Schedule your posts in advance</Typography>
                              <Typography variant="subtitle2">Get tailored suggestions and tips</Typography>
                              <Typography variant="subtitle2">Access in-depth analytics</Typography>
                            </Grid>
                            <Grid item xs={12} sx={{ display: { xs: 'block' } }}>
                              <Divider />
                            </Grid>
                            <Grid item xs={12}>
                              <Typography variant="subtitle1">Keeping your account and data safe</Typography>
                              <Typography variant="subtitle2">Only uses official partner platform API’s</Typography>
                              <Typography variant="subtitle2">We take our data privacy seriously</Typography>
                            </Grid>
                            <Grid item xs={12} sx={{ display: { xs: 'block' } }}>
                              <Divider />
                            </Grid>
                            <Grid item xs={12}>
                              <Typography variant="subtitle1">Keeping your account and data safe</Typography>
                              <Typography variant="subtitle2">Only uses official partner platform API’s</Typography>
                              <Typography variant="subtitle2">We take our data privacy seriously</Typography>
                            </Grid>
                          </Grid>
                        </SubCard>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </DialogContent>
            </BootstrapDialog>
          </div>
        </div>
      </MainCard>
    </div>
  );
};

export default CollectionsPage;

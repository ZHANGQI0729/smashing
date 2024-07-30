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

import '../../scss/reports.scss';

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

const ReportsPage = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="box">
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
  );
};

export default ReportsPage;

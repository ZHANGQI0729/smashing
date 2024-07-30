'use client';

import { useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { Tabs, Button, Popover, Table } from 'antd';
import {
  HomeOutlined,
  MailOutlined,
  ForkOutlined,
  UserOutlined,
  ContainerOutlined,
  EditOutlined,
  PlusOutlined,
  UndoOutlined
} from '@ant-design/icons';
import { gteam } from '../../api/setting/index';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Avatar from 'components/ui-component/extended/Avatar';
import SubCard from 'components/ui-component/cards/SubCard';
import { gridSpacing } from 'store/constant';

import '../../scss/setting.scss';
// ==============================|| SAMPLE PAGE ||============================== //

const Avatar3 = '/assets/images/users/avatar-3.png';
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2)
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1)
  }
}));

const SettingPage = () => {
  // 请求团队
  const gteamfun = async () => {
    const res = await gteam();
    console.log('团队', res);
    // if (res.status === 200) {
    //   setloading(false);
    //   usetabledata(res.data.list);
    //   setcounts(res.data.total);
    // }
  };

  useEffect(() => {
    gteamfun();
  }, []);

  const arr = [1];

  // 社交内容
  const [open, setOpen] = useState(false);
  const hide = () => {
    setOpen(false);
  };
  const content = (
    <div>
      <p>
        <Button type="text">Change Name</Button>
      </p>
      <p>
        <Button danger type="text">
          Delete Social Group
        </Button>
      </p>
    </div>
  );

  // Link Socials 弹窗
  const [openl, setOpenl] = React.useState(false);

  const handleClickOpen = () => {
    setOpenl(true);
  };
  const handleClose = () => {
    setOpenl(false);
  };

  // 发票表格数据
  const dataSource = [
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号'
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号'
    }
  ];

  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age'
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address'
    }
  ];

  const items = [
    {
      key: '1',
      label: <FormattedMessage id="settingTab1" />,
      children: (
        <div className="box">
          <div className="setContent">
            <div className="workspace_title">
              <div className="titleImg" />
              <div className="userName">张 琪</div>
              <EditOutlined className="edit_icon" />
            </div>
            <div className="team">
              <div className="team_title">Team Members</div>
              <div className="team_content">You’re using 0 of your 1 available team member slots.</div>
            </div>
            <div className="invite">
              <div className="invite_title">
                <div className="photo">
                  <UserOutlined />
                </div>
                <div className="name">
                  <div>张琪</div>
                  Owner
                </div>
              </div>
              <Button icon={<PlusOutlined />} className="invite_add">
                invite
              </Button>
            </div>
            <div className="team">
              <div className="team_title">Social Groups</div>
              <div className="team_content">You’re using 0 of your 8 available social media account slots.</div>
            </div>
            <div className="society">
              {arr.map((item, index) => (
                <div className="society_li">
                  <div className="society_top">
                    <div className="society_info">
                      <div className="title">张 琪s Social Group</div>0 of 4 socials connected
                    </div>
                    <div className="logo">图标</div>
                  </div>
                  <div className="btn">
                    <Button type="primary" icon={<UndoOutlined />} className="btn_link" onClick={handleClickOpen}>
                      Link Socials
                    </Button>
                    <Popover placement="rightTop" trigger="click" content={content}>
                      <Button>...</Button>
                    </Popover>
                  </div>
                  <div className="bottom_info">
                    <div className="li">Monthly Usage</div>
                    <div className="li">
                      <div>Posts scheduled</div>
                      <div>0</div>
                    </div>
                    <div className="li">
                      <div>IG Posts tracked with hashtags</div>
                      <div>0</div>
                    </div>
                  </div>
                </div>
              ))}
              <div className={arr.length === 2 ? 'society_create2 society_create' : 'society_create1 society_create'}>
                <Button icon={<PlusOutlined />} className="btn_create">
                  Create New social group
                </Button>
              </div>
            </div>
            <div className="play">
              <div className="plan">Plan</div>
              <div className="content">
                <div className="title_logo">
                  <div className="logo" />
                  <div className="title_info">5th Jul at 3:20 PM.</div>
                </div>
                <Button type="text" className="btn_Upgrade">
                  Upgrade my subscription
                </Button>
              </div>
            </div>
          </div>
        </div>
      ),
      icon: <ForkOutlined />
    },
    {
      key: '2',
      label: <FormattedMessage id="settingTab2" />,
      children: (
        <div className="box">
          <div className="setContent2">
            <div className="ul">
              <div className="details">Personal Details</div>
              <div className="li">
                <div className="lable">
                  <div className="title">Full Name</div>
                  <div className="content">张琪</div>
                </div>
                <Button type="text">
                  <EditOutlined className="edit_icon" />
                </Button>
              </div>
              <div className="li">
                <div className="lable">
                  <div className="title">Email Address</div>
                  <div className="content">17330136057@163.com</div>
                </div>
                <Button type="text">
                  <EditOutlined className="edit_icon" />
                </Button>
              </div>
              <div className="li">
                <div className="lable">
                  <div className="title">Password</div>
                  <div className="content">**************</div>
                </div>
                <Button type="text">
                  <EditOutlined className="edit_icon" />
                </Button>
              </div>
              <div className="li">
                <div className="lable">
                  <div className="title">Google Account</div>
                  <div className="content">Not linked</div>
                </div>
                <Button disabled loading>
                  Loading...
                </Button>
              </div>
              <div className="li">
                <div className="lable">
                  <div className="title">Weekly Email Reports</div>
                  <div className="content">Which accounts would you like to receive Weekly Email Reports for?</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      icon: <UserOutlined />
    },
    {
      key: '3',
      label: <FormattedMessage id="settingTab3" />,
      children: (
        <div className="box">
          <div className="setContent3">
            <div className="team">
              <div className="add_title">
                <div className="Workspace">Add, edit or remove people from the Workspace</div>
                <div className="available">• 0 of 1 available team member slots in use</div>
              </div>
            </div>
            <div className="yourTeam">
              <div className="you">
                <div className="Your">Your Team</div>
                <div className="pending">You, 0 team members, and 1 pending invite.</div>
              </div>
              <Button icon={<PlusOutlined />} className="newMember" type="primary">
                Invite new member
              </Button>
            </div>
            <div className="table">
              <Table pagination={false} dataSource={dataSource} columns={columns} />;
            </div>
            <div className="bottom">
              <div className="problem">Experiencing issues related to your Workspace?</div>
              <div className="btn">
                <Button className="btn_n">See FAQ Answers</Button>
                <Button className="btn_n">contact Support</Button>
              </div>
            </div>
          </div>
        </div>
      ),
      icon: <HomeOutlined />
    },
    {
      key: '4',
      label: <FormattedMessage id="settingTab4" />,
      children: (
        <div className="box">
          <div className="setContent4">
            <div className="billing">
              <div className="left">
                <div className="Summary">
                  <h3>Billing Summary</h3>
                  <p>You’re trialling the pro plan.</p>
                  <p>Your subscription will automatically activate on 5th Jul at 3:20 PM. You will be charged £30.00 including VAT.</p>
                </div>
                <div className="payment">
                  <div className="details">
                    <div className="d_title">Payment Details</div>
                    <Button type="link" block className="edit">
                      Edit
                    </Button>
                  </div>
                  <div className="paypal">Paypal</div>
                </div>
                <div className="payment payment_b">
                  <div className="details">
                    <div className="d_title">Additional Billing Details</div>
                    <Button type="link" block className="edit">
                      Edit
                    </Button>
                  </div>
                  <div className="paypal">Country - US</div>
                  <div className="paypal">VAT Number - Not Specified</div>
                </div>
              </div>
              <div className="right">
                <div className="li">
                  <div className="lable">Cost Breakdown</div>
                  <div className="content" />
                </div>
                <div className="li">
                  <div className="lable">Product</div>
                  <div className="content">Monthly Cost</div>
                </div>
                <div className="li">
                  <div className="lable">Pro Monthly</div>
                  <div className="content">£30.00</div>
                </div>
                <div className="li">
                  <div className="lable">Monthly Subtotal</div>
                  <div className="content">£30.00</div>
                </div>
                <div className="li">
                  <div className="lable">Total</div>
                  <div className="content">£30.00</div>
                </div>
              </div>
            </div>
            <div className="btn">
              <Button className="btn_n">Cancel Subscription</Button>
              <div className="btn_right">
                <Button className="btn_n">Cancel Changes</Button>
                <Button className="btn_n btn_config" type="primary">
                  Modify Subscription
                </Button>
              </div>
            </div>
          </div>
        </div>
      ),
      icon: <MailOutlined />
    },
    {
      key: '5',
      label: <FormattedMessage id="settingTab5" />,
      children: (
        <div className="box">
          <div className="setContent5">
            <div className="invoice">
              <div className="title">Your Invoices</div>
              <div className="table">
                <Table dataSource={dataSource} columns={columns} />;
              </div>
            </div>
          </div>
        </div>
      ),
      icon: <ContainerOutlined />
    }
  ];

  return (
    <div>
      <div>
        <Tabs defaultActiveKey="2" items={items} />
        <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={openl}>
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
                        <Button type="primary">connect</Button>
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
                      <Button type="primary">connect</Button>
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
                        <Button type="primary">connect</Button>
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
                      <Button type="primary">connect</Button>
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
  );
};

export default SettingPage;

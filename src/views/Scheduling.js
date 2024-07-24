/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable lines-around-directive */
'use client';
import { FormattedMessage } from 'react-intl';
import { useState } from 'react';
import ReactPlayer from 'react-player';
import {
  Card,
  Col,
  Row,
  Drawer,
  GetProp,
  Button,
  Select,
  UploadFile,
  UploadProps,
  Image,
  Upload,
  Modal,
  Checkbox,
  Form,
  Input,
  Dropdown,
  Space
} from 'antd';
import { useRouter } from 'next/navigation';
import { TikTokOutlined, FacebookOutlined, PlusOutlined, DownOutlined } from '@ant-design/icons';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
// eslint-disable-next-line import/no-unresolved
// import { LocalizationProvider, MobileDateTimePicker } from '@mui/x-date-pickers';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Tab from '@mui/material/Tab';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';
import '../scss/Scheduling.scss';
// ==============================|| SAMPLE PAGE ||=======;======================= //

const SchedulingPage = () => {
  const router = useRouter();
  // 首页四个跳转
  const gopage = (e) => {
    // console.log(e);
    router.push(e);
  };
  // 媒体库抽屉
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  // 上传图片
  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader?.result);
      reader.onerror = (error) => reject(error);
    });
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [fileList, setFileList] = useState([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    },
    {
      uid: '-2',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    },
    {
      uid: '-3',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    },
    {
      uid: '-4',
      name: 'image.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    },
    {
      uid: '-xxx',
      percent: 50,
      name: 'image.png',
      status: 'uploading',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
    },
    {
      uid: '-5',
      name: 'image.png',
      status: 'error'
    }
  ]);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };

  const [isbrandhub, setisbrandhub] = useState(false);

  const brandhubshowModal = () => {
    setisbrandhub(true);
  };

  const brandhubhandleOk = () => {
    setisbrandhub(false);
  };

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  const uploadButton = (
    <button style={{ border: 0, background: 'none' }} type="button">
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2)
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1)
    }
  }));

  // 品牌中心弹出层中左tab栏
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div role="tabpanel" hidden={value !== index} id={`vertical-tabpanel-${index}`} aria-labelledby={`vertical-tab-${index}`} {...other}>
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired
  };

  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`
    };
  }

  const [hubvalue, sethubValue] = useState(0);

  const hubhandleChange = (event, newValue) => {
    sethubValue(newValue);
  };
  // Business info
  const onBusinessInfoFinish = (values) => {
    console.log('Success:', values);
  };
  const onBusinessInfoFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const { Option } = Select;
  // business type
  const onBusinessType = (e) => {
    console.log(e);
  };
  const onSocialType = (e) => {
    console.log(e);
  };
  const onAudienceType = (e) => {
    console.log(e);
  };
  // brand voice
  const onvoiceFinish = (values) => {
    console.log('Success:', values);
  };

  const onvoiceFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  // 创建主题
  const [createtheme, setcreatetheme] = useState(false);

  const createthemeClose = () => {
    setcreatetheme(false);
  };
  const CreateThemeopen = () => {
    setcreatetheme(true);
  };
  // 删除主题
  const [createthemedel, setcreatethemedel] = useState(false);
  const createthemeClosedel = () => {
    setcreatethemedel(false);
  };
  const CreateThemeopendel = () => {
    setcreatethemedel(true);
  };
  // 编辑主题
  const [createthemeedit, setcreatethemeedit] = useState(false);
  const createthemeCloseedit = () => {
    setcreatethemeedit(false);
  };
  const CreateThemeopenedit = () => {
    setcreatethemeedit(true);
  };
  const onFinishedit = (values) => {
    console.log('Success:', values);
  };
  const [KeyTitle, setKeyTitle] = useState('US');
  const items = [
    {
      label: <FormattedMessage id="United States" />,
      key: '0'
    },
    {
      label: <FormattedMessage id="United Kingdom" />,
      key: '1'
    },
    {
      label: <FormattedMessage id="Rest of the World" />,
      key: '2'
    }
  ];

  // 创建关键事件
  const [createthemekey, setcreatethemekey] = useState(false);
  const createthemeClosekey = () => {
    setcreatethemekey(false);
  };
  const CreateThemeopenkey = () => {
    setcreatethemekey(true);
  };
  // 创建关键事件的时间
  // eslint-disable-next-line no-undef
  const [stateRepeating, setStateRepeating] = useState(false);

  const handleChangeRepeating = (event) => {
    setStateRepeating(!stateRepeating);
  };
  const [statekey, setStatekey] = useState({
    checkedA: true,
    checkedB: true,
    checkedC: true
  });

  const handleChangekey = (event) => {
    setStatekey({ ...statekey, [event.target.name]: event.target.checked });
  };
  // 删除我的关键时间
  const [createthemekeydel, setcreatethemekeydel] = useState(false);
  const createthemeClosekeydel = () => {
    setcreatethemekeydel(false);
  };
  const CreateThemeopenkeydel = () => {
    setcreatethemekeydel(true);
  };
  return (
    <div className="Scheduling">
      <BootstrapDialog onClose={brandhubhandleOk} aria-labelledby="customized-dialog-title" open={isbrandhub}>
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          <FormattedMessage id="SchedulingBrandhub" />
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={brandhubhandleOk}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500]
          })}
        >
          <CloseIcon />
        </IconButton>
        <div className="box">
          <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 300 }}>
            <Tabs
              orientation="vertical"
              variant="scrollable"
              value={hubvalue}
              onChange={hubhandleChange}
              aria-label="Vertical tabs example"
              sx={{ borderRight: 2, borderColor: 'divider' }}
            >
              <Tab label={<FormattedMessage id="Schedulingtab1" />} {...a11yProps(0)} />
              <Tab label={<FormattedMessage id="Schedulingtab2" />} {...a11yProps(1)} />
              <Tab label={<FormattedMessage id="Schedulingtab3" />} {...a11yProps(2)} />
              <Tab label={<FormattedMessage id="Schedulingtab4" />} {...a11yProps(3)} />
              <Tab label={<FormattedMessage id="Schedulingtab5" />} {...a11yProps(4)} />
            </Tabs>
            <TabPanel value={hubvalue} index={0}>
              <div style={{ height: '300px', overflowY: 'auto' }}>
                <div
                  style={{
                    width: '620px',
                    height: '100px',
                    backgroundColor: '#eee',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '10px'
                  }}
                >
                  <div>
                    <div style={{ fontSize: '17px', fontWeight: '700' }}>
                      💼 <FormattedMessage id="Schedulingtab1" />
                    </div>
                    <div style={{ maxWidth: '265px', marginTop: '10px', color: 'grey' }}>
                      <FormattedMessage id="Schedulingintroduce" />
                    </div>
                  </div>
                  <div>
                    <i className="iconfont icon-arrow-left" style={{ marginRight: '10px', fontSize: '10px' }} />
                    <FormattedMessage id="Schedulinggo" style={{ fontSize: '15px' }} />
                  </div>
                </div>
                <Form
                  name="basic"
                  style={{
                    padding: '10px'
                  }}
                  onFinish={onBusinessInfoFinish}
                  onFinishFailed={onBusinessInfoFinishFailed}
                  autoComplete="off"
                >
                  <Form.Item
                    label={<FormattedMessage id="Schedulingbusinessname" />}
                    name="Business Name"
                    rules={[
                      {
                        required: true
                      }
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Form.Item
                      name="Business Type"
                      label={<FormattedMessage id="SchedulingBusinessType" />}
                      rules={[
                        {
                          required: true
                        }
                      ]}
                    >
                      <Select
                        style={{
                          width: 160
                        }}
                        onChange={onBusinessType}
                        allowClear
                      >
                        <Option value="male">male</Option>
                        <Option value="female">female</Option>
                        <Option value="other">other</Option>
                      </Select>
                    </Form.Item>
                    <Form.Item
                      name="Social Type"
                      label={<FormattedMessage id="SchedulingSocialType" />}
                      rules={[
                        {
                          required: true
                        }
                      ]}
                    >
                      <Select
                        style={{
                          width: 160
                        }}
                        onChange={onSocialType}
                        allowClear
                      >
                        <Option value="male">male</Option>
                        <Option value="female">female</Option>
                        <Option value="other">other</Option>
                      </Select>
                    </Form.Item>
                  </div>

                  <Form.Item
                    name="Short Business Bio"
                    label={<FormattedMessage id="SchedulingShortBusinessBio" />}
                    rules={[
                      {
                        required: true
                      }
                    ]}
                  >
                    <Input.TextArea />
                  </Form.Item>
                  <Form.Item
                    name="Audience Type"
                    label={<FormattedMessage id="SchedulingAudienceType" />}
                    rules={[
                      {
                        required: true
                      }
                    ]}
                  >
                    <Select onChange={onAudienceType} allowClear>
                      <Option value="male">male</Option>
                      <Option value="female">female</Option>
                      <Option value="other">other</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item
                    name="Target Audiences"
                    label={<FormattedMessage id="SchedulingTargetAudiences" />}
                    rules={[
                      {
                        required: true
                      }
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Form>
              </div>
            </TabPanel>
            <TabPanel value={hubvalue} index={1}>
              <div style={{ height: '300px', overflowY: 'auto' }}>
                <div
                  style={{
                    width: '600px',
                    height: '100px',
                    backgroundColor: '#eee',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '10px'
                  }}
                >
                  <div>
                    <div style={{ fontSize: '17px', fontWeight: '700' }}>
                      🗣️ <FormattedMessage id="Schedulingtab2" />
                    </div>
                    <div style={{ maxWidth: '265px', marginTop: '10px', color: 'grey' }}>
                      <FormattedMessage id="Schedulingvoice" />
                    </div>
                  </div>
                  <div>
                    <i className="iconfont icon-arrow-left" style={{ marginRight: '10px', fontSize: '10px' }} />
                    <FormattedMessage id="Schedulinggo" style={{ fontSize: '15px' }} />
                  </div>
                </div>
                <Form
                  name="voice"
                  style={{ padding: '10px' }}
                  onFinish={onvoiceFinish}
                  onFinishFailed={onvoiceFinishFailed}
                  autoComplete="off"
                >
                  <Form.Item
                    label={<FormattedMessage id="SchedulingLanguage" />}
                    name="Language"
                    rules={[
                      {
                        required: true
                      }
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label={<FormattedMessage id="SchedulingVoice" />}
                    name="Voice"
                    rules={[
                      {
                        required: true
                      }
                    ]}
                  >
                    <Input.TextArea />
                  </Form.Item>
                  <Form.Item style={{ marginLeft: '10px' }} label={<FormattedMessage id="SchedulingSpecialRules" />} name="SpecialRules">
                    <Input.TextArea />
                  </Form.Item>
                </Form>
              </div>
            </TabPanel>
            <TabPanel value={hubvalue} index={2}>
              <div style={{ height: '300px', overflowY: 'auto' }}>
                <div
                  style={{
                    width: '600px',
                    height: '100px',
                    backgroundColor: '#eee',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '10px'
                  }}
                >
                  <div>
                    <div style={{ fontSize: '17px', fontWeight: '700' }}>
                      💭️ <FormattedMessage id="Schedulingtab2" />
                    </div>
                    <div style={{ maxWidth: '265px', marginTop: '10px', color: 'grey' }}>
                      <FormattedMessage id="Schedulingtab2text" />
                    </div>
                  </div>
                  <div style={{ color: '#266cdf', fontSize: '15px' }} onClick={CreateThemeopen}>
                    <text style={{ marginRight: '10px' }}>+</text>
                    <FormattedMessage id="CreateTheme" style={{ fontSize: '15px' }} />
                  </div>
                  <Dialog
                    open={createtheme}
                    onClose={createthemeClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogTitle id="alert-dialog-title">
                      <FormattedMessage id="CreateThemeList" />
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-description">
                        <FormattedMessage id="Description" />
                        <Input.TextArea />
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={createthemeClose}>
                        <FormattedMessage id="Discard & Go Back" />
                      </Button>
                      <Button onClick={createthemeClose} type="primary">
                        <FormattedMessage id="Create Content Theme" />
                      </Button>
                    </DialogActions>
                  </Dialog>
                </div>
                <div style={{ padding: '10px', fontSize: '18px' }}>
                  <div style={{ fontWeight: '700' }}>
                    0/4 <FormattedMessage id="Schedulingtab3" />
                  </div>
                  <div
                    style={{
                      marginTop: '10px',
                      border: '1px solid #e8e8e8',
                      padding: '10px',
                      width: '100%',
                      backgroundColor: '#fafafa',
                      borderRadius: '8px',
                      marginBottom: '10px'
                    }}
                  >
                    <div className="contentThemes">
                      <div className="contentThemes_top">
                        <div className="contentThemes_top_title">标题</div>
                        <div className="contentThemes_top_text">
                          <text onClick={CreateThemeopendel}>
                            <i className="iconfont icon-shanchu" />
                            <text style={{ marginLeft: '5px' }}>
                              <FormattedMessage id="Remove" />
                            </text>
                          </text>
                          <Dialog
                            open={createthemedel}
                            onClose={createthemeClosedel}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                          >
                            <DialogTitle id="alert-dialog-title">
                              <FormattedMessage id="delcontthe" />
                            </DialogTitle>
                            <DialogContent>
                              <DialogContentText id="alert-dialog-description">
                                <FormattedMessage id="delcontthecont" />
                              </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                              <Button onClick={createthemeClosedel}>
                                <FormattedMessage id="Back to Safety" />
                              </Button>
                              <Button onClick={createthemeClosedel} type="primary">
                                <FormattedMessage id="delcontthe" />
                              </Button>
                            </DialogActions>
                          </Dialog>
                          <text style={{ marginLeft: '15px' }} onClick={CreateThemeopenedit}>
                            <i className="iconfont icon-bianji" />
                            <text style={{ marginLeft: '5px' }}>
                              <FormattedMessage id="Edit" />
                            </text>
                          </text>
                          <Dialog
                            open={createthemeedit}
                            onClose={createthemeCloseedit}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                          >
                            <DialogTitle id="alert-dialog-title">
                              <FormattedMessage id="editcontthe" />
                            </DialogTitle>
                            <DialogContent>
                              <Form name="edit" onFinish={onFinishedit}>
                                <Form.Item
                                  label={<FormattedMessage id="Name" />}
                                  name="Name"
                                  rules={[
                                    {
                                      required: true
                                    }
                                  ]}
                                >
                                  <Input />
                                </Form.Item>
                                <Form.Item
                                  label={<FormattedMessage id="Description" />}
                                  name="Description"
                                  rules={[
                                    {
                                      required: true
                                    }
                                  ]}
                                >
                                  <Input.TextArea />
                                </Form.Item>
                                <Form.Item
                                  label={<FormattedMessage id="Sub-topics" />}
                                  name="Sub-topics"
                                  rules={[
                                    {
                                      required: true
                                    }
                                  ]}
                                >
                                  <Input />
                                  <Input style={{ marginTop: '10px' }} />
                                  <Input style={{ marginTop: '10px' }} />
                                  <Input style={{ marginTop: '10px' }} />
                                  <Input style={{ marginTop: '10px' }} />
                                </Form.Item>
                              </Form>
                            </DialogContent>
                            <DialogActions>
                              <Button onClick={createthemeCloseedit}>
                                <FormattedMessage id="Back to Safety" />
                              </Button>
                              <Button onClick={createthemeCloseedit} type="primary">
                                <FormattedMessage id="editcontthe" />
                              </Button>
                            </DialogActions>
                          </Dialog>
                        </div>
                      </div>
                      <div className="contentThemes_bottom">内容</div>
                    </div>
                    <div className="contentThemestext">
                      <FormattedMessage id="Sub-topics" />
                      <div className="contentThemestext_t">1、a</div>
                      <div className="contentThemestext_t">1、a</div>
                      <div className="contentThemestext_t">1、a</div>
                      <div className="contentThemestext_t">1、a</div>
                      <div className="contentThemestext_t">1、a</div>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel value={hubvalue} index={3}>
              <div style={{ height: '300px', overflowY: 'auto', padding: '10px' }}>
                <div
                  style={{
                    width: '600px',
                    // height: '80px',
                    backgroundColor: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px 16px',
                    borderRadius: '10px',
                    border: '1px solid transparent'
                  }}
                  className="keyevents"
                >
                  <div className="keyEvents_left">
                    <div className="keyEvents_icon">🎊</div>
                    <div className="keyEvents_content">
                      <FormattedMessage id="keyEventscontent" />
                    </div>
                  </div>
                  <div className="keyEvents_right">
                    <Button
                      style={{
                        color: '#0044bd'
                      }}
                      onClick={CreateThemeopenkey}
                    >
                      + <FormattedMessage id="addkeyevent" />
                    </Button>
                    <Dialog
                      open={createthemekey}
                      onClose={createthemeCloseedit}
                      aria-labelledby="alert-dialog-title"
                      aria-describedby="alert-dialog-description"
                    >
                      <DialogTitle id="alert-dialog-title">
                        <FormattedMessage id="Create Key Event" />
                      </DialogTitle>
                      <DialogContent>
                        <Form name="edit" onFinish={onFinishedit}>
                          <Form.Item
                            label={<FormattedMessage id="Name" />}
                            name="Name"
                            rules={[
                              {
                                required: true
                              }
                            ]}
                          >
                            <Input />
                          </Form.Item>
                          <Form.Item
                            name="Time"
                            rules={[
                              {
                                required: true
                              }
                            ]}
                          >
                            <TextField
                              id="date"
                              label={<FormattedMessage id="Time" />}
                              type="date"
                              InputLabelProps={{
                                shrink: true
                              }}
                              style={{ marginLeft: '50px' }}
                            />
                            <FormControlLabel
                              style={{ marginLeft: '10px' }}
                              control={<Switch checked={stateRepeating} onChange={handleChangeRepeating} name="checkedB" color="primary" />}
                              label={<FormattedMessage id="Repeating" />}
                            />
                          </Form.Item>
                          <Form.Item
                            label={<FormattedMessage id="Description" />}
                            name="Description"
                            rules={[
                              {
                                required: true
                              }
                            ]}
                          >
                            <Input.TextArea />
                          </Form.Item>
                        </Form>
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={createthemeClosekey}>
                          <FormattedMessage id="Back to Safety" />
                        </Button>
                        <Button onClick={createthemeClosekey} type="primary">
                          <FormattedMessage id="Create Key Event" />
                        </Button>
                      </DialogActions>
                    </Dialog>
                  </div>
                </div>
                <div className="globalkeyevents">
                  <div className="globalkeyevents_title">
                    <FormattedMessage id="Global Key Events" />
                  </div>
                  <div className="globalkeyevents_right">
                    <Dropdown
                      menu={{
                        items
                      }}
                      trigger={['click']}
                    >
                      <a onClick={(e) => e.preventDefault()}>
                        <Space>
                          <div>
                            US
                            <DownOutlined />
                          </div>
                        </Space>
                      </a>
                    </Dropdown>
                    {/* <Dropdown
                      menu={{
                        KeyEventsitems
                      }}
                      trigger={['click']}
                      placement="bottomLeft"
                    >
                      <div>
                        <a onClick={(e) => e.preventDefault()}>
                          <Space>
                            US
                            <DownOutlined />
                          </Space>
                        </a>
                      </div>
                    </Dropdown> */}
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <FormControlLabel
                    control={<Switch checked={statekey.checkedA} onChange={handleChangekey} name="checkedA" color="primary" />}
                    label={<FormattedMessage id="Seasonal Holidays" />}
                  />
                  <FormControlLabel
                    control={<Switch checked={statekey.checkedB} onChange={handleChangekey} name="checkedB" color="primary" />}
                    label={<FormattedMessage id="Awareness Days" />}
                  />
                  <FormControlLabel
                    control={<Switch checked={statekey.checkedC} onChange={handleChangekey} name="checkedC" color="primary" />}
                    label={<FormattedMessage id="Public Holidays" />}
                  />
                </div>
                <div className="globalkeyevents">
                  <div className="globalkeyevents_title">
                    <FormattedMessage id="My Key Events" />
                  </div>
                </div>
                <div className="globalkeyevents_box">
                  <div className="globalkeyevents_box_title">标题</div>
                  <div className="globalkeyevents_box_right">
                    <div className="globalkeyevents_box_right_time">时间</div>
                    <div className="globalkeyevents_box_right_del" onClick={CreateThemeopenkeydel}>
                      <IconButton>
                        <DeleteIcon />
                      </IconButton>
                      <Dialog
                        open={createthemekeydel}
                        onClose={createthemeClosedel}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                      >
                        <DialogTitle id="alert-dialog-title">
                          <FormattedMessage id="delcontthe" />
                        </DialogTitle>
                        <DialogContent>
                          <DialogContentText id="alert-dialog-description">
                            <FormattedMessage id="delcontthecont" />
                          </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                          <Button onClick={createthemeClosekeydel}>
                            <FormattedMessage id="Back to Safety" />
                          </Button>
                          <Button onClick={createthemeClosekeydel} type="primary">
                            <FormattedMessage id="delcontthe" />
                          </Button>
                        </DialogActions>
                      </Dialog>
                    </div>
                  </div>
                </div>
              </div>
            </TabPanel>
            <TabPanel value={hubvalue} index={4}>
              Item Five
            </TabPanel>
          </Box>
        </div>
        <DialogActions>
          <Button type="primary" onClick={brandhubhandleOk}>
            <FormattedMessage id="SchedulingBrandSave" />
          </Button>
        </DialogActions>
      </BootstrapDialog>
      {/* 媒体库抽屉 */}
      <Drawer
        zIndex="99999"
        title={
          <div>
            <i className="iconfont icon-tupian"> </i> <FormattedMessage id="Schedulingmedia" />
          </div>
        }
        onClose={onClose}
        open={open}
      >
        <div
          style={{
            lineHeight: '30px',
            fontSize: '15px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontWeight: '700'
          }}
        >
          <div>
            <i className="iconfont icon-caogao" style={{ color: 'grey' }}>
              {' '}
            </i>{' '}
            <FormattedMessage id="Schedulingmediadraft" />
          </div>
          <i className="iconfont icon-youzhuan" style={{ color: 'grey' }}>
            {' '}
          </i>
        </div>
        <div
          style={{
            lineHeight: '30px',
            fontSize: '15px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontWeight: '700'
          }}
        >
          <div>
            <i className="iconfont icon-xiaoxi" style={{ color: 'grey' }} /> <FormattedMessage id="Schedulingmediarecent" />
          </div>
          <i className="iconfont icon-youzhuan" style={{ color: 'grey' }} />
        </div>
        <div style={{ marginTop: '30px', lineHeight: '30px', fontSize: '16px' }}>
          <FormattedMessage id="SchedulingmediaUploaded" />
        </div>
        <Upload
          action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
          listType="picture-card"
          fileList={fileList}
          onPreview={handlePreview}
          onChange={handleChange}
        >
          {fileList?.length >= 8 ? null : uploadButton}
        </Upload>
        {previewImage && (
          <Image
            wrapperStyle={{ display: 'none' }}
            preview={{
              visible: previewOpen,
              onVisibleChange: (visible) => setPreviewOpen(visible),
              afterOpenChange: (visible) => !visible && setPreviewImage('')
            }}
            src={previewImage}
          />
        )}
      </Drawer>
      <div className="Scheduling_top">
        <div className="Scheduling_top_left">
          <div className="Scheduling_top_left_title">
            <h2>
              <FormattedMessage id="SchedulingTitle" />
            </h2>
          </div>
          <div className="Scheduling_top_left_text" onClick={() => gopage('/setting')}>
            <div className="a">
              <i className="iconfont icon-FacebookOutlined" />
            </div>
            <div className="a">
              <i className="iconfont icon-in"> </i>
            </div>
            <div className="a">
              <i className="iconfont icon-instagram"> </i>
            </div>
            <div className="a">
              {' '}
              <i className="iconfont icon-douyin"> </i>
            </div>
            <div style={{ marginLeft: '3px', fontSize: '17px', fontWeight: '700' }}>
              {' '}
              0 <FormattedMessage id="Schedulingtext" />
            </div>
          </div>
        </div>
        <div className="Scheduling_top_right">
          <Button type="text" onClick={showDrawer}>
            <i className="iconfont icon-tupian"> </i> <FormattedMessage id="Schedulingmedia" />
          </Button>
          <Button type="text" style={{ marginLeft: '10px' }} onClick={brandhubshowModal}>
            <i className="iconfont icon-shangdian"> </i> <FormattedMessage id="SchedulingBrand" />
          </Button>
          <Button type="primary" style={{ marginLeft: '10px' }}>
            + <FormattedMessage id="Schedulingcreate" />
          </Button>
        </div>
      </div>
      <div className="Iris">
        <div className="Iris_title">
          <div className="circle"> </div>
          <div className="title">
            <FormattedMessage id="Iris"> </FormattedMessage>
          </div>
        </div>
        <div className="Iris_box">
          <Button type="text" onClick={() => gopage('/Iris')}>
            <i className="iconfont icon-xingzhuang34"> </i> <FormattedMessage id="Schedulingplan"> </FormattedMessage>
          </Button>
        </div>
        <div className="Iris_box">
          <Button type="text" onClick={() => gopage('/Iris')}>
            <i className="iconfont icon-shezhi"> </i>
            <FormattedMessage id="Schedulingmy"> </FormattedMessage>
          </Button>
        </div>
        <div className="Iris_box">
          <Button type="text" disabled>
            <i className="iconfont icon-xiaohuohua-01"> </i>
            <FormattedMessage id="Schedulingviral"> </FormattedMessage>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SchedulingPage;

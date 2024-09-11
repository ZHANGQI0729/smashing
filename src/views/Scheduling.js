/* eslint-disable eqeqeq */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable lines-around-directive */
'use client';
import { FormattedMessage } from 'react-intl';
import React, { useState, useEffect, useRef } from 'react';
import {
  Drawer,
  Button,
  Image,
  Upload,
  Form,
  Input,
  DatePicker
} from 'antd';
import { useRouter } from 'next/navigation';
import { PlusOutlined } from '@ant-design/icons';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { UploadOutlined } from '@ant-design/icons';
import Box from '@mui/material/Box';
import '../scss/Scheduling.scss';
import SubCard from 'components/ui-component/cards/SubCard';
import FullCalendar from '@fullcalendar/react';
import listPlugin from '@fullcalendar/list';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import timelinePlugin from '@fullcalendar/timeline';
import interactionPlugin from '@fullcalendar/interaction';
import { dispatch, useSelector } from 'store';
import useMediaQuery from '@mui/material/useMediaQuery';
import Toolbar from 'components/application/calendar/Toolbar';
import { getEvents, updateEvent } from 'store/slices/calendar';
import { createadd } from "api/Scheduling/index"
import { openSnackbar } from 'store/slices/snackbar';
import PPZX from 'components/Scheduling/ppzx'
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

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  const uploadButton = (
    <button style={{ border: 0, background: 'none' }} type="button">
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

  const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
      minwidth: '700px'
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
      minwidth: '700px'
    },
    '& .mui-tmnkt9-MuiPaper-root-MuiDialog-paper': {
      'min-width': '700px !important',
      'max-width': 'none !important'
    }
  }));

  // 日历数据
  const [loading, setLoading] = useState(true);
  const calendarRef = useRef(null);
  const matchSm = useMediaQuery((theme) => theme?.breakpoints.down('md'));
  const [events, setEvents] = useState([]);
  const calendarState = useSelector((state) => state.calendar);
  const [fullcalendardate, setfullcalendarDate] = useState(new Date());
  const [view, setView] = useState(matchSm ? 'listWeek' : 'dayGridMonth');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRange, setSelectedRange] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);

  // calendar event select/add/edit/delete
  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
    setSelectedRange(null);
  };

  const handleEventUpdate = async ({ event }) => {
    console.log('1111');
    try {
      dispatch(
        updateEvent({
          eventId: event.id,
          update: {
            allDay: event.allDay,
            start: event.start,
            end: event.end
          }
        })
      );
    } catch (err) {
      console.error(err);
    }
  };
  const handleEventSelect = (arg) => {

    if (arg.event.id) {
      const selectEvent = events.find((_event) => _event.id === arg.event.id);
      setSelectedEvent(selectEvent);
    } else {
      setSelectedEvent(null);
    }
    setIsModalOpen(true);
  };

  // calendar toolbar events
  const handleDateToday = () => {
    const calendarEl = calendarRef.current;

    if (calendarEl) {
      const calendarApi = calendarEl.getApi();

      calendarApi.today();
      setfullcalendarDate(calendarApi.getDate());
    }
  };

  const handleViewChange = (newView) => {
    const calendarEl = calendarRef.current;

    if (calendarEl) {
      const calendarApi = calendarEl.getApi();

      calendarApi.changeView(newView);
      setView(newView);
    }
  };

  const handleDatePrev = () => {
    const calendarEl = calendarRef.current;

    if (calendarEl) {
      const calendarApi = calendarEl.getApi();

      calendarApi.prev();
      setfullcalendarDate(calendarApi.getDate());
    }
  };

  const handleDateNext = () => {
    const calendarEl = calendarRef.current;

    if (calendarEl) {
      const calendarApi = calendarEl.getApi();

      calendarApi.next();
      setfullcalendarDate(calendarApi.getDate());
    }
  };
  const handleRangeSelect = (arg) => {
    console.log('你好', arg.start, arg.end);
    const calendarEl = calendarRef.current;
    setcreatepost(true)
    if (calendarEl) {
      const calendarApi = calendarEl.getApi();
      calendarApi.unselect();
    }

    setSelectedRange({
      start: arg.start,
      end: arg.end
    });
    setIsModalOpen(true);
  };
  // 创建发布内容弹出层
  const [createpost, setcreatepost] = useState(false);
  // 关闭弹出层
  const createpostOk = () => {
    setcreatepost(false)
  }
  const [createsubmitdata, setcreatesubmitdata] = useState({ title: '', publishDate: '', content: '', mediaIds: ['3fa85f64-5717-4562-b3fc-2c963f66afa6'], socialGroupsId: '3fa85f64-5717-4562-b3fc-2c963f66afa6' })

  // 点击了创建提交
  const createsubmit = async (e) => {
    console.log(e.title);
    createsubmitdata.title = e.title
    if (createsubmitdata.title == '') {
      dispatch(
        openSnackbar({
          open: true,
          message: <FormattedMessage id="Please enter title" />,
          variant: "alert",
          alert: {
            color: "error"
          },
          iconVariant: 'error'
          // close: false
        })
      )
    } else if (createsubmitdata.publishDate == '') {
      dispatch(
        openSnackbar({
          open: true,
          message: <FormattedMessage id="Please select a time" />,
          variant: "alert",
          alert: {
            color: "error"
          },
          iconVariant: 'error'
          // close: false
        })
      )
    } else {
      let res = await createadd(createsubmitdata)
      console.log('请求成功', res);

    }

    console.log(createsubmitdata);
  }

  useEffect(() => {
    dispatch(getEvents()).then(() => setLoading(false));
  }, []);

  useEffect(() => {
    setEvents(calendarState?.events);
  }, [calendarState]);

  // 点击草稿
  let [ifcao, setifcao] = useState(false)
  let [caotitle, setcaotitle] = useState('')
  const gocaogao = (e) => {
    console.log('点击草稿', e);
    if (e == 'Draft Posts') {
      setcaotitle('Schedulingmediadraft')
    } else {
      setcaotitle('Schedulingmediarecent')
    }
    setifcao(true)
  }
  let [isbrandhub, setisbrandhub] = useState(false)
  // 点击品牌中心
  const brandhubshowModal = () => {
    console.log('点击按钮');
    setisbrandhub(true)
  }
  // 点击关闭品牌中心
  const brandhubhandleOk = () => {
    setisbrandhub(false)
  }
  // 创建上传视频或图片
  const props = {
    action: '//jsonplaceholder.typicode.com/posts/',
    listType: 'picture',
    async previewFile(file) {
      console.log('Your upload file:', file);
      // Your process logic. Here we just mock to the same file
      const res = await fetch('https://next.json-generator.com/api/json/get/4ytyBoLK8', {
        method: 'POST',
        body: file,
      });
      const { thumbnail } = await res.json();
      return thumbnail;
    },
  };
  const onOk = (value) => {
    console.log('onOk: 点击了确定', value);
  };

  return (
    <div className="Scheduling">
      <PPZX isbrandhub={isbrandhub} brandhubhandleOk={brandhubhandleOk}></PPZX>
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
        {!ifcao ? <div>
          {/* 草稿 */}
          <div
            style={{
              lineHeight: '30px',
              fontSize: '15px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontWeight: '700'
            }}
            onClick={() => gocaogao('Draft Posts')}
          >
            <div>
              <i className="iconfont icon-caogao" style={{ color: 'grey', marginRight: '3px' }}>
              </i>
              <FormattedMessage id="Schedulingmediadraft" />
            </div>
            <i className="iconfont icon-youzhuan" style={{ color: 'grey' }}>
            </i>
          </div>
          {/* 消息 */}
          <div
            style={{
              lineHeight: '30px',
              fontSize: '15px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontWeight: '700'
            }}
            onClick={() => gocaogao('Recent Notifications')}
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
            <Box> <Image
              wrapperStyle={{ display: 'none' }}
              preview={{
                visible: previewOpen,
                onVisibleChange: (visible) => setPreviewOpen(visible),
                afterOpenChange: (visible) => !visible && setPreviewImage('')
              }}
              src={previewImage}
              alt=''
            /></Box>
          )}
        </div> : <div>
          <div style={{ fontWeight: '700', alignContent: 'center' }} onClick={() => setifcao(false)}>
            <i className="iconfont icon-youzhuan-copy" />
            <FormattedMessage id={caotitle} />
          </div>

        </div>}
      </Drawer >
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
          <Button type="primary" style={{ marginLeft: '10px' }} onClick={() => setcreatepost(true)}>
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
      {/* 创建的弹出层 */}
      <div className='create'>
        <BootstrapDialog style={{ minwidth: '700px !important' }} onClose={createpostOk} aria-labelledby="customized-dialog-title" open={createpost}>
          <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
            <FormattedMessage id="Create Multi-Platform Post" />
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={createpostOk}
            sx={(theme) => ({
              position: 'absolute',
              right: 8,
              top: 8,
              color: theme.palette.grey[500]
            })}
          >
            <CloseIcon />
          </IconButton>
          <div className='box' style={{ minwidth: '700px !important' }}>
            <div className='box_left'>
              <div className='instagram'><div className='circle'>+</div><div>Instagram</div></div>
              <div className='facebook'><div className='circle'>+</div><div>Facebook</div></div>
              <div className='tiktok'><div className='circle'>+</div><div>TikTok</div></div>
              <div className='linkedin'><div className='circle'>+</div><div>Linkedin</div></div>
            </div>
            <div className='box_right'>
              <div className='box_right_title'><i className='iconfont icon-tupian'></i> <FormattedMessage id="Your Post" /></div>
              <div className='box_right_context'>
                <div className='box_right_text'><FormattedMessage id="Add Media" />
                  <Upload {...props}>
                    <Button icon={<UploadOutlined />} style={{ marginTop: '10px' }}>Upload</Button>
                  </Upload></div>
              </div>
              <Form
                name="basic"
                onFinish={createsubmit}
                autoComplete="off"
              >
                <Form.Item
                  label=""
                  name="title"
                >
                  <Input.TextArea rows={5} style={{ marginTop: '10px', height: '250px' }} />
                </Form.Item>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <DatePicker
                    showTime
                    onChange={(value, dateString) => {
                      console.log('Selected Time: ', value);
                      console.log('Formatted Selected Time: ', createsubmitdata.publishDate = dateString);
                    }}
                    onOk={onOk}
                  />
                  <Button type="primary" htmlType="submit">
                    <FormattedMessage id="SchedulingBrandSave" />
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </BootstrapDialog>
      </div >
      {/* 事件表 */}
      < Toolbar
        date={fullcalendardate}
        view={view}
        onClickNext={handleDateNext}
        onClickPrev={handleDatePrev}
        onClickToday={handleDateToday}
        onChangeView={handleViewChange}
        style={{ marginTop: "10px" }}
      />
      <SubCard SubCard style={{ marginTop: "0px" }}>
        <FullCalendar
          weekends
          editable
          droppable
          selectable
          events={events}
          ref={calendarRef}
          rerenderDelay={10}
          initialDate={fullcalendardate}
          initialView={view}
          dayMaxEventRows={3}
          eventDisplay="block"
          schedulerLicenseKey='GPL-My-Project-Is-Open-source'
          headerToolbar={false}
          allDayMaintainDuration
          eventResizableFromStart
          select={handleRangeSelect}
          eventDrop={handleEventUpdate}
          eventClick={handleEventSelect}
          eventResize={handleEventUpdate}
          height={matchSm ? 'auto' : 720}
          plugins={[listPlugin, dayGridPlugin, timelinePlugin, timeGridPlugin, interactionPlugin]}
        />
      </SubCard>
    </div >
  );
};

export default SchedulingPage;

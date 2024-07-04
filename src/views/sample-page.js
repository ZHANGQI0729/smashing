/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable lines-around-directive */
'use client';
import { FormattedMessage } from 'react-intl';
import { Card, Col, Row } from 'antd';
import { useRouter } from 'next/navigation';
import '../scss/home.scss';
// ==============================|| SAMPLE PAGE ||============================== //

const SamplePage = () => {
  const router = useRouter();
  // 首页四个跳转
  const gopage = (e) => {
    // console.log(e);
    router.push(e);
  };
  return (
    <div className="home">
      {/* <h1>Welcome to Smashing 👋</h1> */}
      <div className="top">
        <h1>
          <FormattedMessage id="HomeTitle" />
          👋
        </h1>
        <div className="top_box">
          <Card style={{ width: 400 }} onClick={() => gopage('/Ideas')}>
            <div className="top_box_left">
              <div className="top_box_left_title">
                <FormattedMessage id="HomeTitleldeas" />
              </div>
              <div className="top_box_left_text">
                <FormattedMessage id="Hometextldeas" />
              </div>
            </div>
            <div className="top_box_right iconfont icon-xingzhuang34" />
          </Card>
          <Card style={{ width: 400 }} onClick={() => gopage('/ScheduIing')}>
            <div className="top_box_left">
              <div className="top_box_left_title">
                <FormattedMessage id="HomeTitleScheduling" />
              </div>
              <div className="top_box_left_text">
                <FormattedMessage id="HometextScheduling" />
              </div>
            </div>
            <div className="top_box_right  iconfont icon-shijiananpai" />
          </Card>
          <Card style={{ width: 400 }} onClick={() => gopage('/Search')}>
            <div className="top_box_left">
              <div className="top_box_left_title">
                <FormattedMessage id="HomeTitleSearch" />
              </div>
              <div className="top_box_left_text">
                <FormattedMessage id="HometextSearch" />
              </div>
            </div>
            <div className="top_box_right iconfont icon-sousuo" />
          </Card>
          <Card style={{ width: 400 }} onClick={() => gopage('/Overview')}>
            <div className="top_box_left">
              <div className="top_box_left_title">
                <FormattedMessage id="HomeTitleOverview" />
              </div>
              <div className="top_box_left_text">
                <FormattedMessage id="HometextOverview" />
              </div>
            </div>
            <div className="top_box_right iconfont icon-IO-overview-activity" />
          </Card>
        </div>
      </div>
      <div className="bottom">
        <div className="bottom_title">
          <FormattedMessage id="Homebottomtitle" />
        </div>
        <div className="bottom_text">
          <FormattedMessage id="Homebottomtext" />
        </div>
        <div className="bottom_box">
          <div className="bottom_box_left">
            <div className="bottom_box_left_top">
              <Card title={<FormattedMessage id="Homebottomboxtitle" />}>Card content</Card>
            </div>
            <div className="bottom_box_left_bottom">
              <Card title={<FormattedMessage id="Homebottomboxtitles" />}>Card content</Card>
            </div>
          </div>
          <div className="bottom_box_right">
            <Card title={<FormattedMessage id="Homebottomrighttitles" />}>Card content1111111111111111111</Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SamplePage;

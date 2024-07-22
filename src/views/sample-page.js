/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable lines-around-directive */
'use client';
import { FormattedMessage } from 'react-intl';
import ReactPlayer from 'react-player';
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
              <Card title={<FormattedMessage id="Homebottomboxtitle" />}>
                <div className="text">Card content</div>
                <div className="text">Card content</div>
                <div className="text" style={{ border: 'none' }}>
                  Card content
                </div>
              </Card>
            </div>
            <div className="bottom_box_left_bottom">
              <Card title={<FormattedMessage id="Homebottomboxtitles" />}>
                <div className="text">Card content</div>
                <div className="text">Card content</div>
                <div className="text" style={{ border: 'none' }}>
                  Card content
                </div>
              </Card>
            </div>
          </div>
          <div className="bottom_box_right">
            <Card title={<FormattedMessage id="Homebottomrighttitles" />}>
              <div className="bottom_box_right_top">
                <ReactPlayer className="player" controls url="https://zhstatic.zhihu.com/cfe/griffith/zhihu2018_hd.mp4" />
                <div className="player_bottom">
                  <div className="player_bottom_left">🎥</div>
                  <div className="player_bottom_right">
                    <div className="player_bottom_right_title">
                      <FormattedMessage id="HomebottomPlayertitles" />
                    </div>
                    <div className="player_bottom_right_text">
                      <FormattedMessage id="HomebottomPlayertext" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="player_bottoms">
                <div className="player_bottom_left">📱</div>
                <div className="player_bottom_right">
                  <div className="player_bottom_right_title">
                    <FormattedMessage id="Homebottomsjtitles" />
                  </div>
                  <div className="player_bottom_right_text">
                    <FormattedMessage id="Homebottomsjtext" />
                  </div>
                </div>
              </div>
              <div className="player_bottoms" style={{ margin: 'none' }}>
                <div className="player_bottom_left">✌️</div>
                <div className="player_bottom_right">
                  <div className="player_bottom_right_title">
                    <FormattedMessage id="Homebottomgztitles" />
                  </div>
                  <div className="player_bottom_right_text">
                    <FormattedMessage id="Homebottomgztext" />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SamplePage;

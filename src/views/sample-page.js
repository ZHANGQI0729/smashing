/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable lines-around-directive */
'use client';
import { FormattedMessage } from 'react-intl';
import { Card } from 'antd';
import '../scss/home.scss';
// ==============================|| SAMPLE PAGE ||============================== //

const SamplePage = () => (
  <div>
    {/* <h1>Welcome to Smashing 👋</h1> */}
    <h1>
      <FormattedMessage id="HomeTitle" />
      👋
    </h1>
    <div className="top_box">
      <Card style={{ width: 400 }}>
        <p>Card content</p>
      </Card>
      <Card style={{ width: 400 }}>
        <p>Card content</p>
      </Card>
      <Card style={{ width: 400 }}>
        <p>Card content</p>
      </Card>
      <Card style={{ width: 400 }}>
        <p>Card content</p>
      </Card>
    </div>
  </div>
);

export default SamplePage;

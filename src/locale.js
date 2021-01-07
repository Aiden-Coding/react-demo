import { connect } from 'dva';
import React from 'react';
import { ConfigProvider } from 'antd';
import 'moment/locale/zh-cn';

const Locale = ({ children, i18n }) => {
  return <ConfigProvider locale={i18n}>{children}</ConfigProvider>;
};

export default connect(({ app }) => ({
  i18n: app.get('i18n'),
}))(Locale);

import React, { Component } from 'react';
import { Link } from 'dva/router';
import { Button } from 'antd';
import { DoubleLeftOutlined } from '@ant-design/icons';

class AAA extends Component {
  render() {
    return (
      <div>
        <p>AAA页</p>
        <Link to={'/aaa/bbb'}>
          <Button type={'primary'}>
            <DoubleLeftOutlined />
            去BBB页面
          </Button>
        </Link>
        <br />
        <Link to={'/ccc'}>
          <Button type={'default'}>
          <DoubleLeftOutlined />
            去CCC页面
          </Button>
        </Link>
      </div>
    );
  }
}

export default AAA;

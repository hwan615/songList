import { Input } from 'antd';
import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Tooltip } from 'antd';

function Main() {
    return (
        <div>
            <Input></Input>
        <Button type="primary" icon={<SearchOutlined />} size="large">
        Search
      </Button>
      <Tooltip title="search">
        <Button shape="circle" icon={<SearchOutlined />} size="large" />
      </Tooltip>
      <Button icon={<SearchOutlined />} size="large">
        Search
      </Button>
      <br />
      <Tooltip title="search">
        <Button shape="circle" icon={<SearchOutlined />} size="large" />
      </Tooltip>
      <Button icon={<SearchOutlined />} size="large">
        Search
      </Button>
      <Tooltip title="search">
        <Button type="dashed" shape="circle" icon={<SearchOutlined />} size="large" />
      </Tooltip>
      <Button type="dashed" icon={<SearchOutlined />} size="large">
        Search
      </Button>
      <Button icon={<SearchOutlined />} size="large" href="https://www.google.com" />
        </div>
    );
}

export default Main;
import React from 'react';
import Drag from "../../qrcomponent/dragcomponent/drag"
import { Layout, Menu, Icon,Button } from 'antd';
import 'antd/dist/antd.css';

const { Header, Content, Footer, Sider } = Layout;
class FramePanel extends React.Component {
    render() {
        return <div><Layout>
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
        <Menu.Item key="1">
          <Icon type="user" />
          <span className="nav-text">nav 1</span>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="video-camera" />
          <span className="nav-text">nav 2</span>
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="upload" />
          <span className="nav-text">nav 3</span>
        </Menu.Item>
        <Menu.Item key="4">
          <Icon type="user" />
          <span className="nav-text">nav 4</span>
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout style={{ height: "1000px"}}>
      <Header style={{textAlign: 'center', background: '#fff', padding: 0 }} >QR 快速创建</Header>
      <Content>
      <Drag id="test" style={{height:"max-content", width: "max-content", backgroundColor: '#fff', position: 'relative' }} onMove={(offet) => {
                        console.log("拖拽元素当前位置：", offet);
                    }}>
                        <Button ghost={true} type="primary">QRReact</Button>
                    </Drag>
      </Content>
      <Footer style={{ textAlign: 'center', background:'#fff' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  </Layout>
        </div>
    }
}
export default FramePanel;
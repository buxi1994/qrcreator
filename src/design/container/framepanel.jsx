import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import *as QRUtil from "./designutil"

const { Header, Content, Footer, Sider } = Layout;
class FramePanel extends React.Component {
  constructor(props){
    super(props);
    this.state={
      selectItem:["4"]
    }
  }
  onSelectCompont = (selectItem) =>{
    const { item, key, keyPath, selectedKeys, domEvent } = selectItem;
    let designData = QRUtil.getDesignData();
    let tagetParent = QRUtil.findNodeById(designData, "qr-root-children");
    if(tagetParent && tagetParent.children){
      let timeStap = (new Date()).getTime();
      tagetParent.children.push({
        "id": "test-button-" + timeStap,
        "type": "Button",
        "props": {
            "ghost": true,
            "type": "primary"
        },
        "children":[
            {
                "id": "test-buttontext" + timeStap,
                "type": "text",
                "props": {"text":"QRCreater1"},
                "chirldren":[]
            }
        ]
    });
    QRUtil.saveDesignData("design-json", designData);
    this.setState({selectItem: [key]})
    }
  }
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
        <Menu theme="dark" mode="inline" defaultSelectedKeys={this.state && this.state.selectItem?this.state.selectItem:["4"]} onSelect={this.onSelectCompont}>
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
          <Menu.Item key="Button">
            <Icon type="user" />
            <span className="nav-text">nav 4</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{ height: "1000px" }}>
        <Header style={{ textAlign: 'center', background: '#fff', padding: 0 }} >QR 快速创建</Header>
        <Content>
          {QRUtil.getDragComponent(QRUtil.getDesignData())}
        </Content>
        <Footer style={{ textAlign: 'center', background: '#fff' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
    </div>
  }
}
export default FramePanel;
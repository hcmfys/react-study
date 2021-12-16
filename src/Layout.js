import React from "react";
import {Menu} from 'antd';
import {MailOutlined} from '@ant-design/icons';

const { SubMenu } = Menu;

class  Layout extends  React.Component {

    state = {
        current: '/',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({current: e.key});
    };

    render() {
        const {current} = this.state;

        return (
            <div className="app">
                <div className="left"><Menu
                    onClick={this.handleClick}
                    defaultSelectedKeys={[current]}
                    defaultOpenKeys={['s']}
                    mode="inline"
                >
                    <SubMenu key="s" icon={<MailOutlined/>} title="开始">
                        <Menu.Item key="1"><a href="/"   >主页</a> </Menu.Item>
                        <Menu.Item key="2"><a href="/c">图标</a> </Menu.Item>
                        <Menu.Item key="3"><a href="/p">项目</a> </Menu.Item>
                        <Menu.Item key="4"><a href="/u">用户</a> </Menu.Item>
                        <Menu.Item key="5"><a href="/m">markdown</a> </Menu.Item>
                        <Menu.Item key="6"><a href="/x">x-mind</a> </Menu.Item>
                        <Menu.Item key="6"><a href="/muti">mutifiled</a> </Menu.Item>
                    </SubMenu>

                </Menu></div>
                <div className="right">{this.props.children}</div>
            </div>

        );

    }
}

export  default  Layout;
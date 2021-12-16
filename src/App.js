import './App.css';
import "./LoginButton"
import Clock from "./Clock";
import React from "react";
import {Button, Col, Input, Modal, Row} from 'antd';
import UserTableInfo from "./UserTableInfo";
import Layout from "./Layout";
import Pic from "./Pic";


//const style = {background: '#0092ff', padding: '10px;', margin: '10px'};

class Hello {
    name: String;

    constructor(name: String) {
        this.name = name;
    }

    display(): void {
        alert("this is a  test" + this.name);
    }
}

class App extends React.Component {
    constructor(prop) {
        super(prop);
        this.state = {
            value: "",
            dlgShow: false
        };
        //this.setIsModalVisible = this.setIsModalVisible.bind(this);
    }

    onDisplay() {
        let t = new Hello("java");
        t.display();

    }

    setIsModalVisible = (ok: boolean) => {
        this.setState({dlgShow: ok});
        console.log("setIsModalVisible", this.state.dlgShow)
    }

    showModal = () => {
        alert("---->");
        this.setIsModalVisible(true);
    };

    handleOk = () => {
        console.log(">>>>input text=", this.state.dlgShow);
        this.setIsModalVisible(false);

    };

    handleCancel = () => {
        this.setIsModalVisible(false);
    };

    render() {
        return (
            <Layout>

                <Row>
                    <Col span={24}>

                        <Button type="primary" className="app-button" onClick={this.showModal}>click me</Button>
                    </Col>
                </Row>

                <Row>
                    <Col span={24} className={{
                        width: 1024,
                        height: 600
                    }}> </Col>
                </Row>

                <Modal title="请输入审核内容" visible={this.state.dlgShow} onOk={this.handleOk}
                       onCancel={this.handleCancel}>
                    <p>输入验证码...</p>
                    <Input type="textArea" value={this.state.value}/>
                </Modal>

            </Layout>
        );
    }
}

export default App;

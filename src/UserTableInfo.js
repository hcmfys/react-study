import * as React from "react";

import {Modal, Space, Table} from 'antd';
import {postApi} from "./request";
import {setCookie} from "./cookie";
import Layout from "./Layout";



class UserTableInfo extends React.Component {
    // eslint-disable-next-line no-useless-constructor

    constructor(prop) {
        super(prop);
        this.state = {
            data: [],
            dlgShow: false,
            detailText: '',
            pageSize: 10,

            req: {
                current: 1,
                pageSize: 10,
            }, pagination: {
                showQuickJumper: false
            },
        }
    }

    columns = [
        {
            title: 'id',
            dataIndex: 'id',
            key: 'id',
            render: text => <b>{text}</b>,
        },
        {
            title: 'jobId',
            dataIndex: 'jobId',
            key: 'jobId',
        },
        {
            title: '触发时间',
            dataIndex: 'triggerTime',
            key: 'triggerTime',
        },
        {
            title: '调度结果',
            key: 'tags',
            dataIndex: 'tags',
        },
        {
            title: '日志详情',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <b onClick={() => this.showDetail(record)}>查看详情 {record.id}</b>
                </Space>
            ),
        },
    ];


    onShowSizeChange = (page) => {
        let req = this.state.req;
        req.pageSize = page;
        this.setState({req: req});
        console.log(">>>>", req, ">>page=", page);
        //this.getJobInfo(req);
    }

    showDetail = (record) => {
        this.setState({dlgShow: true});
        let html = {__html: record.triggerMsg};
        this.setState({detailText: html});
    }

    handleOk = () => {
        this.handleCancel();
    }

    handleCancel = () => {
        this.setState({dlgShow: false});
    }

    getJobInfo = (reqData) => {
        let jobLogUrl = "/job/joblog/pageList";
        let self = this;
        postApi(jobLogUrl, reqData).then((res) => {
            let data = res.data;
            let code = res.code;
            if (code === 200) {
                let contentList = data.contentList;
                let pagination = {
                    ...self.state.pagination,
                    total: parseInt(data.total),
                };
                console.log(">>>>>>>dataList==>>>>>", contentList);
                console.log(">>total>>", pagination);
                self.setState({data: contentList, pagination: pagination,})
            }
        });
    }

    componentDidMount() {
        let json = {
            "st": "eHj7BmxXFPsKMVpIvWQKNQG6boT6xElqi213/BpqT3LebFSAAK26kCyYFL/nIqfnbJsOMGnn1mY64scPsPnSAb71Ph+1AfQ88Sww+Fnyj2sIsAicF4e0EZoZmUriwoIgpR8IE+tU5X9bIp5bCJsIZHDYQOi99QbW/44koUo1ibaVd67fR1CIXaQH4tMrOyWjTMMI4T5yndguCQIXXyONY97Yh26pc8D5rb1dPvcMMepj1ujCcMi3Ck5V9UNtA/UkfR7BKJQeBrQkcy4e8G+Zl/rzdcOb+OURAicjOWdQQvjNcoNI2p7oa6uRgvRaX4k6O7lXRAK8rTZ8bdM+L/twXlbTvr0L9bwKeA3EcKp4kZD83wgkV1iyoEkFMgghqe80YdukmfZ/OlN03I97tpOwaZ16iU4XHiA6Asbvu1J9yAnl7HdTPvZlUvoWrBkCP2x8tJWMJJKyRshtMx03mDmrxIA9XSrD+0ipkl8CwEPnO34b2AWEtlJ6p7XhQ3sPSJSEGFn+3bHWpYAcy1zM6RlpK4aEfOm9z4jLtvUSROS6/Wy5Cxp4TfZotStv9ReTIiH1FvhLcFpzFxSoWIogGwiK+MIImKNt9iNw/KL0UrufKNc8rpPDmvaqHR06bHHheo4bSH20DTpmtkjX6Er6onXpPT/iRh63C4dKQkUe4u65rPbZXMV4WcfKOEpvk66Xf9lyPX8B5BaLb/eDe6SdgIt0vn7m/TTqmVrdcJ7Z+Szt3wkatQsuSUgGy/8sgUB1EjRX"
        }
        postApi("/open-pub-api/login", json).then((res) => {
            console.log("res=", res);
            let data = res.data;
            let code = res.code;
            if (code === 200) {
                let userId = {
                    name: 'UserId',
                    value: data.userId,
                    maxAge: 24 * 3600 // 单位s
                };
                let userData = {
                    name: 'userData',
                    value: JSON.stringify(data),
                    maxAge: 24 * 3600 // 单位s
                };
                setCookie(userId);
                setCookie(userData);
                console.log("........................ok=-------------------");
                //this.getJobInfo(this.state.req);
            }

        });
    }

    changePage(current) {
        console.log("current=", current);
        let req = this.state.req;
        let pagination = this.state.pagination
        req.current = current.current;
        req.pageSize = current.pageSize;
        pagination.pageSize = current.pageSize;
        this.setState({req: req, pagination: pagination})
        this.getJobInfo(this.state.req);
    }

    render() {
        return (
            <Layout>
                <Table
                    columns={this.columns}
                    dataSource={this.state.data}
                    pagination={this.state.pagination}
                    onChange={(pageIndex) => this.changePage(pageIndex)}
                />
                <Modal title="查看详情" visible={this.state.dlgShow} onOk={this.handleOk} onCancel={this.handleCancel}>
                    <p></p>
                    <div><p dangerouslySetInnerHTML={this.state.detailText}/></div>
                </Modal>
            </Layout>
        )
    }
}

export default UserTableInfo;

import React from "react";

import {Network, Node, Edge} from 'react-vis-network';
import Layout from "./Layout";

function htmlTitle(html) {
    const container = document.createElement("div");
    container.innerHTML = html;
    return container;
}

class Pic extends React.Component {
    constructor() {
        super();
        this.ref = React.createRef();
        this.state = {
            nodeList: [],
            edList: []
        }
    }

    init() {
        const nHtml = this.state.nodeList.map((k, v) =>
            <Node key={'n-' + k.id} id={k.id}
                  label={k.label}
                  length={k.length}
                  group={2}
                  arrowhead="tee"
                  size={k.size}
                  shape={k.shape}
                  color={k.color}
                  title={k.title}
                  widthConstraint={k.size}
                  hover={true}
                  interaction={{hover:true}}

            />
        )
        const dHtml = this.state.edList.map((k, v) =>
            <Edge key={'e-' + k.id} id={k.id}
                  from={k.from} to={k.to}
                  arrows='from'
                  title={"Country Algeria <br> Team: Club Africain"}
                  arrowhead="tee"

                  color={{color: k.color}}/>
        )
        return (
            <Network ref={this.ref}  onClick={(props)=>{
               // alert("0000"+props);
                window.p=props;
            }}>
                {
                    nHtml
                }
                {
                    dHtml
                }
            </Network>
        )
    }

    showIt() {

        let data=[
                {
                    "instanceId": 1,
                    "value": "rm-wz9d65071059wdz03.\nmysql.rds.aliyuncs.com",
                    "status": "normal",
                    "children": [
                        {
                            "instanceId": 6115612,
                            "value": "abtest-admin:172.18.48.15",
                            "status": "normal",
                            "children": null
                        }
                    ]
                },
                {
                    "instanceId": 2,
                    "value": "rm-wz99ud450x18y216935930\n.mysql.rds.aliyuncs.com",
                    "status": "normal",
                    "children": [
                        {
                            "instanceId": 6099511,
                            "value": "business-composite-admin:172.18.48.15",
                            "status": "normal",
                            "children": null
                        },
                        {
                            "instanceId": 6108925,
                            "value": "dynamic-config-admin:172.18.66.41",
                            "status": "normal",
                            "children": null
                        },
                        {
                            "instanceId": 6617621,
                            "value": "dynamic-config-service:172.18.66.15",
                            "status": "normal",
                            "children": null
                        },
                        {
                            "instanceId": 6617812,
                            "value": "dynamic-config-service:172.18.66.16",
                            "status": "normal",
                            "children": null
                        },
                        {
                            "instanceId": 6632711,
                            "value": "message-center-report:172.18.50.30",
                            "status": "normal",
                            "children": null
                        },
                        {
                            "instanceId": 6635925,
                            "value": "message-center-report:172.18.50.26",
                            "status": "normal",
                            "children": null
                        },
                        {
                            "instanceId": 6639667,
                            "value": "message-center-report:172.18.66.138",
                            "status": "normal",
                            "children": null
                        },
                        {
                            "instanceId": 6651623,
                            "value": "message-center-report:172.18.66.137",
                            "status": "normal",
                            "children": null
                        },
                        {
                            "instanceId": 7233162,
                            "value": "message-center-statis-service:172.18.50.24",
                            "status": "normal",
                            "children": null
                        },
                        {
                            "instanceId": 7233314,
                            "value": "message-center-statis-service:172.18.50.53",
                            "status": "normal",
                            "children": null
                        },
                        {
                            "instanceId": 7234574,
                            "value": "message-center-statis-service:172.18.50.221",
                            "status": "normal",
                            "children": null
                        },
                        {
                            "instanceId": 7234773,
                            "value": "message-center-statis-service:172.18.50.222",
                            "status": "normal",
                            "children": null
                        },
                        {
                            "instanceId": 7250018,
                            "value": "message-center-consumer-jpush-log:172.18.50.102",
                            "status": "normal",
                            "children": null
                        },
                        {
                            "instanceId": 7250154,
                            "value": "message-center-consumer-jpush-log:172.18.50.103",
                            "status": "normal",
                            "children": null
                        },
                        {
                            "instanceId": 7900511,
                            "value": "message-center-consumer-push-apns-log:172.18.50.80",
                            "status": "normal",
                            "children": null
                        },
                        {
                            "instanceId": 7900797,
                            "value": "message-center-consumer-push-apns-log:172.18.50.81",
                            "status": "normal",
                            "children": null
                        },
                        {
                            "instanceId": 7970396,
                            "value": "app-links-service:172.18.50.195",
                            "status": "normal",
                            "children": null
                        },
                        {
                            "instanceId": 7970627,
                            "value": "app-links-service:172.18.50.196",
                            "status": "normal",
                            "children": null
                        }
                    ]
                }
            ]


        function format(str){
            let sz=str.length;
            let res="";
            for(let i=0;i<sz;i++){
                if(i%18===0){
                    res+='\n';
                }
                res+=str[i];
            }
            let index=str.indexOf(":");
            return str.substr(index+1);
        }
        function format2(str){
            let index=str.indexOf(".");
            return str.substr(0);
        }

        let nodeList: [] = [
            {id: "1", label: "[c]127.0.0.1", length: 30, shape: "circle", size: 18, title: ''},
            {
                id: "2", label: "[c]192.168.1.1", title: htmlTitle(
                    "Go wild <'span style='display: inline-block; animation: be-tacky 5s ease-in-out alternate infinite; margin: 5px;'>!<'/span>"
                ), length: 30, shape: "circle", size: 18
            },
            {id: "3", label: "[redis-server]", length: 100, shape: "database", size: 60, title: ''},
            {id: "4", label: "[c]12.168.10.1", length: 40, shape: "circle", size: 18, title: ''},
        ]

        nodeList=[];
        let edList: [] = [
            {id: "1", from: "3", to: "2", color: 'green'},
            {id: "2", from: "3", to: "1", color: 'red'},
            {id: "3", from: "3", to: "4", color: 'green'},

        ]
        edList=[];
        nodeList.push(
        {id: "a", label: "server", length: 30, shape: "circle", size: 18, title: ''}
        )
        edList.push(
            {id: "a", from: "1", to: "a", color: 'green'}
        )
        edList.push(
            {id: "b", from: "2", to: "a", color: 'green'}
        )
        for(let i in  data){
            let c=data[i];
            nodeList.push({
                id:c.instanceId,
                label:format2(c.value),
                length: 200, shape: "database", size: 88, title: c.value
            })
          let child=  c.children;
            for(let i in child) {
                let cc=child[i];
                nodeList.push({
                    id:cc.instanceId,
                    label:format(cc.value),
                    length: 100, shape: "box", size: 108, title: c.value
                })

                edList.push(
                    {id: cc.instanceId, from: cc.instanceId, to: c.instanceId, color: 'green'}
                )
            }
        }


        this.setState({
            nodeList,
            edList
        })
    }

    componentDidMount() {
        this.showIt();
    }

    render() {

        return (
            <Layout>
                <div className="main" >{this.init()}</div>
            </Layout>
        )
    }
}

export default Pic;

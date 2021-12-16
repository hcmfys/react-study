import * as React from "react";
import { Button } from 'antd';
import Layout from "./Layout";

import { Select } from 'antd';
const { Option, OptGroup } = Select;

class Clock extends React.Component {

    clockType: [] = ["ONE", "TWO", "THREE"];

    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            apple: "",
        };
        this.appleList = React.createRef();
    }


    tickHandler() {
        this.setState({
            date: new Date()
        });
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tickHandler(),
            1000
        );
        this.appleList.current.selectedIndex = 1;
        this.setState({apple: this.appleList.current.value});
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }


    getTickHtml(): string {
        return this.clockType.map((k, v) =>
            (
                <Option key={k} id={v}>{k}</Option>
            )
        );
    }

    doChange = (e) => {
        //let v = this.appleList.current.value;
        this.setState({apple: e});

    }

    getNumberList() {
        const numbers = this.props.numbers;
        const listItems = numbers.map((number) =>
            <li>{number}</li>
        );
        return (
            <ul>{listItems}</ul>
        );
    }

    render() {
        return (
            <Layout>
                <div>
                <h1>{this.state.date.toLocaleTimeString()}</h1>
                <h2><Select style={{width:120}} ref={this.appleList}
                            onChange={this.doChange}>{this.getTickHtml()}</Select></h2>
                <h3>你选择的物品是：{this.state.apple}</h3>
                <h4>{this.getNumberList()}</h4>
                <h5>
                    <Button  type="primary"       onClick={this.doChange}>选择苹果</Button>
                </h5>
                </div>
            </Layout>
        );
    }
}

export default Clock

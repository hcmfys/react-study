import * as React from "react";
import { Select } from 'antd';
const { Option, OptGroup } = Select;
class LoggingButton extends React.Component {
    usrList: [] = ["a", "c", "d"];

    constructor(prop) {
        super(prop);
        this.state = {
            userName: "",
            password: "",
            age: 0
        }
    }

    usrHtml = this.usrList.map((k, v) => {
        return (
            <div> {k}>{v} </div>
        )
    })


    userPanel = (

        <div>
            <h1>
                {this.usrHtml}
            </h1>
            <h2>-------<br/>
                {this.panel}
            </h2>
        </div>
    )
    optionList: String[] = ["java", "c++", "php"];
    // 这个语法确保了 `this` 绑定在  handleClick 中
    // 这里只是一个测试
    handleClick = () => {
        //console.log('this is:', this);
        this.setState({age: this.state.age + 1});
        console.log(this.state.age);
    }
    handleChange = (e) => {
        console.log("e", e.target, e.target.value);
    }

    opt: string;

    componentWillMount() {
        this.opt = this.optionList.map((k, v) =>
            <Option key={"item-" + k} id={v}>{k}</Option>
        );

    }

    render() {
        return (
            <div key={"itemList"}>
                <button onClick={this.handleClick}>
                    Click me
                </button>
                {this.userPanel}
                <Select labelInValue  key={"item"} onChange={this.handleChange}   style={{ width: 120 }}>
                    {this.opt}
                </Select>
            </div>
        );
    }
}

export default LoggingButton;
import React from "react";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeRaw from 'rehype-raw'

import 'github-markdown-css'
import {MutiField} from "./MutiField";
import Layout from "./Layout";


class MarkdownView extends React.Component {

    constructor() {
        super();
        this.state={markdown: "#"};
    }

    display=(ex)=> {
        let file=ex.target.files[0];
        let reader=new FileReader();
        console.log("file=",file);
        let self=this;
        reader.onload=(e)=> {
            self.setState({markdown:e.target.result});
        }
        reader.readAsText(file,"utf8");
    }
    componentDidMount() {

    }

    render() {
        return (
            <Layout>
            <div  class="markdown-body">
                <input type="file" name="file" id="file"   onChange={this.display}   />
            <ReactMarkdown children={this.state.markdown}
                           remarkPlugins={[[remarkGfm, {singleTilde: true,isHeader:true}],[remarkMath]]}
                           rehypePlugins={[rehypeRaw]}
            ></ReactMarkdown>
            </div>
            </Layout>
        );
    }
}

export default MarkdownView;

import React from "react";
import  'jsmind/style/jsmind.css'
import Layout from "./Layout";

const jsMind = require("jsmind");
export class Xmind extends  React.Component {

      load_jsmind() {
          let mind = {
              "meta": {
                  "name": "demo",
                  "author": "hizzgdev@163.com",
                  "version": "0.2",
              },
              "format": "node_array",
              "data": [
                  {"id": "root", "isroot": true, "topic": "jsMind"},

                  {"id": "sub1", "parentid": "root", "topic": "sub1", "background-color": "#0000ff"},
                  {"id": "sub11", "parentid": "sub1", "topic": "sub11"},
                  {"id": "sub12", "parentid": "sub1", "topic": "sub12"},
                  {"id": "sub13", "parentid": "sub1", "topic": "sub13"},

                  {"id": "sub2", "parentid": "root", "topic": "sub2"},
                  {"id": "sub21", "parentid": "sub2", "topic": "sub21"},
                  {"id": "sub22", "parentid": "sub2", "topic": "sub22", "foreground-color": "#33ff33"},

                  {"id": "sub3", "parentid": "root", "topic": "sub3"},
              ]
          };
          let options = {
              container: 'jsmind_container',
              editable: true,
              theme: 'primary'
          }


          let jm = jsMind.show(options, mind);
         // jm.set(true);
          // var mind_data = jm.get_data();
          // alert(mind_data);
          jm.add_node("sub2", "sub23", "new node", {"background-color": "red"});
          jm.set_node_color('sub21', 'green', '#ccc');
      }

    componentDidMount() {
          this.load_jsmind();
    }


    render() {
        return  (
            <Layout>
            <div id="jsmind_container"/>
            </Layout>
        );
    }
}
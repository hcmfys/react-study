import React from "react";
import {Network, DataSet} from "vis-network";
import Layout from "./Layout";


function preTitle(text) {
    const container = document.createElement("pre");
    container.innerText = text;
    return container;
}

function htmlTitle(html) {
    const container = document.createElement("div");
    container.innerHTML = html;
    return container;
}


class VisPic extends React.Component {
    componentDidMount() {
        // create an array with nodes
        let nodes = new DataSet([
            {id: 1, label: "PRE", title: preTitle("ASCII\n    art")},
            {
                id: 2,
                label: "HTML",
                title: htmlTitle(
                    "Go wild <span style='display: inline-block; animation: be-tacky 5s ease-in-out alternate infinite; margin: 5px;'>!</span>"
                ),
            },
            {id: 3, label: "PRE", title: preTitle("ASCII\n    art")},
        ]);

        // create an array with edges
        let edges = new DataSet([
            {from: 1, to: 2, label: "PRE", title: preTitle("ASCII\n    art")},
            {
                from: 2,
                to: 3,
                label: "HTML",
                title: htmlTitle(
                    "Go wild <span style='display: inline-block; animation: be-tacky 5s ease-in-out alternate infinite; margin: 5px;'>!</span>"
                ),
            },
        ]);
        // create a network
        let container = document.getElementById("network");
        let data = {
            nodes: nodes,
            edges: edges,
        };
        let options = {};
        new Network(container, data, options);
    }

    render() {
        new Network()
        return (
            <Layout>
            <div id="network" className="main"/>
            </Layout>
        );
    }
}

export  default  VisPic;
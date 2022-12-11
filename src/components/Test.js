import React from "react";
import ReactDOM from "react-dom";


const data = {
  nodes: [
    {
      id: "abc_172.22.22.214",
      name: "abc",
      nodes: [
        {
          id: "abc_172.22.22.214.if.1",
          name: "0"
        },
        {
          id: "abc_172.22.22.214.if.3",
          name: "0"
        },
        {
          id: "abc_172.22.22.214.if.2",
          name: "0"
        }
      ]
    },
    {
      id: "MON_LOGS_192.168.1.53",
      name: "MON_LOGS",
      nodes: [
        {
          id: "MON_LOGS_192.168.1.53.if.1",
          name: "lo"
        },
        {
          id: "MON_LOGS_192.168.1.53.if.2",
          name: "eth0"
        }
      ]
    }
  ]
};

class Test extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: data,
      displayChild: null
    };
  }

  render() {
    let children = null;

    if (this.state.displayChild) {
      children = (
        <ul>
          {this.state.data.nodes.map(element => (
            <li key={element.id}> {element.name} </li>
          ))}
        </ul>
      );
    }

    return (
      <div className="wrapper">
        <ul>
          {this.state.data.nodes.map(element => (
            <li key={element.id} onClick={() => this.expandParent(element.id)}>
              {element.name}
              {element.id === this.state.displayChild &&
                element.nodes &&
                this._renderChildren(element.nodes)}
            </li>
          ))}{" "}
        </ul>
      </div>
    );
  }

  _renderChildren = nodes => {
    const result = nodes.map(el => {
      return <li key={el.id}> {el.name} </li>;
    });

    return <ul>{result}</ul>;
  };

  expandParent = id => {
    this.setState({
      displayChild: id
    });
  };
}
export default Test;
import React from 'react';

import styles from './index.module.scss';

import TreeAction from '../../components/treeAction/Index';


class TreeActionDemo extends React.Component<any, any> {
  public static defaultProps = {
    vLinePosition: 50,
    hLinePosition: 30,
    lineWidth: 1,
  };

  public constructor(props: any) {
    super(props);
    this.state = {
      nodeList: [
        {
          key: '0',
          childrenShow: true,
          children: [
            {
              key: '0-0',
              childrenShow: true,
              children: [
                {
                  key: '0-0-0',
                  children: [
                    {
                      key: '0-0-0-0',
                    },
                    {
                      key: '0-0-0-1',
                    },
                  ],
                },
                {
                  key: '0-0-1',
                },
                {
                  key: '0-0-2',
                  children: [
                    {
                      key: '0-0-2-0',
                    },
                    {
                      key: '0-0-2-1',
                      isLeaf: true,
                    },
                  ],
                },
                {
                  key: '0-0-3',
                },
              ],
            },
            {
              key: '0-1',
              childrenShow: true,
              children: [
                {
                  key: '0-1-0'
                },
                {
                  key: '0-1-1'
                },
              ],
            },
          ],
        },
        {
          key: '1',
          children: [
            {
              key: '1-0',
            },
            {
              key: '1-1',
            },
          ],
        },
      ]
    };
  }

  public componentDidMount() {
    this.setState({
      nodeList: this.setNode(this.state.nodeList),
    });
  }

  public buildDiv(width: number, key: string, node: any, content?: string): JSX.Element {
    return <div style={{ width: `${width}px`, border: '1px solid #1890ff', padding: '20px', boxSizing: 'border-box', position: 'relative', }}>
      <div>
        node {key}
        <div>
          {content}
        </div>
      </div>
    </div>;
  }

  public render() {
    const { nodeList, } = this.state;
    
    return <TreeAction nodeList={nodeList} stringNodeStyle={{ borderColor: 'orange', }} />;
  }

  private setNode(nodeList: Array<any>) {
    return nodeList.map((node, index) => {
      let children = [];
      let newNode = { ...node };
  
      if (
        node.children &&
        node.children.length > 0
      ) {
        children = this.setNode(node.children);
      }
  
      newNode.children = children;
      newNode.childrenShow = newNode.childrenShow === undefined ? true : newNode.childrenShow;
      if (index === 1) {
        newNode.node = `node${node.key}, content: ${node.key}`;
      } else {
        newNode.node = this.buildDiv(200, node.key, newNode, `content: ${node.key}`);
      }
  
      return newNode;
    });
  }
}

export default TreeActionDemo;

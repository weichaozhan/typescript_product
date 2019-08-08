import React from 'react';
import './App.css';
// import './components/Hello';
import TreeAction from './components/treeAction/Index';

function buildDiv(width: number, index: number, content?: string): JSX.Element {
  return <div style={{ width: `${width}px`, border: '1px solid #1890ff', padding: '20px', boxSizing: 'border-box' }}>
    node {index}
    <div>
      {content}
    </div>
  </div>;
}

const App: React.FC = () => {
  
  return (<div style={{ padding: '30px', }}>
    <TreeAction hLinePosition={50} vLinePosition={100} lineWidth={1} nodeList={[
      {
        key: '0',
        node: buildDiv(200, 1),
        childrenShow: true,
        children: [
          {
            key: '0-0',
            node: buildDiv(200, 2),
            childrenShow: true,
            children: [
              {
                key: '0-0-0',
                node: buildDiv(200, 3),
                children: [
                  {
                    key: '0-0-0-0',
                    node: buildDiv(200, 10, '0-0-0-0'),
                  },
                  {
                    key: '0-0-0-1',
                    node: buildDiv(200, 11),
                  },
                ],
              },
              {
                key: '0-0-1',
                node: buildDiv(200, 4, 'content'),
              },
              {
                key: '0-0-2',
                node: buildDiv(200, 5, 'content111'),
                children: [
                  {
                    key: '0-0-2-0',
                    node: buildDiv(200, 6, 'content222'),
                  },
                  {
                    key: '0-0-2-1',
                    node: buildDiv(200, 7),
                  },
                ],
              },
              {
                key: '0-0-3',
                node: buildDiv(200, 8, 'content111'),
              },
            ],
          },
          {
            key: '0-1',
            node: buildDiv(200, 9),
            childrenShow: true,
          },
        ],
      },
      {
        key: '1',
        node: '<div>node 2</div>',
        children: [
          {
            key: '1-0',
            node: '<div>node 5</div>',
          },
          {
            key: '1-1',
            node: '<div>node 6</div>',
          },
        ],
      },
    ]}
    />
  </div>);
};

export default App;

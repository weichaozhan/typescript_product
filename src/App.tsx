import React from 'react';
import './App.css';
// import './components/Hello';
import TreeAction from './components/treeAction/Index';

const App: React.FC = () => {
  return (<div style={{ padding: '30px', }}>
    <TreeAction nodeWidth={200} nodeList={[
      {
        key: '0',
        node: <div>node 1</div>,
        children: [
          {
            key: '0-0',
            node: <div>node 3</div>,
            children: [
              {
                key: '0-0-0',
                node: <div>
                  node 7
                  <div>
                    content
                  </div>
                </div>,
              },
              {
                key: '0-0-1',
                node: <div>
                  node 8
                  <div>
                    content
                  </div>
                </div>,
              },
              {
                key: '0-0-2',
                node: <div>
                  node 9
                  <div>
                    content
                  </div>
                </div>,
                children: [
                  {
                    key: '0-0-2-0',
                    node: <div>
                      node 10
                      <div>
                        content
                      </div>
                    </div>,
                  },
                  {
                    key: '0-0-2-1',
                    node: <div>
                      node 11
                      <div>
                        content
                      </div>
                    </div>,
                  },
                ],
              },
              {
                key: '0-0-3',
                node: <div>
                  node 12
                  <div>
                    content
                  </div>
                </div>,
              },
            ],
          },
          {
            key: '0-1',
            node: <div>node 4</div>,
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

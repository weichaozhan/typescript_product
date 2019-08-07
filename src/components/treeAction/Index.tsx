import React from 'react';

import styles from './index.module.scss';

interface IProps {
  vLinePosition?: number; // 竖线位置
  hLinePosition?: number; // 横线位置
  lineWidth?: number; // 连线长度
  nodeList: Array< TreeAction.INode>;
  [propName: string]: any;
}

class TreeAction extends React.Component<IProps> {
  public static defaultProps = {
    vLinePosition: 50,
    hLinePosition: 30,
    lineWidth: 1,
  };

  public state: TreeAction.ITreeActionState;

  public constructor(props: IProps) {
    super(props);
    this.state = {};
  }

  public render() {
    const { nodeList, } = this.props;
    
    return <div className={styles['tree-wrapper']} >
      <div>
        {this.buildNodeList(nodeList, true)}
      </div>
    </div>;
  }

  /**
   * @description 构建树结构
   * @param {Array<TreeAction.INode>} nodeList 树结构数组
   * @param {Boolean} isOutter 是否为祖先节点
   */
  private buildNodeList(nodeList: Array<any>, isOutter: boolean = false) {
    const { vLinePosition, hLinePosition, lineWidth, } = this.props;

    return nodeList.map(node => {
      let children;

      if (
        node.children &&
        node.children.length > 0 &&
        !!node.childrenShow
      ) {
        children = this.buildNodeList(node.children);
      }

      return <div className={isOutter ? '' : styles['nodes-wrapper']} key={node.key} style={{
        paddingLeft: isOutter ? '0' : `${vLinePosition}px`,
      }}>
        <div className={styles['nodes-parent']} style={{
          paddingLeft: isOutter ? '0' : `${hLinePosition}px`,
          overflow: 'hidden',
          // 竖线
          borderLeftWidth: `${lineWidth as number}px`,
        }}>
          {/* 同级最后一个节点连线 */}
          {
            !isOutter &&
            <i className={styles['line-last-node']} style={{
              height: 'calc(50% + 10px)',
              borderRightWidth: `${lineWidth as number}px`,
            }} ></i>
          }
          
          <div className={`${styles['nodes']} ${typeof node.node === 'string' ? styles['string-node'] : ''}`} >
            {/* 横线 */}
            {
              !isOutter &&
              <i className={styles['line']} style={{
                width: `${hLinePosition as number + 2}px`,
                left: `-${hLinePosition as number + 2}px`,
                borderTopWidth: `${lineWidth as number}px`,
              }}></i>
            }
            
            {node.node}
          </div>

          {children}
        </div>
      </div>;
    });
  }
}

export default TreeAction;

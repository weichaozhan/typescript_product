import React from 'react';
import { Icon, } from 'antd';

import 'antd/dist/antd.css';
import styles from './index.module.scss';

interface IProps {
  nodeList: Array<TreeAction.INode>;
  vLinePosition?: number; // 竖线位置
  hLinePosition?: number; // 子节点距离竖线的位置
  lineWidth?: number; // 连线长度
  lineColor?: string; // 连线颜色
  stringNodeStyle?: object;
  [propName: string]: any;
}

class TreeAction extends React.Component<IProps, TreeAction.ITreeActionState> {
  public static defaultProps = {
    vLinePosition: 50,
    hLinePosition: 20,
    lineWidth: 1,
  };
  
  public static getDerivedStateFromProps(props: IProps, state: TreeAction.ITreeActionState) {
    state.nodeList = props.nodeList;

    return state;
  }

  public constructor(props: IProps) {
    super(props);
    this.state = {
      nodeList: props.nodeList,
    };
  }


  public render() {
    const { nodeList, } = this.state;
    
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
    const { vLinePosition, hLinePosition, lineWidth, lineColor, stringNodeStyle, } = this.props;
    let vLinePositionTrans = `${vLinePosition}px`;
    
    return nodeList.map(node => {
      let children;
      const hLinePositionLeaveBlank = 22; // 竖线与节点间留白

      if (
        node.children &&
        node.children.length > 0 &&
        !!node.childrenShow
      ) {
        children = this.buildNodeList(node.children);
      }

      return <div className={isOutter ? styles['outter-most-nodes-wrapper'] : styles['nodes-wrapper']} key={node.key} style={{
        paddingLeft: isOutter ? '0' : vLinePositionTrans,
      }}>
        <div className={styles['nodes-parent']} style={{
          paddingLeft: isOutter ? '0' : `${hLinePosition as number + hLinePositionLeaveBlank}px`,
          overflow: isOutter ? 'visible' : 'hidden',
          // 竖线
          borderLeftWidth: `${lineWidth as number}px`,
          borderLeftColor: lineColor,
        }}>
          
          <div className={`${styles['nodes']} ${isOutter && styles['outter-most-node']}`} >
            {/* 同级最后一个节点连线 */}
            {
              !isOutter &&
              <i className={styles['line-last-node']} style={{
                height: 'calc(50% + 20px)',
                left: `-${hLinePosition as number + hLinePositionLeaveBlank}px`,
                borderRightWidth: `${lineWidth as number}px`,
              }} ></i>
            }
            {/* 横线 */}
            {
              !isOutter &&
              <i className={styles['line']} style={{
                width: `${hLinePosition as number + (node.isLeaf ? 20 : 0)}px`,
                left: `-${hLinePosition as number + hLinePositionLeaveBlank}px`,
                borderTopWidth: `${lineWidth as number}px`,
                borderTopColor: lineColor,
              }}></i>
            }
            {/* 展开收起按钮 */}
            {
              !node.isLeaf &&
              <Icon className={`${styles['tree-toggle-btn']}`} type={node.childrenShow ? 'minus-circle' : 'plus-circle'} onClick={() => {
                this.clickToggleBtn(node);
              }} >
              </Icon>
            }
            
            {
              typeof node.node === 'string' ?
                <span className={styles['string-node-content']} style={{ ...stringNodeStyle }} >
                  {node.node}
                </span>
                :
                node.node
            }
          </div>

          {children}
        </div>
      </div>;
    });
  }

  /**
   * @description 节点展开收起子节点
   * @param {TreeAction.INode} node 操作的节点
   */
  private clickToggleBtn(node: TreeAction.INode) {
    node.childrenShow = !node.childrenShow;
    
    this.setState({
      nodeList: this.state.nodeList,
    });
  }
}

export default TreeAction;

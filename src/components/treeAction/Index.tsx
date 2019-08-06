import React from 'react';
import PropTypes, { node } from 'prop-types';

import styles from './index.module.scss';

interface IProps {
  nodeWidth: number;
  nodeList: Array< TreeAction.INode>;
  [propName: string]: any;
}

class TreeAction extends React.Component<IProps> {
  public static defaultProps = {
  };
  // public static propTypes = {
  //   nodeWidth: PropTypes.number.isRequired,
  // };

  public state: TreeAction.ITreeActionState;
  private refCanvas: any;

  public constructor(props: IProps) {
    super(props);
    this.state = {};

    this.refCanvas = React.createRef();
  }

  public componentDidMount() {
    this.resetCanvas();
  }

  public componentDidUpdate() {
    this.resetCanvas();
  }

  public resetCanvas() {
    const cavasParent = this.refCanvas.current.parentNode;
    const canvas = this.refCanvas.current;

    canvas.width = cavasParent.offsetWidth;
    canvas.height = cavasParent.offsetHeight;
  }

  public render() {
    const { nodeList, } = this.props;
    
    return <div className={styles['tree-wrapper']} >
      
      <canvas ref={this.refCanvas} ></canvas>
      
      <div>
        {this.buildNodeList(nodeList, true)}
      </div>
    </div>;
  }

  private buildNodeList(nodeList: Array<any>, isOutter: boolean = false) {
    const { nodeWidth, } = this.props;

    return nodeList.map(node => {
      let children;
      const vLinePosition = nodeWidth / 2; // 竖线位置
      const hLinePosition = nodeWidth / 4; // 横线位置

      if (node.children && node.children.length > 0) {
        children = this.buildNodeList(node.children);
      }

      return <div className={isOutter ? '' : styles['nodes-wrapper']} key={node.key} style={{
        paddingLeft: isOutter ? '0' : `${vLinePosition}px`,
      }}>
        <div className={styles['nodes-parent']} style={{
          paddingLeft: isOutter ? '0' : `${hLinePosition}px`,
          overflow: 'hidden',
        }}>
          {!isOutter && <i className={styles['line-last-node']}></i>}
          <div className={`${styles['nodes']} ${typeof node.node === 'string' ? styles['string-node'] : ''}`} style={{ width: `${nodeWidth}px`, }}>
            {!isOutter && <i className={styles['line']} style={{ width: `${hLinePosition}px`, left: `-${hLinePosition + 1}px`, }}></i>}
            {node.node}
          </div>

          {children}
        </div>
      </div>;
    });
  }
}

export default TreeAction;

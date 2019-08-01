import React from 'react';

import styles from './index.module.scss';

class TreeAction extends React.Component {
  private refCanvas: any;
  public constructor(props: any) {
    super(props);

    this.state = {

    };

    this.refCanvas = React.createRef();
  }

  public componentDidMount() {
    console.log(this.refCanvas);
  }

  public render() {
    return <div className={styles['tree-wrapper']}>
      <canvas ref={this.refCanvas} ></canvas>
    </div>;
  }
}

export default TreeAction;

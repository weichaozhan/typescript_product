/**
 * @description 树结构组件
 */
declare namespace TreeAction {
  interface INode {
    key: number|string;
    node: string|React.ReactDOM|JSX.Element;
    childrenShow?: boolean; // 是否显示子节点
    children?: Array<INode>;
  }

  interface ITreeActionState {
    [propName: string]: any;
  }
}
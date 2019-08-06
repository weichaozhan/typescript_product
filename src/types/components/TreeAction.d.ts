/**
 * @description 树结构组件
 */
declare namespace TreeAction {
  interface INode {
    key: number|string;
    node: string|React.ReactDOM|JSX.Element;
    children?: Array<INode>;
  }

  interface ITreeActionState {
    [propName: string]: any;
  }
}
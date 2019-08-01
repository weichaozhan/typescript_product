/**
 * @description 声明语句
 */
declare namespace Hello {
  interface IGlobalTest {
    count: number;
    name: string;
  }
}

declare const CONST: number;
declare let Jquery: (selector: string) => any;
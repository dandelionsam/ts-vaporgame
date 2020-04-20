export interface TextNode {
  id: number;
  text: string;
  options: Options[];
}

export interface Options {
  text: string;
  requiredState?: Function;
  setState?: Object;
  nextText: number;
}
declare module "*.png" {
  const filepath: string;
  export = filepath;
}

interface Style {
  [key: string]: string;
}

declare module "*.scss" {
  const style: Style;
  export = style;
}

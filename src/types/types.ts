export type TileProps = {
  value: number;
  onClick: () => void;
};

export type BoardProps = {
  rows: number;
  cols: number;
};

export interface IBordRef {
  width: number;
}

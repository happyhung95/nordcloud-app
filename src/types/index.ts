export type Station = {
  x: number;
  y: number;
  r: number;
};

export type ClosestStation = {
  closestStation: Station | undefined;
  stationPower: number;
};

export type Coordinate = {
  x: string
  y: string
}

export type typePlusA = (x: number | string) => string;

export default function plusA(x: number | string) {
  return x + 'A';
}
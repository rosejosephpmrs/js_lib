export const pluck = (arr: { [key: string]: any }[], field: string) =>
  arr.map((item) => item[field]);

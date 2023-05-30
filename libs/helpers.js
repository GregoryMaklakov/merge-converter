export const randomWait = () =>
  new Promise((res) => setTimeout(res, Math.random() * 900));

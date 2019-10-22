import { topData } from "./topProduct";
import { shoeData } from "./shoeData";
import { socksData } from "./socksData";
import { sunglassData } from "./sunglassData";
import { tshirtData } from "./tshirtData";

export const topDataNew = topData.map(item => {
  return {
    ...item,
    number: 1
  };
});

export const shoeDataNew = shoeData.map(item => {
  return {
    ...item,
    number: 1
  };
});

export const socksDataNew = socksData.map(item => {
  return {
    ...item,
    number: 1
  };
});

export const sunglassDataNew = sunglassData.map(item => {
  return {
    ...item,
    number: 1
  };
});

export const tshirtDataNew = tshirtData.map(item => {
  return {
    ...item,
    number: 1
  };
});

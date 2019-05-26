export default function plateCalc(weight, withBar = true) {
  const plates = [45, 35, 25, 10, 5, 2.5, 1.25];
  const bar = 45;

  // Get the weight for one side
  let half = (withBar ? weight - bar : weight) / 2;
  let result = {};

  // TODO: Add a fix for weights not divisible by 5
  if (half) {
    while (half > 0) {
      for (let i = 0; i < plates.length; i++) {
        const plate = plates[i];
        const res = Math.floor(half / plate);

        if (res) {
          half -= res * plate;
          result[plate] = res;
        }
      }
    }
  } else {
    result = undefined;
  }

  return result;
}

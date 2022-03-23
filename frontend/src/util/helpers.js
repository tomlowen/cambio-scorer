export default function getParticpantString(playerArray) {
  return playerArray.reduce((prev, curr) => prev + curr.name);
};

export default function getParticpantString(playerArray) {
  return playerArray
    .map((p) => p.name)
    .sort()
    .join('');
};

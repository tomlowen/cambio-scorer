export default function getParticpantString(playerArray) {
  return playerArray
    .map((p) => p.name.toLowerCase().trim())
    .sort()
    .join('');
};

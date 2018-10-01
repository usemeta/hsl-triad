const hslTriad = (h, s, l) => {
  return [
    [h, s, l],
    [(h + 120) % 360, s, l],
    [(h + 240) % 360, s, l],
  ]
};

module.exports = hslTriad;
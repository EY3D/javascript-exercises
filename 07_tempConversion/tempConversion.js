const ftoc = function(x) {
  let c = (x - 32) * 5 / 9;
  c = Math.round(c * 10) / 10;
  c = parseFloat(c.toFixed(1));
  return c;
};

const ctof = function(y) {
  let f = (y * 9 / 5) + 32;
  f = Math.round(f * 10) / 10;
  f = parseFloat(f.toFixed(1));
  return f;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

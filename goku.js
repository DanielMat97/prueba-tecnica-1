const N = 4;
const K = 3;
const arr = [11, 13, 17, 20];

const gokuFunc = (n, k, a) => {
  let mov = 0;

  try {
    checkValues(n, k, a)
  } catch (error) {
    return error;
  }

  a.forEach(o => {
    a.map(d => {
      if (Math.abs(o - d) <= k && o != d) {
        mov++;
      }
    });
  });

  return mov;
}

const gokuFuncV2 = (n, k, a) => {
  let mov = 0;

  try {
    checkValues(n, k, a)
  } catch (error) {
    return error;
  }

  for (let o of a) {
    for (let d of a) {
      if (Math.abs(o - d) <= k && o != d) {
        mov++;
      }
    }
  }

  return mov;
}

const checkValues = (n, k, a) => {
  if (2 > n || n > Math.pow(10, 5)) {
    throw Error('ERROR_N_VALUE');
  }
  if (0 > k || k > Math.pow(10, 9)) {
    throw Error('ERROR_KI_VALUE');
  }
  a.map(p => {
    if (Math.pow(-10, 9) > p || p > Math.pow(10, 9)) {
      throw Error('ERROR_POSITION_VALUE');
    }
  })
}

console.log(gokuFunc(N, K, arr));

module.exports = {
  gokuFunc,
  gokuFuncV2
}


const N = 4;
const P = 2;
const J = 1;
const arr = [2, 1, 11, 15];

const battle = (n, p, j, a) => {
    try {
        checkValues(n, p, j, a);
      } catch (error) {
        return error;
      }

    let level = p
    aAsc = a.sort();
    aAsc.map(b => {
        if (level > b) {
            level = level + b;
            aAsc.shift();
        } else if (Math.pow(level + j, 2) > b) {
            level = Math.pow(level + j, 2);
            aAsc.shift();
        } else {
            return 'NO'
        }
    })
    return aAsc.length == 0 ? 'SI' : 'NO';
}

const checkValues = (n, p, j, a) => {
    if(2 > n || n > Math.pow(10, 5)){
      throw Error('ERROR_VILLANOS_VALUE');
    }
    if(0 > p || p > Math.pow(10, 9)){
      throw Error('ERROR_NIVEL_VALUE');
    }
    if(0 > j || j > Math.pow(10, 9)){
        throw Error('ERROR_NIVEL_VALUE');
      }
    a.map(p => {
      if(Math.pow(-10, 9) > p || p > Math.pow(10, 9)){
        throw Error('ERROR_VILLANO_LEVEL_VALUE');
      }
    })
  }

console.log(battle(N, P, J, arr));
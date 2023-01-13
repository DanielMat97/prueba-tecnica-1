const runs = 10000;
const goku = require('./goku');

const N = 4;
const K = 3;
const arr = [11, 13, 17, 20];

describe('test performance', () => {

    it('v1', () => {
        for (let r = 0; r < runs; r++) {
            console.time('v1');
            goku.gokuFunc(N, K, arr);
        }
        return console.timeEnd('v1');
    });

    it('v2', () => {
        for (let r = 0; r < runs; r++) {
            console.time('v2');
            goku.gokuFunc(N, K, arr);
        }
        return console.timeEnd('v2');
    });
});
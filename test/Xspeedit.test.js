const Robot = require('../src/xspeedit/Xspeedit');

describe('UNIT TEST - return / input validations', () => {
    it('should return an array', () => {
        const robot = new Robot();
        const result = robot.getCleanNumbersArray('')
        expect(Array.isArray(result)).toBe(true);
    });

    it('should fillABox return an empty string on empty array', () => {
        const robot = new Robot();
        const result = robot.fillABox([])
        expect(result).toMatch('');
    });

    it('should processItems return an empty string on empty array', () => {
        const robot = new Robot();
        const result = robot.processItems('')
        console.log(result)
        expect(result).toMatch('');
    });

    it('should processItems return an empty array on non-numbers characters', () => {
        const robot = new Robot();
        const result = robot.processItems('asdasd/*/*--+*=-=**-')
        expect(result).toMatch('');
    });

    it('should return an empty array on empty input', () => {
        const robot = new Robot();
        const result = robot.getCleanNumbersArray('')
        expect(result).toEqual([]);
    });

    it('should return an empty array the on random non-numbers characters', () => {
        const robot = new Robot();
        const result = robot.getCleanNumbersArray('ousdfsdnf**/-*+-*-')
        expect(result).toEqual([]);
    });

    it('should return an array of numbers of a string with random chars', () => {
        const robot = new Robot();
        const result = robot.getCleanNumbersArray('88961112snf**/-*+-*-')
        expect(result).toEqual([ 8, 8, 9, 6, 1, 1, 1, 2 ]);
    });

    it('should return array of numbers on some numbers input', () => {
        const robot = new Robot();
        const result = robot.getCleanNumbersArray('565331228576')
        expect(result).toEqual([ 5, 6, 5, 3, 3, 1, 2, 2, 8, 5, 7, 6 ]);
    });
});

describe('UNIT TEST - module functions', function () {
    it('should return a string of boxes separated by /', () => {
        const robot = new Robot();
        const result = robot.processItems('1112223111452')
        expect(result).toBe('154/132/122/121/1/');
    });

    it('should return the weight of a box', () => {
        const robot = new Robot();
        let arr = [ '1', '6', '3']
        const result = robot.weighBox(arr)
        expect(result).toBe(10);
    });

    it('should return a best-fit filled box as string within requirements', () => {
        const robot = new Robot();
        let arr = [ 1, 6, 3, 6, 8]
        const aBox = robot.fillABox(arr)
        expect(aBox).toBe('18');
    });

    it('should return an item value near or equal to max capacity to fill box', () => {
        const robot = new Robot();
        let arr = [ 1, 6, 3]
        const result = robot.searchNearestValueToMax(6, arr)
        expect(result).toBe(3);
    });
});


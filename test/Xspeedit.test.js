const Robot = require('../src/xspeedit/Xspeedit');

describe('UNIT TEST', function () {
    // it('should return an array', function () {
    //     const robot = new Robot();
    //     const result = robot.getCleanNumbersArray('')
    //     expect(Array.isArray(result)).toBe(true);
    // });
    //
    // it('should return an empty array on empty input', function () {
    //     const robot = new Robot();
    //     const result = robot.getCleanNumbersArray('')
    //     expect(result).toEqual([]);
    // });
    //
    // it('should return a non-empty array on some input', function () {
    //     const robot = new Robot();
    //     const result = robot.getCleanNumbersArray('565331228576')
    //     expect(result).toEqual([ 5, 6, 5, 3, 3, 1, 2, 2, 8, 5, 7, 6 ]);
    // });

    //---------------------------------------------------------------------------------


    it('test', function () {
        const robot = new Robot();

        const result = robot.processItems('563312285776')
        console.log(result)
    });
});
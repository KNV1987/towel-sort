// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) return [];
    matrix.map((el, id) => (id % 2 !== 0 ? el.reverse() : el));
    return matrix.reduce((acc, el) => acc.concat(el), []);
};

const get = arr => obj => arr.reduce((x, xs) =>  x && x[xs] ? x[xs] : null, obj);


module.exports = get;
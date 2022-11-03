let str = 'aaa [2] bbb [3] ccc [12] ddd';
str.replace(/\[(\d+)\]/g, (match0, match1) => {return `[${match1 * 2}]`})
let str = '123 456 789';

str.replace(/(\d)(\d)(\d)/g, (match0, match1, match2, match3) => {
    return match3 + match2 + match1
})


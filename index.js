function findMatching(array, string) {
    let goodArray = array.filter(value => {
        let newValue = value[0].toUpperCase() + value.slice(1)
        if (value === string) {
            return value
        } else if (string === newValue) {
            return value
        }
    })
    return goodArray
};

function fuzzyMatch(array, string) {
    let goodArray = array.filter(value => {
        // let newValue = value[0].toUpperCase() + value.slice(1)
        if (string[0] === value[0]) {
            return value
        }
    })
    return goodArray
}

function matchName(array, string) {
    // const realArray = array.name 
    let bestArray = array.filter(value => {
        if (value.name === string) {
            return value
        }
    })
    return bestArray
}
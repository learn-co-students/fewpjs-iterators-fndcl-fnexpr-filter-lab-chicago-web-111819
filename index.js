function findMatching(arr, str){
    return arr.filter(n => n.toLowerCase() === str.toLowerCase())
}

function fuzzyMatch(arr, str){

    return arr.filter(n => {
        return n.startsWith(str)
    })
}

function matchName(arr, str){
    return arr.filter(n => n.name.toLowerCase() === str.toLowerCase())
}
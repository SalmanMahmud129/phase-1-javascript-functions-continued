// code your solution here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(visualFlair = "*"){
    return function innerHeight(adj = "special"){
        return `You are ${visualFlair}${adj}${visualFlair}!`
    }
}
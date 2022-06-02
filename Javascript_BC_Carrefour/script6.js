function filtraPares(arr){
    return arr.filter(callback)
}

function callback(item){
    return item % 2 !== 0;
}

const nums = [1,5,4,2,9,7,8,30,17];

console.log(filtraPares(nums));
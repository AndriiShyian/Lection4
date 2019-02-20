// function showArguments(){
//     console.log(arguments);
//    if (arguments.length === 2){
//        return arguments[0][arguments[1]];
//    }
//    else if (arguments.length===3){
//        let massive = [];
//        let counter = 0;
//        let zero = 0;
//        for(let i = arguments[1]; i < arguments[2]; i++){
//            massive[counter] = arguments[0][i];
//            counter++;
//            zero+=arguments[0][i];
//        }
//        return massive +'. Sum = '+zero;
//    }
//    else {
//        return 'Error';
//    }
// }
// const test = [1, 2, 5, 8, 6, 5, 7];
// console.log(test);
// console.log(showArguments(test, 0, 3));
  
function sumFunction(from, to){
if(from === to){
    return to;
}
else{
    return to + sumFunction(from, to-1);
}
}
console.log(sumFunction(2, 5));

function sort(list){
    let a = 0;
for(let i = 0; i < list.length-1;i++){
    for(let j = i+1; j<list.length;j++){
        if(list[i]<list[j]){
            a = list[i];
            list[i] = list[j];
            list[j] =a;
        }
    }
}
}
let list=[2,4,1,6,3,7];
console.log(sort(list))













// const list =[5, 1, 3, 6, 8];
// const secondList= ['Хліб','сир','молоко','Яйця','апельсини'];
// list.sort();
// secondList.sort();
// console.log(list);
// console.log(secondList);
// console.log(upp(secondList));
// function upp(secondList){
//     const rewArray=[];
//     for(let i = 0; i < secondList.length; i++){
//         rewArray[i] = secondList[i].toLowerCase();
//     }
//     return rewArray.sort();
// }
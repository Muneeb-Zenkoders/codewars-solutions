// Snail Sort
// Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]
// snail(array) #=> [1,2,3,6,9,8,7,4,5]
// For better understanding, please follow the numbers of the next array consecutively:

// array = [[1,2,3],
//          [8,9,4],
//          [7,6,5]]
// snail(array) #=> [1,2,3,4,5,6,7,8,9]

snail = function(array) {
    let top = 0, down = array.length-1,left = 0,right = array.length-1;
    let dir = 0;
    let arr = [];
    if(array[0].length==0){
        return arr;
    }
    else{
    while(top<=down&&left<=right){
    if(dir==0){
        for(let i = left;i<=right;i++){
            arr.push(array[top][i]);
        }
        top+=1;
    }
    else if(dir==1){
        for(let i=top;i<=down;i++){
            arr.push(array[i][right]);
        }
        right-=1;
    }
    else if(dir==2){
        for(let i=right;i>=left;i--){
            arr.push(array[down][i]);
        }
        down-=1;
    }
    else if(dir==3){
        for(let i=down;i>=top;i--){
            arr.push(array[i][left]);
        }
        left+=1;
    }
    dir = (dir+1)%4;
    }
    return arr;}
}
// https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1/train/javascript
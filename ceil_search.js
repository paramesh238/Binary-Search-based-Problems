// Program to find the ceil of a given number using brute forece algorithm i,e traverse from begin to end of the array
var a = [1,2,3,5,5,6];
var ceil = 4;
for(let i=0;i<a.length;i++){
    if(ceil == a[i])
    {
        console.log(a[i]);
    }
    else if(ceil < a[i]){
        console.log("Ceil of " + ceil + " is " + a[i] + " at the index "  + i);
        break;
    }
}

// Program to find the ceil of a given number using binary search
//inpit : a[] & ceil of number to be find i,e target

var a = [1,2,3,4,5,5,6];
function ceil_search(arr, target){
    let low = 0;
    let ceil = arr.length;
    let high = arr.length - 1;
    while(low <= high){
        let mid = parseInt((low + high) / 2);
        if(arr[mid] <= target)
            low = mid + 1;
        else{
            ceil = mid;
            high = mid - 1;
        }
    }
    return arr[ceil];
}

console.log(ceil_search(a,3));

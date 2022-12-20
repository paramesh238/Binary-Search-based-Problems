// Program to find floor of a given number using brute force i,e traverse entire length of an array
var a = [34,46,53,66,78,88];
var floor = 53;
for(let i=a.length-1;i>=0;i--){
    if(a[i] == floor)
        floor = a[i];
    else if(a[i] <= floor)
    {
        console.log(a[i]);
        break;
    }
}


// Program to find floor of a given number using binary search
var a = [34,46,53,66,78,88];
var floor = 0;
function floor_ele(arr, target){
    let low = 0;
    let high = arr.length - 1;
    
    while(low <= high){
        let mid = parseInt((low+high)/2);
        if(arr[mid] < target){
            floor =arr[mid];
            low = mid+1;
        }
        else{
            high = mid-1;
        }
    }
    return floor;
}

console.log(floor_ele(a,53));

function merge(nums1, m, nums2, n) {
    let p1 = m - 1
    let p2 = n - 1
    let p = m + n - 1

    while(p2 >= 0) {
        if(p1 >= 0 && nums1[p1] >= nums2[p2]){
            nums1[p] = nums1[p1]
            p1--
        }else{
            nums1[p] = nums2[p2]
            p2--
        }
        p--
    }
}

let nums1_1 = [1, 2, 3, 0, 0, 0];
let m1 = 3;
let nums2_1 = [2, 5, 6];
let n1 = 3;
merge(nums1_1, m1, nums2_1, n1);
console.log("合并两个有序数组:", nums1_1); // [ 1, 2, 2, 3, 5, 6 ]

let nums1_2 = [0];
let m2 = 0;
let nums2_2 = [1];
let n2 = 1;
merge(nums1_2, m2, nums2_2, n2);
console.log("合并两个有序数组:", nums1_2); // [ 1 ]
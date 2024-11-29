// array of integer
// nama array nums, panjang n
// membuat array ans, panjang 2n (2 kali lipat dari array nums)
// ans[i] == nums[i]
// ans[i+] === nums[i]
// ans -> gabungan 2 array nums
// ouput array

//nama array nums
let nums = [1,2,1];
//membuat array ans
let ans = [];
//proses push ke variabel ans mengisi dengan array nums
for (let i=0; i<nums.length; i++) {
    ans[i] = nums[i];
    ans[i+nums.length] = nums[i];
}
//gabungan array
let gabungan = ans;
console.log(gabungan);
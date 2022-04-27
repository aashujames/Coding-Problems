// class Solution {
    
//     duplicates(a, n)
//     {
//         //your code here
//         let result = []
//         let obj = {}
//         let z = []
//         for(let i=0; i<n; i++) {
            
//             for(let x=0; x<=z.length; x++) {
//                 if(a[i] != z[x]) {
//                     obj[a[i]] = 1
//                     z = Object.keys(obj)
//                 }
//                 else{
//                 obj[a[i]]++
//             }
//             }
             
            
//         }
//         if (result.length === 0){
//             return -1
//         }
//         for (let j=0; j<result.length-1; j++) {
//             for (let k=0; k<result.length-1; k++) {
//                 if(result[k]>result[k+1]) {
//                     let l = result[k]
//                     result[k] = result[k+1]
//                     result[k+1] = l
//                 }
//             }
//         }
        
//         return result
//     }
// }


// const duplicates = new Solution()
//     duplicates.duplicates([3,3,0,1,0,2], 6)



class Solution {
    
    duplicates(a, n)
    {
        //your code here
        let hashmap = {}
        let duplicate = []
        for(let i=0; i<n; i++) {
            if (hashmap[arr[i]]) {
                duplicate.push(a[i])
            } else {
                hashmap[a[i]] = true
            }
        }
        if (duplicate.length === 0){
            return -1
        }
        for (let j=0; j<duplicate.length-1; j++) {
            for (let k=0; k<duplicate.length-1; k++) {
                if(duplicate[k]>duplicate[k+1]) {
                    let l = duplicate[k]
                    duplicate[k] = duplicate[k+1]
                    duplicate[k+1] = l
                }
            }
        }
        
        return duplicate
    }
}


const duplicates = new Solution()
    duplicates.duplicates([0,3,1,2], 4)
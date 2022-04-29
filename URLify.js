class Solution {
  urlify(string, len) {
    let url = "";
    const newString = string.substring(0, len);
    for (let i of newString) {
      if (i === " ") {
        i = "%20";
      }
      url += i;
    }

    return url;
  }
}

const urlify = new Solution();
const ans = urlify.urlify("Mr John Smith   ", 13);
console.log(ans);

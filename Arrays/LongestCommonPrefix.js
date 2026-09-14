/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let comp = strs[0];
    let lc = "";
    for (let i = 0; i < comp.length; i++){
        for(let j = 1; j < strs.length; j++ ){
            if(comp[i] !== strs[j][i]){
              return lc;
            }
        }
        lc += comp[i];
    }
    return lc;
};
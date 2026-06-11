/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let a = s.split('');
    let b = t.split('');
    
    if(a.length!== b.length) return false;
let c = true;
    for(let i=0;i<a.length;i++){
        if(b.includes(s[i])){
            let index = b.indexOf(s[i])
            b.splice(index,1);
        }
    }
    if(b.length===0){ return true;}
    else{return false}


};
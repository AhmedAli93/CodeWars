function mutateMyStrings(s1, s2){
    var arr = [s1];
    for(let i=0; i<s1.length; i++) if(s1[i]!==s2[i]) arr.push(s2.slice(0,i+1)+s1.slice(i+1))
    return arr.join('\n')+'\n'
}
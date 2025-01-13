function lengthOfLastWord(s: string): number {
    let trimmedText: string = s.trimEnd();
    let len: number = trimmedText.length;
    let stringLen: number = 0;
    for(let i = len; i > 0; i--){
       if(trimmedText.charAt(i-1) == ' '){
            break;
       }else{
            stringLen++;
       }
    }

    return stringLen;
};

function plusOne(digits: number[]): number[] {
    let reversedDigits: number[] = digits.reverse();
    let carry: boolean = true; 

    for (let i = 0; i < reversedDigits.length; i++) {
        if (carry) {
            reversedDigits[i]++;
            carry = false; 
        }

        if (reversedDigits[i] > 9) {
            reversedDigits[i] = 0;
            carry = true;
        }
    }

    if (carry) {
        reversedDigits.push(1);
    }

    return reversedDigits.reverse(); 
}


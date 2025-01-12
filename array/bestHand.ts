function bestHand(ranks: number[], suits: string[]): string {
    let suit: string = suits[0]
    let isFlush: boolean =  true;
    for(let i = 1; i < 5; i++){
        if(suits[i] !== suit){
            isFlush = false;
            break;
        }
    }
    if (isFlush){
        return 'Flush';
    }
    let myMap: Map<number, number> = new Map();
    for(let i = 0; i < 5; i++){
        if(myMap.has(ranks[i])){
            myMap.set(ranks[i], myMap.get(ranks[i])! + 1);
            if(myMap.get(ranks[i]) == 3){
                return 'Three of a Kind';
            }
        }else{
            myMap.set(ranks[i],1);
        } 
    }

    if(myMap.size == 5){
        return 'High Card';
    }else{
        return 'Pair';
    }
};

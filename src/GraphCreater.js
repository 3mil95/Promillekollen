


function convertToGramsAlcohol(amount, strength) {
    return (amount * (strength / 100)) * (789/100) 
}

function convertToPermille(g) {
    let weight = localStorage.getItem('userWeight')
    let pro;
    if (localStorage.getItem('userLength')==='man') {
        pro = 0.7;
    } else {
        pro = 0.6;
    }
    return (g/(weight * pro)) 
}

function createGraph(drinks) {
    const perMille = [] 
    let index = 0;
    let currentDrink = drinks[index]
    if (!currentDrink) {
        return {end:0, start:0, perMille:[]};
    }
    let currentVal = 0
    let start = 0
    let i = start;
    while (currentDrink || currentVal > 0 || i > 34 * 60) {
        while (currentDrink?.time === i) {
            currentVal += convertToPermille(convertToGramsAlcohol(currentDrink.amount,currentDrink.strength));
            index++;
            currentDrink = drinks[index] 
        } 
        currentVal -= 0.15/60;
        if (currentVal < 0) {
            currentVal = 0;
        }    
        perMille.push(currentVal)
        i++
    }
    let end = i + 400
    return {end:end, start:drinks[0].time - 200 , perMille:perMille};
}


export default createGraph;
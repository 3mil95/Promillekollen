const nextPer = []

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

function addDrink(perMille, i) {
    const t = 61
    let denom = 1830
    for (let j = 1; j < t; j++) {
        const curentVal = (nextPer[j+i-1]) ? nextPer[j+i-1] : 0
        nextPer[j+i-1] = perMille/denom * (t-j) + curentVal
    }
}

function createGraph(drinks) {
    console.log("Create Graph...");
    
    nextPer.splice(0,nextPer.length)
    const perMille = [] 
    let index = 0;
    let currentDrink = drinks[index]
    if (!currentDrink) {
        return {end:0, start:0, perMille:[]};
    }
    let currentVal = 0
    let start = 0
    let i = start;
    while ((currentDrink || currentVal > 0) && i < 48 * 60) {
        while (currentDrink?.time === i) {
            addDrink(convertToPermille(convertToGramsAlcohol(currentDrink.amount,currentDrink.strength)),i)
            //currentVal += convertToPermille(convertToGramsAlcohol(currentDrink.amount,currentDrink.strength));
            index++;
            currentDrink = drinks[index] 
        } 
        currentVal += (nextPer[i]) ? nextPer[i] : 0
        currentVal -= 0.25/60;
        if (currentVal < 0) {
            currentVal = 0;
        }    
        perMille.push(currentVal)
        i++
    }
    console.log("Graph Done");
    return {end:i + 400, start:drinks[0].time - 200 , perMille:perMille};
}


export default createGraph;
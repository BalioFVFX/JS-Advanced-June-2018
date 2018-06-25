function solution(object) {
    if (object['handsShaking'] === false) {
        return object;
    }
    object['bloodAlcoholLevel'] += (Number(object['weight']) * Number(object['experience'])) * 0.1;
    object['handsShaking'] = false;
    return object;
}

console.log(solution({
    weight: 80,
    experience: 1,
    bloodAlcoholLevel: 0,
    handsShaking: true
}));

console.log(solution({
        weight: 120,
        experience: 20,
        bloodAlcoholLevel: 200,
        handsShaking: true
    }
));

console.log(solution({
    weight: 95,
    experience: 3,
    bloodAlcoholLevel: 0,
    handsShaking: false
}));
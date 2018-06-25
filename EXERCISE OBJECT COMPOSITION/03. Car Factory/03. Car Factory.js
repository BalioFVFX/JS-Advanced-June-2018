function solution(object){


    let engine = bestEngine(object['power']);
    let carriage = buildCarriage(object['carriage'], object['color']);
    let wheels = bestWheels(object['wheelsize']);

    delete object['power'];
    delete object['color'];

    object['engine'] = engine;
    object['carriage'] = carriage;
    object['wheels'] = wheels;

    return object;

    function buildCarriage(carriage, color){
        return {type: carriage, color: color};
    }

    function bestWheels(wheelSize){
        if(wheelSize % 2 === 0){
            wheelSize = Math.abs(wheelSize - 1);
        }
        return [wheelSize, wheelSize, wheelSize, wheelSize];
    }

    function bestEngine(power){
        let stockEngines = [{small:90, volume:1800}, {normal:120, volume:2400}, {monster:200, volume: 3500}];
        let prevPower = power;
        let bestPower = power;

        for (let i = 0; i < stockEngines.length; i++) {
            for (let key in stockEngines[i]) {
                let result = Math.abs(power - stockEngines[i][key]);
                if(result <= prevPower){
                    let engine = Array.from(Object.values(stockEngines[i]));
                    bestPower = {power: engine[0], volume: engine[1]};
                }
                prevPower = result;
                break;
            }
        }
        return bestPower;
    }
}

console.log(solution({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));

console.log(solution({ model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17 }));
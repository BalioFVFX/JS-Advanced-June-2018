function solution(name, age, weight, height) {
    let BMI = weight / (height / 100);
    BMI /= (height / 100);
    let bmiStatus = '';

    if (BMI < 18.5) {
        bmiStatus = 'underweight';
    }
    else if (BMI < 25) {
        bmiStatus = 'normal';
    }
    else if (BMI < 30) {
        bmiStatus = 'overweight'
    }
    else {
        bmiStatus = 'obese';
    }
    BMI = Math.round(BMI);


    let object = {};
    object['name'] = name;
    object['personalInfo'] = {
        'age': age,
        'weight': weight,
        'height': height
    };
    object['BMI'] = BMI;
    object['status'] = bmiStatus;

    if (bmiStatus === 'obese') {
        object['recommendation'] = 'admission required';
    }
    return object;
}

console.log(solution("Peter", 29, 75, 182));
function attachEventsListeners() {
    let convertButton = document.getElementById('convert');
    convertButton.addEventListener('click', convert);


    function convert() {

        let output = document.getElementById('outputDistance');
        let input = document.getElementById('inputDistance');

        let distance = Number(input.value);

        let inputUnit = document.getElementById('inputUnits').value;
        let outputUnit = document.getElementById('outputUnits').value;
        console.log(inputUnit);

        switch (inputUnit) {
            case 'km':
                distance *= 1000;
                break;
            case 'm':
                distance *= 1;
                break;
            case 'cm':
                distance *= 0.01;
                break;
            case 'mm':
                distance *= 0.001;
                break;
            case 'mi':
                distance *= 1609.34;
                break;
            case 'yrd':
                distance *= 0.9144;
                break;
            case 'ft':
                distance *= 0.3048;
                break;
            case 'in':
                distance *= 0.0254;
                break;
            default:
                break;
        }

        switch (outputUnit) {
            case 'km':
                output.value = distance / 1000;
                break;
            case 'm':
                output.value = distance / 1;
                break;
            case 'cm':
                output.value = distance / 0.01;
                break;
            case 'mm':
                output.value = distance / 0.001;
                break;
            case 'mi':
                output.value = distance / 1609.34;
                break;
            case 'yrd':
                output.value = distance / 0.9144;
                break;
            case 'ft':
                output.value = distance / 0.3048;
                break;
            case 'in':
                output.value = distance / 0.0254;
                break;
            default:
                break;
        }
    }
}
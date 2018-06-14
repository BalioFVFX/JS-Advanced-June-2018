function attachGradientEvents() {
    let gradient = document.getElementById('gradient');
    let result = document.getElementById('result');
    gradient.addEventListener('mousemove', update);
    gradient.addEventListener('mouseout', clear);

    function update(e) {
        let power = e.offsetX / (e.target.clientWidth - 1);
        power = Math.trunc(power * 100);
        result.textContent = power + '%';
    }

    function clear() {
        result.textContent = '';
    }
}
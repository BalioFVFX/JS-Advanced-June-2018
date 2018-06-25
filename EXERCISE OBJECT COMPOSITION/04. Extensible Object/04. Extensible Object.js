function solution() {
    return {
        extend: function (template) {
            let arr = [];
            for (let key in template) {
                if (typeof(template[key]) === 'function') {
                    this['__proto__'][key] = template[key];
                    continue;
                }
                this[key] = template[key];
            }
        }
    };
}

let a = solution();
a.extend({
    extensionMethod: function () {},
    extensionProperty: 'someString'
});
console.log(a);
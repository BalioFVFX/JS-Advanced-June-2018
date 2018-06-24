function solution(matrix) {
    let rectangles = [];
    for (let i = 0; i < matrix.length; i++) {
        let rectWidth = matrix[i][0];
        let rectHeight = matrix[i][1];
        let currentRect = {
            width: rectWidth,
            height: rectHeight,
            area: function () {
                return this.width * this.height
            },
            compareTo(otherRect) {

                if(this.area() > otherRect.area()){
                    return -1;
                }
                else if(this.area() < otherRect.area()){
                    return 1;
                }
                else {
                    if(this.width > otherRect.width){
                        return -1;
                    }
                    else if(this.width < otherRect.width){
                        return 1;
                    }
                    else{
                        return 0;
                    }

                }
            }
        };
        rectangles.push(currentRect);
    }
    rectangles.sort(function (a, b) {
        return a.compareTo(b);
    });
    return rectangles;
}


console.log('---------------------------');
console.log(solution([[10,5], [3,20], [5,12]]));
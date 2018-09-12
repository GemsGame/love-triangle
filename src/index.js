/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
};







/* старт ----------------------------------- */
var arr = [2, 3, 1, 5, 6, 4, 2, 3, 1, 5, 6, 4, 2, 3, 1, 5, 6, 4];

var elements = arr.length/3;

var elements = Math.trunc(elements);
//console.log (elements); //элементы помещаются 1 раз (3шт)
arr.length; // длинна массива 5 элементов
var del = elements*3;
arr.length = del;


var size = 3; //размер подмассива
var subarray = []; //массив в который будет выведен результат.
for (var i = 0; i <Math.ceil(arr.length/size); i++){
    subarray[i] = arr.slice((i*size), (i*size) + size);
}


/*------------------------------------------ */

//console.log(subarray); массив с треугольниками




while (elements>0) {

      
    --elements;
    console.log(elements); //айди для вставки в функцию... 0\1\2
    var omg_tringle = true_triangle(subarray, elements);
   
  
}


  console.log("triangle:" omg_tringle);
/* вычисление треугольников -------------------------- */
    
var triangle = 0; // 0/1/2/3/4/5/6


function true_triangle (subarray, elements) {
if (subarray[elements][0]< subarray[elements][1] && subarray[elements][1]> subarray[elements][2])
{
    
    return triangle++;
   
}
    
}
                                           
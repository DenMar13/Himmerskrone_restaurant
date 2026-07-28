let clouds_list = document.querySelectorAll('.clouds');

let cloud1 = document.querySelector('.cloud_1');
const computedStyle = window.getComputedStyle(cloud1);

console.log(clouds_list);

console.log(cloud1);
console.log(computedStyle.animationName);

clouds_list.forEach((cloud, index) => { 
    console.log(cloud);
    cloud.onmouseenter = function () {
        //cloud.style.animationDuration = '20s';
    };
});
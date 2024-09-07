' use stric'
const [width, length, radius, base1, base2, heighttrap, sagh] = [20, 50, 5, 10, 20, 15, 10];
// rectangles
console.log('***************************');
const area = width * length;
const perimater = (2 * width) + (2 * length);
console.log(` area of rectangle ${area}`);
console.log(` perimater of rectangle ${perimater}`);
// circle
console.log('***************************');
const areacir = Math.PI * (radius ** 2);
const perimatercir = Math.PI * radius * 2;
console.log(`area of circle ${ Math.trunc(areacir)}`);
console.log(`perimatercir of circle ${Math.trunc(perimatercir)}`);
// trapezoids
console.log('***************************');

const areatrapezoids = (base1 + base2) * (heighttrap / 2)
console.log(`area of  trapezoids ${Math.trunc(areatrapezoids)}`);
const perimatertrapezoids = base1 + base2 + (2 * sagh);
console.log(`perimater of  trapezoids ${Math.trunc(perimatertrapezoids)}`);
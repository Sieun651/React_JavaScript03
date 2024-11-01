// 같은 경로에서 불러오는 것은 합칠 수 있음
import mul, { add, sub } from "./math.js";

import randomColor from "randomcolor";

const color = randomColor();
console.log(color);

// console.log(add(1, 2));
// console.log(sub(1, 2));
// console.log(mul(2, 3));

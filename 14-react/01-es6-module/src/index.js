/*
* @Author: Chris
* @Date:   2019-10-22 21:25:21
* @Last Modified by:   Chris
* @Last Modified time: 2019-10-22 21:50:16
*/
//执行和引用模块
/*
//多次引用模块只执行一次
import "./Module.js"
import "./Module.js"
*/
// import a from './Module.js'
// import { a1 as a,b1 as b } from './Module.js'
import a, {b} from './Module.js'

console.log('here is index.js...')
/*
console.log('a=',a)
console.log('b=',b)
*/

/*
console.log('a1=',a1)
console.log('b1=',b1)
*/
/*
console.log('a=',a)
console.log('b=',b)
*/
console.log('a=',a)
console.log('b=',b)
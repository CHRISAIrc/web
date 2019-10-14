/*
* @Author: Chris
* @Date:   2019-10-13 16:16:27
* @Last Modified by:   Chris
* @Last Modified time: 2019-10-13 16:20:02
*/
const mongoose = require('mongoose')

//1.定义Schema
const BlogSchema = new mongoose.Schema({
	title: {
		type:String
	},
	content:{
		type:String
	},
	author:{
		type:mongoose.Schema.Types.ObjectId
	}
})

//2.根据Schema定义数据模型
//2.1 model方法第一个参数指定集合名称，mongoose会默认转换为复数
//2.2 model方法第二个参数指定Schema
const BlogModel = mongoose.model('blog',BlogSchema);


module.exports = BlogModel

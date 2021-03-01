const app = new Vue({
	el: '#app',
	data: {
		books: [
			{
				id: 1,
				name: '《算法导论》',
				date: '2006-9',
				price: 86.33,
				count: 1
			},
			{
				id: 2,
				name: '《UNIX编程艺术》',
				date: '2006-2',
				price: 34.78,
				count: 1
			},
			{
				id: 3,
				name: '《编程珠玑》',
				date: '2006-4',
				price: 42.44,
				count: 1
			},
			{
				id: 4,
				name: '《代码大全》',
				date: '2006-5',
				price: 23.00,
				count: 1
			},
		]
	},
	methods: {
		formatPrice(price) {
			return '￥' + price.toFixed(2)
		},
		increment(index) {
			this.books[index].count ++;
		},
		decrement(index) {
			this.books[index].count --;
		},
		removeHandle(index) {
			// 移除元素
			this.books.splice(index, 1)
		}
	},
	filters: {
		formatPriceFilter(price) {
			return '￥' + price.toFixed(2)
		}
	},
	computed: {
		totalPrice() {
			return this.books.reduce((preValue, book) => preValue + book.count * book.price, 0 );
		}
	}
})

// filter函数的使用
const array = [1, 2, 3, 4, 5, 6];
let total = array.filter(n => n % 2 ===0).map(n => n * 2).reduce((preValue, n) => preValue + n);
console.log(total);
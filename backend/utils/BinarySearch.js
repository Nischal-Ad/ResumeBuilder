const ErrorHandler = require('./errorhandler');

class BinarySearch {
	constructor(query, queryStr) {
		this.query = query;
		this.queryStr = queryStr;
	}

	search() {
		const Allarr = this.query;
		const arr = Allarr.sort((a, b) => a.name.localeCompare(b.name));
		const search = this.queryStr.search;
		let lower = 0;
		let upper = arr.length - 1;

		if (search === '') {
			return this;
		} else {
			let middle = Math.floor((lower + upper) / 2);

			while (arr[middle].name != search && lower < upper) {
				if (search < arr[middle].name) {
					upper = middle - 1;
				} else if (search > arr[middle].name) {
					lower = middle + 1;
				}

				middle = Math.floor((upper + lower) / 2);
			}

			if (arr[middle].name != search) {
				throw '';
			} else {
				this.query = arr[middle];
				return this;
			}
		}
	}
}

module.exports = BinarySearch;

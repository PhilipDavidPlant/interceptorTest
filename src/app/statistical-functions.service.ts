import { Injectable } from '@angular/core';

@Injectable()
export class StatisticalFunctionsService{

    max(array) {
		return Math.max.apply(null, array);
	}
	
	min(array) {
		return Math.min.apply(null, array);
	}
	
	range(array) {
		return this.max(array) - this.min(array);
	}
	
	midrange(array) {
		return this.range(array) / 2;
	}

	sum(array) {
		var num = 0;
		for (var i = 0, l = array.length; i < l; i++) num += array[i];
		return num;
	}
	
	mean(array) {
		return this.sum(array) / array.length;
	}
	
	median(array) {
		array.sort(function(a, b) {
			return a - b;
		});
		var mid = array.length / 2;
		return mid % 1 ? array[mid - 0.5] : (array[mid - 1] + array[mid]) / 2;
	}
	
	modes(array) {
		if (!array.length) return [];
		var modeMap = {},
			maxCount = 0,
			modes = [];

		array.forEach(function(val) {
			if (!modeMap[val]) modeMap[val] = 1;
			else modeMap[val]++;

			if (modeMap[val] > maxCount) {
				modes = [val];
				maxCount = modeMap[val];
			}
			else if (modeMap[val] === maxCount) {
				modes.push(val);
				maxCount = modeMap[val];
			}
		});
		return modes;
	}
	
	variance(array) {
		var mean = this.mean(array);
		return this.mean(array.map(function(num) {
			return Math.pow(num - mean, 2);
		}));
	}
	
	standardDeviation(array) {
		return Math.sqrt(this.variance(array));
	}
	
	meanAbsoluteDeviation(array) {
		var mean = this.mean(array);
		return this.mean(array.map(function(num) {
			return Math.abs(num - mean);
		}));
	}
	
	zScores(array) {
		var mean = this.mean(array);
		var standardDeviation = this.standardDeviation(array);
		return array.map(function(num) {
			return (num - mean) / standardDeviation;
		});
	}

}
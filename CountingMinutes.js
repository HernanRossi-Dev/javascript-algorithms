const CountingMinutes = (str) => {
	const start = {}, end = {};
	const times = str.split('-');
	const regex = /(am)|(pm)/;
	startBase = times[0];
	endBase = times[1];
	const getPeriodStart = regex.exec(startBase);
	startPeriod = getPeriodStart[0];
	const getPeriodEnd = regex.exec(endBase);
	endPeriod = getPeriodEnd[0];
	let [startHour, startMin] = startBase.slice(0, getPeriodStart.index).split(':');
	let [endHour, endMin] = endBase.slice(0, getPeriodEnd.index).split(':');
	startHour = parseInt(startHour);
	startMin = parseInt(startMin);
	endHour = parseInt(endHour);
	endMin = parseInt(endMin);
	if (startHour === 12 && startPeriod === 'am') {
		startHour =0;
	}	
	if (endHour === 12 && endPeriod === 'am') {
		endHour =0;
	}

	const DAY = 24*60;
	let startValue = (startHour * 60) + startMin;
	if(startPeriod === 'pm' && startHour !== 12) {
		startValue += (12*60);
	}
	let endValue = endHour * 60 + endMin;
	if(endPeriod === 'pm' && endHour !== 12) {
		endValue += (12*60);
	}

	let result;
	if (startValue <= endValue) {
		result = endValue - startValue;
	} else if (startValue > endValue) {
		result = (24*60 - startValue) + endValue;
	}
	return result;
}

console.log(CountingMinutes("12:30pm-12:00am"));
console.log(CountingMinutes("1:23am-1:08am"));
console.log(CountingMinutes("9:00am-10:00am"));

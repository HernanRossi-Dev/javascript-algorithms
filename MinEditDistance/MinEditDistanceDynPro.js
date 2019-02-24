'use strict';
const Cell = require('./Cell');
const { createDPTable, match, indel, printTable } = require('./utils');

class MinEditDistanceDynPro {
	constructor (stringOne, stringTwo) {
		this.lenOne = stringOne.length;
		this.lenTwo = stringTwo.length;
		this.stringOne = stringOne;
		this.stringTwo = stringTwo;
		this.cacheTable = createDPTable(this.lenOne+1, this.lenTwo+1);
	}

	MinEditDistanceDynPro( stringOne, stringTwo) {
		console.log('Initialized array: ');
		printTable(this.cacheTable);
		let add, remove, replace;
		const table = this.cacheTable;
		const s = this.stringOne;
		const t = this.stringTwo;
		for (let i = 1; i <= this.lenOne ; i++) {
			for (let j = 1; j <= this.lenTwo; j++) {
				replace = table[i-1][j-1].cost + match(s[i -1], t[j-1]);
				add = table[i][j-1].cost + indel(t[j-1]);
				remove = table[i-1][j].cost + indel(s[i -1]);

				if ( replace <= add ) {
					table[i][j].cost = replace;
					table[i][j].parent = 'replace';

				} else {
					table[i][j].cost = add;
					table[i][j].parent = 'add';
				} 

				if (table[i][j].cost > remove) {
					table[i][j].cost = remove;
					table[i][j].parent = 'remove';
				}
				
			} 
		}
		console.log('Completed Table: ');
		printTable(table);
		console.log('Final min cost: ', table[this.lenOne][this.lenTwo].cost);
	}
}




// const stringOne = 'The small brown fox jumps over the fence.';
// const stringTwo = 'The small black dog jumps over the hedge.';

const stringOne = 'thou shalt not';
const stringTwo = 'you should not';

const minEdit = new MinEditDistanceDynPro(stringOne, stringTwo );
minEdit.MinEditDistanceDynPro();
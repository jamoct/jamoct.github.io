var arr = [
        //monday in yens
        '10003', 
        //tuesday
        '46733', 
        //wednesday
        '45833', 
        //thursday
        '3534', 
        //friday
        '57354',
        //saturday
        '45334',
        //sunday
        '34856'
]


function budgetTracker (arr) {

	var newArray = [];

	arr.forEach(function(cost){
		cost = cost * 0.0089;
		newArray.push(cost);
	});

	var sum = 0;

	for (var i=0; i<newArray.length; i++) {
		sum += newArray[i];
	}

	return Math.round(sum/newArray.length);
}

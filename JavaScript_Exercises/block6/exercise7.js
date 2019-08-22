function runOnRange (obj) {
	var newarray = [];

    if (obj.step > 0) {
        for (var i=obj.start; i<=obj.end; i+=obj.step) {
            newarray.push(i);
        }
    }

    if (obj.step < 0) {
        for (var i=obj.start; i>=obj.end; i+=obj.step) {
            newarray.push(i);
        }
    }
    
    return newarray;
}


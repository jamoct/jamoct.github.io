function model (op, obj, schema) {
    var db = [];

    if (op !== 'add') {
        return db;
    }

    for (var key in schema){

        if (obj.hasOwnProperty(key)) {

            if(typeof obj[key] === schema[key]){

                if (isNaN(obj[key])) {
                    db.push('"' + key + '":"' + obj[key] + '"');
                } else {
                    db.push('"' + key + '":' + obj[key]);
                }
            }
        }
    }

    return JSON.parse('[{' + db.join(',') + '}]');
}

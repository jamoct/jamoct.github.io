function model (op, obj, schema) {
    var db = [];

    if (op !== 'add') {
        return db;
    }

    for (var i=0; i<schema.length; i++) {
        if (obj.hasOwnProperty(schema[i])) {
            if (isNaN(obj[schema[i]])) {
                db.push('"' + schema[i] + '":"' + obj[schema[i]] + '"');
            } else {
                db.push('"' + schema[i] + '":' + obj[schema[i]]);
            }
        }
    }

    return JSON.parse('[{' + db.join(',') + '}]');
}

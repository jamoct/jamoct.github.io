function model (op, obj, schema) {
    var db = [];

    if (op !== 'add') {
        return db;
    }

    for (var key in schema){

        if (obj.hasOwnProperty(key)) {

            if(typeof obj[key] === schema[key].type){

                if (isNaN(obj[key]) && typeof obj[key] !== 'boolean') {
                    db.push('"' + key + '":"' + obj[key] + '"');
                } else {
                    db.push('"' + key + '":' + obj[key]);
                }
            } 
        } else {

            if (typeof schema[key].default !== 'undefined') {
                if (isNaN(schema[key].default) && typeof schema[key].default !== 'boolean') {
                    db.push('"' + key + '":"' + schema[key].default + '"');
                } else {
                    db.push('"' + key + '":' + schema[key].default);
                }
            } 
        }
    }

    return JSON.parse('[{' + db.join(',') + '}]');
}

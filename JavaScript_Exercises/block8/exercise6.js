class Server {

    constructor () {
        var self = this;
        self.maindb = []; // ex. {name:jason, id:0,amount:400}

        this.app = {
            post: function (link) {
                var linkSplit = link.split('/'); // will split the link 

                // NEW ACCOUNT accounts/new/:name/:amount
                if (linkSplit[1] === 'new') {
                    
                    var accountFound = false;
                    var newAccounts = {};

                    for (var key in self.maindb) {
                        if (self.maindb[key].name === linkSplit[2]) {
                            accountFound = true;
                            break;
                        }
                    }

                    if (accountFound === false) {
                        var id = this.getnextid();
                        newAccounts.name = linkSplit[2];
                        newAccounts.id = id;
                        newAccounts.amount = parseInt(linkSplit[3]);
                        self.maindb.push(newAccounts);
                    } else {
                        return (`Account ${linkSplit[2]} already present in db`);
                    }
                }

                // DELETE ACCOUNT accounts/delete/:id
                if (linkSplit[1] === 'delete') {

                    for (var i=0; i<self.maindb.length; i++) {
                        if (self.maindb[i].id === parseInt(linkSplit[2])) {
                            self.maindb[i] = {};
                            //return true;
                        }
                    }
                    return undefined;
                }

                // DEPOSIT TO ACCOUNT accounts/deposit/:id/:amount
                if (linkSplit[1] === 'deposit') {
                	for (var i=0; i<self.maindb.length; i++) {
                		if (self.maindb[i].id === parseInt(linkSplit[2])) {
                			self.maindb[i].amount += parseInt(linkSplit[2]);
                			console.log(self.maindb[i].amount);
                		}
                	}
                }

                // WITHDRAW FROM ACCOUNT accounts/withdraw/:id/:amount
                if (linkSplit[1] === 'withdraw') {
                	for (var i=0; i<self.maindb.length; i++) {
                		if (self.maindb[i].id === parseInt(linkSplit[2])) {
                			self.maindb[i].amount -= parseInt(linkSplit[3]);
                			console.log(self.maindb[i].amount);
                		}
                	}
                }

                // UPDATE ACCOUNT accounts/update/:id/:amount/:name
                if (linkSplit[1] === 'update') {
                	for (var i=0; i<self.maindb.length; i++) {
                		if (self.maindb[i].id === parseInt(linkSplit[2])) {
                			self.maindb[i].amount = parseInt(linkSplit[3]);
                			self.maindb[i].name = linkSplit[4];
                			//return true;
                			//return self.maindb[i];
                		}
                	}
                	return undefined;
                }

                return '404 page not found';
            },

            getnextid: function () {
                var nextid = -1;
                
                for (var i=0; i<self.maindb.length; i++) {
                    if (self.maindb[i].id > nextid) {
                        nextid = self.maindb[i].id;
                    }
                }

                return nextid + 1;
            },

            get: function (link) {
                var linkSplit = link.split('/'); // will split the link 

                // FIND ID accounts/find/:id
                if (linkSplit[1] === 'find') {
                	if (linkSplit[2] === '') {
                		return self.maindb;
                	} else {
                		for (var i=0; i<self.maindb.length; i++) {
	                        if (self.maindb[i].id === parseInt(linkSplit[2])) {
	                            return self.maindb[i];
	                        }
	                    }
	                    return undefined;
                	}
                }

                // SORT accounts/sort/:by/:order
                if (linkSplit[1] === 'sort') {
                	if (linkSplit[2] === 'amount') {
                		if (linkSplit[3] === 'asc') {
                			self.maindb.sort(function (a, b) {
                				return parseFloat(a.amount - b.amount);
                			});
                		} else if (linkSplit[3] === 'desc') {
                			self.maindb.sort(function (a, b) {
                				return parseFloat(b.amount - a.amount);
                			});
                		}
                	} 

                	if (linkSplit[2] === 'name') {
                		if (linkSplit[3] === 'asc') {
                			var sorted = self.maindb.sort((a, b) => a.name.localeCompare(b.name));
                			//console.log(sorted);
                			return self.maindb;
                		} else if (linkSplit[3] === 'desc') {
                			var sorted = self.maindb.sort((a, b) => b.name.localeCompare(a.name));
                			//console.log(sorted);
                			return self.maindb;
                		}
                	}
                }

                return '404 page not found';
            }
        }
    }
}

/*
var server = new Server ();
server.app.post('accounts/new/jason/400');
server.app.post('accounts/new/roger/200');
server.app.post('accounts/new/george/1200');
console.log(server.app.get ('accounts/sort/name/desc')[0].name);
console.log(server.app.get ('accounts/sort/name/desc')[1].name);
console.log(server.app.get ('accounts/sort/name/desc')[2].name);
console.log(server.app.get ('accounts/sort/name/asc')[0].name);
console.log(server.app.get ('accounts/sort/name/asc')[1].name);
console.log(server.app.get ('accounts/sort/name/asc')[2].name);
console.log(server);
*/




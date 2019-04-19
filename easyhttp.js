// ES5
function EasyHTTP() {
    this.http = new XMLHttpRequest();
}

// make an HTTP GET request
EasyHTTP.prototype.get = function (url, callback) {
    this.http.open('GET', url, true);

    // capturing this to get the current instance
    let self = this;
    this.http.onload = function () {
        if (self.http.status === 200) {
            callback(null, self.http.responseText);
        } else {
            callback('Error: ' + self.http.status);
        }
    }

    this.http.send();
}

// make an HTTP POST request
EasyHTTP.prototype.post = function (url, data, callback) {
    this.http.open('POST', url, true);

    // need to set content type - the data type working with
    this.http.setRequestHeader('Content-type', 'application/json');

    let self = this;
    this.http.onload = function () {
        // this will be the new post
        callback(null, self.http.responseText);
    }

    // send data object and make it json string
    this.http.send(JSON.stringify(data));
}

// make an HTTP PUT request
EasyHTTP.prototype.put = function (url, data, callback) {
    this.http.open('PUT', url, true);

    // need to set content type - the data type working with
    this.http.setRequestHeader('Content-type', 'application/json');

    let self = this;
    this.http.onload = function () {
        // this will be the new post
        callback(null, self.http.responseText);
    }

    // send data object and make it json string
    this.http.send(JSON.stringify(data));
}

// make an HTTP DELETE request
EasyHTTP.prototype.delete = function (url, callback) {
    this.http.open('DELETE', url, true);

    let self = this;
    this.http.onload = function () {
        if (self.http.status === 200) {
            // return empty {} 
            // callback(null, self.http.responseText);

            // return post deleted message
            callback(null, 'Post deleted');
        } else {
            callback('Error: ' + self.http.status);
        }
    }

    this.http.send();
}

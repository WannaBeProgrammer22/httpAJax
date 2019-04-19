// ES5
function EasyHTTP() {
    this.http = new XMLHttpRequest();
}

// make an HTTP GET request
EasyHTTP.prototype.get = function (url, callback) {
    this.http.open('GET', url, true);

    // using self capturing the instance of this
    // from the current scope
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

// make an HTTP PUT request

// make an HTTP DELETE request
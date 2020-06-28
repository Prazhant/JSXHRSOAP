function invokeBackend(String loginId, String emailId){

// Set up our HTTP request
var xhr = new XMLHttpRequest();

// Setup our listener to process completed requests
xhr.onload = function () {

	// Process our return data
	if (xhr.status >= 200 && xhr.status < 300) {
		// What do when the request is successful
		return xhr.body.parse("response");
	} else {
		// What do when the request fails
		console.log('The request failed!');
		return null;
	}

	// Code that should run regardless of the request status
	console.log('This always runs...');
};

// Create and send a GET request
// The first argument is the post type (GET, POST, PUT, DELETE, etc.)
// The second argument is the endpoint URL
xhr.setRequestHeader('x-my-custom-header', 'some value');

var endpoint ="https://host:port/servicename?loginId="+loginId+"&emailId="+emailId;
xhr.open('GET', endpoint);
xhr.send();


}


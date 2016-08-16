var config = {
	apiKey: "AIzaSyD3uA_mMoDqG9C3bEMKLjBJNt6V5au8U8k",
	authDomain: "fir-comments-3fe01.firebaseapp.com",
	databaseURL: "https://fir-comments-3fe01.firebaseio.com",
	storageBucket: "fir-comments-3fe01.appspot.com",
};
firebase.initializeApp(config);
var dbRef = firebase.database().ref().child('comments');
$('#submit').on('click', function(){
	var d = new Date();
	dbRef.push({
		username: $('#username_field').val(),
		comment_body: $('#comment_body_field').val(),
		date: d.getTime()
	});
});
dbRef.on('child_added', function(data){
	var d = new Date(data.val().date);
	$('#comment-area').after('<div class="comment"><p class="username">' + data.val().username + " - " + d.toLocaleString() + '</p><p class="comment_body">' + data.val().comment_body + '</p></div>');
});
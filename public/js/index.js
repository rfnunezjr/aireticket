var socket = io();

socket.on('connect', function() {
	console.log('Connected to server!');

	socket.emit('createEmail', {
		to: 'wholesale.support@airespring.com',
		text: 'Hey!'
	});
});

socket.on('disconnect', function() {
	console.log('Disconnected to server!');
});

socket.on('newEmail', function(email){
	console.log('New Email!', email);
});

$('#livechat').draggable({ containment: "parent" });
$('#livechat').click(function(){
	$(this).hide("slow");
	$('#chatbutton').show();
});

$('#chatbutton').click(function(){
	$('#livechat').show(1000);
});
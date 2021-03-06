var name = getQueryVariable('name') || 'Anonymous';
var room = getQueryVariable('room');
var socket = io();

console.log(name + ' wants to join ' + room);

$('.room-title').text(room);

socket.on('connect', function () {
    console.log('Connected to socket.io server!');
    socket.emit('joinRoom', {
        name: name,
        room: room
    });

});

socket.on('message', function (message) {
    var momentTimestamp = moment(message.timestamp);
    var $messages = $('.messages');
    var $message = $('<li class="list-group-item"></li>')

    console.log('New message:');
    console.log(message.text);

    $message.append('<p><strong>' + message.name + ' ' + momentTimestamp.local().format('HH:mm') + '</strong></p>');
    $message.append('<p>' + message.text + '</p>');
    $messages.append($message);
});

// Handles submitting of new message.
var $form = jQuery('#message-form');

$form.on('submit', function (event) {
    event.preventDefault();

    var $message = $form.find('input[name=message]');

    socket.emit('message', {
        name: name,
        text: $message.val()
    })

    $message.val('');
});


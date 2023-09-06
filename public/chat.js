'use strict';

// Server URL below must point to your server, localhost works for local development/testing
const socket = io('http://localhost:3000');

document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();
  const inp = document.getElementById('m');
  const username = document.getElementById('username');
  socket.emit('chat message', username.value, inp.value);
  inp.value = '';
  username.value = '';
});

socket.on('chat message', (msg) => {
  const item = document.createElement('li');
  item.innerHTML = msg + '' + username;
  document.getElementById('messages').appendChild(item);
});
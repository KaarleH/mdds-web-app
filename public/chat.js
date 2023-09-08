'use strict';

// Server URL below must point to your server, localhost works for local development/testing
const socket = io('http://kaarlemachine.northeurope.cloudapp.azure.com');

document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();
  const inp = document.getElementById('m');
  const username = document.getElementById('username');
  socket.emit('chat message', [username.value + ': ' + inp.value]);
  inp.value = '';
  username.value = '';
});

socket.on('chat message', (msg) => {
    console.log(msg)
  const item = document.createElement('li');
  item.classList.add(
    "py-2",
    "px-3",
    "bg-red-400",
    "rounded-lg",
    "w-fit",
    "m-5"
  )
  item.textContent = msg;
  document.getElementById('messages').classList.add(
    "pb-2",
  )
  document.getElementById('messages').appendChild(item);
});
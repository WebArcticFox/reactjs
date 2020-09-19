import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    {id: 1, text: 'Лучший пост', like: 2},
    {id: 2, text: 'Псевдо пост', like: 25},
    {id: 3, text: 'Худший пост', like: 142},
    {id: 4, text: 'Мой лучший пост', like: 580},
]

let dialogs = [
    {id: 1, name: 'Dimitry'},
    {id: 2, name: 'Alexander'},
    {id: 3, name: 'Marta'},
    {id: 4, name: 'Viktor'},
    {id: 5, name: 'Mariya'},
]

let messages = [
    {id: 1, text: 'Hi', author: 'other_message'},
    {id: 2, text: 'How are you?', author: 'you_message'},
    {id: 3, text: 'I\'m Fine! And you?', author: 'other_message'},
    {id: 4, text: 'Mee too', author: 'you_message'},
    {id: 5, text: 'Good!', author: 'other_message'},
]


ReactDOM.render(
  <React.StrictMode>
      <App post={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();

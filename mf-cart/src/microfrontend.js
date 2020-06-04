import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { eventsToDispatch } from 'src/utils/events';

export const render = (containerId, data) => {
  const container = document.getElementById(containerId);
  if (!container) return;
  ReactDOM.render(<App {...data} />, container);
};

export const unMount = containerId => {
  const container = document.getElementById(containerId);
  if (!container) return;
  ReactDOM.unmountComponentAtNode(container);
};

export const subscribe = (eventName, eventHandler) => {
  if (!eventsToDispatch[eventName]) {
    console.warn(`This micro frontend does not support the ${eventName} event!`);
    return;
  }
  window.addEventListener(eventName, eventHandler);
}

export const unSubscribe = (eventName, eventHandler) => {
  if (!eventsToDispatch[eventName]) {
    console.warn(`This micro frontend does not support the ${eventName} event!`);
    return;
  }
  window.removeEventListener(eventName, eventHandler, false);
}

export const customEvents = eventsToDispatch;

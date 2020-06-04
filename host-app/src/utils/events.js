export const eventsToDispatch = {
  HOST_THEME_CHANGED: 'HOST_THEME_CHANGED'
};

const dispatchEvent = (event, data) => window.dispatchEvent(new CustomEvent(event, { detail: data }));

export default dispatchEvent;

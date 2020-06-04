export const eventsToListen = {
  HOST_THEME_CHANGED: 'HOST_THEME_CHANGED'
};

export const eventsToDispatch = {
  PRODUCTS_MF_PRODUCT_ADDED: 'PRODUCTS_MF_PRODUCT_ADDED'
};

const dispatchEvent = (event, data) => window.dispatchEvent(new CustomEvent(event, { detail: data }));

export default dispatchEvent;

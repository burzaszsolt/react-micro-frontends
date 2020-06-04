export const eventsToListen = {
  HOST_THEME_CHANGED: 'HOST_THEME_CHANGED'
};

export const eventsToDispatch = {
  CART_MF_PRODUCT_DELETED: 'CART_MF_PRODUCT_DELETED'
};

const dispatchEvent = (event, data) => window.dispatchEvent(new CustomEvent(event, { detail: data }));

export default dispatchEvent;

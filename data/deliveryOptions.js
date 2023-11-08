export const deliveryOptions = [{
  id: '1',
  deliveryDays: 7,
  priceRs: 0
}, {
  id: '2',
  deliveryDays: 3,
  priceRs: 499
}, {
  id: '3',
  deliveryDays: 1,
  priceRs: 999
}];

export function getDeliveryOption(deliveryOptionId) {
  let deliveryOption;

  deliveryOptions.forEach((option) => {
    if (option.id === deliveryOptionId) {
      deliveryOption = option;
    }
  });

  return deliveryOption;
}
import { baseUrl } from './base';

const Resourcer = require('redux-rest-resource');

export const { types, actions, rootReducer } = Resourcer.createResource({
  name: 'reservation',
  url: `${baseUrl}/reservations/:id`,
});

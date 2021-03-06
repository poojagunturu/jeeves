import { combineReducers } from 'redux';
import { UtilityReducer } from './UtilityReducer';
import { AuthenticationReducer } from './AuthenticationReducer';
import { rootReducer as accountReducers } from '../data/account';
import { rootReducer as materialsReducers } from '../data/material';
import { rootReducer as mailReducers } from '../data/mail';
import { rootReducer as restaurantReducers } from '../data/restaurant';
import { rootReducer as menuReducers } from '../data/menu';
import { rootReducer as reservationReducers } from '../data/reservation';
import { rootReducer as inventoryItemReducers } from '../data/inventoryItem';
import { rootReducer as menuItemReducers } from '../data/menuItem';
import { rootReducer as sectionReducers } from '../data/section';
import { rootReducer as tableReducers } from '../data/table';

import { rootReducer as orderReducers } from '../data/order';
import { rootReducer as reviewReducers } from '../data/review';
import { rootReducer as serviceReducers } from '../data/service';
import { rootReducer as shiftReducers } from '../data/shift';
import { rootReducer as transactionReducers } from '../data/transaction';
import { rootReducer as visitReducers } from '../data/visit';


// HERE: add

export const reducers = combineReducers({
  utility: UtilityReducer,
  authentication: AuthenticationReducer,
  accounts: accountReducers,
  materials: materialsReducers,
  mail: mailReducers,
  restaurants: restaurantReducers,
  menus: menuReducers,
  reservations: reservationReducers,
  inventoryItems: inventoryItemReducers,
  menuItems: menuItemReducers,
  sections: sectionReducers,
  tables: tableReducers,
  orders: orderReducers,
  reviews: reviewReducers,
  services: serviceReducers,
  shifts: shiftReducers,
  transactions: transactionReducers,
  visits: visitReducers,
  // HERE: add
});

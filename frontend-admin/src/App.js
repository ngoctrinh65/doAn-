import React from 'react';
import { Admin, Resource } from 'react-admin';
import AdminPanel from "./component/AdminPanel";

import {
  createCategory,
  editCategory,
  listCategory
} from "./component/Category";


//import simpleRestProvider from "ra-data-simple-rest"
import { createFeedback, editFeedback, listFeedback } from './component/Feedback';
import { createOrders, editOrders, listOrders } from './component/Orders';

import { createUser, editUser, listUser } from './component/User';
import { createOrderDetail, editOrderDetail, listOrderDetail } from './component/OrderDetail';
import { createCartItem, editCartItem, listCartItem } from './component/CartItem';

import { createGallery, editGallery, listGallery } from './component/Gallery';
import { createRole, editRole, listRole } from './component/Role';
import { createToken, editToken, listToken } from './component/Token';
import { createProducts, editProducts, listProducts } from './component/Products';

import dataProvider from "./component/customDataProvider";
import { createSale, editSale, listSale } from './component/Sale';
import { createCart, editCart, listCart } from './component/Cart';
import { createLines, editLines, listLines } from './component/Lines';

//const httpClient = fetchUtils.fetchJson;

const App = () => (
  <Admin dashboard={AdminPanel} dataProvider={dataProvider}>
    <Resource name="categories"
      list={listCategory}
      edit={editCategory}
      create={createCategory}
    />
    <Resource name="lines"
      list={listLines}
      edit={editLines}
      create={createLines}
    />
    <Resource name="products"
      list={listProducts}
      edit={editProducts}
      create={createProducts}
    />


    <Resource name="feedbacks"
      list={listFeedback}
      edit={editFeedback}
      create={createFeedback}
    />

    <Resource name="orders"
      list={listOrders}
      edit={editOrders}
      create={createOrders}
    />

    <Resource name="users"
      list={listUser}
      edit={editUser}
      create={createUser}
    />

    <Resource name="orderdetails"
      list={listOrderDetail}
      edit={editOrderDetail}
      create={createOrderDetail}
    />
    <Resource name="cartItems"
      list={listCartItem}
      edit={editCartItem}
      create={createCartItem}
    />
    <Resource name="galleries"
      list={listGallery}
      edit={editGallery}
      create={createGallery}
    />
    <Resource name="roles"
      list={listRole}
      edit={editRole}
      create={createRole}
    />

    <Resource name="tokens"
      list={listToken}
      edit={editToken}
      create={createToken}
    />

    <Resource name="sales"
      list={listSale}
      edit={editSale}
      create={createSale}
    />

    <Resource name="carts"
      list={listCart}
      edit={editCart}
      create={createCart}
    />
  </Admin>
);
export default App;
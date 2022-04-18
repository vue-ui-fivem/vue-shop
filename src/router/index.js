import { createRouter, createWebHashHistory } from 'vue-router'
import shopCont from '../components/ShopContainer.vue'
import myCart from '../components/MyCart.vue'
import Apply from '../components/Apply.vue'
import ExitsApply from '../components/Admin/ExitsApply.vue'
import AdminCards from '../components/Admin/AdminOptions.vue'
import SellShop from '../components/Admin/SellShop.vue'
import Storage from '../components/Admin/Storage.vue'
import ItemOrder from '../components/Admin/ItemOrder.vue'
import Employee from '../components/Admin/Employee.vue'
import InProgress from '../components/Admin/InProgress.vue'

const routes = [
  {path: '/shop', component: shopCont},
  {path: '/mycart', component: myCart},
  {path: '/apply', component: Apply},
  {path: '/admin', component: AdminCards},
  {path: '/admin/storage', component: Storage},
  {path: '/admin/order', component: ItemOrder},
  {path: '/admin/progress', component: InProgress},
  {path: '/admin/exitsapply', component: ExitsApply},
  {path: '/admin/employee', component: Employee},
  {path: '/admin/sell', component: SellShop}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

import { createStore } from 'vuex'

export default createStore({
  state: {
    navbar: [
      {
        title: 'Shop',
        url: '/shop'
      },
      {
        title: 'Jelenetkezés',
        url: '/apply'
      },
      {
        title: 'Admin',
        url: '/admin'
      },
    ],
    items: [
      {
        img: 'https://www.closetag.com/images/photo4.jpg',
        name: 'Asd',
        sql_name: 'asd',
        amount: 100,
        storage: 10
      },
      {
        img: 'https://www.closetag.com/images/photo4.jpg',
        name: 'Bread',
        sql_name: 'bread',
        amount: 10,
        storage: 10
      },
    ],
    basket: [],
    adminOptions: [
      {
        img: '../../assets/logo.png',
        title: 'Raktár',
        url: '/storage'
      },
      {
        img: '../../assets/logo.png',
        title: 'Megrendelések',
        url: '/order'
      },
      {
        img: '../../assets/logo.png',
        title: 'Alkalmazottak',
        url: '/employee'
      },
      {
        img: '../../assets/logo.png',
        title: 'Beérkezett jelentkezések',
        url: '/exitsapply'
      },
      {
        img: '../../assets/logo.png',
        title: 'Bolt eladása',
        url: '/sell'
      },
    ],
    storageIn: [
      {
        img: 'https://www.closetag.com/images/photo4.jpg',
        name: 'Asd',
        sql_name: 'asd',
        amount: 100,
        storage: 10
      },
      {
        img: 'https://www.closetag.com/images/photo4.jpg',
        name: 'Asd2',
        sql_name: 'asd2',
        amount: 100,
        storage: 10
      },
      {
        img: 'https://www.closetag.com/images/photo4.jpg',
        name: 'Asd3',
        sql_name: 'asd3',
        amount: 100,
        storage: 10
      },
    ],
    storageOut: [
      {
        img: 'https://www.closetag.com/images/photo4.jpg',
        name: 'Asd4',
        sql_name: 'asd4',
        amount: 100,
        storage: 10
      }
    ]
  },

  getters: {
    navbar: (state) => {
      return state.navbar
    },
    items: (state) => {
      return state.items
    },
    basket: (state) => {
      return state.basket
    },
    adminOptions: (state) => {
      return state.adminOptions
    },
    storageIn: (state) => {
      return state.storageIn
    },
    storageOut: (state) => {
      return state.storageOut
    }
  }
})

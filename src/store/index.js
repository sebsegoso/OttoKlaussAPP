import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'

//modules
import Auth from './Auth'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    juguetes: []
  },
  mutations: {
    GET_TOYS(state, juguetes) {
      state.juguetes = juguetes
    }
  },
  actions: {
    getToys({ commit }) {
      firebase
        .firestore()
        .collection('juguetes')
        .onSnapshot(snapshot => {
          let juguetes = []
          snapshot.forEach(juguete => {
            juguetes.push({
              id: juguete.id,
              data: juguete.data()
            })
          })
          commit('GET_TOYS', juguetes)
        })
    },
    async addToy({ commit }, producto) {

      //Ajustar formato del producto a cargar
      let jugueteFormateado = {
        codigo: producto.codigo.toUpperCase(),
        nombre: producto.nombre,
        stock: Number(producto.stock),
        precio: Number(producto.precio)
      }    

      let agregarFB = await firebase
        .firestore()
        .collection('juguetes')
        .add(jugueteFormateado);
    },
    deleteToy({commit} , id ) {
      firebase
        .firestore()
        .collection('juguetes')
        .doc(id)
        .delete();
    },
    editToy({commit} , juguete) {
      let updateToy = {
        nombre : juguete.nombre,
        codigo : juguete.codigo,
        stock : juguete.stock,
        precio : juguete.precio
      }
      firebase
        .firestore()
        .collection('juguetes')
        .doc(juguete.id)
        .update(updateToy)

    }
  },
  getters: {
    juguetesData(state) {
      return state.juguetes.map(p => {
        let data = p.data
        data.id = p.id
        return data
      })
    }
  },
  modules: {
    Auth
  }
})

import firebase from 'firebase'
import router from '../router';

export default {
    namespaced: true,
    state: {
        usuario: '',
        mensajePrueba: 'HOLA'
    },
    mutations: {
        LOG_IN(state, user) {
            state.usuario = user;
        },
        LOG_OUT(state) {
            state.usuario = ''
        }
    },
    actions: {
        //ingresar con google
        signInWithGoogle({ commit }) {
            let provider = new firebase.auth.GoogleAuthProvider();
            firebase
                .auth()
                .signInWithPopup(provider)
                .then(result => {
                    console.log("Sesión iniciada :" + result.user.displayName);
                    let usuario = firebase.auth().currentUser
                    commit('LOG_IN', usuario)
                })
                .then(() => router.push('/'))
                .catch(error => console.log(error.message));
        },
        //ingresar con correo y clave
        signInWithEmailAndPass({ commit }, user) {
            firebase
                .auth()
                .signInWithEmailAndPassword(user.email, user.password)
                .then(result => {
                    let usuario = result.user;
                    console.log("Sesión iniciada :" + usuario.displayName);
                    commit('LOG_IN', usuario)
                })
                .then(() => router.push('/'))
                .catch(error => console.log(error.message))

        },
        //cerrar sesión
        logOut({ commit }) {
            firebase
                .auth()
                .signOut()
                .then(() => {
                    commit('LOG_OUT')
                    alert("Sesión cerrada");
                    router.push({ name: 'Login' });
                });
        },
    },
    getters: {

    }
}
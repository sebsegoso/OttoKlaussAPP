import firebase from 'firebase'
import router from '../../router';

export default {
    state: {
        usuario: '',
        mensaje: 'HOLA MI GENTE'
    },
    mutations: {
        LOG_IN(state, user) {
            console.log(state.usuario , user)
            state.usuario = user;
            console.log(state.usuario)
        }
    },
    actions: {
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

        }
    },
    getters: {

    }
}
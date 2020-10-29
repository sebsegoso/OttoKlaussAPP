import firebase from 'firebase'
import router from '../../router';

export default {
    state: {
        user: null
    },
    mutations: {
        LOG_IN(state, user) {
            console.log(state.user , user)
            state.user = user;
            console.log(state.user)
        }
    },
    actions: {
        signInWithGoogle({ commit }) {
            let provider = new firebase.auth.GoogleAuthProvider();
            firebase
                .auth()
                .signInWithPopup(provider)
                .then(result => {
                    let usuario = result.user;
                    console.log("Sesión iniciada :" + usuario.displayName);
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
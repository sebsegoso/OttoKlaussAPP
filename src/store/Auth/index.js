import firebase from 'firebase'

export default {
    state: {
        user: null
    },
    mutations: {
        LOG_IN(state, user) {
            state.user = user;
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
                .catch(function (error) {
                    // Handle Errors here.
                    let errorCode = error.code;
                    let errorMessage = error.message;
                    // The email of the user's account used.
                    let email = error.email;
                    // The firebase.auth.AuthCredential type that was used.
                    let credential = error.credential;
                    // ...
                });
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
                .catch(error => console.log(error.message))

        }
    },
    getters: {

    }
}
export const FaceBookSignIn = () => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    console.log("entered");
    const firebase = getFirebase();
    const firestore = getFirestore();

    var provider = new firebase.auth.FacebookAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then(result => {
        //console.log(result);
        var token = result.credential.accessToken;
        var user = result.user;
        console.log(user);
      })
      .catch(err => {
        console.log(err);
      });
  };
};

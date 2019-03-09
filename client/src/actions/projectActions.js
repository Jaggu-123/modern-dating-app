import { storage } from "firebase";

export const createProfile = profiles => {
  console.log(profiles);
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // const firestore = getFirestore();
    // const firebase = getFirebase();
    // var uploadTask = firebase
    //   .storage()
    //   .ref(`images/${profiles.image}`)
    //   .put(profiles.image);
    // uploadTask.on(
    //   "state_changed",
    //   snapshot => {},
    //   error => {
    //     console.log(err);
    //   },
    //   () => {
    //     firebase
    //       .storage()
    //       .ref("images")
    //       .child(profiles.image)
    //       .getDownloadURL()
    //       .then(url => {
    //         console.log(url);
    //       });
    //

    firestore
      .collection("profile")
      .doc(`${profiles.user}`)
      .set({
        currentId: 123,
        name: "Manish",
        image: "mak",
        dateofbirth: new Date(),
        gender: "Male",
        interests: ["ML", "Web D"],
        bio: "Hello I am Manish",
        matches: [12, 67, 123],
        rating: 10
      })
      .then(profiles => dispatch({ type: "CREATE_PROFILE", payload: profiles }))
      .catch(err => console.log(err));
  };
};

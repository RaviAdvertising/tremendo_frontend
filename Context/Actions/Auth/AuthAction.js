import firebase from "../../../utils/firebase-config";

export default function socialMediaAuth(provider) {
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then(res => {
      return res.user;
    })
    .catch(err => {
      return err;
    });
}

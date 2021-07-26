import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import { fireconfig } from 'src/environments/firebase';

export default function initFirebase() {
  init(fireconfig);
  // initData();
  initDataAll();
  const store = initStorage();
}
export const init = (config: Object) => {
  firebase.initializeApp(config);
};
export const initStorage = () => {
  return firebase.app().storage('gs://ruddy-harifetra.appspot.com');
};
export function initData() {
  const ref = firebase.firestore().collection('portfolio');
  ref
    .doc('profil')
    .get()
    .then((doc) => {
      const dataProfil = doc.data();
      localStorage.setItem('dataProfil', JSON.stringify(dataProfil));
    })
    .catch((error) => {
      console.log('Error getting document:', error);
    });
  ref
    .doc('cursus')
    .get()
    .then((doc) => {
      const dataCursus = doc.data();
      localStorage.setItem('dataCursus', JSON.stringify(dataCursus));
    })
    .catch((error) => {
      console.log('Error getting document:', error);
    });
  ref
    .doc('compétence')
    .get()
    .then((doc) => {
      const dataCompetence = doc.data();
      localStorage.setItem('dataCompetence', JSON.stringify(dataCompetence));
    })
    .catch((error) => {
      console.log('Error getting document:', error);
    });
}
export function initDataAll() {
  const ref = firebase.firestore().collection('portfolio');
  ref.get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      localStorage.setItem(doc.id, JSON.stringify(doc.data()));
    });
  });
}

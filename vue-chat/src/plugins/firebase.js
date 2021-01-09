import Vue from 'vue'
import * as VueFire from 'vuefire'
import firebase from 'firebase/app';
import 'firebase/firestore';

Vue.use(VueFire)

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCYbxrwSjwgVM_INiUOnFPVIB_0ekchTmE",
    authDomain: "vuechatapp01.firebaseapp.com",
    projectId: "vuechatapp01",
    storageBucket: "vuechatapp01.appspot.com",
    messagingSenderId: "832935168668",
    appId: "1:832935168668:web:39d31d594d58c056da3b59",
    measurementId: "G-WJ991KGG7W"
});

export const db = firebaseApp.firestore();
import firebase from 'firebase'
import 'firebase/auth'
import  ServiceAccount from './firebaseServiceAccount'

const app = firebase.initializeApp(ServiceAccount)
const Store = app.firestore()
const Auths = app.auth()

export default { Store, Auths }

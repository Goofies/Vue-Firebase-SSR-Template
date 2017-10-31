import Firebase from 'firebase'

export function createAPI ({ config }) {
  Firebase.initializeApp(config)
  return Firebase
}

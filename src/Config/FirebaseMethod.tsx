import React from 'react'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { getDatabase, ref, set, onValue, get, DataSnapshot, push, child } from "firebase/database";
import { app } from '../Config/FirebaseConfig';
import { resolve } from 'path';
import { rejects } from 'assert';
import { useNavigate } from 'react-router-dom';


let auth = getAuth(app)
let db = getDatabase(app)
// const navigate = useNavigate()

export let fbLogin = (body: any, path: string) => {
  return new Promise((resolve, reject) => {
    if (!body.email || !body.password) {
      reject("Email and Password are Required");
    } else {
      signInWithEmailAndPassword(auth, body.email, body.password)
        .then((res) => {
          const id = res.user.uid;
          body.id = id
          const reference = ref(db, `${path}/${body.id}`);
          onValue(reference, (data) => {
            if (data.exists()) {
              resolve(data.val())
            }
            else {
              reject('no data found')
            }
          })

        })
        .catch((err) => {
          reject(err);
        });
    }
  });
};
export let fbAuth = () => {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        resolve(uid)
        // ...
      } else {
        reject("No User is Logged in")
        // User is signed out
        // ...
      }
    });
  })
}
export let fbSignUp = (body: any, path: string) => {
  return (
    new Promise((resolve, reject) => {
      if (!body.email || !body.password || !body.username) {
        alert("Email password and name is required")
      }
      else {
        createUserWithEmailAndPassword(auth, body.email, body.password).then((success) => {
          let userId = success.user.uid
          body.id = userId
          const reference = ref(db, `${path}/${body.id}`);
          set(reference, body).then((user) => {
            resolve("user created")
          }).catch((err) => {
            reject(err)
          })
        }).catch((error) => {
          reject(error)
        })


      }
    })
  )
}

export let FbForm = (body: any, path?: string) => {
  return (
    new Promise((resolve, reject) => {
      const keyreference = push(ref(db, `${path}`)).key;
      let formid = keyreference
      body.id = formid
      const reference = ref(db, `${path}/${formid}`);
      set(reference, body)
        .then(() => {
          resolve("Form created successfully");
        })
        .catch((err) => {
          reject(err);
        });

    })
  )}
  export let FbgetList = (path?: string) => {
    return (
      new Promise((resolve, rejects) => {
        const reference = ref(db, `${path}`);
        onValue(reference, (data) => {
          if (data.exists()) {
            resolve(Object.values(data.val()))
          }
          else {
            rejects(("no data found"))
          }
        })
      })
    )
  }
  
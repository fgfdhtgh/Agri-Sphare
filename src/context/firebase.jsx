import { createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, 
        createUserWithEmailAndPassword, 
        signInWithEmailAndPassword, 
        GoogleAuthProvider, 
        signInWithPopup, 
        onAuthStateChanged, 
        signOut 
    } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs, query, where, } from 'firebase/firestore'

const FirebaseContext = createContext(null);
const useFirebase = () => useContext(FirebaseContext);

const firebaseConfig = {
  apiKey: "AIzaSyDN_ui-coacmMB129tNLoEvx3j-SUXvF0U",
  authDomain: "agrisphere-46d8d.firebaseapp.com",
  projectId: "agrisphere-46d8d",
  storageBucket: "agrisphere-46d8d.firebasestorage.app",
  messagingSenderId: "10363134237",
  appId: "1:10363134237:web:12f520dd82da6e611101f4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const firestore = getFirestore(app)


export const FirebaseProvider = (props) => {

    const [user , setUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser(null)
            }
        });
    }, [])

    // console.log(user);

    const signupWithEmailPassword = (email, password) => createUserWithEmailAndPassword(auth, email, password);
    const signinWithEmailPassword = (email, password) => signInWithEmailAndPassword(auth, email, password);
    const signinWithGoogle = () => signInWithPopup(auth, googleProvider);
    const logout = () => signOut(auth);
    const CreateNewUser = async (username, email, phone, password, role) => {
        return await addDoc(collection(firestore, 'Users'), {
          username,
          email,
          phone, 
          password,
          role
        });
    };

    const AddNewProduct = async (name, category, price, minOrder, stock, imageUrl) => {
        return await addDoc(collection(firestore, 'Products'), {
          name,
          category,
          price, 
          minOrder,
          stock,
          image : imageUrl,
          userId: user.uid,
          email: user.email,
          UserName: user.displayName,
          photoURL: user.photoURL
        });
    };
    // const CreateNewSeller = async (username, email, phone, password) => {
    //     return await addDoc(collection(firestore, 'Sellers'), {
    //       username,
    //       email,
    //       phone, 
    //       password
    //     });
    // };
    const getAllProducts = () => {
        return getDocs(collection(firestore, 'Products'));
    }

    const fetchMyProducts = async () => {
        if (!user) return;
        const collectionRef = collection(firestore, 'Products');
        const q = query(collectionRef, where('userId', '==', user.uid));
        const result = await getDocs(q);
        return result;
    }

    const placeOrder = async (productId) => {
        const collectionRef = collection(firestore, 'Products', productId, 'Orders');
        const result = await addDoc(collectionRef, {
            userId: user.uid,
            email: user.email,
            displayName: user.displayName,
        });
        return result
    }
      
    const isLoggedIn = user ? true : false;

    //console.log(user);

    return (
        <FirebaseContext.Provider value={{signupWithEmailPassword, signinWithEmailPassword, signinWithGoogle, CreateNewUser, logout, getAllProducts, AddNewProduct, fetchMyProducts, placeOrder, user, isLoggedIn}}>
            {props.children}
        </FirebaseContext.Provider>
    );
}

export { useFirebase };
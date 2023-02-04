import { initializeApp } from "firebase/app";
import { addDoc, doc, getFirestore, collection, getDoc, getDocs, query, where } from "firebase/firestore";
import { products } from "./mockService"

const firebaseConfig = {
  apiKey: "AIzaSyAsenQBH9Xu38TGaZQv7mY5POf0b7Hmo-M",
  authDomain: "proyectofinal-react-code-4ae4e.firebaseapp.com",
  projectId: "proyectofinal-react-code-4ae4e",
  storageBucket: "proyectofinal-react-code-4ae4e.appspot.com",
  messagingSenderId: "801502486837",
  appId: "1:801502486837:web:0258ea5b19d570a16a2c7c"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


/**
 * Get documents from Firestore
 */
export async function exportArray() {
  products.forEach(element => {
    delete element.id
    addDoc(collection(db, "products"), element).then((resp => {
      console.log("Item creado: ", resp.id)
    }))
  });
}

/**
 * Get documents from Firestore
 */
export async function getProducts() {
  const productsRef = collection(db, "products");
  const snapshot = await getDocs(productsRef)
  const products = snapshot.docs.map(item => item.data());
}

/**
 * Get documents from Firestore
 */
export async function getProductsByCategory(category) {
  try {
    const productsRef = collection(db, "products"); 
    const q = query(productsRef, where("category","==", category))
    const snapshot = await getDocs(q);
    const products = snapshot.docs.map(item => {
      let product = item.data();
      product.id = item.id;
      return product;
    });

    return products;
  } catch (error) {
    console.log(error)
  }
}

/**
 * Get documents from Firestore
 */
export async function getProductById(id) {
  try {
    const productsRef = collection(db, "products");
    const productDocRef = doc(productsRef, id);
    const request = await getDoc(productDocRef);
    const data = request.data();

    return data;
  } catch (error) {
    console.log(error);
  }
}

export default db;
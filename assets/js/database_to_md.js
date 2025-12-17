
const firebaseConfig = {

  apiKey: "AIzaSyCFHR_wxJFsGzEGsVbEQ6RVetwZQGPHdrw",

  authDomain: "lampsys-website-citationgen.firebaseapp.com",

  projectId: "lampsys-website-citationgen",

  storageBucket: "lampsys-website-citationgen.firebasestorage.app",

  messagingSenderId: "75724220420",

  appId: "1:75724220420:web:4ced53c569194253d76d51",

  measurementId: "G-2KJZSV8FVV"

};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const db = firebase.firestore();
/*const referenceTemplate = {
  authors: [],
  year: "",
  title:"",
  conference:"",
  format: "",
  link:""
};

function datafill(data){
  const db = {...referenceTemplate, ...data};
  return db;
}

db.collection("references").add(datafill({
  authors: ["john author taylor", "Sean sanghavi"],
  year: "2006",
  title:"Assessment: A tool for development and engagement in the first year of university study",
  conference: "Engaging Students: 9th Pacific Rim in Higher Education (FYHE) Conf., Griffith, Australia",
  format: "online",
  link:" http://www.fyhe.com.au/past_papers/2006/Papers/Taylor.pdf"
}))
.then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
})
.catch((error) => {
    console.error("Error adding document: ", error);
});
*/




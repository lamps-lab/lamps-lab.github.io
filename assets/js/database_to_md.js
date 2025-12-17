
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
/*

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

const referenceTemplate = {
    authors: [],
    year: "",
    title: "",
    conference: "",
    format: "",
    link: ""
  };

  // Format authors for IEEE (first initials + last name)
  function formatAuthors(authors) {
    return authors.map(name => {
      const parts = name.trim().split(" ");
      let last = parts.pop();
      const initials = parts.map(n => n[0].toUpperCase() + ".").join(" ");
  
      return `${initials} ${last.charAt(0).toUpperCase()+last.slice(1)}`;
    }).join(", ");
  }

 function buildIEEECitation(data) {
  const authors = formatAuthors(data.authors || []);
  const title = data.title || "";
  const conf = data.conference || "";
  const year = data.year || "";
  const link = data.link || "";
  const format = data.format || "";

  // Base citation without the link
  const citationText = `${authors}, "${title}," ${conf}, ${year}.`;

  return { citationText, link, format };
}

async function populatePublications() {
  const container = document.getElementsByClassName("archive")[0];
  if (!container) return;

  const querySnap = await db.collection("references").get();

  querySnap.forEach(doc => {
    const data = doc.data();
    const { citationText, link, format } = buildIEEECitation(data);

    const div = document.createElement("div");
    div.className = "publication";

    // Add main citation text
    const span = document.createElement("span");
    span.textContent = citationText;
    div.appendChild(span);

    // If online, add full link as clickable text
    if (format.toLowerCase() === "online" && link) {
      const a = document.createElement("a");
      a.href = link;
      a.textContent = ` [Online]. Available: ${link}`; // full link text
      a.target = "_blank"; // open in new tab
      a.rel = "noopener noreferrer"; // security best practice
      div.appendChild(a);
    }

    container.appendChild(div);
  });
}



  populatePublications();







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

async function populatePublications() {
  const container = document.getElementsByClassName("archive")[0];
  if (!container) return;
  try {

    const querySnap = await db.collection("citations").get();
    const publicationsByYear = {};

    querySnap.forEach(doc => {
      const data = doc.data();
      const year = data.year || "Other"; 
      const text = data.formattedText;
      if (!publicationsByYear[year]) {
        publicationsByYear[year] = [];
      }
      publicationsByYear[year].push({
        text: text,
        url: data.URL || data.DOI || null
      });
    });

    // Sort years descending
    const sortedYears = Object.keys(publicationsByYear)
      .sort((a, b) => b.localeCompare(a, undefined, { numeric: true }));

    container.innerHTML = ""; 
    let title = document.createElement("h1");
    title.textContent = "Publications";
    let manager  = document.createElement("a");
    manager.textContent = "Manage Citations";
    manager.className = "citationManager;"
    manager.href = "/citationManager/index.html"
    container.appendChild(title);
    container.appendChild(manager);

    // show grouped by year
    sortedYears.forEach(year => {
      const yearHeader = document.createElement("h3");
      yearHeader.className = "publication-year";
      yearHeader.style = "margin-top: 30px; border-bottom: 2px solid #000; padding-bottom: 5px;";
      yearHeader.textContent = year;
      container.appendChild(yearHeader);

      publicationsByYear[year].forEach(pub => {
        const div = document.createElement("div");
        div.className = "publication";
        div.style = "margin-bottom: 15px; padding: 5px 0;";

        const span = document.createElement("span");
        span.textContent = pub.text; 
        div.appendChild(span);

        // Add a link button if a URL/DOI exists
        if (pub.url) {
          const link = document.createElement("a");
          link.href = pub.url.startsWith('http') ? pub.url : `https://doi.org/${pub.url}`;
          link.target = "_blank";
          link.textContent = " [View Paper]";
          link.style = "font-size: 0.9em; color: #FF0000; text-decoration: none; margin-left: 10px;";
          div.appendChild(link);
        }

        container.appendChild(div);
      });
    });
  } catch (err) {
    console.error("Error loading archive:", err);
    container.innerHTML = "Error loading publications.";
  }
}

// Initialize on page load
populatePublications();






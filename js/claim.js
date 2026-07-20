// -------------------------------
// Sample Claim Database
// -------------------------------

const claims = {

    1: {

        id: 1,

        title: "The Family Court system contains systemic flaws that can harm children.",

        summary:
        "This is a placeholder summary. Eventually this will contain the complete explanation for Claim 1.",

        supports: [

            "Support A",

            "Support B",

            "Support C"

        ],

        evidence: [

            "Court Transcript",

            "Government Report",

            "Academic Paper"

        ],

        counterarguments: [

            "Some courts operate differently.",

            "Many judges work in good faith."

        ],

        related: [2,3]

    },

    2: {

        id:2,

        title:"Placeholder Claim 2",

        summary:
        "Placeholder summary for Claim 2.",

        supports:[

            "Support A",

            "Support B"

        ],

        evidence:[

            "Source A",

            "Source B"

        ],

        counterarguments:[

            "Counterargument A"

        ],

        related:[1,3]

    },

    3:{

        id:3,

        title:"Placeholder Claim 3",

        summary:
        "Placeholder summary for Claim 3.",

        supports:[

            "Support A",

            "Support B"

        ],

        evidence:[

            "Interview",

            "Court Order"

        ],

        counterarguments:[

            "Counterargument A"

        ],

        related:[1]

    }

};

// -----------------------------------
// Read the claim number from the URL
// -----------------------------------

const params = new URLSearchParams(window.location.search);

let id = Number(params.get("id"));

if(!claims[id]){

    id = 1;

}

const claim = claims[id];

// -----------------------------------
// Fill in the page
// -----------------------------------

document.getElementById("claimNumber").textContent =
`Claim ${claim.id}`;

document.getElementById("claimTitle").textContent =
claim.title;

document.getElementById("claimSummary").textContent =
claim.summary;

// -----------------------------------
// Supports
// -----------------------------------

const supports =
document.getElementById("supports");

supports.innerHTML = "";

claim.supports.forEach(item=>{

    supports.innerHTML +=
    `<li>${item}</li>`;

});

// -----------------------------------
// Evidence
// -----------------------------------

const evidence =
document.getElementById("evidence");

evidence.innerHTML = "";

claim.evidence.forEach(item=>{

    evidence.innerHTML +=
    `<li>${item}</li>`;

});

// -----------------------------------
// Counterarguments
// -----------------------------------

const counter =
document.getElementById("counterarguments");

counter.innerHTML = "";

claim.counterarguments.forEach(item=>{

    counter.innerHTML +=
    `<li>${item}</li>`;

});

// -----------------------------------
// Related Claims
// -----------------------------------

const related =
document.getElementById("relatedClaims");

related.innerHTML = "";

claim.related.forEach(number=>{

    related.innerHTML +=
    `<li>
        <a href="claim.html?id=${number}">
            Claim ${number}
        </a>
    </li>`;

});

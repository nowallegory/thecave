const data = {
    title: "Main Conclusion",
    description: "Family Court contains systemic flaws that can harm the best interests of children.",

    claims: [

        {
            title:"Claim 1",
            description:"Placeholder claim.",
            supports:[
                "Support A",
                "Support B"
            ]
        },

        {
            title:"Claim 2",
            description:"Placeholder claim.",
            supports:[
                "Support C",
                "Support D"
            ]
        },

        {
            title:"Claim 3",
            description:"Placeholder claim.",
            supports:[
                "Support E",
                "Support F"
            ]
        }

    ]
};

const tree=document.getElementById("tree");

tree.innerHTML=`

<div class="node conclusion">

    <h2>${data.title}</h2>

    <p>${data.description}</p>

</div>

<div class="vertical-line"></div>

<div class="claims-row">

${data.claims.map(claim=>`

<div class="claim-group">

<div class="node claim">

<h3>${claim.title}</h3>

<p>${claim.description}</p>

</div>

<div class="vertical-line small"></div>

${claim.supports.map(s=>`

<div class="node support">

${s}

</div>

`).join("")}

</div>

`).join("")}

</div>

`;

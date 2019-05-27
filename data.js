let cards = [

  /*  {
         let input-cardName = document.getElementById("input-cardName");
         let input-cardDesc = document.getElementById("input-cardDesc");,

         name: input-cardName.value,
         description: input-cardDesc.value,

         if (input-cardName == NULL) {
           alert("Please input card title")
         },

         if (input-cardDesc == NULL) {
           alert("Please input description")
         }
    } */




/* Dette er den nyeste versjonen. Funksjonen addElement lager div og henter
   data fra input felt i html koden. */
    {
      document.body.onload = addElement;

      let input-cardTitle = document.getElementById("input-cardTitle");
      let input-cardDesc = document.getElementById("input-cardDesc");,

      function addElement () {
        // create a new div element
        var newDiv = document.createElement("div");
        // and give it some content
        var cardTitle = document.createTextNode(input-cardTitle.value);
        var description = document.createTextNode(input-cardDesc.value);
        newDiv.setAttribute("id", "Div1");
        // add the text node to the newly created div
        newDiv.appendChild(newContent);

        // add the newly created element and its content into the DOM
        var currentDiv = document.getElementById("div1");
        document.body.insertBefore(newDiv, currentDiv);

        if (input-cardTitle == NULL) {
          alert("Please input card title")
        },

        if (input-cardDesc == NULL) {
          alert("Please input description")
        }
   }




    },

    {
    },

    {
    },

    {
    },

    {
    },

    {
    },

    {
    },

];




let team = [
    { id: 1, name:},
    { id: 2, name:},
    { id: 3, name:},
    { id: 4, name:},
    { id: 5, name:},
];

let team = [
    { id: 1, name:},
    { id: 2, name:},
    { id: 3, name:},
    { id: 4, name:},
    { id: 5, name:},
];

let team = [
    { id: 1, name:},
    { id: 2, name:},
    { id: 3, name:},
    { id: 4, name:},
    { id: 5, name:},
];

let team = [
    { id: 1, name:},
    { id: 2, name:},
    { id: 3, name:},
    { id: 4, name:},
    { id: 5, name:},
];




let assignments = [

];

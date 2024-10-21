
// document.querySelector('button').addEventListener('click', getCharacter)

// function getCharacter(){
    
//     const word = document.querySelector('input').value
// fetch(`https://potterapi-fedeperin.vercel.app/es/characters?search=${word}`)  // you will need to figure out the right url for the chracter and when you do, you can create input in html and then add  const word = document.querySelector('input').value and then add ${word} to end of correct url
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//         const house = document.querySelector('h1').innerText = data[0].hogwartsHouse
//         document.querySelector('img').src = data[0].image


//         fetch(`https://wizard-world-api.herokuapp.com/Houses`)
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
         
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });


        
//     })
    
//     .catch(error => {
//         console.error('Error:', error);
//     });
// }

document.querySelector('#fetchData').addEventListener('click', getRandom);
    
    function getRandom () {

    fetch('https://randomuser.me/api/')          //fecthing a random user 
        .then(response => response.json())
        .then(data => {
        
            const user = data.results[0];                           //extracting user info
            const firstName = user.name.first;
            const lastName = user.name.last;
            const pictureUrl = user.picture.large;

            // Extract and format the date of birth
            let dateString = user.dob.date; // e.g., "1985-01-03T12:31:29.868Z"
            let date = new Date(dateString); // Create a Date object
            let day = String(date.getDate()).padStart(2, '0'); // Day
            let month = String(date.getMonth() + 1).padStart(2, '0'); // Month (0-indexed)
            let dobFormatted = `${month}/${day}`;

            document.querySelector('.firstname').innerText = `First Name: ${firstName}`;
            document.querySelector('.lastname').innerText = `Last Name: ${lastName}`;
            document.querySelector('.dobFormatted').innerText = `Date of Birth: ${dobFormatted}`;
            document.querySelector('.picture').src = pictureUrl;
            document.querySelector('.picture').alt = 'User Picture'; // Set alt attribute for the image

           
            return fetch(`http://numbersapi.com/${month}/${day}/date`);  //fecthing random fact using number api
        })
        .then(response => response.text()) // Use .text() to handle the plain text response
        .then(data => {
           
            console.log("Fact about the date:", data);   //displaying fact about date in the DOM
            document.querySelector('.result').innerText = `${data}`;
        })
        .catch(error => console.error('Error:', error));
};



// fetch(`URL_HERE`)
//     .then(res => res.json())
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });

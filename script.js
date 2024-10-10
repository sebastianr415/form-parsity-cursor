const submitButton = document.getElementById('submitButton');

// document.getElementById('firstName').addEventListener('input', checkNames);
// document.getElementById('lastName').addEventListener('input', checkNames);


function checkNames() {
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    if (firstName.trim() === "" && lastName.trim() === "") {
        submitButton.disabled = true;
    } else {
        submitButton.disabled = false;
    }
}
document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from refreshing the page
            
            // Get form values
        const isSubscribed = document.getElementById('isSubscribed').checked; // Checkbox value (true/false)
        const email = document.getElementById('email').value;
        const comment = document.getElementById('comment').value;
        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;

    // Create the data object to send in the POST request
    const data = {
      firstName,
      lastName,
      isSubscribed,
      email,
      comment
    };
    if(isSubscribed){
        data.email = document.getElementById('email').value;
    }
    // POST request using fetch API
    // https://jsonplaceholder.typicode.com/users
    fetch('', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data) // Convert form data to JSON string
    
    })
    .then(response => {
        if(!response.ok){
            throw new Error ('Network response was not ok')
        } return response.json()  // Parse JSON response
    })
    .then(data => {
    //   console.log('Success:', data); // Handle success (e.g., show confirmation)
    document.getElementById('result').innerHTML = `Thanks for you submission ${firstName}`;
    })
    .catch(error => {
      console.error('Error:', error); // Handle errors
    document.getElementById('result').innerHTML = `Oops something went wrong`;

    });
  });
  
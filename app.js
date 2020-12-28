// we are creating our own data but you can bring from database using API

const data = [
    {
        name: 'Tor Hammer',
        age: 43,
        gender: 'male',
        lookingfor: 'female',
        location: ' Stavanger',
        image: 'https://randomuser.me/api/portraits/men/82.jpg',
    },

    {
        name: 'Hellen John',
        age: 29,
        gender: 'female',
        lookingfor: 'male',
        location: 'Kristiansand',
        image: 'https://randomuser.me/api/portraits/women/83.jpg',
    },
    {
        name: 'Ola Nordman ',
        age: 39,
        gender: 'male',
        lookingfor: 'female',
        location: 'Oslo',
        image: 'https://randomuser.me/api/portraits/men/84.jpg',
    },
    {
        name: 'Birit Thore',
        age: 28,
        gender: 'female',
        lookingfor: 'male',
        location: 'Bergen ',
        image: 'https://randomuser.me/api/portraits/women/56.jpg',
    }
];



const profiles = profileIterator(data);

// Call first profile all over again automatically 
nextProfile();

// Next Event
document.getElementById('next').addEventListener('click', nextProfile);


// Next profile Display 
function nextProfile() {

    const currentProfile = profiles.next().value;

    if (currentProfile !== undefined) {
        document.getElementById('profileDisplay').innerHTML = `
    <ul class= "list-group">
       <li class= "list-group-item">Name: ${currentProfile.name}</li>
       <li class= "list-group-item"> Age: ${currentProfile.age}</li>
       <li class= "list-group-item">Location: ${currentProfile.location}</li>
       <li class= "list-group-item">Prefrence: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
    </ul>
    
    `;

        document.getElementById('imageDisplay').innerHTML = `<img src ="${currentProfile.image}">`;

    } else {
        // No more profile 
        window.location.reload()
    }

}


// Profile Iterator

function profileIterator(profiles) {
    let nextIndex = 0;

    return {
        next: function () {
            return nextIndex < profiles.length ?
                { value: profiles[nextIndex++], done: false } :
                { done: true }
        }
    };

}


const eventsStore = [
    {
    title: "INFJ Personality Type - Coffee Shop Meet & Greet",
    description: "Being an INFJ",
    // date: new Date(2024, 2, 23, 15),
    date: "23.02.2024 15:00",
    image:
    "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1037&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%201037w",
    type: "offline",
    attendees: 99,
    category: "Hobbies and Passions",
    distance: 50,
    },
    {
    title:
    "NYC AI Users - AI Tech Talks, Demo & Social: RAG Search and Customer Experience",
    description: "New York AI Users",
    // date: new Date(2024, 2, 23, 11, 30),
    date: '23.02.2024 11:30',
    image:
    "https://images.unsplash.com/photo-1696258686454-60082b2c33e2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "offline",
    attendees: 43,
    category: "Technology",
    distance: 25,
    },
    {
    title: "Book 40+ Appointments Per Month Using AI and Automation",
    description: "New Jersey Business Network",
    date: new Date(2024, 2, 16, 14),
    date: '16.02.2024 14:00',
    image:
    "https://images.unsplash.com/photo-1674027444485-cec3da58eef4?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "online",
    category: "Technology",
    distance: 10,
    },
    {
    title: "Dump writing group weekly meetup",
    description: "Dump writing group",
    date: new Date(2024, 2, 13, 11),
    date: '13.02.2024 11:00',
    image:
    "https://plus.unsplash.com/premium_photo-1678453146992-b80d66df9152?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "online",
    attendees: 77,
    category: "Business",
    distance: 100,
    },
    {
    title: "Over 40s, 50s, & 60s Senior Singles Chat, Meet & Dating Community",
    description: "Over 40s, 50s, 60s Singles Chat, Meet & Dating Community",
    // date: new Date(2024, 2, 14, 11),
    date: '14.02.2024 11:00',
    image:
    "https://plus.unsplash.com/premium_photo-1706005542509-a460d6efecb0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "online",
    attendees: 140,
    category: "Social Activities",
    distance: 75,
    },
    {
    title: "All Nations - Manhattan Missions Church Bible Study",
    description: "Manhattan Bible Study Meetup Group",
    // date: "Sat, Mar 23 · 3:00 PM UTC",
    date: "23.03.2024 15:00",
    image:
    "https://plus.unsplash.com/premium_photo-1679488248784-65a638a3d3fc?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "offline",
    category: "Health and Wellbeing",
    distance: 15,
    },
    ];

function cardsRendering(arr) { 
    arr.forEach(obj => {
        const card = document.createElement('div');
        card.classList.add('card');

        const cardImg = document.createElement('div');
        const img = document.createElement('img');
        cardImg.classList.add('card-img');
        img.src = obj.image;
        cardImg.appendChild(img);

        const cardDescr = document.createElement('div');
        cardDescr.classList.add('card-descr');

        const cardDate = document.createElement('p');
        cardDate.classList.add('card-date');
        cardDate.textContent = obj.date;

        const cardTitle = document.createElement('p');
        cardTitle.classList.add('card-title');
        cardTitle.textContent = obj.title;

        const cardCategory = document.createElement('p');
        cardCategory.classList.add('card-category');
        cardCategory.textContent = obj.category;

        const cardAttendees = document.createElement('p');
        if(obj.attendees) {
            cardAttendees.classList.add('card-attendees');
            cardAttendees.textContent = obj.attendees + " attendees";
        } else {
            cardAttendees.textContent = "";
        }


        cardDescr.append(cardDate, cardTitle, cardCategory, cardAttendees);
        card.append(cardImg, cardDescr);
        cardsFiltered.append(card); 
    }) 
};

const cardsFiltered = document.querySelector('.cards-filtered');

cardsRendering(eventsStore);

const currentValueDate = document.querySelector('.select-1');
const currentValueType = document.querySelector('.select-2');;
const currentValueDistance = document.querySelector('.select-3');
const currentValueCategory = document.querySelector('.select-4');
const disabledOnline = document.querySelector('.disabledOnline');
const disabledDistance = document.querySelector('.disabledDistance');

currentValueDate.addEventListener('change', () => {
    filterRender()
})
currentValueType.addEventListener('change', () => {
    filterRender()
})
currentValueDistance.addEventListener('change', () => {
    filterRender()
})
currentValueCategory.addEventListener('change', () => {
    filterRender()
})

const filterRender = () => {
    currentValueDistance.value !== "" ?  disabledOnline.disabled = true :  disabledOnline.disabled = false;
    currentValueType.value === "online" ?  disabledDistance.disabled = true :  disabledDistance.disabled = false;

    const returnArr = eventsStore.filter((value) => {
        return currentValueCategory.value ? currentValueCategory.value === value.category : true
    }).filter((value) => {
        return currentValueType.value ? currentValueType.value === value.type : true
    }).filter((value) => {
        return currentValueDistance.value ? Number(currentValueDistance.value) === value.distance : true
    }).filter((value) => {
        return currentValueDate.value ? currentValueDate.value === value.date : true
    })

    cardsFiltered.innerHTML = ''
    cardsRendering(returnArr);    
}









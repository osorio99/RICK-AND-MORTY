const url ='https://rickandmortyapi.com/api/character'

const getCharacter =  async(URL) =>{
    const response = await fetch(URL)
    const data = await response.json()
    console.log(data.results.length)

    data.results.forEach(character => {
        makeCharacter(character)
    });
}

getCharacter(url)

function makeCharacter(character) {
    
    const cards = document.createElement('div')
    cards.id = 'container'
    cards.classList.add('card')

    const imgCard = document.createElement('img')
    imgCard.classList.add('imgCard')
    imgCard.id = 'imgCard'
    imgCard.src = character.image
    imgCard.alt = character.name

    const txt_container = document.createElement('div')
    txt_container.id = 'txt_container'
    txt_container.classList.add('txt')

    const name_container = document.createElement('h2')
    name_container.id = 'name_container'
    name_container.classList.add('name')
    name_container.textContent = `Name: ${character.name}`

    const status_container = document.createElement('h3')
    status_container.id = 'status_container'
    status_container.classList.add('status')


    const specie_container = document.createElement('h4')
    specie_container.id = 'specie_container'
    specie_container.classList.add('specie')
    specie_container.textContent = character.species

    cards.appendChild(imgCard)
    cards.appendChild(txt_container)

    txt_container.appendChild(name_container)
    txt_container.appendChild(status_container)
    txt_container.appendChild(specie_container)

    container.appendChild(cards)

    switch (character.status) {
        case 'Alive':
            status_container.textContent = `🟢Status: ${character.status}`
            break

        case 'Dead':
            status_container.textContent = `🔴Status: ${character.status}`

            status_container.addEventListener('mouseenter', () => {
                status_container.style.color = 'red'
            })
            
            status_container.addEventListener('mouseleave', () => {
                status_container.style.color = ''
            })
            break
        default:
            status_container.textContent = `🟡Status: ${character.status}`

            status_container.addEventListener('mouseenter', () => {
                status_container.style.color = 'yellow'
            })
            
            status_container.addEventListener('mouseleave', () => {
                status_container.style.color = ''
            })
            break
    }

}
function makeCards() {
    characters.forEach(character => {
        createCard(character)
    })
}
makeCards()



.catch(err => console.error(err))



const loadPhone = async(phone) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${phone}`)
    const data = await res.json()
    const phones = data.data
    allPhones(phones)
   
}

loadPhone()

const allPhones = phones =>{

    const phoneContainer = document.getElementById('phoneContainer')
    phoneContainer.textContent = ''
    phones.forEach(phone => {

        console.log(phone)

        const phoneCard = document.createElement('div')
        phoneCard.classList= `card bg-gray-100 p-4 shadow-xl`
        phoneCard.innerHTML = `<figure>
                  <img
                    src="${phone.image}"
                    alt="Shoes" />
                </figure>
                <div class="card-body">
                  <h2 class="card-title">${phone.phone_name}</h2>
                  <p>If a dog chews shoes whose shoes does he choose?</p>
                  <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                  </div>
                </div>`

        phoneContainer.appendChild(phoneCard)
        
    }
)
}

const searchField = () =>{
    
    const searchValue = document.getElementById('input')
    const searchText = searchValue.value
    loadPhone(searchText)
    console.log(searchText)
}

const loadPhone = async(phone, isAllData) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${phone}`)
    const data = await res.json()
    const phones = data.data
    allPhones(phones,isAllData)
   
}


const allPhones = (phones, isAllData) =>{

    const phoneContainer = document.getElementById('phoneContainer')
    phoneContainer.textContent = ''

    const showAll = document.getElementById('show-all')
    
    if(phones.length>12 && !isAllData){
        showAll.classList.remove('hidden')
    }
    else{
        showAll.classList.add('hidden')
    }

    if(!isAllData){
        phones = phones.slice(0,12)
    }

    console.log(phones)

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
        
    })
    loadingPage(false)
}

const searchField = (isAllData) =>{

    loadingPage(true)    
    const searchValue = document.getElementById('input')
    const searchText = searchValue.value
    loadPhone(searchText, isAllData)
    console.log(searchText)
}

const loadingPage = isloading =>{
    const loader = document.getElementById('loader')
    if(isloading)
    {
        loader.classList.remove('hidden')
    }
    else
    {
        loader.classList.add('hidden')
    }
}

const showAllData = () =>{

   searchField(true)
}
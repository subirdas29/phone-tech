const loadPhone = async(phone='iphone', isAllData) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${phone}`)
    const data = await res.json()
    const phones = data.data
    allPhones(phones,isAllData)
   
}

loadPhone()

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

    // console.log(phones)

    phones.forEach(phone => {

        // console.log(phone)

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
                  <div class="card-actions justify-center">
                    <button class="btn btn-primary" onclick="showDetails('${phone.slug}')">Show Details</button>
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
    // console.log(searchText)
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

const showDetails = async(id) =>{

    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
    const data = await res.json()
    const phone = data.data
    console.log(phone)
    showPhoneDetails(phone)
}

const showPhoneDetails = (phone) =>{
    show_phone_details.showModal()

    const header = document.getElementById('header-phone')
    header.innerText= phone.name

    const phoneContainerDetails = document.getElementById('container-phone')
    phoneContainerDetails.innerHTML = `
     <img class="mx-auto" src="${phone.image}"  />
     <p class = "mt-8 mb-4">Storage: ${phone?.mainFeatures?.storage}</p>
     <p>Display Size: ${phone?.mainFeatures?.displaySize}</p>
     <p class = "my-4">Chipset: ${phone?.mainFeatures?.chipSet}</p>
     <p>Memory: ${phone?.mainFeatures?.memory}</p>
     <p class = "my-4">Slug: ${phone?.slug}</p>
     <p>Release Date: ${phone?.releaseDate}</p>
     <p class = "my-4">Brand: ${phone?.brand}</p>
     <p>GPS: ${phone?.others?.GPS || 'No GPS available'}</p>
    `
}
import { getDonors } from './services/api.js'

const divDonors = document.querySelector('.donors')
export default async function loadingDonors() {
    const response = await getDonors()
    if (response.status !== 200) {
        toastr['error']('erro ao trazer dados')
        return;
    }

    divDonors.innerHTML = 'carregando doadores...'
    const { donors = [] } = await response.json()

    divDonors.innerHTML = ''
    console.log(donors.length )
    donors.length > 0 ?  donors.map(donor => {
       
        const divDo = document.createElement('div')
        divDo.setAttribute('class', 'donor')

        const divTy = document.createElement('div')
        divTy.setAttribute('id', 'type_blood')
        divTy.innerHTML = donor.type_blood

        const divNa =  document.createElement('span')
        divNa.setAttribute('id','name_donor')
        divNa.innerHTML = donor.name_donor

        divDo.appendChild(divTy)
        divDo.appendChild(divNa)

        divDonors.appendChild(divDo)
      

    }) : divDonors.innerHTML = 'nenhum doador'

}
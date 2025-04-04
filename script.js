// >>>>>>>>>>>>> Fetching all projects from local JSON file

const fetchingData = async (container, projectType) => {
    let data = await fetch('./projects.json');
    let res = await data.json();
    // let cont = document.querySelector('.row.pure');
    // console.log('res', res)

    let cont = document.querySelector(container);
    let iHtml = '';

    // res.map((elem) => elem.project_type == projectType ? iHtml += ` <li><a target="_blank" href="${elem.url}">${elem.name}</a></li> ` : iHtml = null)
    res.map(elem => {
        if (elem.project_type == projectType) {
            iHtml += ` <li><a target="_blank" href="${elem.url}">${elem.name}</a></li> `
        }
    })

    // cont.after(iHtml);
    cont.innerHTML += iHtml;
}

// fetchingData('.row.pure', 'live')
// fetchingData('.row.react', 'react')

let callFuncArr = [
    {
        elemClass: '.row.live',
        type: 'live'
    },
    {
        elemClass: '.row.pure',
        type: 'pure'
    },
    {
        elemClass: '.row.react',
        type: 'react'
    }
]



// >>>>>>>>>>>>> calling the function multiple times at once
callFuncArr.map((elem) => fetchingData(elem.elemClass, elem.type))

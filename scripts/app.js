const inputDescElem = document.querySelector("#imgDesc");
const inputLinkElem = document.querySelector("#imgLink");
const saveBtnElem = document.querySelector("#mainBtn");
const imgWrapperElem = document.querySelector(".images__wrapper")

saveBtnElem.addEventListener('click', () => {
    if (inputLinkElem.innerText !== undefined && inputDescElem.innerText !== undefined) {
        let divImgWrapper = document.createElement('div'),
        createdImg = document.createElement('img'),
        createdDesc = document.createElement('span'),
        createDropBtn = document.createElement('button');

        divImgWrapper.setAttribute('class', "image__container")

        createdImg.setAttribute('src', inputLinkElem.value);
        createdImg.setAttribute('alt', "atl txt");
        createdImg.setAttribute('class', "image");

        createdDesc.innerText = inputDescElem.value;

        createDropBtn.innerText = "Удалить";
        createDropBtn.setAttribute('class', "dropBtn");
        createDropBtn.addEventListener('click', () => {
            imgWrapperElem.removeChild(divImgWrapper);
        })

        divImgWrapper.appendChild(createdImg);
        divImgWrapper.appendChild(createdDesc);
        divImgWrapper.appendChild(createDropBtn)
        imgWrapperElem.appendChild(divImgWrapper);
    }
}, false);


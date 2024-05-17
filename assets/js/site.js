// write cool JS hwere!!
const galleryArray = ['cat1.webp', 'cat2.jpg', 'cat3.webp', 'cat4.jpg', 'cat5.jpg', 'cat6.webp', 'cat7.jpg', 'cat8.jpg', 'cat8.jpeg', 'cat9.jpg', 'cat10.webp', 'hero.jpg']
const myGallery = document.getElementById('gallery')

const sectionBgImg = document.createElement('section')
sectionBgImg.id = ('sectionBgImg')
myGallery.appendChild(sectionBgImg)

const smallTiles = document.createElement('section')
smallTiles.id = ('tiles')
myGallery.appendChild(smallTiles)

const bgImg = document.createElement('img')
bgImg.id = ('bgImg')
bgImg.src = 'assets/img/cat1.webp'
sectionBgImg.appendChild(bgImg)

galleryArray.forEach(

    (imgName, index) => {
        if (index > 0) {
            const smallImage = document.createElement('img')
            smallImage.src = 'assets/img/' + imgName
            smallImage.classList.add('tileImage')

            smallTiles.appendChild(smallImage)

            smallImage.addEventListener('click',

                (event) => {
                    let bgImgURL = bgImg.src
                    let smallImageURL = event.target.src

                    bgImg.src = smallImageURL
                    event.target.src = bgImgURL
                })
        }
    }
)



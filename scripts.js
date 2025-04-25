const civilAircrafts = [
    'assets/avion-civil-1.jpg',
    'assets/avion-civil-2.jpg',
    'assets/avion-civil-3.jpg',
    'assets/avion-civil-4.jpg',
    'assets/avion-civil-5.jpg'
];

const militaryAircrafts = [
    'assets/avion-militar-1.jpg',
    'assets/avion-militar-2.jpg',
    'assets/avion-militar-3.jpg',
    'assets/avion-militar-4.jpg',
    'assets/avion-militar-5.jpg'
];

const civilHelicopters = [
    'assets/helicoptero-civil-1.jpg',
    'assets/helicoptero-civil-2.jpg',
    'assets/helicoptero-civil-3.jpg',
    'assets/helicoptero-civil-4.jpg',
    'assets/helicoptero-civil-5.jpg'
];

const militaryHelicopters = [
    'assets/helicoptero-militar-1.jpg',
    'assets/helicoptero-militar-2.jpg',
    'assets/helicoptero-militar-3.jpg',
    'assets/helicoptero-militar-4.jpg',
    'assets/helicoptero-militar-5.jpg'
];

class Gallery {
    constructor(civilImages, militaryImages) {
        this.civilImages = civilImages;
        this.militaryImages = militaryImages;
    }
    
    getRandomCivil() {
        const randomIndex =  Math.floor(Math.random() * this.civilImages.length);
        return this.civilImages[randomIndex];
    }
    
    getRandomMilitary() {
        const randomIndex = Math.floor(Math.random() * this.militaryImages.length);
        return this.militaryImages[randomIndex]
    }
    
    getAll() {
        const allImages = [...this.civilImages, ...this.militaryImages];
        return allImages; 
    }
}

class Painter {
    constructor() {
        this.createGallery();
      
    }

    createGallery() {
        const section = document.createElement("section");
        document.body.appendChild(section);
        this.gallery = section; 
    }

    createImageTag(imageUrl) {
        const pictureTag = document.createElement("picture");
        const img = document.createElement("img");
        img.setAttribute("src",imageUrl);
        pictureTag.appendChild(img);
        return pictureTag;  
    }


    paintSingleImage(imageUrl) {
        const imagenElement = this.createImageTag(imageUrl);
        this.gallery.appendChild(imagenElement);

    }

    paintMultipleImages(arrayOfImages) {
        arrayOfImages.forEach((imageUrl) => {
            const tag = this.createImageTag(imageUrl);
            this.gallery.appendChild(tag)

        });

    }
}

const aircrafts = new Gallery(civilAircrafts, militaryAircrafts);
const helicopters = new Gallery(civilHelicopters, militaryHelicopters);
const painter = new Painter();



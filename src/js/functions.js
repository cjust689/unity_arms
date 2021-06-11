export const randomImage = (imageType = '') => {
    let imageArray = '';
    const imageArraySafety = ['1.jpg', '2.jpg', '3.png', '5.jpg', '12.jpg', '13.jpg', '14.jpg', '22.jpg', '30.jpg'];
    const imageArrayPistol = ['1.jpg', '2.jpg', '3.png', '4.png', '5.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg', '26.jpg', '15.jpg', '27.jpg'];
    const imageArrayRifle = ['2.jpg', '3.jpg', '4.png', '5.png', '6.png', '7.png', '8.jpg', '9.jpg', '10.jpg', '12.jpg', '13.jpg', '14.jpg', '28.jpg', '29.jpg', '30.jpg'];
    const imageArrayMedical = ['1.jpg', '2.jpg', '3.jpg', '5.jpg', '12.jpg', '13.jpg', '14.jpg'];
    const imageArrayDefault = ['1.png', '2.png', '3.png', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.png', '11.png', '12.jpg', '13.png', '14.jpg', '15.jpg'];
    const imageArrayPistolTraining = ['4.png', '2.png', '3.png', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.png', '11.png', '12.jpg', '13.png', '14.jpg', '15.jpg'];

    let imgTitle = '';

    switch (imageType) {
        case 'safety':
            imageArray = imageArraySafety;
            break;
        case 'medical':
            imageArray = imageArrayMedical;
            break;
        case 'rifle':
            imageArray = imageArrayRifle;
            break;
        case 'pistol':
            imageArray = imageArrayPistol;
            break;
        case 'home':
            imageArray = imageArrayDefault;
            break;
        case 'pistolTrainning':
            imageType = 'pistol';
            imageArray = imageArrayPistolTraining;
            break;
        default:
            imageArray = imageArrayDefault;
            break;
    }


    const random = getRandom(imageArray);
    const imgURL = imgTitle + '<img src="/img/' + imageType + '/' + imageArray[random] + '">';
    return imgURL;
}



export const getRandom = (inputArray) => {
    const random = Math.floor(Math.random() * inputArray.length);
    return random;
}


export const randomQuote = () => {
    const quoteArray = [
        '"To be radical is to grasp things by the root" - Marx',
        '"time and again, guns have proven pivotal to the African American quest for freedom" - Charles E Cobb',
        '"UBI CONCORDIA, IBI VICTORIA" - Syrus',
        //'"The evils of capitalism are as real as the evils of militarism and evils of racism." - Dr. Martin Luther King Jr,',
        //'"I am convinced there is only one way to eliminate these grave evils, namely through the establishment of a socialist economy, accompanied by an educational system which would be oriented toward social goals." - Albert Einstein'
    ]
    const random = getRandom(quoteArray);
    const quote = quoteArray[random];
    return quote;
}




// functions for views Training Pages



export const nextTutorial = (i, text) => {
    i++;
    if (i < Object.keys(text).length) {

        text = text[i];
        return {
            text,
            i
        }
    }
    i--;
    text = text[i]
    return {
        text,
        i
    }
}



export const previousTutorial = (i, text) => {
    if (i > 0) {
        i--;
        text = text[i];

        return {
            text,
            i
        }
    }
    text = text[i]
    return {
        text,
        i
    }
}


export const updatePageNumber = (i, text) => {

    let pageNo = i;
    let newValue = 'Page ' + pageNo + '/' + Object.keys(text).length
    return {
        newValue,
        i
    };
}

export const randomImage = () => {
    const imageArray = ['1.png', '2.png', '3.png', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.png', '11.png', '12.jpg', '13.png', '14.jpg', '15.jpg']
    const random = getRandom(imageArray);
    const imgURL = '<img src="./img/' + imageArray[random] + '">';
    return imgURL;
}



export const getRandom = (inputArray) => {
    const random = Math.floor(Math.random() * inputArray.length);
    return random;
}


export const randomQuote = () => {
    const quoteArray = ['"To be radical is to grasp things by the root" - Marx', '"UBI CONCORDIA, IBI VICTORIA" - Syrus', '"The evils of capitalism are as real as the evils of militarism and evils of racism." - Dr. Martin Luther King Jr,', '"I am convinced there is only one way to eliminate these grave evils, namely through the establishment of a socialist economy, accompanied by an educational system which would be oriented toward social goals." - Albert Einstein']
    const random = getRandom(quoteArray);
    const quote = quoteArray[random];
    return quote;
}
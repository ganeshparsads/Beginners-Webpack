// import big from '../assets/big.jpeg';
import small from '../assets/small.jpeg';
import '../styles/imageviewer.css';

export default() => {
    const image = document.createElement('img');
    // image.src = 'https://picsum.photos/400/400';
    image.src = small;

    document.body.appendChild(image);
}

// const big_image = document.createElement('img');
// // image.src = 'https://picsum.photos/400/400';
// big_image.src = big;

// document.body.appendChild(big_image);

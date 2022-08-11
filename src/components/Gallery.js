import Masonry from 'react-masonry-css'

function importAll(r) {
	let images = [];
    r.keys().forEach(item => { images.push(r(item)); });
	return images
}

const images = importAll(require.context('../images/gallery', false, /\.jpg$/));

const Gallery = () => {
    return (
        <Masonry
            breakpointCols={{
                480: 1,
                600: 2,
                1024: 3,
                default: 4
            }}
            className="gallery"
            columnClassName="galleryCol"
        >
            { images.map((image, index) => <img key={index} src={image} />)}
        </Masonry>
    )
}

export default Gallery
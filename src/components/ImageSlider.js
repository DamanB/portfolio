import '../styles/imageslider.css'
import { useState } from "react";

const ImageSlider = ({ images }) => {

    const [slideIndex, setSlideIndex] = useState(0)

    const cntrlButtonClicked = (increment) => {
        setSlideIndex(slideIndex + increment);
    }

    return (
        <div className="image-slider">
            <div className="slider-image-container">
                <img src={images[slideIndex]} loading="lazy" alt="A preview of the project" />
            </div>
            <div className="slider-controller">
                <button className="cntrl-button" disabled={slideIndex == 0} onClick={() => {
                    cntrlButtonClicked(-1)
                }}>
                    <span className="material-icons-round">chevron_left</span>
                </button>

                <span>{`Slide ${slideIndex + 1} of ${images.length}`}</span>

                <button className="cntrl-button" disabled={slideIndex == images.length - 1} onClick={() => {
                    cntrlButtonClicked(+1)
                }}>
                    <span className="material-icons-round">chevron_right</span>
                </button>
            </div>
        </div>);
}

export default ImageSlider;
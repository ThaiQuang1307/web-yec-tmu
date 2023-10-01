import { Carousel } from "antd";
import "./Slider.scss"

function Slider(props) {
    const { arrImages } = props

    const contentStyle = {
        margin: 0,
        padding: 0,
        // height: '48rem',
        width: '100%',
        aspectRatio: '3 / 2',
        objectFit: 'cover',
        borderRadius: '5px'
    };

    return (
        <>
            <div className="home__slider">

                {arrImages.length > 0 &&
                    <Carousel dots={{ className: 'custom-dots' }}>
                        {arrImages.map((image, index) => (
                            <div key={index}>
                                <img src={image} alt={`slide${index}`} style={contentStyle} />
                            </div>
                        ))}
                    </Carousel>
                }

            </div>
        </>
    )
}

export default Slider

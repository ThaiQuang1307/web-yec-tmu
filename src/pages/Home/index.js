import Slider from "../../components/Slider"
import img_le_ra_mat_1 from "../../images/le-ra-mat-1.png"
import img_le_ra_mat_2 from "../../images/le-ra-mat-2.png"
import img_camping from "../../images/camping.png"

function Home() {
    return (
        <>
            <Slider arrImages={[img_le_ra_mat_1, img_le_ra_mat_2, img_camping]} />
        </>
    )
}

export default Home
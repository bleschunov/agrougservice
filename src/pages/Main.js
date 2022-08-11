import Advantages from "../components/Advantages"
import BigTitle from "../components/BigTitle"
import Gallery from "../components/Gallery"
import Hero from "../components/Hero"
// import Management from "../components/Management"
import News from "../components/News"
import Numbers from "../components/Numbers"
import Slider from "../components/Slider"

const Main = () => {
    return (
        <>
            <Hero />
            <BigTitle>Новости</BigTitle>
            <News />
            <BigTitle>О нашей компании</BigTitle>
            <Slider />
            <Numbers />
            <Advantages />
            {/* <BigTitle>Руководство</BigTitle> */}
            {/* <Management /> */}
            <BigTitle>Галерея</BigTitle>
            <Gallery />
        </>
    )
}

export default Main
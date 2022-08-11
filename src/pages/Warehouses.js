import BigTitle from "../components/BigTitle"
import Bubble from "../components/Bubble"
import Container from "../components/Container"
import Map from "../components/Map"
import WarehouseClasses from "../components/WarehouseClasses"
import Wrapper from "../components/Wrapper"


const Warehouses = () => {
    return (
       <>
            <BigTitle>Адрес комплекса</BigTitle> 
            <Container>
                <Wrapper>
                    {/* <Map className="mb-6" id="map" coords={[45.063757, 38.892318]} /> */}
                    <Bubble>350039, г. Краснодар, проезд Мирный, 12/1</Bubble>
                </Wrapper>
            </Container>
            <BigTitle>наши склады</BigTitle> 
            <WarehouseClasses />
                

       </>
    )
}

export default Warehouses
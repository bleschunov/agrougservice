import classNames from "classnames"
import BigTitle from "../components/BigTitle"
import Bubble from "../components/Bubble"
import Container from "../components/Container"
import Map from "../components/Map"
import Wrapper from "../components/Wrapper"

const Title = ({ children, className }) => {
    return <h3 className={classNames(className, 'font-semibold text-2xl lg:text-4xl')}>{children}</h3>
}

const Contacts = () => {
    return (
        <div className="grow">
            <BigTitle>Контакты</BigTitle>
            <Container>
                <Wrapper>
                    <div className="flex flex-col lg:flex-row gap-y-8 gap-x-8">
                        <div className="lg:w-1/3 flex flex-col gap-8">
                            <div className="flex flex-col items-start gap-4">
                                <Title>Приёмная</Title>
                                <a href="tel:+7-861-228-18-76"><Bubble>+7-861-228-18-76</Bubble></a>
                                <a href="tel:+7-861-228-18-82"><Bubble>+7-861-228-18-82</Bubble></a>
                                <a href="tel:+7-861-228-18-95"><Bubble>+7-861-228-18-95</Bubble></a>
                            </div>

                            <div>
                                <Title className="mb-6">Почта компании</Title>
                                <a href="mailto:pnh-les@mail.ru"><Bubble>pnh-les@mail.ru</Bubble></a>
                            </div>

                           <div> 
                                <Title className="mb-6">Генеральный директор</Title>
                                <a href="tel:+7-928-208-60-37">
                                    <Bubble>Каминский Дмитрий 
                                    Иосифович<br />
                                    +7-928-208-60-37
                                    </Bubble>
                                </a>
                            </div>
                        </div>

                        <div className="lg:w-2/3 flex flex-col gap-8">
                            <div>
                                <Title className="mb-6">Адрес складов</Title>
                                {/* <Map className="mb-6" id="map" coords={[45.063757, 38.892318]} /> */}
                               
                                <Bubble>350039, г. Краснодар, проезд Мирный, 12/1</Bubble>
                            </div>

                            
                            <div className="flex flex-col items-start gap-4">
                                <Title>Юридическая информация</Title>
                                <Bubble>ООО «Рентасервис Юг»</Bubble>
                                <Bubble>ИНН 2311182244</Bubble>
                                <Bubble>КПП 231101001</Bubble>
                            </div>

                        </div>
                    </div>
                </Wrapper>
            </Container>
        </div>
    )
}

export default Contacts
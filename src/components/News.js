import Container from "./Container"
import Bubble from "./Bubble"
import Wrapper from "./Wrapper"

import image from '../images/news.jpg'
import clock from '../images/clock.svg'

const News = () => {
    return (
        <section className="bg-primary sm:bg-none">
            <Container>
                <Wrapper>
                    <div className="flex flex-col sm:flex-row gap-6 sm:p-8 rounded-3xl sm:bg-primary">
                        <div className="sm:w-2/5">
                            <img className="w-full h-full object-cover rounded-3xl" src={image} />
                        </div>
                        <div className="flex flex-col gap-6 sm:w-3/5">
                            <div className="text-sm sm:text-lg font-medium pl-4 md:pl-6">
                                <img src={clock} className="w-5 h-5 inline-block mr-1 align-middle" />
                                01.08.2022
                            </div>
                            <Bubble>
                                1 августа 2022 года наша компания ввела к эксплуатацию новое складское помещение площадью 830 м². Объект оборудован внутренней и внешней площадкой для грузового транспорта, а также имеет близкое расположение к железнодорожным путям.
                            </Bubble>
                        </div>
                    </div>
                </Wrapper>
            </Container>
        </section>
    )
}

export default News
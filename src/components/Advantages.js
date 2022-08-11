import Container from './Container'
import Wrapper from './Wrapper'

import security from '../images/security.jpg'
import tree from '../images/tree.jpg'
import train from '../images/train.jpg'
import classNames from 'classnames'

const Advantage = ({className, image, title, text}) => {
    return (
        <article className={classNames(className, 'flex flex-col md:flex-row md:gap-4 items-center')}>
            <div className="h-64 md:w-64 md:shrink-0"><img className="w-full h-full object-contain" src={image} /></div>
            <div>
                <h3 className="font-semibold text-2xl md:text-2xl lg:text-3xl lg:mb-4">{title}</h3>
                <p className="text-xl md:text-2xl lg:text-3xl">{text}</p>
            </div>
        </article>
    )
}

const Advantages = () => {
    return (
        <section>
            <Container>
                <Wrapper>
                    <Advantage
                        className="mb-8" 
                        image={train}
                        title="Возможности"
                        text="Компания имеет в собственности железнодорожный путь. Это открывает дополнительные возможности для клиентов, которые захотят запустить производство на нашей территории."
                    />
                    <Advantage 
                        className="mb-8" 
                        image={security}
                        title="Безопасность"
                        text="Мы ответственно относимся к безопасности наших объектов. На территории имеется охрана, а по периметру установлены камеры видеонаблюдения."
                    />
                    <Advantage 
                        image={tree}
                        title="Постоянство"
                        text="Компания существует 28 лет. Наш опыт позволяет бесперебойно оказывать высококлассный сервис клиентам компании."
                    />
                </Wrapper>
            </Container>
        </section>
    )
}

export default Advantages
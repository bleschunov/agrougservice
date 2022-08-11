import Bubble from './Bubble'
import Container from './Container'
import Wrapper from './Wrapper'
import classNames from 'classnames'

import { useState } from 'react'

import imageClassA from '../images/A.webp'
import imageClassB from '../images/B.webp'
import imageClassC from '../images/C.webp'
import imageClassD from '../images/D.webp'
import arrow from '../images/arrow.svg'

const classA = `
    колонны отсутствуют или расположены с шагом около 9-12 м;
    высота потолка примерно 12 м для размещения минимум 6 ярусов стеллажей;
    бетонный пол с дополнительным противопылевым покрытием, рассчитанный на
    нагрузку не меньше 5 т/м2 на высоте 1,2 м;
    отопление и регулировка температуры – обязательные требования к складу класса
    "А";
    пожарная сигнализация, автоматические вентиляция и тушение возгораний;
    круглосуточная охрана, камеры наблюдения, сигнализация;
    автономная котельная и электрическая подстанция;
    наличие доковых ворот в количестве 1 на каждые 500 м2 с площадками
    (регулируются по высоте) для погрузочных-разгрузочных работ;
    площадки для транспорта легкового и грузового типа;
    логистические склады класса "А" имеют площадки для разворота
    крупнотоннажного транспорта;
    присутствует система контроля и управления доступом (СКУД);
    охраняемая территория огорожена, благоустроена и обеспечена освещением
    (застройка 40-55%);
    присутствуют помещения для работников, услуга аренды офиса;
    обеспечены
    оптоволоконные
    коммуникации,
    система
    управления
    профессионального уровня
`

const classB = `
    отсутствуют требования по расположению колонн;
    высота потолка не менее 8 метров (допускается 6 метров);
    количество доковых ворот составляет 1 на 1000 м2;
    заасфальтированный или забетонированный пол;
    систему отопления, пожарных датчиков и экстренного тушения;
    наличие дополнительных помещений;
    разгрузочно-погрузочные пандусы;
    территорию для разворота и отстоя крупнотоннажных авто;
    охрану, сигнализацию и видеонаблюдение;
    телекоммуникации
`


const WarehouseClass = ({ image, title, text, points, rb, rt }) => {
    const [open, setOpen] = useState(false)

    return (
            <>
                <article className="bg-primary lg:hidden">
                    <Container>
                        <Wrapper>
                            <div className="h-72 w-full">
                                <img className="w-full h-full object-cover rounded-3xl" src={image} />
                            </div>
                        </Wrapper>
                    </Container>
                    <div className="bg-secondary rounded-3xl">
                        <Container>
                            <Wrapper>
                                <h3 className="font-semibold text-3xl mb-5">{title}</h3>
                                { text.map((text, index) => <div key={index}><p className="font-semibold text-xl text-gray-600">{text}</p><br /><br /></div>)}
                                { points && (
                                    <button 
                                        className="pl-6 pr-2 py-2 bg-primary rounded-3xl flex gap-4 items-center font-semibold mb-6"
                                        onClick={() => setOpen(!open)}
                                    >
                                        Характеристики
                                        <div className={classNames('rounded-full bg-gray-600 w-8 aspect-square grid place-items-center transition-transform duration-300', { 'rotate-180': !open })}>
                                            <img src={arrow} />
                                        </div>
                                    </button>
                                )}
                                { points && open && points.split(';').map((point, index) => <Bubble key={index} className="mb-6 last:mb-0">{point};</Bubble>) }
                            </Wrapper>
                        </Container>
                    </div>
                </article>

                <article className="hidden lg:flex lg:group">
                    <div className={classNames("w-1/3 bg-primary test2 text-right p-8", {'rounded-br-3xl': rb, 'rounded-tr-3xl': rt})}>
                        <div className="sticky aspect-square top-16 max-w-[424px] ml-auto">
                            <img className="w-full h-full object-cover rounded-3xl" src={image} />
                        </div>
                    </div>
                    <div className="w-2/3 test3 p-8">
                        <h3 className="font-semibold text-4xl mb-5">{title}</h3>
                        { text.map((text, index) => <div key={index}><p className="font-semibold text-2xl text-gray-600">{text}</p><br /><br /></div>)}
                        <div className="flex flex-col gap-6 items-start">
                            { points && points.split(';').map((point, index) => <Bubble key={index}>{point};</Bubble>) }
                        </div>
                    </div>
                </article>
            </>
    )
}

const WarehouseClasses = () => {
    return (
        <section className="bg-primary lg:bg-white">
            <>
                <div>
                    <Wrapper>
                        <WarehouseClass
                            rt={true}
                            image={imageClassA}
                            title="Класс А"
                            text={['Это современные складские объекты, оснащенные высокотехнологичными средствами безопасности и связи. В строительстве объекта используются современные прочные и безопасные материалы.', 'К требованиям может относиться наличие линии железнодорожных путей непосредственно около территории. С соответствующим крановым хозяйством для разгрузки / погрузки.']}
                            points={classA}
                        /> 
                        <WarehouseClass 
                            image={imageClassB}
                            title="Класс B"
                            text={['Промышленное одно- или двух- этажное здание после реконструкции. При наличии второго уровня необходимы подъемники, выдерживающие не меньше 3 т.', 'В данной категории складов к дополнительным, но необязательным параметрам относятся: СКУД, тепловая и электрическая подстанция, ветка ж/д путей.']}
                            points={classB}
                        /> 
                        <WarehouseClass 
                            image={imageClassC}
                            title="Класс C"
                            text={['Речь идет о капитальных производственных помещениях с высотой потолка от 4 метров. Поверхность пола не имеет специального покрытия. Характерная особенность – транспорт загружается и разгружается внутри объекта. Чаще всего помещение не имеет специальной внешней площадки для этих целей.']}
                        /> 
                        <WarehouseClass
                            rb={true}
                            image={imageClassD}
                            title="Класс D"
                            text={['Склады классов D и C заметно уступают в функциональности и оснащенности двум первым вариантам. Особенно помещения класса D. Они представляют собой неотапливаемое строение без каких-либо современных систем. Подходят исключительно для продукции с минимальными требованиями к условиям окружающей среды.']}
                        /> 
                    </Wrapper>
                </div>
            </>
        </section>
    )
}

export default WarehouseClasses
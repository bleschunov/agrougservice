import classNames from 'classnames'
import businessman from '../images/thumbnail.jpg'

import Wrapper from './Wrapper'

const Management = ({ className }) => {
    return (
        <section className={classNames(className)}>
            <Wrapper>
            <div className="w-full mx-auto px-4 md:pr-0 lg:pl-20 3xl:pl-[calc(100vw - 10px)] flex flex-col md:flex-row test">
                <div className="aspect-[3/4] w-full max-w-xs lg:max-w-md mb-4 md:mb-0">
                    <img className="w-full h-full object-cover rounded-3xl" src={businessman} />
                </div>
                

                <div className="md:hidden">
                    <div className="text-2xl font-medium">Генеральный директор</div>
                    <div className="text-2xl font-semibold mb-4">Каминский Дмитрий Иосифович</div>
                    <div className="text-2xl font-medium">Телефон</div>
                    <div className="text-2xl font-semibold">+7-928-208-60-37</div>
                </div>

                <div className="grow flex items-end pb-20">
                    <div className="hidden md:block h-[300px] w-full bg-secondary pt-8 pl-20 md:pl-10">
                        <div className="text-3xl font-medium">Генеральный директор</div>
                        <div className="text-4xl font-semibold mb-8">Каминский Дмитрий Иосифович</div>
                        <div className="text-3xl font-medium">Телефон</div>
                        <div className="text-4xl font-semibold">+7-928-208-60-37</div>
                    </div>     
                </div>  
            </div>
            </Wrapper>
        </section>
    )
}

export default Management
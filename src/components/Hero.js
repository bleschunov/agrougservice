import Container from "./Container"
import Truck from "./Truck"

import classNames from "classnames"

const Hero = (className) => {
    return (
        <section className={classNames(className)}>
            <Container>
                <div className="pb-8 sm:pb-10 md:pb-12 lg:pb-14">
                    <div className="bg-primary rounded-3xl overflow-hidden relative h-[540px] flex md:h-auto md:block -z-20">
                        <div className="w-full min-w-[779px] absolute -right-20 top-5 -z-10 sm:right-5 md:mt-10 md:relative text-right"><Truck /></div>
                        <div className="p-6 bg-white inline-block rounded-3xl mx-4 mb-4 md:mx-10 md:mb-12 self-end">
                            <h1 className="text-3xl sm:text-5xl md:text-7xl font-semibold mb-6">Склады в Краснодаре</h1>
                            <div className="text-3xl sm:text-4xl md:text-6xl font-medium">28 лет помогаем бизнесу</div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Hero
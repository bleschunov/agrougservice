import classNames from "classnames"
import Container from "./Container"

const Numbers = ({ className }) => {
    return (
        <section className={classNames(className, 'bg-secondary py-16')}>
            <Container>
                <div className="flex flex-wrap justify-center gap-x-32 gap-y-12">
                    <div className="text-center">
                        <div className="text-2xl font-semibold mb-4 text-gray-600">Площадь наших складов более</div>
                        <div className="text-5xl font-semibold">20 000 м²</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-semibold mb-4 text-gray-600">На рынке с</div>
                        <div className="text-5xl font-semibold">1998 года</div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Numbers
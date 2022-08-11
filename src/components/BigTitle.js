import classNames from "classnames"
import Container from "./Container"

const BigTitle = ({ children, className }) => {
    return (
        <section className={classNames(className, 'pt-8 pb-4 md:pt-16')}>
            <Container>
                <h2 className="uppercase text-4xl md:text-5xl text-center font-medium">{children}</h2>
            </Container>
        </section>
    )
}

export default BigTitle
import { Link } from "react-router-dom"
import classNames from "classnames"

import Container from "./Container"

const Footer = (className) => {
    return (
        <footer className={classNames(className, 'bg-secondary pb-4 md:pb-8 pt-8')}>
            <Container>
                <div className="flex justify-between">
                    <div>
                        <nav className="mb-8 md:mb-4">
                            <ul className="flex flex-col gap-3 md:flex-row md:gap-16">
                                <li><Link to="/" onClick={() => window.document.scrollTo(0, 0)}>О компании</Link></li>
                                <li><Link to="/warehouses" onClick={() => window.document.scrollTo(0, 0)}>Наши склады</Link></li>
                                <li><Link to="/contacts" onClick={() => window.document.scrollTo(0, 0)}>Контакты</Link></li>
                            </ul>
                        </nav>
                        <ul className="flex flex-col gap-4 text-xl md:hidden mb-8">
                            <li className=""><a href="tel:+7-861-228-18-76">+7-861-228-18-76</a></li>
                            <li className=""><a href="tel:+7-861-228-18-82">+7-861-228-18-82</a></li>
                            <li><a href="tel:+7-861-228-18-95">+7-861-228-18-95</a></li>
                        </ul>
                        <a className="text-xs text-gray-600" href="http://bleschunov.ru">Created by bleschunov</a>
                    </div>
                    <a className="text-3xl hidden md:block" href="tel:+7-861-228-18-76">+7-861-228-18-76</a>
                </div>
            </Container>
        </footer>
    )
}

export default Footer
import { Link, NavLink } from "react-router-dom"
import { useState } from "react"

import Container from "./Container"

import logo from '../images/logo.svg'
import burger from '../images/burger.svg'
import cross from '../images/cross.svg'
import classNames from "classnames"
import { AnimatePresence, motion } from "framer-motion"

const Menu = ({ setOpen }) => {
    return (
        <motion.div 
            initial={{ height: 0 }}
            animate={{ height: 180 }}
            exit={{ height: 0 }}
            transition={{ duration: .3 }}
            className="bg-secondary md:hidden relative"
        >
            <Container>
                <motion.nav 
                    initial={{ y: -180 }}
                    animate={{ y: 0 }}
                    exit={{ y: -180 }}
                    transition={{ duration: .3 }}
                    className="py-4"
                >
                    <ul className="mb-4 text-xl">
                        <li className="mb-2"><NavLink onClick={() => setOpen(false)} to="/" className={({ isActive }) => isActive && 'text-gray-600'}>О компании</NavLink></li>
                        <li className="mb-2"><NavLink onClick={() => setOpen(false)} to="/warehouses" className={({ isActive }) => isActive && 'text-gray-600'}>Наши склады</NavLink></li>
                        <li><NavLink onClick={() => setOpen(false)} to="/contacts" className={({ isActive }) => isActive && 'text-gray-600'}>Контакты</NavLink></li>
                    </ul>
                    <a className="text-2xl font-medium" href="tel:+7-861-228-18-76">+7-861-228-18-76</a>
                </motion.nav>
            </Container>
        </motion.div>
    )
}

const Header = ({ className }) => {
    const [open, setOpen] = useState(false)
    
    return (
        <header className={classNames(className, 'md:py-8')}>
            <Container className="z-10 relative bg-white">
                <div className="flex justify-between py-4">
                    <img src={logo} />
                    <nav className="hidden md:block">
                        <ul className="flex gap-11 lg:gap-16 text-lg">
                            <li className="mb-2"><NavLink to="/" className={({ isActive }) => isActive && 'text-gray-600'}>О компании</NavLink></li>
                            <li className="mb-2"><NavLink to="/warehouses" className={({ isActive }) => isActive && 'text-gray-600'}>Наши склады</NavLink></li>
                            <li><NavLink to="/contacts" className={({ isActive }) => isActive && 'text-gray-600'}>Контакты</NavLink></li>
                        </ul>
                    </nav>
                    <a className="hidden md:block text-2xl lg:text-3xl" href="tel:+7-861-228-18-76">+7-861-228-18-76</a>
                    <img 
                        className="md:hidden"
                        onClick={() => setOpen(!open)}
                        src={open ? cross : burger} 
                    />
                </div>
            </Container>
            <AnimatePresence>
                { open && <Menu setOpen={setOpen} /> }
            </AnimatePresence>
        </header>
    )
}

export default Header
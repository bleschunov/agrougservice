import classNames from "classnames"

const Bubble = ({ children, className }) => {
    return (
        <div className={classNames(className, 'p-4 md:p-6 md:text-xl shadow-md rounded-2xl md:rounded-3xl bg-white inline-block')}>
            {children}
        </div>
    )
}

export default Bubble
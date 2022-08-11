import classNames from "classnames"

const Container = ({ className, children }) => {
    return (
        <div className={classNames(className, 'max-w-[1760px] mx-auto px-4 lg:px-20 w-full')}>
            {children}
        </div>
    )
}

export default Container
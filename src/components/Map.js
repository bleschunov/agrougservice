import classNames from "classnames"
import { useEffect } from "react"


const Map = ({id, coords, className}) => {

    useEffect(() => {
        window.ymaps.ready(() => {
            const map = new window.ymaps.Map(id, {
                center: coords,
                zoom: 18
            })

            map.geoObjects.add(new window.ymaps.Placemark(coords));
        })
    }, [])

    return (
        <div id={id} className={classNames(className, 'h-80 w-full')}>
        </div>
    )
}

export default Map
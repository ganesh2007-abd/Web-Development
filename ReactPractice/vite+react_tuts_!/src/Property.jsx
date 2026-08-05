import PropertyList from "./PropertyList"
import './Property.css'

export default function Property({ properties }) {

    return (
        <div className="Property">
            {properties.map(p => (
                <PropertyList {...p} key={p.id} />
            ))}

        </div>
    )
}
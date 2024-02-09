

export function Breadcrumbs({ items }) {

    return (
        <div>
            <ul>
                {items.map((item, index) => {
                    return (
                        <li key={index}>
                            {item}
                            {index !== items.length - 1 && <span> &gt; </span>} 
                            ⁡⁢⁣⁣{/*​‌‍‌ Efter hvert item tjekker denne ternære operation, om det aktuelle element er det sidste i listen. Hvis ikke, tilføjer den en separator  (>),​ */}⁡
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

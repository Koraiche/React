function ShoppingList() {
    const plantList = [
        'monstera',
        'ficus lyrata',
        'pothos argenté',
        'yucca',
        'palmier'
    ]
    return (
        <ul>
            {plantList.map((plant, index) => (
                <div key={index}>
                <li key={`${plant}-${index}`}>{ plant }</li>
                <li key={plant + "_" + index}>{ plant + "---"  }</li>
                    {
                        console.log(typeof(`${plant}-${index}`)) // string
                    }
                </div>
            ))}
        </ul>
    )
}

export default ShoppingList
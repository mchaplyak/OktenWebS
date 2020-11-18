import {useState} from "react";

export function Dropdown ({items}) {

    const [dropDownIsOpen, setIsOpen] = useState(false)
    const [selectedOption, setOption] = useState('')

    const toggleDropdown = () => {
        setIsOpen((prevState => !prevState))
    }

    // замінити кнопку на щось краще
    // робити фетч данних (юзерів(?)) - через сервіс організувати

    return (
        <div>
            <button onClick={toggleDropdown}>{selectedOption || 'Open'}</button>

            {!!dropDownIsOpen && (<div>
                {items.map(el =>
                    <h3 class='option'
                        key={el}
                        onClick={() => setOption(el)}>
                        {el}
                    </h3>
                )}
            </div>)}
        </div>
    )

}
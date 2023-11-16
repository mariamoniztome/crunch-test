/**
 * A React functional component that renders a button with the class names 'btn', 'btn-primary',
 * and 'btn-primary--bet'. The button displays the text "Participar".
 * @returns The rendered button component.
 */
import './button.scss'

const Button = () => {
    return (
        <button className='btn btn-primary btn-primary--bet'>
            Participar
        </button>
    )
}

export default Button

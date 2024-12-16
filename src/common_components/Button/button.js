import './button.css'
const Button = (props) => {
    const { className, type, children, handleClick } = props
    return (
        <button
            className={className}
            type={type}
            onClick={handleClick}
            children={children}
        />
    )
}
export default Button;

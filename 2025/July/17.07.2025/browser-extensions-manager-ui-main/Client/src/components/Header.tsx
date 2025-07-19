import Logo from '../assets/images/logo.svg'

// compo
import ThemeSwitcher from './ThemeSwitcher'
export default function Header () {
    return (
        <div className="bg-[hsl(var(--header-bg))] text-white p-3 rounded-xl flex justify-between items-center">
            <img src={Logo} alt="" />
            <ThemeSwitcher />
        </div>
    )
}
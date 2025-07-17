import SunIcon from '../assets/images/icon-sun.svg'
// import MoonIcon from '../assets/images/icon-moon.svg'


export default function ThemeSwitcher() {
    return (
        <button className='w-[40px] h-[40px] flex items-center justify-center bg-[hsl(var(--neutral-600))] rounded-xl'>
            <img src={SunIcon} alt="" />
        </button>
    )
}
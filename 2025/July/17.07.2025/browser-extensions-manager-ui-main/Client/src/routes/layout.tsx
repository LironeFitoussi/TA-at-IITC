import { useAuth } from '../contexts/AuthContext'
import AuthPage from './AuthPage'
import ExtensionPage from './ExtensionPage'

export default function Layout() {
    const { user } = useAuth()

    return (
        <div className="min-w-screen min-h-screen main-style-dark" >
            { !user.id ? <ExtensionPage /> : <AuthPage />}
        </div>
    )
}
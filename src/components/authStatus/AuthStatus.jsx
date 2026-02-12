import { useAuth } from "../../context/useAuth"

export const AuthStatus = () => {
    const auth = useAuth()

    if (auth.user === null) {
        return <p>You are not looged in.</p>
    }

    return (
        <>
            <h1>Добро пожаловать во вселенную Rick & Morty</h1>
            <p>Исследуйте персонажей, локации и эпизоды культового сериала</p>
    
        </>
    )
}
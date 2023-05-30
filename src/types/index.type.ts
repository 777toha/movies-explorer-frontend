export interface HeaderTypes {
    isMenuActvite: boolean
    onOpenMenu: React.MouseEventHandler<HTMLButtonElement>
    onCloseMenu: React.MouseEventHandler<HTMLButtonElement>
}

export interface isLoggedIn extends HeaderTypes {
    isLoggedIn: boolean
}

type User = {
    name: string;
    email: string;
}

export interface PropsLogin {
    setIsLoggedIn: (setIsLoggedIn: boolean) => void
    setUserData: (userData: User) => void
}
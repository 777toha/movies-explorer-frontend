export interface HeaderTypes {
    isMenuActvite: boolean
    onOpenMenu: React.MouseEventHandler<HTMLButtonElement>
    onCloseMenu: React.MouseEventHandler<HTMLButtonElement>
}

export interface isLoggedIn extends HeaderTypes {
    isLoggedIn: boolean
}
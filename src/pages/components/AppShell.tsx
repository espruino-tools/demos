interface AppShellProps{
    children: React.ReactNode;
}

export const AppShell = ({children}:AppShellProps) => {
    return (
        <div>
        {children}
        </div>
    )
}
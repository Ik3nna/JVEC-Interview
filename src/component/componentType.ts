export interface ContainerProps {
    children: React.ReactNode,
    width: "small" | "medium" | "large",
    className?: string
}

export interface ButtonProps {
    className?: string,
    content: React.ReactNode,
    onClick?: ()=> void
}
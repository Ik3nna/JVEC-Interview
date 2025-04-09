export interface ContainerProps {
    children: React.ReactNode,
    width: "small" | "medium" | "large",
    className?: string
}

export interface ButtonProps {
    className?: string,
    children: React.ReactNode,
    onClick?: ()=> void
}

export interface SliderProps {
    sliderArr: string[],
    slideWidth: number,
    imgHeight: number,
    imgClass?: string
}
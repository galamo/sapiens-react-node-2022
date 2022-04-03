import react from "react"

interface IProps {
    title: string
    color?: string
}
export default function Header(props: IProps) {
    const defaultColor = "red"
    return <h1 style={{ color: props.color || defaultColor }}> {props.title || "No Header Provided"} </h1>
}


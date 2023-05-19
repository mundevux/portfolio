const Social = (props) => {

    const { url, label } = props

    const getIcon = (title) => {
        switch (title) {
            case "Twitter":
                return "fa-brands fa-twitter"
            case "Linkedin":
                return "fa-brands fa-linkedin-in"
            case "Github":
                return "fa-brands fa-github"
            default:
                return "fa-brands fa-twitter"
        }
    }

    return (
        <div className="border-t-2 border-secondary/60 pt-10 ">
            <a href={url} target="_blank" rel="noopener noreferrer" className=" text-quaternary hover:text-quinary transition px-3 lg:px-1">
                <i className={`fa-brands ${getIcon(label)} border-2 border-quaternary hover:border-quinary rounded-full p-2 transition` }></i>
            </a>
        </div>
    )
}

export default Social
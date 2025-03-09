import { ArrowIcon } from "./arrowIcon"

const ViewSource = ({url=''}: {url: string|undefined}) => {
    if (!url) {
        return <></>
    }
    return (
        <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href={url}
        >
            <ArrowIcon />
            <p className="ml-2 h-7">view source</p>
        </a>
    )
}

export default ViewSource;
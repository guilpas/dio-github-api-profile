import React from 'react'
import ReactTooltip from "react-tooltip"

function RepositoryItem({ title, full_name, url, description, rid }) {
    return (
        <>
            <a href={url} data-tip data-for={"desc_" + rid} target="blank" className="m-1 btn btn-outline-success">
                {title}
            </a>
            <ReactTooltip id={"desc_" + rid} place="right" type="dark" effect="solid"><p>{`Full name: ${full_name}`}</p><span>{`Description: ${description}`}</span></ReactTooltip>

        </>
    )
}

export default RepositoryItem

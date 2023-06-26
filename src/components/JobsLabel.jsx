function JobsLabel({jobs}) {
    return (
        <li>
            <figure>
                <img src={jobs.logo} alt="" />
            </figure>
        </li>
    )
}

export function JobsList({data}) {
    return (
        <ul>
            <JobsLabel jobs={data}/>
        </ul>
    )
}
import { ProgressSpinner } from 'primereact/progressspinner';

// eslint-disable-next-line react/prop-types
function Loading({ loading = false, children }) {
    return (
        <div className={` ${loading ? "loader" : "none"}`} >
            {loading ? <ProgressSpinner /> : children}
        </div>

    )
}

export default Loading

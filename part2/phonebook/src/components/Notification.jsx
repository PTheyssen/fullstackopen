const Notification = ({ notfication }) => {
    if (notfication === null || notfication.message === null) {
        return
    }

    return (
        <div className={notfication.isError ? "error" : "success"}>
            {notfication.message}
        </div>
    )
}


export default Notification
export default function AppWelcome() {
    const title = "Welcome to my Page";
    const year = <p>2025</p>;
    const isShow = false;

    return (
        <>
            <p>{title.toUpperCase()}</p>  
            {year}     
            { 
                isShow && <p>Date: 27/05/2025</p>
            } 
            {
                isShow ? <p>Hello Kutto</p> : <p>Hello Kuttoyaki</p>
            }
        </>
    );
}
export default function AppWelcome() {
    const title = "Welcome to my Page";
    const year = <p>2025</p>;
    const isShow = true;
    const handleClick = () => {
        alert("Hello TypeScript");
    }

    return (
        <>
            <p>{title.toUpperCase()}</p>
            <button className="bg-yellow-100 p-3 m-3 text-orange-400 rounded-lg" onClick={handleClick}>Click here!</button>  
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
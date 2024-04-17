import { Image } from "react-bootstrap"

const HomePage = () => {
    return(
        <>
            <div className='heroSectionDiv'>
                <h1>Little Lemon</h1>
                <h5>Chicago</h5>
                <p></p>
                <button>Reserve a Table</button>
                <Image className="heroImage"
                    src="../assets/restaurant.jpg"
                    width={300}
                    height={300}
                />
            </div>
        </>
    )
}

export default HomePage
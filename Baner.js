import { useState, useEffect } from "react"


export default function Home () {

    const [showBanner, setShowBanner] = useState (true)

    useEffect(() => {
        const data = localStorage.getItem("Baner")
        if(data !== null){
            setShowBanner(JSON.parse(data))
        }
    }, [])


    useEffect(() => {
        localStorage.setItem("Baner", JSON.stringify(showBanner))
    }, [showBanner])


    return (
        <main>
            {showBanner && (
                <div className="baner">
                    Logika banera
                    <button className="hide" onClick={() => setShowBanner(false)}>
                        Hide
                    </button>
                </div>
            )}
        </main>
    )

}


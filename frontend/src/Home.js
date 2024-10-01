import React from 'react'

const Home = () => {
    return (
        <section className="main d-flex align-items-center text-white">

            <div className="container d-flex flex-column gap-0">
                <h1 className="large-text">FARMING WITH</h1>
                <div className="d-flex align-items-center px-1 m-0">
                    <div>
                        <p className="m-0">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde optio, harum, similique dicta
                            pariatur modi hic, eligendi rerum aspernatur doloremque dolorem dignissimos. Blanditiis illo est
                            recusandae sit rerum aperiam odit, ipsam dolorem mollitia molestias?
                        </p>
                    </div>
                    <div>
                        <h1 className="text-ai m-0">AI</h1>
                    </div>
                </div>
                <br />
                <div className="d-flex gap-2 p-0 m-0">
                    <a href="./crop/"><button className="btn btn-warning rounded-pill text-white">Crop Recommendation</button></a>
                    <a href="./fertilizer/"><button className="btn btn-warning rounded-pill text-white">Fertilizer Recommendation</button></a>
                </div>
            </div>
        </section>

    )
}

export default Home
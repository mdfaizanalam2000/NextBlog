import React from 'react'
import about1 from "../public/images/about1.jpeg"
import about2 from "../public/images/about2.jpeg"
import about3 from "../public/images/about3.jpeg"
import Image from 'next/image'

export default function about() {
    return (
        <div className='container'>
            <div className="row featurette">
                <div className="col-md-7">
                    <h2 className="featurette-heading">Latest Blogs <span className="text-muted">It'll blow your mind.</span></h2>
                    <p className="lead">This website is capable of providing latest blogs on any topic.</p>
                </div>
                <div className="col-md-5">
                    <Image width={500} height={500} className="featurette-image img-fluid mx-auto" src={about1} alt="Generic placeholder image" />
                </div>
            </div>

            <hr className="featurette-divider" />

            <div className="row featurette">
                <div className="col-md-7 order-md-2">
                    <h2 className="featurette-heading">Oh yeah, it's that good. <span className="text-muted">See it yourself.</span></h2>
                    <p className="lead">You can read blogs here anytime for free.</p>
                </div>
                <div className="col-md-5 order-md-1">
                    <Image width={500} height={500} className="featurette-image img-fluid mx-auto" src={about2} alt="Generic placeholder image" />
                </div>
            </div>

            <hr className="featurette-divider" />

            <div className="row featurette">
                <div className="col-md-7">
                    <h2 className="featurette-heading">And lastly, this one. <span className="text-muted">Checkmate.</span></h2>
                    <p className="lead">This website is managed by <a target='_blank' href="https://mdfaizanalam.tech">mdfaizanalam.tech</a></p>
                </div>
                <div className="col-md-5">
                    <Image width={500} height={500} className="featurette-image img-fluid mx-auto" src={about3} alt="Generic placeholder image" />
                </div>
            </div>

            <hr className="featurette-divider"></hr>
        </div>
    )
}

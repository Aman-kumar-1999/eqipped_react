import React from 'react'
import { Link } from 'react-router-dom'
import '../css/HomeCategory.css'
export default function HomeCategory() {
    return (
        <div style={{ marginTop: 20 }}>
            <div class="container text-center">
                <div class="row">
                    <div class="col" >
                        <div class="" >
                            <Link className='link' to={'/equipments'}>
                                <div class="card-body">
                                    <img src="microscope.png" style={{ width: 80 }} class="card-img-top" alt="..." />
                                    <br /><br />
                                    <h6 class="card-title">Equipments</h6>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div class="col">
                        <div class="" >
                            <Link className='link' to={'/instruments'}>
                                <div class="card-body">
                                    <img src="Magnifying-Glass-Transparent.png" style={{ width: 94 }} class="card-img-top" alt="..." />
                                    <br /><br />
                                    <h6 class="card-title">Instruments</h6>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div class="col" >
                        <div class="" >
                            <Link className='link' to={'/plasticWare'}>
                                <div class="card-body">
                                    <img src="beaker.png" style={{ width: 80 }} class="card-img-top" alt="..." />
                                    <br /><br />
                                    <h6 class="card-title ">Plastic Ware</h6>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div class="col">
                        <div class="" >
                            <Link className='link' to={'/glassWare'}>
                                <div class="card-body">
                                    <img src="test-tube.png" style={{ width: 80 }} class="card-img-top" alt="..." />
                                    <br /><br />
                                    <h6 class="card-title">Glass Ware</h6>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div class="col">
                        <div class="" >
                            <Link className='link' to={'/chemicals'}>
                                <div class="card-body">
                                    <span style={{ fontSize: 73 }} class="material-symbols-outlined">science</span>
                                    {/* <img src="chemistry.png" style={{ width: 100 }} class="card-img-top" alt="..." /> */}
                                    <br /><br />
                                    <h6 class="card-title">Chemicals</h6>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div class="col">
                        <div class="" >
                            <Link className='link chart' to={'/chart'}>
                                <div class="">
                                    <img src="human-skeleton.png" style={{ width: 80 }} class="card-img-top" alt="..." />
                                    <br /><br />
                                    <h6  class="card-title">Chart</h6>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

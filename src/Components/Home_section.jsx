import { React, useState, useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import CircleLoader from "react-spinners/CircleLoader";
import Anime from "./Animation";

function Btn() {
    return (
        <button type="button" className="my-2 px-4 pt-1 pb-2 flex bg-yellow-200 border border-black rounded-s-full rounded-e-full">
            Order
            <span className="ms-2 mt-2">
                <BsArrowRight />
            </span>
        </button>
    );
}

function Card({ Title, Description, alter, photo, price }) {
    return (
        <div className="shadow-2xl">
            <div className="bg bg-cover">
                <img src={photo} alt={alter} width={300} />
            </div>
            <div className="ps-2 border border-black border-t-transparent">
                <div className="flex justify-between">
                    <h3>{Title}</h3>
                    <p className="me-4 font-bold text-lg">{price}</p>
                </div>
                <h4>{Description}</h4>
                <Btn />
            </div>
        </div>
    );
}

export default function Home_sec() {

    return (
        <Anime>
            <div>
                <div className="p-6 mt-16 flex justify-between text-white" style={{ backgroundColor: "#50655E" }}>
                    <div className="ms-36">
                        <h1 className="text-6xl font-bold"> Little Lemon</h1>
                        <h2 className="mt-1">A Flavorful Delight!</h2>
                        <p className="mt-2">Experience vibrant flavors with expertly prepared signature dishes at little <br />
                            Lemon as we believe in serving nothing but the freshest and most delicious <br />
                            dishes.
                        </p>
                        <div className="mt-3 px-2 py-1 text-black bg-yellow-200 rounded-lg ">
                            <p> <span className="border-b border-black">Visit Us</span> today and experience a culinary journey like no other. <br />
                                <i className="font-bold">Little Lemon - Where Taste and Tradition Meet.</i> </p>
                        </div>
                    </div>
                    <img className="me-36" src="src\assets\imgs\pasta.jpg" alt="Pasta Picture" width={360} />
                </div>
                <p style={{ marginLeft: '168px' }} className="mt-7 mb-5 text-2xl font-bold">
                    Today's Special
                </p>
                <div className="flex justify-around">
                    <Card Title="Fresh Drinks" Description="Cool and Thirst-quenching Drinks" photo="src\assets\imgs\drink.jpg"
                        className="text-xl" alter="Fresh Drinks" price="$4" />
                    <Card Title="Fresh Salad" Description="Cool and Thirst-quenching Drinks" photo="src\assets\imgs\salad.jpg"
                        className="text-xl" alter="Fresh Drinks" price="$11" />
                    <Card Title="Fresh Drinks" Description="Cool and Thirst-quenching Drinks" photo="src\assets\imgs\spice.jpg"
                        className="text-xl" alter="Fresh Drinks" price="$7" />
                </div>
            </div>
        </Anime>
    );

}

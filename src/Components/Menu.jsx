import React from "react";
import Anime from "./Animation";

function Canva({ name, photo }) {
    return (
        <div>
            <div className="mb-4 flex justify-center text-3xl">
                {name}
            </div>
            <div className="w-72 h-72 border border-black shadow-2xl rounded-full 
            bg-cover bg-center text-center "
                style={{ backgroundImage: `url(${photo})` }} >
            </div>
        </div>
    );
}

export default function Menu() {
    return (
        <Anime>
            <div className="my-16">
                <div className="flex justify-center" >
                    <h1 className="mb-24 pb-4 px-8 text-4xl border border-black rounded-full"
                        style={{ backgroundColor: "#808F8B" }} >
                        Menu
                    </h1>
                </div>
                <div className="flex justify-evenly mb-44">
                    <Canva name="Sea Food" photo="src/assets/imgs/seafood.jpg" />
                    <Canva name="Dessert" photo="src/assets/imgs/dessert.jpg" />
                    <Canva name="Fast Food" photo="src/assets/imgs/fast_food.jpg" />
                    <Canva name="Frozen" photo="src/assets/imgs/frozen.jpg" />
                </div>
            </div>
        </Anime>
    )
}
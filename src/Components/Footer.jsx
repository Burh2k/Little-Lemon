import React from "react";

export default function Pagefooter() {
    return (
        <div className="text-lg border border-r-transparent border-l-transparent border-b-transparent border-black">
            <div className="flex justify-between mt-5">
                <p className="text-gray-500" style={{ marginLeft: '168px' }}>
                    &copy; Copyright Reserved
                </p>
                <div className="flex mt-1.5 me-32">
                    Follow Us
                    <img className="ms-8 me-3" src="src\assets\icons\instagram.png" alt="snapchat icon" width={30} height={30} />
                    <img className="mx-3" src="src\assets\icons\youtube.png" alt="facebook icon" width={30} height={30} />
                    <img className="mx-3" src="src\assets\icons\facebook.png" alt="youtube icon" width={30} height={30} />
                    <img className="ms-1.5" src="src\assets\icons\whatsapp.png" alt="whatsapp icon" width={30} height={30} />
                </div>
            </div>
        </div>
    );
}

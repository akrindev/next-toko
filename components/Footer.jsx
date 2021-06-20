import SocialIcon from "./SocialIcon"

export default function Footer() {
    return (<>
    <footer className="bg-black">

    <div className="max-w-5xl mx-auto lg:font-semibold flex flex-col lg:flex-row items-center justify-between pt-6 pb-10">
        <div className="flex items-start mb-5 lg:mb-0">

            <div>
                <span className="text-gray-200 font-bold">{ "Dian Busana" }</span> <br/>
		        <p className="text-white">{ "Menjual Berbagai macam pakaian anak dan emak emak" }</p>
            </div>
        </div>

    <SocialIcon/>
    </div>
</footer>
</>)
}
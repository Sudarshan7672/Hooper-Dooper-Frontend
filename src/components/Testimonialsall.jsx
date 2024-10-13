import yellowlinehorizontal from '../assets/yellowlinehorizontal.png';
import Testimonialsingle from './Testimonialsingle';

export default function Testimonials() {
    return (
        <>
            <div className="w-full m-auto mt-[30px] lg:mt-[50px] bg-cyan-100 lg:h-[600px] h-auto">
                <div className="w-full ml-[10px] lg:w-[80vw] m-auto">
                    <div className="Ourproduct flex justify-start pt-10">
                        <img
                            src={yellowlinehorizontal}
                            className="h-1 w-[20px] lg:w-[40px] mt-[10px] lg:mt-[15px]"
                            alt=""
                        />
                        <p className="text-base lg:text-xl ml-4 lg:ml-[20px] font-bold">Testimonials</p>
                    </div>
                    <div>
                        <p className="font-bold text-2xl lg:text-4xl mt-[10px] lg:mt-[15px]">
                            What Users Says
                        </p>
                    </div>
                </div>
                <Testimonialsingle />
            </div>
        </>
    );
}

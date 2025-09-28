import Image from "next/image";
import img from "../../public/images/banner.png"

export default function MainSection() {
    return (
        <main className="relative w-full flex items-center justify-center p-8 bg-brand-bg bg-cover bg-center overflow-hidden min-h-[100vh]"
            id="main-section" style={{ backgroundImage: "url('/images/background.svg')" }}>
            <div className="container p-8 m-auto">
                <div className="w-full grid lg:grid-cols-2 justify-between items-center gap-8">

                    {/* Left Side: Text Content */}
                    <div className="w-full text-center lg:text-left">
                        <h1 className="font-serif text-4xl md:text-5xl leading-tight text-[#424D31] uppercase">
                            Balance. Steadiness. <br />
                            <span className="text-[#AD8252] uppercase">Lasting Wellness.</span>
                        </h1>

                        <div className="mt-6 space-y-1 text-[#424D31] text-lg">
                            <p className="text-[#424D31]">Holistic healing through yoga, sound therapy, <br />naturopathy & lifestyle coaching.</p>
                        </div>

                        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                            <button
                                type="button"
                                className="bg-[#424D31] uppercase text-white px-8 py-3 cursor-pointer rounded-md font-medium tracking-wider hover:bg-opacity-90 transition-colors"
                            >
                                <a href="#plans">Begin Your Journey</a>
                            </button>
                        </div>
                    </div>

                    {/* Right Side: Vector Illustration */}
                    <div className="w-full flex justify-center lg:justify-end">
                        <Image
                            src={img}
                            alt="A woman stacking balanced stones"
                            // width={500}
                            // height={450}
                            className="w-3/4 h-3/4"
                            priority
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
import Image from 'next/image';

export default function WellnessLandingPage() {
  return (
    <main
      className="relative w-full flex items-center justify-center p-8 bg-brand-bg bg-cover bg-center overflow-hidden min-h-[100vh]"
      style={{ backgroundImage: "url('/images/background.svg')" }}
    >
      {/* Logo in the top right corner */}
      <header className="absolute top-8 right-8 z-10">
        <Image
          src="/images/logo.svg"
          alt="Sthirr Wellness Logo"
          width={150}
          height={50}
          className="h-auto w-28 md:w-36"
        />
      </header>

      {/* Main Content */}
      <div className="container flex align-center min-h-[68vh] pt-30 md:pt-0 md:bg-[url('/images/vector.svg')] bg-no-repeat bg-[right_10%_center] md:bg-[right_center] bg-contain">
        <div className="flex flex-col items-center justify-center gap-12 lg:gap-8">
          
          {/* Left Side: Text Content */}
          <div className="w-full text-center lg:text-left">
            <h1 className="font-serif text-4xl md:text-5xl leading-tight text-[#424D31]">
              WE'RE BUILDING A BALANCED SPACE <br />
              <span className="text-[#AD8252]">FOR YOUR WELLNESS</span>
            </h1>

            <div className="mt-6 space-y-1 text-[#424D31] text-lg">
              <p className="text-[#424D31]">Stay steady, stay connected</p>
              <p className="text-[#AD8252]">we'll be live soon</p>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <button
                type="button"
                className="bg-[#424D31] text-white px-8 py-3 rounded-md font-medium tracking-wider hover:bg-opacity-90 transition-colors"
              >
                NOTIFY ME
              </button>
              <p className="text-[#424D31] text-center sm:text-left">
                Be the first to <br /> experience Sthirr
              </p>
            </div>
          </div>

          {/* Right Side: Vector Illustration */}
          <div className="lg:hidden w-full lg:w-1/2 flex justify-center lg:justify-end">
            <Image
              src="/images/vector.svg"
              alt="A woman stacking balanced stones"
              width={500}
              height={450}
              className="w-full max-w-md"
              priority
            />
          </div>
        </div>
      </div>
    </main>
  );
}
import Image from 'next/image';

export default function WellnessLandingPage() {
  return (
    <main
      className="relative min-h-screen w-full flex items-center justify-center p-8 bg-brand-bg bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/background.svg')" }}
    >
      {/* Logo in the top right corner */}
      <header className="absolute top-8 right-8 z-10">
        {/*
          The logo file should be named 'logo.svg' and placed in the /public folder.
          It contains the circular icon, the name "STHIRR", and "WELLNESS".
        */}
        <Image
          src="/logo.svg"
          alt="Sthirr Wellness Logo"
          width={150}
          height={50}
          className="h-auto w-28 md:w-36"
        />
      </header>

      {/* Main Content */}
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Left Side: Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="font-serif text-4xl md:text-5xl leading-tight text-brand-text-dark">
              WE'RE BUILDING A BALANCED SPACE <br />
              <span className="text-brand-text-light">FOR YOUR WELLNESS</span>
            </h1>

            <div className="mt-6 space-y-1 text-brand-text-dark text-lg">
              <p>Stay steady, stay connected</p>
              <p className="text-brand-text-light">we'll be live soon</p>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <button
                type="button"
                className="bg-brand-button text-white px-8 py-3 rounded-md font-medium tracking-wider hover:bg-opacity-90 transition-colors"
              >
                NOTIFY ME
              </button>
              <p className="text-brand-text-dark text-center sm:text-left">
                Be the first to <br /> experience Sthirr
              </p>
            </div>
          </div>

          {/* Right Side: Vector Illustration */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            {/*
              The vector illustration file should be named 'vector.svg' 
              and placed in the /public folder.
            */}
            <Image
              src="/vector.svg"
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
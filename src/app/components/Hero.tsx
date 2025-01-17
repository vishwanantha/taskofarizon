import Image from "next/image";


export const Hero = () => {
  return (
    <div >
      <div className="container mx-auto  flex items-center justify-between">
        {/* Left Section: Text */}
        <div className="flex items-center space-x-2">
          <div className="text-lg font-extrabold uppercase">
            <Image
              src="https://images.patioproductsusa.com/site/common/patio/promos/2023/ppu-phs-hero.png?v1"
              alt="Patio Heat and Shade"
              width={1550}
              height={80}
              className="h-20 w-200"
            />
      
          </div>
        </div>

      </div>
    </div>
  );
};

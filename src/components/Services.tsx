import Image from "next/image";
import services from "@/src/assets/config/services.json";

export default function Services() {
  return (
    <section className="service-container w-full">
      <div className="max-w-[1200px] m-auto flex justify-center flex-wrap gap-6 px-10 ">
        {services.map((service) => (
          <div
            key={service.serviceId}
            className="w-282px border-2 flex flex-col items-center  pt-4 pb-10 px-10 box-border"
          >
            <Image
              src={service.serviceImageUrl}
              alt={service.serviceTitle}
              width={200}
              height={200}
            />
            <h2 className="font-raleway font-semibold xs:text-lg md:text-2xl text-center">
              {service.serviceTitle}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
}

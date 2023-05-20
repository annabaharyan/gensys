import Image from "next/image";
type Service = {
  serviceId: number;
  serviceImageUrl: string;
  serviceTitle: string;
};

export default function Services() {
  const services: Service[] = [
    {
      serviceId: 100,
      serviceImageUrl: "/assets/images/image1.png",
      serviceTitle: "Graphic Design",
    },
    {
      serviceId: 101,
      serviceImageUrl: "/assets/images/image2.png",
      serviceTitle: "Product Design Design",
    },
    {
      serviceId: 102,
      serviceImageUrl: "/assets/images/image3.png",
      serviceTitle: "UI/UX Design",
    },
    {
      serviceId: 103,
      serviceImageUrl: "/assets/images/image4.png",
      serviceTitle: "Idea Validation",
    },
    {
      serviceId: 104,
      serviceImageUrl: "/assets/images/image5.png",
      serviceTitle: "Management",
    },
    {
      serviceId: 105,
      serviceImageUrl: "/assets/images/image6.png",
      serviceTitle: "Fundraising",
    },
    {
      serviceId: 106,
      serviceImageUrl: "/assets/images/image7.png",
      serviceTitle: "Investor Engagement",
    },
    {
      serviceId: 107,
      serviceImageUrl: "/assets/images/image8.png",
      serviceTitle: "Application Marketing",
    },
  ];
  return (
    <section className="service-container w-full ">
      <h2 className="xs:text-center font-archivo font-semibold text-8xl pb-6 text-blue 2xl:hidden">
        SERVICES
      </h2>
      <div className="max-w-[1200px] m-auto flex justify-center flex-wrap gap-6">
        {services.map((service) => (
          <div
            key={service.serviceId}
            className="w-282px border-2 flex flex-col items-center  pt-4 pb-10 px-10"
          >
            <Image
              src={service.serviceImageUrl}
              alt={service.serviceTitle}
              width={200}
              height={200}
            />
            <h2 className="font-raleway font-semibold text-2xl text-center">
              {service.serviceTitle}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
}

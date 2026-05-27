import React, { useEffect, useRef } from "react";
import ClientsData from "../../data/ClientsData";

const Clients = () => {
  const columnsRef = useRef([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let animationId;
    let startTime;
    const animationDuration = 90000;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = (elapsed % animationDuration) / animationDuration;

      columnsRef.current.forEach((col, index) => {
        if (!col) return;

        const container = col.parentElement;
        if (!container) return;

        const containerHeight = container.clientHeight;
        const contentHeight = col.scrollHeight;

        if (contentHeight > containerHeight) {
          const maxScroll = contentHeight - containerHeight;

          let scrollAmount;
          if (index % 2 === 0) {
            scrollAmount = progress * maxScroll;
          } else {
            scrollAmount = (1 - progress) * maxScroll;
          }

          col.style.transform = `translateY(-${scrollAmount}px)`;
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <section className="w-full bg-gradient-to-b from-white via-[#f5fff5] to-white py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row gap-32">
        <div className="md:w-1/4 flex flex-col justify-between">
          <div>
            <p className="uppercase tracking-[0.25em] text-xs font-semibold text-[#004068] mb-3">
              Our <span className="italic">References</span>
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight text-gray-700 mb-4">
              Proud of <span className="text-[#19587e]"> Our Clients</span>
            </h2>
            <p className="text-sm md:text-base text-gray-700 max-w-xs">
              We collaborate with leading businesses across industries, powering
              mission‑critical operations with reliable solutions.
            </p>
          </div>
        </div>

        <div className="md:w-2/3">
          <div className="flex gap-3">
            {ClientsData.map((column, colIndex) => (
              <div
                key={colIndex}
                className="flex-1 h-96 overflow-hidden rounded-xl"
              >
                <div
                  ref={(el) => (columnsRef.current[colIndex] = el)}
                  className="flex flex-col gap-3"
                >
                  {[...Array(3)].map((_, dupIndex) => (
                    <React.Fragment key={dupIndex}>
                      {column.map((client) => (
                        <div
                          key={`${client.id}-${dupIndex}`}
                          className="client-item flex items-center justify-center"
                        >
                          <div className="w-full aspect-[4/3] bg-transparent rounded-lg flex items-center justify-center p-2">
                            <img
                            loading = "lazy"
                              src={client.logo}
                              className="cursor-pointer max-w-full text-black max-h-full object-contain transition-all duration-300"
                            />
                          </div>
                        </div>
                      ))}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;

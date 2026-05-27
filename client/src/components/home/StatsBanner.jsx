import AnimateCounter from "../animations/AnimateCounter";
import AnimateAppear from "../animations/AnimateAppear";

const statsData = [
  {
    id: 1,
    value: 500,
    suffix: "+",
    label: "Nationwide project executions",
  },
  {
    id: 2,
    value: 40,
    suffix: "+",
    label: "Verified manufacturing partners",
  },
  {
    id: 3,
    value: 5000,
    suffix: "L+",
    label: "Cable supplied nationwide",
  },
];

const StatsBanner = () => {
  return (
    <section className="bg-gray-50">
      <div className="max-w-6xl mx-auto md:px-10 md:py-12 px-4 py-4">
        <AnimateAppear>
          <h2 className="text-3xl md:text-5xl text-center font-extrabold text-gray-700 mb-6">
            Unique <span className="text-[#19587e]">Infra</span>
          </h2>
        </AnimateAppear>

        <AnimateAppear>
          <div className="space-y-4 text-base md:text-lg leading-relaxed text-gray-500 text-center mx-auto">
            <p>
              Our strengths are rooted in execution excellence, profound
              technical knowledge, and delivery reliability. Our{" "}
              <span className="font-semibold underline underline-offset-4">
                industrial automation solutions
              </span>{" "}
              are supported by both strong supplier partnerships and
              process-oriented, disciplined operations. From planning to
              deployment, we are concerned with efficiency, reliability, and
              scalability.
            </p>
          </div>
        </AnimateAppear>

        <AnimateAppear>
          <div className="mt-4 flex flex-wrap justify-center gap-6 md:gap-12 max-w-4xl mx-auto">
            {statsData.map((stat) => (
              <div
                key={stat.id}
                className="bg-[#eaf5fb] p-4 rounded-2xl flex-1 text-center"
              >
                <div className="text-3xl md:text-4xl text-gray-600 font-bold mb-2">
                  <AnimateCounter value={stat.value} duration={1.5} />
                  {stat.suffix}
                </div>
                <p className="text-sm md:text-base text-gray-600 leading-snug max-w-[200px] mx-auto">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </AnimateAppear>
      </div>
    </section>
  );
};

export default StatsBanner;

export const Hero = () => (
  <div>
    <h1
      className="text-6xl font-extrabold tracking-tight sm:text-8xl flex flex-col"
    >
      <span
        style={{
          textShadow:
            "-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000",
        }}
        className="block text-background xl:inline"
      >
        GIFTING MADE
      </span>
      <span
        style={{
          textShadow:
            "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
        }}
        className="block xl:inline md:whitespace-nowrap"
      >
        EASIER
      </span>
    </h1>
    <p
      className="mt-3 text-base text-gray-800 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl md:mx-0 !leading-8"
    >
      Hard to find thoughtful presents? Focus on one person.
      Make more personalized, environmentally friendly, and financially
      conscious presents.
    </p>
  </div>
)
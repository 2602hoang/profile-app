export default function LoadingPage() {
  const animationDuration = 1;
  return (
    <>
      <style>
        {`
          @keyframes three-dot-loader-growing {
            0% {
              transform: scale(1) ;
            }
            20% {
              transform: scale(1.3);
            }
            90% {
              transform: scale(1);
            }
          }
        `}
      </style>
      <div className="grid grid-cols-3 gap-4 place-content-center  place-items-center ">
        {[...new Array(9)].map((_, index) => (
          <div
            className="size-5 origin-center rounded-xl bg-orange-500 dark:invert"
            key={index.toString()}
            style={{
              animationName: "three-dot-loader-growing",
              animationDuration: `${animationDuration}s`,
              animationIterationCount: "infinite",
              animationDirection: "normal",
              animationTimingFunction: "ease-in-out",
              animationDelay: `${(animationDuration / 3) * index}s`,
            }}
          />
        ))}
      </div>
    </>
  );
}

export default function Spinner() {
  return (
    <div
      className="inline-block h-[8.01vw] w-[8.01vw] animate-spin rounded-full border-[0.801vw] border-transparent border-t-white
        tablet:h-[3.75vw] tablet:w-[3.75vw] tablet:border-[0.375vw] desktop:h-[1.56vw] desktop:w-[1.56vw] desktop:border-[0.156vw]"
      role="status"
      aria-label="loading"
    />
  );
}

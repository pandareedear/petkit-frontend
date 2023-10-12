export default function Banner() {
  return (
    <div className="bg-black w-full h-12 top-0 flex justify-center items-center">
      <div className=" text-white text-xs font-bold flex justify-center items-center gap-[80px]">
        <div>
          <svg
            role="presentation"
            focusable="false"
            width="7"
            height="10"
            viewBox="0 0 7 10"
          >
            <path
              d="M6 1 2 5l4 4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            ></path>
          </svg>
        </div>
        <h6>🐱 FREE SHIPPING for Flushable Clumping Cat Litter NOW!</h6>
        <div>
          <svg
            role="presentation"
            focusable="false"
            width="7"
            height="10"
            viewBox="0 0 7 10"
          >
            <path
              d="m1 9 4-4-4-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

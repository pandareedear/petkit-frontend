import { ArrowLeft, ArrowRight } from "../icons";

export default function Banner() {
  return (
    <div className="w-[100%] h-[100%] text-white text-xs font-bold flex justify-center items-center gap-[80px]">
      <ArrowLeft />
      <h6>🐱 FREE SHIPPING for Flushable Clumping Cat Litter NOW!</h6>
      <ArrowRight />
    </div>
  );
}

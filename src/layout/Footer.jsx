import {
  ArrowRight,
  FacebookIcon,
  InstagramIcon,
  ProfileIcon,
  TiktokIcon,
  TwitterIcon,
  YoutubeIcon,
} from "../icons";

export default function Footer() {
  return (
    <div className="">
      <div className="grid grid-cols-2 mt-72 pl-[17%] pr-[17%]">
        <div className="flex p-20">
          <div className="flex flex-col justify-start p-6">
            <h1 className="text-4xl font-bold">Subscribe to our </h1>
            <h1 className="text-4xl font-bold">newsletter</h1>
            <div>
              <input
                type="text"
                placeholder="E-mail"
                className="w-[350px] h-[60px] text-sm rounded-md p-3 mt-5 border border-gray-200 font-light pl-4"
              />
              <span className="flex flex-row">
                <button className="bg-neutral-200 w-3 h-3 p-3 rounded-full flex justify-center items-center absolute -translate-y-10 translate-x-[300px]">
                  <ArrowRight />
                </button>
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center  gap-10 ">
          <div className="flex flex-row gap-16">
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
            <YoutubeIcon />
            <TiktokIcon />
          </div>
          <div className="text-xs font-bold">
            @2023, PETNEKO.ALL Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  );
}

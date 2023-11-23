import { LoadingIcon } from "../icons";

export default function Loading() {
  return (
    <>
      {/* <div className="fixed inset-0 bg-black z-20 opacity-30"></div>
      <div className="fixed inset-0 z-30">
        <div className="fixed flex items-center justify-center min-h-full">
          <LoadingIcon className=" animate-spin" />
        </div>
      </div> */}
      <div className="fixed inset-0 bg-black opacity-30 z-40"></div>
      <div className="fixed inset-0 z-50">
        <div className="flex items-center justify-center min-h-full">
          <LoadingIcon className="fill-blue-600 animate-spin" />
        </div>
      </div>
    </>
  );
}

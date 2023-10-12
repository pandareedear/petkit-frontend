import { LoadingIcon } from "../icons";

export default function Loading() {
  return (
    <>
      <div className="fixed inset-0 bg-black opacity-30"></div>
      <div className="fixed inset-0">
        <div className="fixed items-center justify-center min-h-full">
          <LoadingIcon className="fill-orange-600 animate-spin" />
        </div>
      </div>
    </>
  );
}

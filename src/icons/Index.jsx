import logo from "../assets/cat-silhouette-svgrepo-com.svg";

export function PetNekoIcon() {
  return (
    <img
      src="https://petkit.com/cdn/shop/files/28080.png?v=1690535481&width=150"
      alt="PetNekoIcon"
    />
  );
}

export function SearchIcon() {
  return (
    <svg
      role="presentation"
      strokeWidth="1.4"
      focusable="false"
      width="22"
      height="22"
      viewBox="0 0 22 22"
    >
      <circle cx="11" cy="10" r="7" fill="none" stroke="currentColor"></circle>
      <path
        d="m16 15 3 3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
}

export function ProfileIcon() {
  return (
    <svg
      role="presentation"
      strokeWidth="1.4"
      focusable="false"
      width="22"
      height="22"
      viewBox="0 0 22 22"
    >
      <circle cx="11" cy="7" r="4" fill="none" stroke="currentColor"></circle>
      <path
        d="M3.5 19c1.421-2.974 4.247-5 7.5-5s6.079 2.026 7.5 5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
      ></path>
    </svg>
  );
}
export function CartIcon() {
  return (
    <svg
      role="presentation"
      strokeWidth="1.4"
      focusable="false"
      width="22"
      height="22"
      viewBox="0 0 22 22"
    >
      <path
        d="M11 7H3.577A2 2 0 0 0 1.64 9.497l2.051 8A2 2 0 0 0 5.63 19H16.37a2 2 0 0 0 1.937-1.503l2.052-8A2 2 0 0 0 18.422 7H11Zm0 0V1"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
}

export function LoadingIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      height="2rem"
      width="2rem"
      fill="#000"
    >
      <g>
        <path d="M10,1V3a7,7,0,1,1-7,7H1a9,9,0,1,0,9-9Z" />
      </g>
    </svg>
  );
}

export function WrongIcon() {
  return (
    <svg
      fill="#ce2c2c"
      viewBox="0 0 200 200"
      data-name="Layer 1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#ce2c2c"
      width="25px"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <title></title>
        <path d="M100,15a85,85,0,1,0,85,85A84.93,84.93,0,0,0,100,15Zm0,150a65,65,0,1,1,65-65A64.87,64.87,0,0,1,100,165Z"></path>
        <path d="M128.5,74a9.67,9.67,0,0,0-14,0L100,88.5l-14-14a9.9,9.9,0,0,0-14,14l14,14-14,14a9.9,9.9,0,0,0,14,14l14-14,14,14a9.9,9.9,0,0,0,14-14l-14-14,14-14A10.77,10.77,0,0,0,128.5,74Z"></path>
      </g>
    </svg>
  );
}

export function ArrowLeft() {
  return (
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
  );
}

export function ArrowRight() {
  return (
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
  );
}

export function CatHead() {
  return <img src={logo} className="boy-filter w-4"></img>;
}

export function FacebookIcon() {
  return (
    <svg
      role="presentation"
      focusable="false"
      width="27"
      height="27"
      viewBox="0 0 24 24"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.183 21.85v-8.868H7.2V9.526h2.983V6.982a4.17 4.17 0 0 1 4.44-4.572 22.33 22.33 0 0 1 2.667.144v3.084h-1.83a1.44 1.44 0 0 0-1.713 1.68v2.208h3.423l-.447 3.456h-2.97v8.868h-3.57Z"
        fill="currentColor"
      ></path>
      <svg
        role="presentation"
        focusable="false"
        width="27"
        height="27"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.183 21.85v-8.868H7.2V9.526h2.983V6.982a4.17 4.17 0 0 1 4.44-4.572 22.33 22.33 0 0 1 2.667.144v3.084h-1.83a1.44 1.44 0 0 0-1.713 1.68v2.208h3.423l-.447 3.456h-2.97v8.868h-3.57Z"
          fill="currentColor"
        ></path>
      </svg>
    </svg>
  );
}

export function TwitterIcon() {
  return (
    <svg
      role="presentation"
      focusable="false"
      width="27"
      height="27"
      viewBox="0 0 24 24"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.414 4.96c1.506-.024 2.307.479 3.072 1.117.65-.05 1.495-.383 1.992-.614l.484-.242c-.285.702-.67 1.253-1.262 1.67-.131.093-.262.218-.426.277v.009c.843-.008 1.539-.357 2.2-.546v.01a5.934 5.934 0 0 1-1.318 1.384l-.607.442c.01.817-.014 1.598-.18 2.285-.971 3.995-3.544 6.707-7.616 7.868-1.462.418-3.825.59-5.5.208-.83-.188-1.581-.402-2.285-.684a9.54 9.54 0 0 1-1.1-.519l-.342-.19c.378.01.82.105 1.243.043.382-.056.757-.042 1.11-.113.879-.176 1.66-.41 2.332-.77.326-.175.82-.38 1.053-.632a3.59 3.59 0 0 1-1.157-.19c-1.258-.407-1.99-1.154-2.466-2.277.381.038 1.479.129 1.735-.07-.48-.023-.94-.278-1.27-.467-1.012-.58-1.837-1.551-1.83-3.047l.398.173c.254.098.512.15.815.208.128.024.384.093.531.043h-.019c-.195-.208-.514-.347-.71-.571-.65-.739-1.258-1.875-.873-3.229.097-.343.252-.646.417-.926l.019.009c.076.144.244.25.35.372.332.376.741.714 1.158 1.013 1.42 1.016 2.698 1.64 4.75 2.103.522.117 1.124.207 1.746.208-.175-.466-.119-1.22.019-1.67.346-1.134 1.097-1.952 2.2-2.39.263-.105.556-.18.863-.242l.474-.052Z"
        fill="currentColor"
      ></path>
    </svg>
  );
}

export function InstagramIcon() {
  return (
    <svg
      role="presentation"
      focusable="false"
      width="27"
      height="27"
      viewBox="0 0 24 24"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2.4c-2.607 0-2.934.011-3.958.058-1.022.046-1.72.209-2.33.446a4.705 4.705 0 0 0-1.7 1.107 4.706 4.706 0 0 0-1.108 1.7c-.237.611-.4 1.31-.446 2.331C2.41 9.066 2.4 9.392 2.4 12c0 2.607.011 2.934.058 3.958.046 1.022.209 1.72.446 2.33a4.706 4.706 0 0 0 1.107 1.7c.534.535 1.07.863 1.7 1.108.611.237 1.309.4 2.33.446 1.025.047 1.352.058 3.959.058s2.934-.011 3.958-.058c1.022-.046 1.72-.209 2.33-.446a4.706 4.706 0 0 0 1.7-1.107 4.706 4.706 0 0 0 1.108-1.7c.237-.611.4-1.31.446-2.33.047-1.025.058-1.352.058-3.959s-.011-2.934-.058-3.958c-.047-1.022-.209-1.72-.446-2.33a4.706 4.706 0 0 0-1.107-1.7 4.705 4.705 0 0 0-1.7-1.108c-.611-.237-1.31-.4-2.331-.446C14.934 2.41 14.608 2.4 12 2.4Zm0 1.73c2.563 0 2.867.01 3.88.056.935.042 1.443.199 1.782.33.448.174.768.382 1.104.718.336.336.544.656.718 1.104.131.338.287.847.33 1.783.046 1.012.056 1.316.056 3.879 0 2.563-.01 2.867-.056 3.88-.043.935-.199 1.444-.33 1.782a2.974 2.974 0 0 1-.719 1.104 2.974 2.974 0 0 1-1.103.718c-.339.131-.847.288-1.783.33-1.012.046-1.316.056-3.88.056-2.563 0-2.866-.01-3.878-.056-.936-.042-1.445-.199-1.783-.33a2.974 2.974 0 0 1-1.104-.718 2.974 2.974 0 0 1-.718-1.104c-.131-.338-.288-.847-.33-1.783-.047-1.012-.056-1.316-.056-3.879 0-2.563.01-2.867.056-3.88.042-.935.199-1.443.33-1.782.174-.448.382-.768.718-1.104a2.974 2.974 0 0 1 1.104-.718c.338-.131.847-.288 1.783-.33C9.133 4.14 9.437 4.13 12 4.13Zm0 11.07a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4Zm0-8.13a4.93 4.93 0 1 0 0 9.86 4.93 4.93 0 0 0 0-9.86Zm6.276-.194a1.152 1.152 0 1 1-2.304 0 1.152 1.152 0 0 1 2.304 0Z"
        fill="currentColor"
      ></path>
    </svg>
  );
}

export function YoutubeIcon() {
  return (
    <svg
      role="presentation"
      focusable="false"
      width="27"
      height="27"
      viewBox="0 0 24 24"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.44 5.243c.929.244 1.66.963 1.909 1.876.451 1.654.451 5.106.451 5.106s0 3.452-.451 5.106a2.681 2.681 0 0 1-1.91 1.876c-1.684.443-8.439.443-8.439.443s-6.754 0-8.439-.443a2.682 2.682 0 0 1-1.91-1.876c-.45-1.654-.45-5.106-.45-5.106s0-3.452.45-5.106a2.681 2.681 0 0 1 1.91-1.876c1.685-.443 8.44-.443 8.44-.443s6.754 0 8.438.443Zm-5.004 6.982L9.792 15.36V9.091l5.646 3.134Z"
        fill="currentColor"
      ></path>
    </svg>
  );
}

export function TiktokIcon() {
  return (
    <svg
      role="presentation"
      focusable="false"
      width="27"
      height="27"
      viewBox="0 0 24 24"
    >
      <path
        d="M20.027 10.168a5.125 5.125 0 0 1-4.76-2.294v7.893a5.833 5.833 0 1 1-5.834-5.834c.122 0 .241.011.361.019v2.874c-.12-.014-.237-.036-.36-.036a2.977 2.977 0 0 0 0 5.954c1.644 0 3.096-1.295 3.096-2.94L12.56 2.4h2.75a5.122 5.122 0 0 0 4.72 4.573v3.195"
        fill="currentColor"
      ></path>
    </svg>
  );
}

export function OrderIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <rect
          x="5"
          y="4"
          width="14"
          height="17"
          rx="2"
          stroke="#222222"
        ></rect>{" "}
        <path d="M9 9H15" stroke="#222222" strokeLinecap="round"></path>{" "}
        <path d="M9 13H15" stroke="#222222" strokeLinecap="round"></path>{" "}
        <path d="M9 17H13" stroke="#222222" strokeLinecap="round"></path>{" "}
      </g>
    </svg>
  );
}

export function ProductIcon() {
  return (
    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="#000000">
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <g fill="none" fillRule="evenodd">
          {" "}
          <path d="m0 0h32v32h-32z"></path>{" "}
          <path
            d="m16 0 13.8564065 8v16l-13.8564065 8-13.85640646-8v-16zm6.550845 10.6744304-6.5625807 3.489-6.56205691-3.489-.93894312 1.7658952 6.50100003 3.4561048.0002619 7.7691392h2l-.0002619-7.7701392 6.5015238-3.4551048z"
            fill="#202327"
          ></path>{" "}
        </g>{" "}
      </g>
    </svg>
  );
}

export default function Logo() {
  const fillClassName = "fill-black dark:fill-white"
  const strokeClassName = "stroke-black dark:stroke-white"
  return (
    <svg
      width="37"
      height="37"
      viewBox="0 0 37 37"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_11_25)">
        <path
          d="M32.375 32.375C34.2907 32.375 35.8438 30.822 35.8438 28.9062C35.8438 26.9905 34.2907 25.4375 32.375 25.4375C30.4593 25.4375 28.9062 26.9905 28.9062 28.9062C28.9062 30.822 30.4593 32.375 32.375 32.375Z"
          className={strokeClassName}
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M4.625 32.375C6.54074 32.375 8.09375 30.822 8.09375 28.9062C8.09375 26.9905 6.54074 25.4375 4.625 25.4375C2.70926 25.4375 1.15625 26.9905 1.15625 28.9062C1.15625 30.822 2.70926 32.375 4.625 32.375Z"
          className={strokeClassName}
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M30.0625 19.6562L24.2812 28.9062H4.625"
          className={strokeClassName}
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M26.774 6L31.3944 29.1024C31.5027 29.6439 32.0296 29.9951 32.5711 29.8868C33.1127 29.7785 33.4639 29.2517 33.3556 28.7101L28.9698 6.78125H38C38.5523 6.78125 39 6.33353 39 5.78125C39 5.22897 38.5523 4.78125 38 4.78125H29V6H26.774Z"
          className={fillClassName}
        />
      </g>
      <path d="M36 13H37V11H36V13ZM29 13H36V11H29V13Z" className={fillClassName}/>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12.799 14.875V17.085H22.863C24.121 17.085 25.0957 16.7733 25.787 16.15C26.4897 15.5267 26.841 14.6143 26.841 13.413C26.841 12.2003 26.4897 11.288 25.787 10.676C25.0957 10.0527 24.121 9.74101 22.863 9.74101H16.777C16.2897 9.74101 15.91 9.63334 15.638 9.41801C15.366 9.19134 15.23 8.83434 15.23 8.34701C15.23 7.85968 15.366 7.50834 15.638 7.29301C15.91 7.06634 16.2897 6.95301 16.777 6.95301L23 6.96443V6.00001H26.042V4.76001H16.488C15.23 4.76001 14.2497 5.06601 13.547 5.67801C12.8557 6.27868 12.51 7.16834 12.51 8.34701C12.51 9.52568 12.8557 10.421 13.547 11.033C14.2497 11.6337 15.23 11.934 16.488 11.934H22.574C23.0727 11.934 23.4523 12.053 23.713 12.291C23.985 12.5177 24.121 12.8917 24.121 13.413C24.121 13.9343 23.985 14.314 23.713 14.552C23.4523 14.7787 23.0727 14.892 22.574 14.892L12.799 14.875Z"
        className={fillClassName}
      />
      <defs>
        <clipPath id="clip0_11_25">
          <rect width="37" height="37" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

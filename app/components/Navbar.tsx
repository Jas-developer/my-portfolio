"use client";

import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Themebutton from "./Themebutton";

export default function Navbar() {
  let pathname = usePathname() || "/";
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justfiy-between h-16">
              <div className="flex justify-between w-full">
                <div className="flex items-center">
                  <Link href="/">
                    <svg
                      width="200"
                      height="55"
                      viewBox="0 0 312 55"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 0H130.535V55H0V0Z" fill="#40A030" />
                      <path
                        d="M144.477 34H139.101V19.4545H144.47C145.952 19.4545 147.228 19.7457 148.298 20.3281C149.373 20.9058 150.202 21.7391 150.784 22.8281C151.366 23.9124 151.658 25.2098 151.658 26.7202C151.658 28.2353 151.366 29.5374 150.784 30.6264C150.206 31.7154 149.38 32.5511 148.305 33.1335C147.231 33.7112 145.955 34 144.477 34ZM142.616 31.0028H144.342C145.157 31.0028 145.846 30.8655 146.409 30.5909C146.977 30.3116 147.406 29.8594 147.695 29.2344C147.988 28.6046 148.135 27.7666 148.135 26.7202C148.135 25.6738 147.988 24.8404 147.695 24.2202C147.401 23.5952 146.968 23.1454 146.395 22.8707C145.827 22.5914 145.126 22.4517 144.293 22.4517H142.616V31.0028ZM153.71 34V19.4545H163.852V22.3097H157.226V25.2926H163.334V28.1548H157.226V31.1449H163.852V34H153.71ZM169.357 19.4545L172.609 30.108H172.73L175.983 19.4545H179.918L175.01 34H170.33L165.422 19.4545H169.357ZM181.484 34V19.4545H191.626V22.3097H184.999V25.2926H191.107V28.1548H184.999V31.1449H191.626V34H181.484ZM193.827 34V19.4545H197.343V31.1449H203.394V34H193.827ZM218.376 26.7273C218.376 28.3277 218.069 29.6842 217.453 30.7969C216.838 31.9096 216.004 32.7547 214.953 33.3324C213.907 33.91 212.732 34.1989 211.43 34.1989C210.124 34.1989 208.947 33.9077 207.901 33.3253C206.854 32.7429 206.023 31.8977 205.408 30.7898C204.797 29.6771 204.491 28.3229 204.491 26.7273C204.491 25.1269 204.797 23.7704 205.408 22.6577C206.023 21.545 206.854 20.6998 207.901 20.1222C208.947 19.5445 210.124 19.2557 211.43 19.2557C212.732 19.2557 213.907 19.5445 214.953 20.1222C216.004 20.6998 216.838 21.545 217.453 22.6577C218.069 23.7704 218.376 25.1269 218.376 26.7273ZM214.783 26.7273C214.783 25.7803 214.648 24.9801 214.378 24.3267C214.113 23.6733 213.729 23.1785 213.227 22.8423C212.73 22.5062 212.131 22.3381 211.43 22.3381C210.734 22.3381 210.135 22.5062 209.634 22.8423C209.132 23.1785 208.746 23.6733 208.476 24.3267C208.211 24.9801 208.078 25.7803 208.078 26.7273C208.078 27.6742 208.211 28.4744 208.476 29.1278C208.746 29.7812 209.132 30.276 209.634 30.6122C210.135 30.9484 210.734 31.1165 211.43 31.1165C212.131 31.1165 212.73 30.9484 213.227 30.6122C213.729 30.276 214.113 29.7812 214.378 29.1278C214.648 28.4744 214.783 27.6742 214.783 26.7273ZM220.429 34V19.4545H226.438C227.527 19.4545 228.466 19.6676 229.257 20.0938C230.053 20.5152 230.666 21.1046 231.097 21.8622C231.527 22.6151 231.743 23.491 231.743 24.4901C231.743 25.4938 231.523 26.3722 231.082 27.125C230.647 27.8731 230.024 28.4531 229.214 28.8651C228.405 29.277 227.444 29.483 226.331 29.483H222.624V26.7131H225.678C226.208 26.7131 226.651 26.6207 227.006 26.4361C227.366 26.2514 227.638 25.9934 227.822 25.6619C228.007 25.3258 228.099 24.9351 228.099 24.4901C228.099 24.0402 228.007 23.652 227.822 23.3253C227.638 22.9938 227.366 22.7382 227.006 22.5582C226.646 22.3783 226.203 22.2884 225.678 22.2884H223.945V34H220.429ZM233.476 34V19.4545H243.618V22.3097H236.991V25.2926H243.099V28.1548H236.991V31.1449H243.618V34H233.476ZM245.82 34V19.4545H251.828C252.917 19.4545 253.857 19.651 254.648 20.044C255.443 20.4323 256.056 20.991 256.487 21.7202C256.918 22.4446 257.134 23.304 257.134 24.2983C257.134 25.3068 256.913 26.1638 256.473 26.8693C256.033 27.5701 255.408 28.1051 254.598 28.4744C253.788 28.839 252.83 29.0213 251.722 29.0213H247.922V26.2514H251.068C251.598 26.2514 252.041 26.1828 252.396 26.0455C252.756 25.9034 253.028 25.6903 253.213 25.4062C253.398 25.1174 253.49 24.7481 253.49 24.2983C253.49 23.8485 253.398 23.4768 253.213 23.1832C253.028 22.8849 252.756 22.6624 252.396 22.5156C252.036 22.3641 251.594 22.2884 251.068 22.2884H249.335V34H245.82ZM254.009 27.3523L257.631 34H253.795L250.244 27.3523H254.009Z"
                        fill="#40A030"
                      />
                      <path
                        d="M15.9631 23.8153C15.9157 23.2945 15.705 22.8897 15.331 22.6009C14.9616 22.3073 14.4337 22.1605 13.7472 22.1605C13.2926 22.1605 12.9138 22.2197 12.6108 22.3381C12.3078 22.4564 12.0805 22.6198 11.929 22.8281C11.7775 23.0317 11.6993 23.2661 11.6946 23.5312C11.6851 23.7491 11.7277 23.9408 11.8224 24.1065C11.9219 24.2723 12.0639 24.419 12.2486 24.5469C12.438 24.67 12.6652 24.7789 12.9304 24.8736C13.1955 24.9683 13.4938 25.0511 13.8253 25.1222L15.0753 25.4062C15.795 25.5625 16.4295 25.7708 16.9787 26.0312C17.5327 26.2917 17.9967 26.6018 18.3707 26.9616C18.7495 27.3215 19.036 27.7358 19.2301 28.2045C19.4242 28.6733 19.5237 29.1989 19.5284 29.7812C19.5237 30.6998 19.2917 31.4882 18.8324 32.1463C18.3731 32.8045 17.7126 33.3087 16.8509 33.6591C15.9938 34.0095 14.9593 34.1847 13.7472 34.1847C12.5303 34.1847 11.4697 34.0024 10.5653 33.6378C9.66098 33.2732 8.95786 32.7192 8.45597 31.9759C7.95407 31.2325 7.69602 30.2926 7.68182 29.1562H11.0483C11.0767 29.625 11.2022 30.0156 11.4247 30.3281C11.6473 30.6406 11.9527 30.8774 12.3409 31.0384C12.7339 31.1993 13.1884 31.2798 13.7045 31.2798C14.178 31.2798 14.5805 31.2159 14.9119 31.0881C15.2481 30.9602 15.5062 30.7827 15.6861 30.5554C15.866 30.3281 15.9583 30.0677 15.9631 29.7741C15.9583 29.4995 15.8731 29.2652 15.7074 29.071C15.5417 28.8722 15.286 28.7017 14.9403 28.5597C14.5994 28.4129 14.1638 28.2779 13.6335 28.1548L12.1136 27.7997C10.8542 27.5109 9.86222 27.0445 9.13778 26.4006C8.41335 25.7519 8.0535 24.8759 8.05824 23.7727C8.0535 22.8731 8.29498 22.0848 8.78267 21.4077C9.27036 20.7306 9.94508 20.2027 10.8068 19.8239C11.6686 19.4451 12.651 19.2557 13.7543 19.2557C14.8812 19.2557 15.8589 19.4474 16.6875 19.831C17.5208 20.2098 18.1671 20.7424 18.6264 21.429C19.0857 22.1155 19.3201 22.911 19.3295 23.8153H15.9631ZM35.0327 26.7273C35.0327 28.3277 34.7249 29.6842 34.1094 30.7969C33.4938 31.9096 32.6605 32.7547 31.6094 33.3324C30.563 33.91 29.3887 34.1989 28.0866 34.1989C26.7798 34.1989 25.6032 33.9077 24.5568 33.3253C23.5104 32.7429 22.6795 31.8977 22.0639 30.7898C21.4531 29.6771 21.1477 28.3229 21.1477 26.7273C21.1477 25.1269 21.4531 23.7704 22.0639 22.6577C22.6795 21.545 23.5104 20.6998 24.5568 20.1222C25.6032 19.5445 26.7798 19.2557 28.0866 19.2557C29.3887 19.2557 30.563 19.5445 31.6094 20.1222C32.6605 20.6998 33.4938 21.545 34.1094 22.6577C34.7249 23.7704 35.0327 25.1269 35.0327 26.7273ZM31.4389 26.7273C31.4389 25.7803 31.304 24.9801 31.0341 24.3267C30.7689 23.6733 30.3854 23.1785 29.8835 22.8423C29.3864 22.5062 28.7874 22.3381 28.0866 22.3381C27.3906 22.3381 26.7917 22.5062 26.2898 22.8423C25.7879 23.1785 25.402 23.6733 25.1321 24.3267C24.867 24.9801 24.7344 25.7803 24.7344 26.7273C24.7344 27.6742 24.867 28.4744 25.1321 29.1278C25.402 29.7812 25.7879 30.276 26.2898 30.6122C26.7917 30.9484 27.3906 31.1165 28.0866 31.1165C28.7874 31.1165 29.3864 30.9484 29.8835 30.6122C30.3854 30.276 30.7689 29.7812 31.0341 29.1278C31.304 28.4744 31.4389 27.6742 31.4389 26.7273ZM37.0852 34V19.4545H47.0142V22.3097H40.6009V25.2926H46.3821V28.1548H40.6009V34H37.0852ZM48.3086 22.3097V19.4545H60.6026V22.3097H56.1921V34H52.7262V22.3097H48.3086ZM65.8068 34L61.5739 19.4545H65.4588L67.6534 28.9858H67.7741L70.2812 19.4545H73.4489L75.956 29.0071H76.0767L78.2784 19.4545H82.1562L77.9304 34H74.5426L71.9219 25.179H71.8082L69.1875 34H65.8068ZM85.1729 34H81.3945L86.3022 19.4545H90.9826L95.8903 34H92.1119L88.6957 23.1193H88.582L85.1729 34ZM84.6687 28.2756H92.5664V30.946H84.6687V28.2756ZM97.4563 34V19.4545H103.465C104.554 19.4545 105.494 19.651 106.284 20.044C107.08 20.4323 107.693 20.991 108.124 21.7202C108.555 22.4446 108.77 23.304 108.77 24.2983C108.77 25.3068 108.55 26.1638 108.11 26.8693C107.669 27.5701 107.044 28.1051 106.235 28.4744C105.425 28.839 104.466 29.0213 103.358 29.0213H99.5586V26.2514H102.705C103.235 26.2514 103.678 26.1828 104.033 26.0455C104.393 25.9034 104.665 25.6903 104.85 25.4062C105.034 25.1174 105.127 24.7481 105.127 24.2983C105.127 23.8485 105.034 23.4768 104.85 23.1832C104.665 22.8849 104.393 22.6624 104.033 22.5156C103.673 22.3641 103.23 22.2884 102.705 22.2884H100.972V34H97.4563ZM105.645 27.3523L109.267 34H105.432L101.881 27.3523H105.645ZM110.699 34V19.4545H120.841V22.3097H114.214V25.2926H120.322V28.1548H114.214V31.1449H120.841V34H110.699Z"
                        fill="white"
                      />
                    </svg>
                  </Link>
                </div>

                <div className="hidden sm:ml-6 sm:flex sm:space-x-8 sm:items-center">
                  <Link
                    href="/"
                    prefetch
                    className={`${
                      pathname === "/"
                        ? "border-green-500 dark:text-white h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                        : "border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    }`}
                  >
                    Home
                  </Link>

                  <Link
                    href="/Blogs"
                    prefetch
                    className={`${
                      pathname === "/Blogs"
                        ? "border-green-500 dark:text-white h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                        : "border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    }`}
                  >
                    Blogs
                  </Link>
                  <Link
                    href="/guestbook"
                    prefetch
                    className={`${
                      pathname === "/guestbook"
                        ? "border-green-500 dark:text-white h-full inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                        : "border-transparent text-gray-500 dark:text-gray-300 dark:hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    }`}
                  >
                    <button className="bg-green-500 rounded-sm text-gray-100 px-3 p-2">
                      Contact
                    </button>
                  </Link>
                  <Themebutton />
                </div>
              </div>

              <div className="-mr-2 flex items-center sm:hidden">
                <Themebutton />
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500 dark:hover:bg-gray-800">
                  {open ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      />
                    </svg>
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <Link
                href="/"
                prefetch
                className={`${
                  pathname == "/"
                    ? "bg-teal-50  border-teal-500 text-teal-500 block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:bg-gray-800"
                    : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-teal-500 block pl-3 pr-4 py-2 dark:hover:bg-gray-700 border-l-4 text-base font-medium dark:text-white"
                } `}
              >
                Home
              </Link>

              <Link
                href="/Blogs"
                prefetch
                className={`${
                  pathname == "/Blogs"
                    ? "bg-teal-50 border-teal-500 text-teal-500 block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:bg-gray-800"
                    : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-teal-500 block pl-3 pr-4 py-2 dark:hover:bg-gray-700 border-l-4 text-base font-medium dark:text-white"
                } `}
              >
                Blogs
              </Link>
              <Link
                href="/guestbook"
                prefetch
                className={`${
                  pathname == "/guestbook"
                    ? "bg-teal-50 border-teal-500 text-teal-500 block pl-3 pr-4 py-2 border-l-4 text-base font-medium dark:bg-gray-800"
                    : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-teal-500 block pl-3 pr-4 py-2 dark:hover:bg-gray-700 border-l-4 text-base font-medium dark:text-white"
                } `}
              >
                Contact
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

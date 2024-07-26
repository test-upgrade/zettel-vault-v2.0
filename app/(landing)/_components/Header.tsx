"use client";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { SignInButton , UserButton} from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
// import { Button } from "@/components/ui/button";
import { brainwave } from "../assets";
import { navigation } from "../constants";
import Link from "next/link";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "../_components/design/Header";
import Image from "next/image";
const Header: React.FC = () => {
  // const { asPath } = useRouter();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="block w-[12rem] xl:mr-8" href="./">
          <Image src={"/logo.gif"} width={600} height={50} alt={""} />

        </a>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  item.url === undefined ? "z-2 lg:text-n-1" : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>

          <HamburgerMenu />
        </nav>

        {/* <a
          href="#signup"
          className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
        >
          New account
        </a> */}
        <div className="ml-auto justify-end w-full flex items-center gap-x-1">
                {isLoading &&(
                    <p>...</p>
                )}
                {!isAuthenticated && !isLoading &&(
                    <>
                    <SignInButton mode="modal">
                        <Button >
                            Enter vault
                        </Button>
                    </SignInButton>
                    </>
                )}
                {isAuthenticated && !isLoading &&(
                    <>
                    <Button  >
                        <Link href="/vault">
                        Get started
                        </Link>
                    </Button>
                    <UserButton
                        afterSignOutUrl="/"
                    />
                    </>
                )}
                {/* <ModeToggle /> */}
            </div>

        {/* <Button
          className="ml-auto lg:hidden"
          // px="px-3"
          onClick={toggleNavigation}
        > */}
          {/* <MenuSvg openNavigation={openNavigation} /> */}
        {/* </Button> */}
      </div>
    </div>
  );
};

export default Header;

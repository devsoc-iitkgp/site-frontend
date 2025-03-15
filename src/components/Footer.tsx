import Image from "next/image";
import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <div className="flex flex-col items-center font-poppins">
      <div className="my-8 flex items-center gap-3 sm:gap-6 md:my-12">
        <Image
          src="/logo-devsoc.png"
          alt="devsoc-logo"
          height={90}
          width={95}
          className="h-[56px] w-[50px] sm:h-[67px] sm:w-[60px] md:h-[77px] md:w-[70px] lg:h-[95px] lg:w-[90px]"
        />
        <div className="flex flex-col font-montserrat text-[20px] font-bold sm:text-[22px] md:text-[28px] lg:text-[32px]">
          <h1>Developers’</h1>
          <h1>Society</h1>
        </div>
      </div>

      <hr className="w-10/12 opacity-50" />

      <div className="my-8 flex flex-col items-center justify-between px-4 py-4 text-sm sm:text-base lg:w-screen lg:px-6 xl:w-[1280px] xl:flex-row">
        <div className="mb-4 flex flex-col gap-8 lg:w-3/4 lg:flex-row lg:justify-between xl:w-[1000px] xl:justify-between xl:gap-16">
          <div>
            <h3 className="font-semibold">Reach Us</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex gap-4">
                <img src="/assets/icons/footer/phone.svg" alt="phone" />
                <span>+91 98213 91634, +91 82829 01570</span>
              </li>
              <li className="flex gap-4">
                <img src="assets/icons/footer/mail.svg" alt="mail" />
                <a
                  href="mailto:devsoc.iitkgp@gmail.com"
                  className="text-mdhover:underline"
                >
                  devsoc.iitkgp@gmail.com
                </a>
              </li>
              <li className="flex gap-4">
                <img src="/assets/icons/footer/location.svg" alt="location" />
                <a
                  href="https://maps.app.goo.gl/ioeSDGcSAbDQyMDC8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  Indian Institute of Technology Kharagpur
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Follow Us</h3>
            <div className="mt-4 flex gap-4">
              <a
                href="https://in.linkedin.com/company/devsoc-iitkgp"
                target="_blank"
              >
                <img src="/assets/icons/footer/linkedin.svg" alt="linkedin" />
              </a>
              <a href="https://www.facebook.com/devsoc.iitkgp/" target="_blank">
                <img src="/assets/icons/footer/facebook.svg" alt="facebook" />
              </a>
              <a
                href="https://www.instagram.com/devsoc.iitkgp/"
                target="_blank"
              >
                <img src="/assets/icons/footer/instagram.svg" alt="instagram" />
              </a>
              <a href="https://github.com/devsoc-iitkgp" target="_blank">
                <img src="/assets/icons/footer/github.svg" alt="github" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold">Quick Links</h3>
            <div className="mt-4 flex gap-10">
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="flex gap-2 hover:underline">
                    <span>Home</span>{" "}
                    <img
                      src="/assets/icons/footer/external-link.svg"
                      alt="external_link"
                    />
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="flex gap-2 hover:underline">
                    <span>About</span>{" "}
                    <img
                      src="/assets/icons/footer/external-link.svg"
                      alt="external_link"
                    />
                  </Link>
                </li>
              </ul>
              <ul className="space-y-2">
                <li>
                  <Link href="/team" className="flex gap-2 hover:underline">
                    <span>Our Team</span>{" "}
                    <img
                      src="/assets/icons/footer/external-link.svg"
                      alt="external_link"
                    />
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="flex gap-2 hover:underline">
                    <span>Contact Us</span>{" "}
                    <img
                      src="/assets/icons/footer/external-link.svg"
                      alt="external_link"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 xl:mt-0">
          <Image src="/tsg-logo.png" alt="tsg-logo" height={173} width={159} />
        </div>
      </div>
      <p className="mb-6 px-4 text-sm sm:text-base">
        © Developers&apos; society, IIT Kharagpur. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;

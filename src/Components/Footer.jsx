import React from "react";
import Footerimg from "../assets/footer.png";

const Footer = () => {
  return (
    <div className="grid max-w-1264px mx-auto grid-cols-2 md:grid-cols-4 bg-[#0C0D0E] px-6 pt-12">
      {/* Column 1 */}
      <div>
        <img className="h-15" src={Footerimg} alt="footer logo" />
        <div className="text-gray-100 font-normal pt-3 pb-4">
          <h1>Stack Overflow</h1>
        </div>
        <div className="text-gray-300 flex flex-col gap-2 text-[12px]">
          <a href="#">Questions</a>
          <a href="#">Help</a>
          <a href="#">Chat</a>
        </div>
      </div>

      {/* Column 2 */}
      <div>
        <div className="text-gray-100 font-normal pt-18 pb-4">
          <h1>Business</h1>
        </div>
        <div className="text-gray-300 flex flex-col gap-2 text-[12px]">
          <a href="#">Stack Internal</a>
          <a href="#">Stack Data Licensing</a>
          <a href="#">Stack Ads</a>
        </div>
      </div>

      {/* Column 3 */}
      <div>
        <div className="text-gray-100 font-normal pt-18 pb-4">
          <h1>Company</h1>
        </div>
        <div className="text-gray-300 flex flex-col gap-2 text-[13px]">
          <a href="#">About</a>
          <a href="#">Press</a>
          <a href="#">Work Here</a>
          <a href="#">Legal</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact Us</a>
          <a href="#">Cookie Settings</a>
          <a href="#">Cookie Policy</a>
        </div>
      </div>

      {/* Column 4 */}
      <div>
        <div className="text-gray-100 font-normal pt-18 pb-4">
          <h1>Stack Exchange Network</h1>
        </div>
        <div className="text-gray-300 flex flex-col gap-2 text-[13px]">
          <a href="#">Technology</a>
          <a href="#">Culture & recreation</a>
          <a href="#">Life & arts</a>
          <a href="#">Science</a>
          <a href="#">Professional</a>
          <a className="pb-4" href="#">
            Business
          </a>
          <a href="#">API</a>
          <a href="#">Data</a>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="col-span-2 md:col-span-4 flex gap-3 text-gray-300 text-[11px] mt-10">
        <a href="#">Blog</a>
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
        <a href="#">LinkedIn</a>
        <a href="#">Instagram</a>
      </div>

      {/* Bottom Paragraph */}
      <p className="col-span-2 md:col-span-4 text-gray-300 text-[11px] mt-2 pb-6 text-left">
        Site design / logo © 2026 Stack Exchange Inc; user contributions
        licensed under CC BY-SA. rev 2026.2.19.39917
      </p>
    </div>
  );
};

export default Footer;

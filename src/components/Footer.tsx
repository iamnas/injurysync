export function Footer() {
  return (
    <footer className="px-28 py-20 mt-20 w-full bg-[#ECF3FF] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-wrap gap-36 items-start w-full max-md:max-w-full">
        <div className="flex flex-col items-start justify-start min-w-60 w-[280px]">
          <div className="flex gap-3 justify-end items-end">
            {/* src="Logo.png" */}
            <img
             src="footer_logo.svg"
              alt="Company Logo"
              className="object-contain self-stretch my-auto  w-[210px] "
            />
          </div>
          <p className="self-stretch mt-4 text-sm leading-6 text-[#475467]">
            InjurySync is a powerful client intake and case management solution
            designed to streamline how law firms handle personal injury cases
            efficiently and securely.
          </p>
          <div className="flex gap-3 items-center mt-4">
            <a href="#" aria-label="Twitter">
              <img
                src="X.png"
                alt="Twitter"
                className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
              />
            </a>
            <a href="#" aria-label="LinkedIn">
              <img
                src="LinkedIn.png"
                alt="LinkedIn"
                className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
              />
            </a>

            <a href="#" aria-label="Instagram">
              <img
                src="Instagram.png"
                alt="Instagram"
                className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square"
              />
            </a>

          </div>
        </div>
        <nav className="flex flex-wrap flex-1 shrink gap-8 justify-between items-start text-base basis-0 min-w-60 text-[#475467] max-md:max-w-full">
          <div className="w-32">
            <h3 className="font-medium">Quick Links</h3>
            <ul className="mt-4 w-full">
              <li className="py-2">
                <a href="#" className="hover:text-[#465FFF]">
                  Home
                </a>
              </li>
              <li className="py-2 mt-2.5">
                <a href="#" className="hover:text-[#465FFF]">
                  Custom Solutions
                </a>
              </li>
              <li className="py-2 mt-2.5">
                <a href="#" className="hover:text-[#465FFF]">
                  Our Providers
                </a>
              </li>
            </ul>
          </div>
          <div className="w-32">
            <h3 className="font-medium">Our Providers</h3>
            <ul className="mt-4 w-full whitespace-nowrap">
              <li className="py-2">
                <a href="#" className="hover:text-[#465FFF]">
                  Doctors
                </a>
              </li>
              <li className="py-2 mt-2.5">
                <a href="#" className="hover:text-[#465FFF]">
                  Attorneys
                </a>
              </li>
            </ul>
          </div>
          <div className="w-[180px]">
            <h3 className="font-medium">Support & Legal</h3>
            <ul className="mt-4 w-full">
              <li className="py-2">
                <a href="#" className="hover:text-[#465FFF]">
                  Security
                </a>
              </li>
              <li className="py-2 mt-2.5">
                <a href="#" className="hover:text-[#465FFF]">
                  Privacy Policy
                </a>
              </li>
              <li className="py-2 mt-2.5">
                <a href="#" className="hover:text-[#465FFF]">
                  End User Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="flex flex-col items-start pt-8 mt-16 w-full text-sm leading-loose border-t border-slate-400 text-[#475467] max-md:mt-10 max-md:max-w-full">
        <p className="gap-2.5 self-stretch">
          © Copyright 2022, All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
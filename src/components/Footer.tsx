import { MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="gradient-footer text-white py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Main Content */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Logo Section */}
          <div className="w-full lg:w-1/3 text-center lg:text-left mb-8 lg:mb-0">
            <div className="flex justify-center lg:justify-start items-center mb-4">
              <img src="/lovable-uploads/web3unilag-white.png" alt="Web3Unilag" className="h-10 sm:h-12 w-auto" />
            </div>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-4 max-w-xs mx-auto lg:mx-0">
              Ready to join the future of Web3 on campus?
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-x-2">
              <svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                <path d="M5 0.364258C4.19652 0.364258 3.41107 0.602519 2.743 1.04891C2.07492 1.49531 1.55422 2.12978 1.24674 2.87211C0.93926 3.61443 0.858809 4.43126 1.01556 5.21931C1.17231 6.00736 1.55923 6.73123 2.12738 7.29938C2.69553 7.86753 3.4194 8.25445 4.20745 8.4112C4.9955 8.56795 5.81233 8.4875 6.55465 8.18002C7.29698 7.87254 7.93145 7.35184 8.37785 6.68376C8.82424 6.01569 9.0625 5.23024 9.0625 4.42676C9.06126 3.3497 8.63285 2.3171 7.87125 1.55551C7.10966 0.793909 6.07706 0.365498 5 0.364258ZM8.4375 4.42676C8.43777 4.74377 8.394 5.05929 8.30742 5.36426H6.80313C6.89896 4.74293 6.89896 4.11058 6.80313 3.48926H8.30742C8.394 3.79422 8.43777 4.10974 8.4375 4.42676ZM3.98438 5.98926H6.01563C5.81551 6.64496 5.46812 7.24622 5 7.74707C4.53206 7.24609 4.18469 6.64487 3.98438 5.98926ZM3.83203 5.36426C3.72474 4.74386 3.72474 4.10965 3.83203 3.48926H6.1711C6.27838 4.10965 6.27838 4.74386 6.1711 5.36426H3.83203ZM1.5625 4.42676C1.56223 4.10974 1.60601 3.79422 1.69258 3.48926H3.19688C3.10104 4.11058 3.10104 4.74293 3.19688 5.36426H1.69258C1.60601 5.05929 1.56223 4.74377 1.5625 4.42676ZM6.01563 2.86426H3.98438C4.18449 2.20856 4.53188 1.6073 5 1.10645C5.46794 1.60743 5.81531 2.20865 6.01563 2.86426ZM8.05977 2.86426H6.66836C6.49299 2.22086 6.19742 1.61647 5.79727 1.08301C6.28075 1.19915 6.7334 1.41847 7.12419 1.72592C7.51498 2.03337 7.83466 2.42169 8.06133 2.86426H8.05977ZM4.20274 1.08301C3.80258 1.61647 3.50701 2.22086 3.33164 2.86426H1.93867C2.16534 2.42169 2.48503 2.03337 2.87582 1.72592C3.26661 1.41847 3.71926 1.19915 4.20274 1.08301ZM1.93867 5.98926H3.33164C3.50701 6.63265 3.80258 7.23704 4.20274 7.77051C3.71926 7.65436 3.26661 7.43505 2.87582 7.1276C2.48503 6.82014 2.16534 6.43182 1.93867 5.98926ZM5.79727 7.77051C6.19742 7.23704 6.49299 6.63265 6.66836 5.98926H8.06133C7.83466 6.43182 7.51498 6.82014 7.12419 7.1276C6.7334 7.43505 6.28075 7.65436 5.79727 7.77051Z" fill="white" fill-opacity="0.7" />
              </svg>
              <p className="text-sm text-white/70">Lagos, Nigeria.</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center sm:text-left">
              <h4 className="text-sm sm:text-base text-white/70 font-semibold mb-3 sm:mb-4">Company</h4>
              <ul className="space-y-2 sm:space-y-3">
                <li><a href="#about" className="text-white hover:text-white/70 text-sm transition-colors block">About Us</a></li>
                <li><a href="#programs" className="text-white hover:text-white/70 text-sm transition-colors block">Programs</a></li>
                <li><a href="#events" className="text-white hover:text-white/70 text-sm transition-colors block">Events</a></li>
                <li><a href="#team" className="text-white hover:text-white/70 text-sm transition-colors block">Team</a></li>
              </ul>
            </div>
            <div className="text-center sm:text-left">
              <h4 className="text-sm sm:text-base text-white/70 font-semibold mb-3 sm:mb-4">Resources</h4>
              <ul className="space-y-2 sm:space-y-3">
                <li><a href="https://web3unilag.substack.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/70 text-sm transition-colors block">Blog</a></li>
                <li><a href="https://drive.google.com/drive/folders/1tH-BtLtmhnIxc2t60hvU4UHnm6JWBDlo" target="_blank" rel="noopener noreferrer" className="text-white hover:text-white/70 text-sm transition-colors block">Brand Assets</a></li>
                <li><a href="#programs" className="text-white hover:text-white/70 text-sm transition-colors block">Programs</a></li>
                <li><a href="#contact" className="text-white hover:text-white/70 text-sm transition-colors block">Contact</a></li>
              </ul>
            </div>

          {/* Social Links */}
          <div className="w-full text-center sm:text-left">
            <h4 className="text-sm sm:text-base text-white/70 font-semibold mb-3 sm:mb-4">Socials</h4>
            <div className="space-y-3 sm:space-y-4 flex flex-col items-center sm:items-start">
              <a
                href="https://x.com/web3unilag"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 sm:gap-3 text-white hover:text-white/70 transition-colors group w-fit"
              >
                <div className="bg-white/10 p-1.5 sm:p-2 rounded-lg group-hover:bg-white/20 transition-colors flex-shrink-0">
                  <svg width="14" height="12" viewBox="0 0 44 41" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-4 sm:h-4">
                    <path d="M34.6526 0.8078H41.3995L26.6594 17.6548L44 40.5797H30.4225L19.7881 26.6759L7.61989 40.5797H0.868864L16.6349 22.56L0 0.8078H13.9222L23.5348 13.5165L34.6526 0.8078ZM32.2846 36.5414H36.0232L11.8908 4.63406H7.87892L32.2846 36.5414Z" fill="currentColor"/>
                  </svg>
                </div>
                <span className="text-sm font-medium">Follow us on X</span>
              </a>
              
              <a
                href="https://discord.gg/MM9qpmA99T"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 sm:gap-3 text-white hover:text-white/70 transition-colors group w-fit"
              >
                <div className="bg-white/10 p-1.5 sm:p-2 rounded-lg group-hover:bg-white/20 transition-colors flex-shrink-0">
                  <svg width="14" height="10" viewBox="0 0 48 37" fill="none" xmlns="http://www.w3.org/2000/svg" className="sm:w-4 sm:h-3">
                    <path d="M40.634 3.31127C37.5747 1.90751 34.294 0.873274 30.8638 0.280927C30.8013 0.269495 30.7389 0.298065 30.7067 0.355205C30.2848 1.10563 29.8175 2.08463 29.4902 2.85412C25.8008 2.30178 22.1304 2.30178 18.5166 2.85412C18.1893 2.06753 17.705 1.10563 17.2811 0.355205C17.249 0.299971 17.1866 0.271402 17.1241 0.280927C13.6958 0.871381 10.4151 1.90561 7.35387 3.31127C7.32737 3.32269 7.30465 3.34176 7.28958 3.3665C1.06678 12.6632 -0.6379 21.7314 0.19836 30.6872C0.202144 30.731 0.22674 30.7729 0.260796 30.7996C4.36642 33.8147 8.34341 35.6451 12.2466 36.8583C12.309 36.8774 12.3752 36.8546 12.415 36.8031C13.3383 35.5423 14.1613 34.2128 14.867 32.8147C14.9086 32.7328 14.8688 32.6357 14.7837 32.6033C13.4783 32.1081 12.2352 31.5043 11.0395 30.8187C10.9449 30.7634 10.9373 30.6281 11.0243 30.5634C11.2759 30.3748 11.5276 30.1786 11.7679 29.9805C11.8114 29.9444 11.872 29.9367 11.9231 29.9596C19.7786 33.5461 28.2831 33.5461 36.0459 29.9596C36.097 29.9348 36.1576 29.9425 36.203 29.9787C36.4433 30.1767 36.6949 30.3748 36.9484 30.5634C37.0354 30.6281 37.0298 30.7634 36.9352 30.8187C35.7394 31.5176 34.4964 32.1081 33.189 32.6014C33.1039 32.6338 33.0661 32.7328 33.1077 32.8147C33.8285 34.2108 34.6515 35.5403 35.5578 36.8012C35.5956 36.8546 35.6637 36.8774 35.7262 36.8583C39.6483 35.6451 43.6252 33.8147 47.7309 30.7996C47.7668 30.7729 47.7895 30.7329 47.7933 30.6891C48.7942 20.3352 46.117 11.3414 40.6964 3.3684C40.6832 3.34176 40.6605 3.32269 40.634 3.31127ZM16.04 25.2341C13.675 25.2341 11.7263 23.0628 11.7263 20.3962C11.7263 17.7297 13.6372 15.5584 16.04 15.5584C18.4617 15.5584 20.3916 17.7487 20.3538 20.3962C20.3538 23.0628 18.4428 25.2341 16.04 25.2341ZM31.9895 25.2341C29.6245 25.2341 27.6758 23.0628 27.6758 20.3962C27.6758 17.7297 29.5867 15.5584 31.9895 15.5584C34.4113 15.5584 36.3411 17.7487 36.3033 20.3962C36.3033 23.0628 34.4113 25.2341 31.9895 25.2341Z" fill="currentColor"/>
                  </svg>
                </div>
                <span className="text-sm font-medium">Join our Discord</span>
              </a>
            </div>
          </div>
        </div>
      </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-6 sm:my-8"></div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-white/50 text-center sm:text-left">
          <p>© {currentYear} Web3Unilag. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
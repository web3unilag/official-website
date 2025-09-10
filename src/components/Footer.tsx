import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="gradient-footer text-white py-12">
      <div className="container mx-auto px-6">
        {/* Main Content */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12">
          {/* Logo Section */}
          <div className="w-full flex flex-col gap-y-2 md:w-1/3">
            <div className="flex w-[56px] items-center">
              <img src="/lovable-uploads/web3unilag-white.png" alt="Web3Unilag" className="h-12 w-auto" />
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Ready to join the future of Web 3 on campus?
            </p>

            <div className="flex items-center gap-x-1">
              <svg width="10" height="9" viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 0.364258C4.19652 0.364258 3.41107 0.602519 2.743 1.04891C2.07492 1.49531 1.55422 2.12978 1.24674 2.87211C0.93926 3.61443 0.858809 4.43126 1.01556 5.21931C1.17231 6.00736 1.55923 6.73123 2.12738 7.29938C2.69553 7.86753 3.4194 8.25445 4.20745 8.4112C4.9955 8.56795 5.81233 8.4875 6.55465 8.18002C7.29698 7.87254 7.93145 7.35184 8.37785 6.68376C8.82424 6.01569 9.0625 5.23024 9.0625 4.42676C9.06126 3.3497 8.63285 2.3171 7.87125 1.55551C7.10966 0.793909 6.07706 0.365498 5 0.364258ZM8.4375 4.42676C8.43777 4.74377 8.394 5.05929 8.30742 5.36426H6.80313C6.89896 4.74293 6.89896 4.11058 6.80313 3.48926H8.30742C8.394 3.79422 8.43777 4.10974 8.4375 4.42676ZM3.98438 5.98926H6.01563C5.81551 6.64496 5.46812 7.24622 5 7.74707C4.53206 7.24609 4.18469 6.64487 3.98438 5.98926ZM3.83203 5.36426C3.72474 4.74386 3.72474 4.10965 3.83203 3.48926H6.1711C6.27838 4.10965 6.27838 4.74386 6.1711 5.36426H3.83203ZM1.5625 4.42676C1.56223 4.10974 1.60601 3.79422 1.69258 3.48926H3.19688C3.10104 4.11058 3.10104 4.74293 3.19688 5.36426H1.69258C1.60601 5.05929 1.56223 4.74377 1.5625 4.42676ZM6.01563 2.86426H3.98438C4.18449 2.20856 4.53188 1.6073 5 1.10645C5.46794 1.60743 5.81531 2.20865 6.01563 2.86426ZM8.05977 2.86426H6.66836C6.49299 2.22086 6.19742 1.61647 5.79727 1.08301C6.28075 1.19915 6.7334 1.41847 7.12419 1.72592C7.51498 2.03337 7.83466 2.42169 8.06133 2.86426H8.05977ZM4.20274 1.08301C3.80258 1.61647 3.50701 2.22086 3.33164 2.86426H1.93867C2.16534 2.42169 2.48503 2.03337 2.87582 1.72592C3.26661 1.41847 3.71926 1.19915 4.20274 1.08301ZM1.93867 5.98926H3.33164C3.50701 6.63265 3.80258 7.23704 4.20274 7.77051C3.71926 7.65436 3.26661 7.43505 2.87582 7.1276C2.48503 6.82014 2.16534 6.43182 1.93867 5.98926ZM5.79727 7.77051C6.19742 7.23704 6.49299 6.63265 6.66836 5.98926H8.06133C7.83466 6.43182 7.51498 6.82014 7.12419 7.1276C6.7334 7.43505 6.28075 7.65436 5.79727 7.77051Z" fill="white" fill-opacity="0.7" />
              </svg>

              <p className="text-xs text-white/70">Lagos, Nigeria.</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="w-full md:w-1/3 grid grid-cols-3 gap-8">
            <div>
              <h4 className="text-base text-white/70 font-semibold mb-4">Company</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-white hover:text-white/70 text-sm transition-colors">About Us</a></li>
                <li><a href="#" className="text-white hover:text-white/70 text-sm transition-colors">Programs</a></li>
                <li><a href="#" className="text-white hover:text-white/70 text-sm transition-colors">Events</a></li>
                <li><a href="#" className="text-white hover:text-white/70 text-sm transition-colors">Team</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-base text-white/70 font-semibold mb-4">Resources</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-white hover:text-white/70 text-sm transition-colors">Blog</a></li>
                <li><a href="#" className="text-white hover:text-white/70 text-sm transition-colors">Documentation</a></li>
                <li><a href="#" className="text-white hover:text-white/70 text-sm transition-colors">Guides</a></li>
                <li><a href="#" className="text-white hover:text-white/70 text-sm transition-colors">Contact</a></li>
              </ul>
            </div>

          {/* Social Links */}
          <div className="w-full md:w-1/3 flex flex-col items-center md:items-end">
            <h4 className="text-base text-white/70 font-semibold mb-4 w-full md:text-right">Socials</h4>
            <div className="space-y-3">

            </div>
          </div>
        </div>
      </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/50">
          <p>© {currentYear} Web3Unilag. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
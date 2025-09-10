const Contact = () => {
  const socialLinks = {
    twitter: "https://twitter.com/Web3Unilag",
    github: "https://github.com/web3unilag",
    linkedin: "https://linkedin.com/company/web3unilag"
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get in Touch
          </h2>
          <p className="text-md text-muted-foreground max-w-3xl mx-auto">
            Feel free to contact us and we will get back to you as soon as we can
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="w-full lg:w-1/2 xl:w-2/5">
            <div className="flex flex-col gap-y-6 p-6 sm:p-8 rounded-xl ">
              <h3 className="text-2xl font-bold text-foreground">Contact Info</h3>

              <div className="flex flex-col gap-y-6">
                <div className="flex items-center gap-x-3">
                  <div className="bg-primary/20 p-2 rounded-lg">
                    <svg width="20" height="20" viewBox="0 0 14 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.5 0.5H2.5C1.90326 0.5 1.33097 0.737053 0.90901 1.15901C0.487053 1.58097 0.25 2.15326 0.25 2.75V19.25C0.25 19.8467 0.487053 20.419 0.90901 20.841C1.33097 21.2629 1.90326 21.5 2.5 21.5H11.5C12.0967 21.5 12.669 21.2629 13.091 20.841C13.5129 20.419 13.75 19.8467 13.75 19.25V2.75C13.75 2.15326 13.5129 1.58097 13.091 1.15901C12.669 0.737053 12.0967 0.5 11.5 0.5ZM12.25 17H1.75V5H12.25V17Z" fill="currentColor" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <a href="tel:+2348123456789" className="text-foreground hover:text-primary transition-colors">
                      +234 812 345 6789
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-x-3">
                  <div className="bg-primary/20 p-2 rounded-lg">
                    <svg width="20" height="20" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 0.5H1C0.801088 0.5 0.610322 0.579018 0.46967 0.71967C0.329018 0.860322 0.25 1.05109 0.25 1.25V14C0.25 14.3978 0.408035 14.7794 0.68934 15.0607C0.970644 15.342 1.35218 15.5 1.75 15.5H18.25C18.6478 15.5 19.0294 15.342 19.3107 15.0607C19.592 14.7794 19.75 14.3978 19.75 14V1.25C19.75 1.05109 19.671 0.860322 19.5303 0.71967C19.3897 0.579018 19.1989 0.5 19 0.5ZM10 8.48281L2.92844 2H17.0716L10 8.48281ZM1.75 13.0447V2.95531L7.25406 8L1.75 13.0447ZM8.36406 9.01719L9.48906 10.0531C9.62743 10.1801 9.80842 10.2506 9.99625 10.2506C10.1841 10.2506 10.3651 10.1801 10.5034 10.0531L11.6284 9.01719L17.0659 14H2.92844L8.36406 9.01719Z" fill="currentColor" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a href="mailto:contact@web3unilag.com" className="text-foreground hover:text-primary transition-colors">
                      contact@web3unilag.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 sm:gap-4 flex-wrap">
                <a
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:bg-foreground/10 p-3 rounded-lg transition-colors"
                  aria-label="Twitter"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.162 5.656a8.384 8.384 0 01-2.402.658A4.196 4.196 0 0021.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 00-7.126 3.814 11.874 11.874 0 01-8.62-4.37 4.168 4.168 0 00-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 01-1.894-.523v.052a4.185 4.185 0 003.355 4.101 4.21 4.21 0 01-1.89.072A4.185 4.185 0 007.97 16.65a8.394 8.394 0 01-6.19 1.732 11.83 11.83 0 006.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 002.087-2.165z" />
                  </svg>
                </a>
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:bg-foreground/10 p-3 rounded-lg transition-colors"
                  aria-label="GitHub"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.254-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.578 9.578 0 0112 6.836c.85.004 1.705.115 2.504.336 1.909-1.294 2.747-1.026 2.747-1.026.546 1.377.202 2.393.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.42 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:bg-foreground/10 p-3 rounded-lg transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-1/2 xl:w-3/5">
            <div className="flex flex-col gap-y-6 p-6 sm:p-8 rounded-xl  w-full">
              <h3 className="text-2xl font-bold text-foreground">Contact Info</h3>
              <form action="">
                <div className="flex flex-col gap-y-6 w-full">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Name" 
                      className="w-full p-3 bg-transparent border-b border-foreground/30 focus:border-primary/80 focus:outline-none transition-colors" 
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="Email" 
                      className="w-full p-3 bg-transparent border-b border-foreground/30 focus:border-primary/80 focus:outline-none transition-colors" 
                    />
                  </div>
                  <div>
                    <textarea 
                      placeholder="Message" 
                      rows={4}
                      className="w-full p-3 bg-transparent border-b border-foreground/30 focus:border-primary/80 focus:outline-none transition-colors resize-none"
                    ></textarea>
                  </div>
                </div>

                <div className="flex justify-end mt-2">
                  <button 
                    type="submit" 
                    className="py-3 px-6 sm:px-8 rounded-lg md:rounded-xl text-white fill-white flex items-center gap-x-2 bg-primary text-background hover:bg-primary/90 transition-colors text-sm sm:text-base"
                  >
                    <span className="text-white">Submit</span>
                    <svg width="20" height="20" viewBox="0 0 22 22" fill="white" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 sm:w-5 sm:h-5">
                      <path d="M21.3112 0.688511C21.1226 0.50001 20.8871 0.3652 20.629 0.297968C20.371 0.230736 20.0997 0.233512 19.843 0.306011H19.829L1.83461 5.76601C1.54248 5.8502 1.28283 6.02117 1.09007 6.25627C0.897302 6.49136 0.780525 6.77948 0.75521 7.08245C0.729895 7.38541 0.797238 7.68891 0.948314 7.95274C1.09939 8.21657 1.32707 8.42826 1.60117 8.55976L9.56242 12.4373L13.4343 20.3938C13.5547 20.6508 13.7462 20.868 13.9861 21.0196C14.226 21.1713 14.5042 21.2512 14.788 21.2498C14.8312 21.2498 14.8743 21.2479 14.9174 21.2441C15.2201 21.2196 15.5081 21.1031 15.7427 20.9102C15.9773 20.7174 16.1473 20.4573 16.2299 20.1651L21.6862 2.1707C21.6862 2.16601 21.6862 2.16132 21.6862 2.15664C21.7596 1.90066 21.7636 1.62976 21.6977 1.37174C21.6318 1.11373 21.4984 0.877908 21.3112 0.688511ZM14.7965 19.7357L14.7918 19.7488V19.7423L11.0362 12.0266L15.5362 7.52664C15.6709 7.38484 15.7449 7.19603 15.7424 7.00045C15.7399 6.80488 15.6611 6.61803 15.5228 6.47973C15.3845 6.34143 15.1976 6.26262 15.002 6.26012C14.8065 6.25761 14.6177 6.33161 14.4759 6.46632L9.97586 10.9663L2.25742 7.2107H2.25086H2.26399L20.2499 1.74976L14.7965 19.7357Z" fill="white" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
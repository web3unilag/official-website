import { Card } from "@/components/ui/card";
import { Linkedin, Twitter, Github, X } from "lucide-react";

const Team = () => {
  const teamMembers = [
    {
      name: "ADUNNI",
      role: "BLOCKCHAIN DEVELOPER",
      bio: "Full-stack blockchain developer with expertise in Solidity and DeFi protocols. Passionate about building scalable Web3 solutions.",
      image: "/lovable-uploads/8f028475-0b57-419b-8492-aedeadda6176.png",
      email: "adunni@web3unilag.com",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "KEHINDE",
      role: "COMMUNITY MANAGER",
      bio: "Experienced community builder focused on growing blockchain adoption across Lagos universities and fostering innovation.",
      image: "/lovable-uploads/8f028475-0b57-419b-8492-aedeadda6176.png",
      email: "kehinde@web3unilag.com",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "EMEKA",
      role: "TECHNICAL LEAD",
      bio: "Senior software engineer with 8+ years experience in distributed systems and blockchain architecture design.",
      image: "/lovable-uploads/a5fa2a11-b7c7-4dd3-9bbd-3618f915ab35.png",
      email: "emeke@web3unilag.com",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "FUNMI",
      role: "EDUCATION DIRECTOR",
      bio: "Curriculum developer and educator specializing in making complex blockchain concepts accessible to students and professionals.",
      image: "/lovable-uploads/e5eecc6c-849c-46d6-8b20-c73646e9a5c0.png",
      email: "funmi@web3unilag.com",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Meet our extraordinary team
          </h2>
          <p className="text-md text-muted-foreground max-w-3xl mx-auto">
            Our diverse team of blockchain experts, educators, and community builders
            are dedicated to advancing Web3 adoption across Lagos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="p-4 sm:p-6 text-center hover:shadow-xl transition-all duration-300 group border-2 border-[#1954C6] bg-transparent">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-6">
                <div className="flex justify-center sm:justify-start">
                  <img
                    src={member.image}
                    className="rounded-md w-full max-w-[200px] sm:w-52 sm:min-w-52 sm:max-w-52 h-32 min-h-32 max-h-32 object-cover"
                    alt={member.name}
                  />
                </div>

                <div className="flex flex-col text-center sm:text-start">
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 capitalize tracking-wide">
                    {member.name.toLowerCase()}
                  </h3>

                  <p className="text-white/60 font-medium text-sm leading-relaxed mb-4 sm:mb-6">
                    {member.bio}
                  </p>
                </div>
              </div>


              <div className="flex flex-col sm:flex-row w-full items-center gap-y-4 sm:gap-x-4">
                <div className="flex justify-center gap-x-4 sm:justify-between w-full sm:w-52">
                  <a
                    href={member.social.twitter}
                    className="bg-[#1C1C1C] flex justify-center items-center w-12 h-12 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                  >
                    <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.4377 27.1874C20.7557 27.1874 26.9479 17.8083 26.9479 9.67727C26.9479 9.41359 26.942 9.14406 26.9303 8.88039C28.1348 8.00927 29.1744 6.93026 30 5.69406C28.8782 6.19319 27.6871 6.51917 26.4674 6.66086C27.7516 5.89107 28.7132 4.68178 29.1738 3.25715C27.9657 3.97314 26.6445 4.4782 25.2668 4.7507C24.3385 3.76439 23.1112 3.11133 21.7746 2.8925C20.438 2.67367 19.0665 2.90125 17.8722 3.54006C16.6779 4.17887 15.7273 5.19332 15.1673 6.42658C14.6074 7.65984 14.4693 9.04321 14.7744 10.3628C12.3281 10.2401 9.93492 9.60457 7.74998 8.49756C5.56503 7.39055 3.63712 5.83674 2.09121 3.93684C1.3055 5.29149 1.06507 6.8945 1.41879 8.42005C1.77251 9.94561 2.69383 11.2792 3.99551 12.1499C3.01829 12.1189 2.06247 11.8558 1.20703 11.3823V11.4585C1.20616 12.8801 1.69762 14.2582 2.59789 15.3584C3.49815 16.4586 4.75165 17.2131 6.14531 17.4937C5.24007 17.7414 4.28998 17.7774 3.36855 17.5991C3.76182 18.8217 4.52697 19.8911 5.55721 20.6579C6.58746 21.4247 7.8314 21.8507 9.11543 21.8765C6.93553 23.5888 4.24272 24.5176 1.4707 24.5132C0.979109 24.5125 0.487999 24.4823 0 24.423C2.81607 26.2296 6.09191 27.1892 9.4377 27.1874Z" fill="white" />
                    </svg>
                  </a>
                  <a
                    href={member.social.github}
                    className="bg-[#1C1C1C] flex justify-center items-center w-12 h-12 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                  >
                    <svg width="20" height="16" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M25.3963 2.19434C23.4842 1.31699 21.4337 0.670598 19.2899 0.300381C19.2508 0.293236 19.2118 0.311092 19.1917 0.346805C18.928 0.815823 18.6359 1.4277 18.4314 1.90863C16.1255 1.56342 13.8315 1.56342 11.5729 1.90863C11.3683 1.41701 11.0656 0.815823 10.8007 0.346805C10.7806 0.312284 10.7416 0.294428 10.7026 0.300381C8.55989 0.669415 6.50945 1.31581 4.59617 2.19434C4.57961 2.20149 4.56541 2.2134 4.55599 2.22887C0.66674 8.03932 -0.398688 13.707 0.123975 19.3043C0.12634 19.3317 0.141712 19.3579 0.162998 19.3745C2.72901 21.259 5.21463 22.403 7.6541 23.1613C7.69314 23.1732 7.73451 23.1589 7.75935 23.1267C8.33641 22.3387 8.8508 21.5078 9.29185 20.634C9.31787 20.5828 9.29303 20.5221 9.23983 20.5019C8.42391 20.1924 7.647 19.815 6.89966 19.3865C6.84055 19.3519 6.83582 19.2674 6.8902 19.2269C7.04747 19.1091 7.20477 18.9864 7.35494 18.8626C7.38211 18.84 7.41997 18.8353 7.45192 18.8495C12.3616 21.0911 17.6769 21.0911 22.5287 18.8495C22.5606 18.8341 22.5985 18.8389 22.6268 18.8615C22.7771 18.9853 22.9343 19.1091 23.0928 19.2269C23.1472 19.2674 23.1436 19.3519 23.0845 19.3865C22.3372 19.8233 21.5602 20.1924 20.7431 20.5007C20.6899 20.5209 20.6663 20.5828 20.6923 20.634C21.1428 21.5066 21.6572 22.3375 22.2236 23.1256C22.2473 23.1589 22.2898 23.1732 22.3289 23.1613C24.7802 22.403 27.2658 21.259 29.8318 19.3745C29.8543 19.3579 29.8685 19.3329 29.8708 19.3055C30.4964 12.8343 28.8231 7.21318 25.4353 2.23005C25.427 2.2134 25.4128 2.20149 25.3963 2.19434ZM10.025 15.8961C8.54687 15.8961 7.32892 14.539 7.32892 12.8724C7.32892 11.2058 8.52325 9.84878 10.025 9.84878C11.5386 9.84878 12.7448 11.2178 12.7211 12.8724C12.7211 14.539 11.5268 15.8961 10.025 15.8961ZM19.9934 15.8961C18.5153 15.8961 17.2974 14.539 17.2974 12.8724C17.2974 11.2058 18.4917 9.84878 19.9934 9.84878C21.507 9.84878 22.7132 11.2178 22.6896 12.8724C22.6896 14.539 21.507 15.8961 19.9934 15.8961Z" fill="white" />
                    </svg>
                  </a>
                  <a
                    href={member.social.linkedin}
                    className="bg-[#1C1C1C] flex justify-center items-center w-12 h-12 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                  >
                    <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M26.8219 3.06893C26.6766 2.9435 26.4999 2.86008 26.3108 2.82766C26.1216 2.79524 25.9272 2.81504 25.7485 2.88494L1.99924 12.1791C1.66266 12.31 1.37771 12.5466 1.18728 12.8535C0.996848 13.1603 0.911252 13.5207 0.943375 13.8804C0.975498 14.2401 1.1236 14.5797 1.36539 14.8479C1.60718 15.1161 1.92956 15.2986 2.28401 15.3678L8.43752 16.576V23.4373C8.43631 23.811 8.54737 24.1765 8.75632 24.4864C8.96527 24.7962 9.26246 25.0362 9.6094 25.1752C9.95579 25.3166 10.3367 25.3506 10.7027 25.2726C11.0686 25.1947 11.4027 25.0084 11.6614 24.7381L14.6285 21.6607L19.336 25.781C19.6756 26.0823 20.1136 26.249 20.5676 26.2498C20.7665 26.2496 20.9642 26.2184 21.1535 26.1572C21.4629 26.0591 21.7411 25.8816 21.9604 25.6425C22.1798 25.4033 22.3327 25.1109 22.4039 24.7943L27.1606 4.10135C27.2031 3.91473 27.1941 3.72004 27.1344 3.53817C27.0748 3.35629 26.9667 3.19408 26.8219 3.06893ZM19.6571 7.28768L9.15823 14.8064L3.34572 13.6662L19.6571 7.28768ZM10.3125 23.4373V17.8732L13.2176 20.4209L10.3125 23.4373ZM20.5699 24.3748L10.8809 15.8787L24.8262 5.88377L20.5699 24.3748Z" fill="white" />
                    </svg>
                  </a>
                </div>

                <div className="flex flex-col gap-y-2">
                  <div className="flex items-center gap-x-2">
                    <svg width="14" height="22" viewBox="0 0 14 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.5 0.5H2.5C1.90326 0.5 1.33097 0.737053 0.90901 1.15901C0.487053 1.58097 0.25 2.15326 0.25 2.75V19.25C0.25 19.8467 0.487053 20.419 0.90901 20.841C1.33097 21.2629 1.90326 21.5 2.5 21.5H11.5C12.0967 21.5 12.669 21.2629 13.091 20.841C13.5129 20.419 13.75 19.8467 13.75 19.25V2.75C13.75 2.15326 13.5129 1.58097 13.091 1.15901C12.669 0.737053 12.0967 0.5 11.5 0.5ZM1.75 5H12.25V17H1.75V5ZM2.5 2H11.5C11.6989 2 11.8897 2.07902 12.0303 2.21967C12.171 2.36032 12.25 2.55109 12.25 2.75V3.5H1.75V2.75C1.75 2.55109 1.82902 2.36032 1.96967 2.21967C2.11032 2.07902 2.30109 2 2.5 2ZM11.5 20H2.5C2.30109 20 2.11032 19.921 1.96967 19.7803C1.82902 19.6397 1.75 19.4489 1.75 19.25V18.5H12.25V19.25C12.25 19.4489 12.171 19.6397 12.0303 19.7803C11.8897 19.921 11.6989 20 11.5 20Z" fill="white" />
                    </svg>
                    <span className="text-white/60 text-sm font-medium">
                      +234 8123456789
                    </span>
                  </div>


                  <div className="flex items-center justify-center sm:justify-start gap-x-2 w-full sm:w-auto">
                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 0.5H1C0.801088 0.5 0.610322 0.579018 0.46967 0.71967C0.329018 0.860322 0.25 1.05109 0.25 1.25V14C0.25 14.3978 0.408035 14.7794 0.68934 15.0607C0.970644 15.342 1.35218 15.5 1.75 15.5H18.25C18.6478 15.5 19.0294 15.342 19.3107 15.0607C19.592 14.7794 19.75 14.3978 19.75 14V1.25C19.75 1.05109 19.671 0.860322 19.5303 0.71967C19.3897 0.579018 19.1989 0.5 19 0.5ZM10 8.48281L2.92844 2H17.0716L10 8.48281ZM7.25406 8L1.75 13.0447V2.95531L7.25406 8ZM8.36406 9.01719L9.48906 10.0531C9.62743 10.1801 9.80842 10.2506 9.99625 10.2506C10.1841 10.2506 10.3651 10.1801 10.5034 10.0531L11.6284 9.01719L17.0659 14H2.92844L8.36406 9.01719ZM12.7459 8L18.25 2.95438V13.0456L12.7459 8Z" fill="white" />
                    </svg>
                    <span className="text-white/60 text-sm font-medium truncate">{member.email || 'email@web3unilag.com'}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
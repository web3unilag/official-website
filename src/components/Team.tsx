import { Card } from "@/components/ui/card";
import { Mail, MessageCircle, Send, X } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useState } from "react";

const Team = () => {
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation();
  const { ref: gridRef, isInView: gridInView } = useScrollAnimation();
  const [copiedMessages, setCopiedMessages] = useState<{[key: string]: string}>({});

  const copyToClipboard = async (text: string, platform: string, memberName: string) => {
    try {
      await navigator.clipboard.writeText(text);
      const messageKey = `${memberName}-${platform}`;
      setCopiedMessages(prev => ({
        ...prev,
        [messageKey]: `${platform} username copied!`
      }));
      setTimeout(() => {
        setCopiedMessages(prev => {
          const newMessages = { ...prev };
          delete newMessages[messageKey];
          return newMessages;
        });
      }, 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };
  const teamMembers = [
    {
      name: "SEUN",
      role: "PRESIDENT",
      bio: "Leading web3unilag with vision and dedication to advance blockchain education and adoption across Lagos universities.",
      image: "/excos/Seun_president.jpg",
      email: "seun@web3unilag.com",
      social: {
        x: "https://x.com/olokoji",
        discord: "olokoji",
        telegram: "olokoji"
      }
    },
    {
      name: "YINUSA",
      role: "VICE PRESIDENT",
      bio: "Driving web3 initiatives and fostering innovation within the university blockchain community at web3unilag.",
      image: "/excos/Abdullahi_VP.jpg",
      email: "yinusaabdullahi12@gmail.com",
      social: {
        x: "https://x.com/Yinusaweb3",
        discord: "Yinusaweb3",
        telegram: "Yinusaweb3"
      }
    },
    {
      name: "BORME",
      role: "GENERAL SECRETARY",
      bio: "Managing organizational affairs and ensuring smooth operations of web3unilag activities and communications.",
      image: "/excos/Borme_Gen_sec.jpg",
      email: "borme@web3unilag.com",
      social: {
        x: "https://x.com/0x_borme?s=21",
        discord: "https://discord.com/invite/Q3NaQm2A",
        telegram: "osaborme"
      }
    },
    {
      name: "TAIWO",
      role: "TECHNICAL LEAD",
      bio: "Leading technical development and blockchain architecture, ensuring high-quality web3 solutions and educational content.",
      image: "/excos/Taiwo_Technical_lead.jpg",
      email: "taiwotriumphant@gmail.com",
      social: {
        x: "https://x.com/dumbdevs",
        discord: "dumbdevs.apt",
        telegram: "dumbdevs"
      }
    },
    {
      name: "EAZY",
      role: "COMMUNITY LEAD",
      bio: "Building and nurturing the web3unilag community, fostering engagement and collaboration among members.",
      image: "/excos/Eazy.jpg",
      email: "eazy@web3unilag.com",
      social: {
        x: "https://x.com/eazy",
        discord: "eazy",
        telegram: "eazy"
      }
    },
    {
      name: "MASTER ZEKS",
      role: "BD LEAD",
      bio: "Driving business development initiatives and partnerships to expand web3unilag's reach and impact.",
      image: "/excos/Zeks_BD_lead.jpg",
      email: "Masterzeks316@gmail.com",
      social: {
        x: "https://x.com/M_zekks",
        discord: "El_matador5122",
        telegram: "Master_zeks"
      }
    },
    {
      name: "JUSTICE",
      role: "COMMUNICATIONS LEAD",
      bio: "Technical Writer, Communications Lead @web3unilag, DeSci Advocate. Managing strategic communications at web3unilag",
      image: "/excos/Justice_social_media.jpg",
      email: "justice@web3unilag.com",
      social: {
        x: "https://x.com/0x1_siri",
        discord: "https://discord.com/channels/@0x1_siri",
        telegram: "justicesiri"
      }
    },
    {
      name: "TOBI",
      role: "SOCIAL MEDIA LEAD",
      bio: "Co-leading social media efforts to amplify web3unilag's message and engage with the broader blockchain community.",
      image: "/excos/Tobi_social_media.jpg",
      email: "tobi@web3unilag.com",
      social: {
        x: "https://x.com/tobi",
        discord: "tobi",
        telegram: "tobi"
      }
    },
    {
      name: "MBKBOSS",
      role: "CONTENT LEAD",
      bio: "Creating compelling content that educates and inspires the community about blockchain technology and web3 innovations.",
      image: "/excos/Mbkboss_content_lead.jpg",
      email: "olamidemubarak43@gmail.com",
      social: {
        x: "https://x.com/Mbkbosss",
        discord: "Mbkbosss",
        telegram: "Mbkbosss"
      }
    },
    {
      name: "KERO",
      role: "CONTENT LEAD",
      bio: "Co-leading content creation efforts to deliver high-quality educational materials and community resources.",
      image: "/excos/Kero_content_lead.jpg",
      email: "kero@web3unilag.com",
      social: {
        x: "https://x.com/_theadaku",
        discord: "theadaku",
        telegram: "theadaku"
      }
    },
    {
      name: "TITI",
      role: "WELFARE LEAD",
      bio: "Ensuring the well-being and support of all web3unilag members, creating an inclusive and caring community environment.",
      image: "/excos/Titi_welfare_lead.jpg",
      email: "titi@web3unilag.com",
      social: {
        x: "https://x.com/titi",
        discord: "titi",
        telegram: "titi"
      }
    },
    {
      name: "GRACE",
      role: "DESIGN LEAD",
      bio: "Leading design initiatives and creating visually compelling materials that represent web3unilag's brand and mission.",
      image: "/excos/Grace_design_lead.jpg",
      email: "grace@web3unilag.com",
      social: {
        x: "https://x.com/grace",
        discord: "grace",
        telegram: "grace"
      }
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div
          ref={headerRef}
          className={`text-center mb-16 animate-fade-in-up ${headerInView ? 'in-view' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Meet our extraordinary team
          </h2>
          <p className="text-md text-muted-foreground max-w-3xl mx-auto">
            Our diverse team of blockchain experts, educators, and community builders
            are dedicated to advancing web3 adoption across Lagos.
          </p>
        </div>

        <div
          ref={gridRef}
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 stagger-children ${gridInView ? 'in-view' : ''}`}
        >
          {teamMembers.map((member, index) => (
            <Card key={index} className="p-4 sm:p-6 text-center hover:shadow-xl hover-lift transition-all duration-300 group border-2 border-[#1954C6] bg-transparent">
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
                  <p className="text-[#1954C6] font-semibold text-sm mb-3 uppercase tracking-wide">
                    {member.role}
                  </p>

                  <p className="text-white/60 font-medium text-sm leading-relaxed mb-4 sm:mb-6">
                    {member.bio}
                  </p>
                </div>
              </div>


              <div className="relative">
                {(copiedMessages[`${member.name}-Discord`] || copiedMessages[`${member.name}-Telegram`]) && (
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-3 py-1 rounded-md text-sm whitespace-nowrap z-10">
                    {copiedMessages[`${member.name}-Discord`] || copiedMessages[`${member.name}-Telegram`]}
                  </div>
                )}
                <div className="flex justify-center gap-x-4">
                  <a
                    href={member.social.x}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#1C1C1C] flex justify-center items-center w-12 h-12 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                    title="X (Twitter)"
                  >
                    <svg width="20" height="18" viewBox="0 0 44 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M34.6526 0.8078H41.3995L26.6594 17.6548L44 40.5797H30.4225L19.7881 26.6759L7.61989 40.5797H0.868864L16.6349 22.56L0 0.8078H13.9222L23.5348 13.5165L34.6526 0.8078ZM32.2846 36.5414H36.0232L11.8908 4.63406H7.87892L32.2846 36.5414Z" fill="white" />
                    </svg>
                  </a>
                  <button
                    onClick={() => copyToClipboard(member.social.discord.replace('', ''), 'Discord', member.name)}
                    className="bg-[#1C1C1C] flex justify-center items-center w-12 h-12 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                    title="Copy Discord Username"
                  >
                    <svg width="20" height="15" viewBox="0 0 48 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M40.634 3.31127C37.5747 1.90751 34.294 0.873274 30.8638 0.280927C30.8013 0.269495 30.7389 0.298065 30.7067 0.355205C30.2848 1.10563 29.8175 2.08463 29.4902 2.85412C25.8008 2.30178 22.1304 2.30178 18.5166 2.85412C18.1893 2.06753 17.705 1.10563 17.2811 0.355205C17.249 0.299971 17.1866 0.271402 17.1241 0.280927C13.6958 0.871381 10.4151 1.90561 7.35387 3.31127C7.32737 3.32269 7.30465 3.34176 7.28958 3.3665C1.06678 12.6632 -0.6379 21.7314 0.19836 30.6872C0.202144 30.731 0.22674 30.7729 0.260796 30.7996C4.36642 33.8147 8.34341 35.6451 12.2466 36.8583C12.309 36.8774 12.3752 36.8546 12.415 36.8031C13.3383 35.5423 14.1613 34.2128 14.867 32.8147C14.9086 32.7328 14.8688 32.6357 14.7837 32.6033C13.4783 32.1081 12.2352 31.5043 11.0395 30.8187C10.9449 30.7634 10.9373 30.6281 11.0243 30.5634C11.2759 30.3748 11.5276 30.1786 11.7679 29.9805C11.8114 29.9444 11.872 29.9367 11.9231 29.9596C19.7786 33.5461 28.2831 33.5461 36.0459 29.9596C36.097 29.9348 36.1576 29.9425 36.203 29.9787C36.4433 30.1767 36.6949 30.3748 36.9484 30.5634C37.0354 30.6281 37.0298 30.7634 36.9352 30.8187C35.7394 31.5176 34.4964 32.1081 33.189 32.6014C33.1039 32.6338 33.0661 32.7328 33.1077 32.8147C33.8285 34.2108 34.6515 35.5403 35.5578 36.8012C35.5956 36.8546 35.6637 36.8774 35.7262 36.8583C39.6483 35.6451 43.6252 33.8147 47.7309 30.7996C47.7668 30.7729 47.7895 30.7329 47.7933 30.6891C48.7942 20.3352 46.117 11.3414 40.6964 3.3684C40.6832 3.34176 40.6605 3.32269 40.634 3.31127ZM16.04 25.2341C13.675 25.2341 11.7263 23.0628 11.7263 20.3962C11.7263 17.7297 13.6372 15.5584 16.04 15.5584C18.4617 15.5584 20.3916 17.7487 20.3538 20.3962C20.3538 23.0628 18.4428 25.2341 16.04 25.2341ZM31.9895 25.2341C29.6245 25.2341 27.6758 23.0628 27.6758 20.3962C27.6758 17.7297 29.5867 15.5584 31.9895 15.5584C34.4113 15.5584 36.3411 17.7487 36.3033 20.3962C36.3033 23.0628 34.4113 25.2341 31.9895 25.2341Z" fill="white" />
                    </svg>
                  </button>
                  <button
                    onClick={() => copyToClipboard(member.social.telegram.replace('', ''), 'Telegram', member.name)}
                    className="bg-[#1C1C1C] flex justify-center items-center w-12 h-12 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                    title="Copy Telegram Username"
                  >
                    <svg width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24ZM24.8601 17.7179C22.5257 18.6888 17.8603 20.6984 10.8638 23.7466C9.72766 24.1984 9.13251 24.6404 9.07834 25.0726C8.98677 25.803 9.90142 26.0906 11.1469 26.4822C11.3164 26.5355 11.4919 26.5907 11.6719 26.6492C12.8973 27.0475 14.5457 27.5135 15.4026 27.5321C16.1799 27.5489 17.0475 27.2284 18.0053 26.5707C24.5423 22.158 27.9168 19.9276 28.1286 19.8795C28.2781 19.8456 28.4852 19.803 28.6255 19.9277C28.7659 20.0524 28.7521 20.2886 28.7372 20.352C28.6466 20.7383 25.0562 24.0762 23.1982 25.8036C22.619 26.3421 22.2081 26.724 22.1242 26.8113C21.936 27.0067 21.7443 27.1915 21.56 27.3692C20.4215 28.4667 19.5678 29.2896 21.6072 30.6336C22.5873 31.2794 23.3715 31.8135 24.1539 32.3463C25.0084 32.9282 25.8606 33.5085 26.9632 34.2313C27.2442 34.4155 27.5125 34.6068 27.7738 34.7931C28.7681 35.5019 29.6615 36.1388 30.7652 36.0373C31.4065 35.9782 32.0689 35.3752 32.4053 33.5767C33.2004 29.3263 34.7633 20.1169 35.1244 16.3219C35.1561 15.9895 35.1163 15.5639 35.0843 15.3771C35.0523 15.1904 34.9855 14.9242 34.7427 14.7272C34.4552 14.4939 34.0113 14.4447 33.8127 14.4482C32.91 14.4641 31.5251 14.9456 24.8601 17.7179Z" fill="white" />
                    </svg>
                  </button>
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
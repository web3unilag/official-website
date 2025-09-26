import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

type EventFrameProps = {
  date: string;
  month: string;
  title: string;
  organizer: string;
  location: string;
  time: string;
  event_url: string;
};

const EventFrame = ({ date, month, title, organizer, location, time, event_url }: EventFrameProps) => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-center justify-between p-4 border border-primary rounded-lg gap-6">
      {/* Date and Month */}
      <div className="flex flex-col items-center md:items-start justify-center w-full md:w-max">
        <span className="text-6xl md:text-8xl font-bold text-white">{date}</span>
        <span className="text-lg md:text-2xl text-white">{month}</span>
      </div>

      {/* Title & Organizer */}
      <div className="flex-1 text-center md:text-left px-0 md:px-8 max-w-full md:max-w-max">
        <h3 className="text-xl md:text-2xl font-medium">{title}</h3>
        <p className="text-base md:text-2xl text-white/70">{organizer}</p>
      </div>

      {/* Location & Time */}
      <div className="flex flex-col gap-3 justify-between w-full md:w-max text-center md:text-left">
        <div className="gap-x-2 flex justify-center md:justify-start text-base md:text-xl items-center text-white/70">
          <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 4C6.38193..." fill="white" fillOpacity="0.7" />
          </svg>
          {location}
        </div>
        <div className="gap-x-2 flex justify-center md:justify-start text-base md:text-xl items-center text-white/70">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 1.875C..." fill="white" fillOpacity="0.7" />
          </svg>
          {time}
        </div>
      </div>

      {/* Button */}
      <div className="w-full md:w-auto flex justify-center md:justify-end">
        <a href={event_url}>
          <Button className="bg-primary text-lg md:text-xl hover:bg-blue-700 text-white px-5 md:px-7 rounded-none py-4 md:py-7 w-full md:w-auto">
            Register
          </Button>
        </a>
      </div>
    </div>
  );
};


export function Events() {
  const { ref: headerRef, isInView: headerInView } = useScrollAnimation();
  const { ref: framesRef, isInView: framesInView } = useScrollAnimation();

  const eventFrames = [
    {
      date: "26",
      month: "SEP",
      title: "Community Call: Q&A Session",
      organizer: "Organized by Web3 Unilag",
      location: "Google Meet",
      time: "7:00PM",
      event_url: "https://meet.google.com/yxm-yetq-nzp"
    },
    {
      date: "08",
      month: "NOV",
      title: "BIU Web3 Conference",
      organizer: "Organized by Web3 Unilag",
      location: "Unilag, Lagos",
      time: "9:00AM - 5:00PM",
      event_url: "https://lu.ma/"
    }
  ];

  return (
    <section className="py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <h2
          ref={headerRef}
          className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center animate-fade-in-up ${headerInView ? 'in-view' : ''}`}
        >
          Events and Showcase
        </h2>

        <div
          ref={framesRef}
          className={`flex flex-col gap-3 sm:gap-4 mb-8 sm:mb-12 stagger-children ${framesInView ? 'in-view' : ''}`}
        >
          {/* Dynamic Event Frames */}
          {eventFrames.map((frame, index) => (
            <div key={index} className="hover-lift">
              <EventFrame
                date={frame.date}
                month={frame.month}
                title={frame.title}
                organizer={frame.organizer}
                location={frame.location}
                time={frame.time}
                event_url={frame.event_url}
              />
            </div>
          ))}
        </div>

        {/* Video Showcase Section */}
        <div className="mt-4 sm:mt-6">
          <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center text-foreground">Video Highlights</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {/* Video 1 */}
            <div className="bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-4 sm:p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
              <div className="aspect-video rounded-xl overflow-hidden mb-4">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/pRlFERF4IxM?si=9oS9qpFfNkaOc2v9"
                  title="Web3 UNILAG Event Highlight 1"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="rounded-xl"
                ></iframe>
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">W3U Trading classes</h4>
            </div>

            {/* Video 2 */}
            <div className="bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-4 sm:p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
              <div className="aspect-video rounded-xl overflow-hidden mb-4">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/Y4gAk9uw1lI?si=iY6BVI-xGnU8KGAR"
                  title="Web3 UNILAG Event Highlight 2"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="rounded-xl"
                ></iframe>
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Video Editing Class: Exporting</h4>
            </div>

            {/* Video 3 */}
            <div className="bg-gradient-to-br from-card/50 to-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-4 sm:p-6 hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
              <div className="aspect-video rounded-xl overflow-hidden mb-4">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/JxgyM5TGlWk?si=eeyHTT5ZntkRqZCr"
                  title="Web3 UNILAG Event Highlight 3"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="rounded-xl"
                ></iframe>
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Video Editing LESSON 3 : CC Interface, Import and Sequence</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, MapPin, Users } from "lucide-react";

type EventFrameProps = {
  date: string;
  month: string;
  title: string;
  organizer: string;
  location: string;
  time: string;
};

const EventFrame = ({ date, month, title, organizer, location, time }: EventFrameProps) => {
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
        <Button className="bg-primary text-lg md:text-xl hover:bg-blue-700 text-white px-5 md:px-7 rounded-none py-4 md:py-7 w-full md:w-auto">
          Register
        </Button>
      </div>
    </div>
  );
};


export function Events() {
  const events = [
    {
      date: "08",
      month: "APR",
      year: "2025",
      title: "Web3 Builder Bootcamp",
      location: "Unilag, Lagos",
      attendees: 120,
      videoThumbnail: "/lovable-uploads/c28286ff-abdd-4961-b661-847b622fef07.png"
    },
    {
      date: "15",
      month: "MAY",
      year: "2025",
      title: "Blockchain Hackathon",
      location: "Unilag, Lagos",
      attendees: 85,
      videoThumbnail: "/lovable-uploads/c28286ff-abdd-4961-b661-847b622fef07.png"
    },
    {
      date: "22",
      month: "JUN",
      year: "2025",
      title: "Web3 Conference",
      location: "Unilag, Lagos",
      attendees: 200,
      videoThumbnail: "/lovable-uploads/c28286ff-abdd-4961-b661-847b622fef07.png"
    },
  ];

  const eventFrames = [
    {
      date: "08",
      month: "June",
      title: "Web3 Scaling event meeting",
      organizer: "Organized by Web3 Unilag",
      location: "Hall 3",
      time: "9:00AM - 11:30AM"
    },
    {
      date: "15",
      month: "July",
      title: "Blockchain Developer Workshop",
      organizer: "Organized by Web3 Unilag",
      location: "Conference Room B",
      time: "2:00PM - 5:00PM"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Events</h2>

        <div className="flex flex-col gap-4 mb-8">
          {/* Dynamic Event Frames */}
          {eventFrames.map((frame, index) => (
            <EventFrame
              key={index}
              date={frame.date}
              month={frame.month}
              title={frame.title}
              organizer={frame.organizer}
              location={frame.location}
              time={frame.time}
            />
          ))}
        </div>
        {/* Main Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {events.map((event, index) => (
            <div key={index} className="rounded-2xl h-[300px] p-4 flex flex-col justify-end overflow-hidden text-white hover:shadow-lg transition-all duration-300 group" style={{ background: 'linear-gradient(180deg, #1854C7 0%, #0C2961 100%)' }}>
              {/* Content */}
              <div className="flex justify-between">
                <div className="">
                  <div className="text-white/60 capitalize text-base mb-2">
                    {event.month.toLowerCase()} {event.date}, {event.year}
                  </div>
                  <h3 className="text-base font-bold text-white">
                    {event.title}
                  </h3>
                </div>

                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="50" height="50" rx="10" fill="#9B9CA1" fill-opacity="0.5" />
                  <path d="M38.125 25.0001C38.1258 25.3184 38.0442 25.6315 37.8881 25.9089C37.732 26.1864 37.5068 26.4187 37.2344 26.5833L20.35 36.9122C20.0653 37.0865 19.7393 37.1817 19.4056 37.1879C19.0718 37.194 18.7425 37.111 18.4516 36.9474C18.1634 36.7862 17.9234 36.5513 17.7561 36.2667C17.5889 35.982 17.5005 35.658 17.5 35.3278V14.6724C17.5005 14.3422 17.5889 14.0182 17.7561 13.7335C17.9234 13.4489 18.1634 13.2139 18.4516 13.0528C18.7425 12.8892 19.0718 12.8062 19.4056 12.8123C19.7393 12.8185 20.0653 12.9137 20.35 13.088L37.2344 23.4169C37.5068 23.5815 37.732 23.8138 37.8881 24.0913C38.0442 24.3687 38.1258 24.6818 38.125 25.0001Z" fill="white" />
                </svg>

              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
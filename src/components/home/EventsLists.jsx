// const EventsLists = () => {
//   return <section className="mainsection"></section>;
// };
// export default EventsLists;

import { useState } from "react";

const EventsList = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const events = [
    {
      title: "Sunday Worship Service",
      date: "Every Sunday of the Week",
      time: "9:00 AM",
      location: "Royal Seed Events Center, Oyo Rd, Ibadan",
      description:
        "Join us for worship, prayer, and fellowship as we celebrate the love of Christ together.",
      image: "/images/event1.jpg",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.0638020146903!2d3.9149414205465174!3d7.568023399889604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1039efdc948b4065%3A0xf9c47114ddf0d8ac!2sRoyal%20Seed%20Events%20Centre!5e0!3m2!1sen!2sng!4v1762946934269!5m2!1sen!2sng",
    },
    {
      title: "Moment Of Liberty, Ibadan",
      date: "Every Second Saturday of the Week",
      time: "9:00 AM",
      location: "Royal Seed Events Center, Oyo Rd, Ibadan",
      description:
        "Join us for worship, prayer, and fellowship as we celebrate the love of Christ together.",
      image: "/images/event1.jpg",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.0638020146903!2d3.9149414205465174!3d7.568023399889604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1039efdc948b4065%3A0xf9c47114ddf0d8ac!2sRoyal%20Seed%20Events%20Centre!5e0!3m2!1sen!2sng!4v1762946934269!5m2!1sen!2sng",
    },
    {
      title: "Moment Of Liberty, Lagos",
      date: "Every Third Saturday of the Week",
      time: "9:00 AM",
      location: "Finicky Restaurant, 6 Jibowu St, Yaba, Lagos 101252, Lagos",
      description:
        "Join us for worship, prayer, and fellowship as we celebrate the love of Christ together.",
      image: "/images/event1.jpg",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.0220196501587!2d3.366267672771735!3d6.518896093473582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c4e0130462b%3A0xfc985533bfed08be!2sFinicky%20Restaurant!5e0!3m2!1sen!2sng!4v1762947300441!5m2!1sen!2sng",
    },
    {
      title: "Singles Agenda 2026",
      date: "Coming Soon...",
      time: "To Be Determined",
      location: "Youth Hall, Grace Sanctuary",
      description:
        "A vibrant gathering for young believers to grow in faith and purpose.",
      image: "/images/event2.jpg",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.0638020146903!2d3.9149414205465174!3d7.568023399889604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1039efdc948b4065%3A0xf9c47114ddf0d8ac!2sRoyal%20Seed%20Events%20Centre!5e0!3m2!1sen!2sng!4v1762946934269!5m2!1sen!2sng",
    },
    {
      title: "Moment Of Liberty On Air",
      date: "Every Wednesday of the week",
      time: "9:30pm",
      location: "32fm, on the radio",
      description:
        "A vibrant gathering for young believers to grow in faith and purpose.",
      image: "/images/event2.jpg",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.0638020146903!2d3.9149414205465174!3d7.568023399889604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1039efdc948b4065%3A0xf9c47114ddf0d8ac!2sRoyal%20Seed%20Events%20Centre!5e0!3m2!1sen!2sng!4v1762946934269!5m2!1sen!2sng",
    },
    {
      title: "Dining With Jesus",
      date: "Every Wednesday of the week",
      time: "9:30pm",
      location: "32fm, on the radio",
      description:
        "A vibrant gathering for young believers to grow in faith and purpose.",
      image: "/images/event2.jpg",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.0638020146903!2d3.9149414205465174!3d7.568023399889604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1039efdc948b4065%3A0xf9c47114ddf0d8ac!2sRoyal%20Seed%20Events%20Centre!5e0!3m2!1sen!2sng!4v1762946934269!5m2!1sen!2sng",
    },
  ];

  return (
    <section className="mainsection py-20 relative">
      <h2 className="text-3xl font-bold text-center text-primary mb-10">
        Upcoming Events
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event, i) => (
          <div
            key={i}
            onClick={() => setSelectedEvent(event)}
            className="cursor-pointer card"
          >
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5 space-y-1">
              <h3 className="text-xl font-semibold text-primary">
                {event.title}
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                {event.date} • {event.time}
              </p>
              <p className="text-gray-900 text-sm">{event.location}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Light modal (inline, one block) */}
      {selectedEvent && (
        <div
          onClick={() => setSelectedEvent(null)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center p-8 justify-center z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="md:grid-cols-10 grid bg-white max-w-[972px] rounded-xl shadow-xl overflow-hidden transition-all animate-fadeIn"
          >
            <div className="col-span-4">
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="w-full h-60 object-cover hidden md:flex"
              />
              <div className="p-6 space-y-3">
                <h3 className="text-2xl font-bold text-primary">
                  {selectedEvent.title}
                </h3>
                <p className="text-sm text-gray-500">
                  {selectedEvent.date} • {selectedEvent.time}
                </p>
                <p className="text-gray-600">{selectedEvent.location}</p>
                <p className="text-gray-700 leading-relaxed">
                  {selectedEvent.description}
                </p>
              </div>
            </div>
            <div className="map col-span-6 bg-white w-full md:rounded-e-xl shadow-xl overflow-hidden transition-all animate-fadeIn h-full">
              <iframe
                src={selectedEvent.map}
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default EventsList;

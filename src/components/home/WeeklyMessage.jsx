import { weeklyMessages } from "../data/weeklymessage";

const WeeklyMessage = () => {
  const message = weeklyMessages[0];
  return (
    <section className="mainsection">
      <div className="grid grid-cols-1 md:grid-cols-10">
        <div className="img-div col-span-4 flex-col justify-center items-center bg-secondary hidden md:flex ">
          <img
            className="w-full h-full object-cover"
            src={message.image}
            alt="PREACHER"
          />
        </div>
        <div className="col-span-6 h-full self-start md:text-center flex flex-col justify-center items-center p-8 space-y-6">
          <h1 className="text-3xl font">{message.title}</h1>
          <p>{message.pastor}</p>
          <p className="text-text-secondary">{message.verse}</p>
          <div className="message-body">
            <p>{message.body}</p>
          </div>
          <p className="text-text-secondary self-end">{message.date}</p>
        </div>
      </div>
    </section>
  );
};
export default WeeklyMessage;

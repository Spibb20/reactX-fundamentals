export function Video(props) {
  return (
    <div className="flex gap-4 hover:scale-101 transition-all">
      <div
        className=" bg-contain bg-center bg-no-repeat w-[640px] h-[360px] rounded-xl flex items-end justify-end p-2"
        style={{ backgroundImage: `url(${props.thumbnail})` }}
      >
        <p className="bg-black w-15 h-fit flex justify-center items-center  rounded-sm">
          {props.duration}
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-2xl">{props.title}</p>
        <p className="text-gray-400">
          {props.views} • {props.age}
        </p>

        <div className="flex gap-4 items-center">
          <div>
            <img
              className="rounded-4xl"
              width={40}
              height={40}
              src={props.channelIcon}
            />
          </div>
          <p className="text-gray-400">{props.channel}</p>
          <div>
            <img
              className="rounded-4xl"
              width={20}
              height={20}
              src="https://www.iconpacks.net/icons/free-icons-7/free-gray-check-mark-tick-symbol-icon-24359-thumb.png"
            />
          </div>
        </div>
        <p className="text-gray-400">{props.description}</p>
      </div>
    </div>
  );
}

export function Shorts(props) {
  return (
    <div className="flex-col gap-4 hover:scale-101 transition-all">
      <div
        className=" bg-cover bg-center bg-no-repeat w-[360px] h-[640px] rounded-xl"
        style={{ backgroundImage: `url(${props.thumbnail})` }}
      ></div>
      <div className="w-[360px] flex-col overflow-hidden">
        <p className="text-2xl">{props.title}</p>
        <p className="text-gray-400">{props.description}</p>
        <p>{props.views}</p>
      </div>
    </div>
  );
}

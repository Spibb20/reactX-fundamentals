const videoData = [
  {
    title: "Nature Documentary",
    duration: "12:06",
    views: "278M",
    age: "6 years ago",
    channel: "Soothing Relaxation",
    channelIcon:
      "https://yt3.googleusercontent.com/q5e29rg0OB_0KwxRoiXTtdR7-ZqXRSgNMz4xUxRdzOZB0Rlq0tW4unYjtocw0aZ9F8bR-N79EA=s900-c-k-c0x00ffffff-no-rj",
    verified: "true",
    description:
      "40,000+ best royalty free nature videos & landscape stock video clips & footage. Download high-quality HD & 4K nature videos.",
    thumbnail:
      "https://getwallpapers.com/wallpaper/full/5/c/c/990248-large-beautiful-nature-wallpaper-hd-1920x1080-lockscreen.jpg",
  },
  {
    title: "Epic Mountain Sunrise",
    duration: "8:45",
    views: "12M",
    age: "2 years ago",
    channel: "Wild Earth Films",
    channelIcon:
      "https://yt3.googleusercontent.com/q5e29rg0OB_0KwxRoiXTtdR7-ZqXRSgNMz4xUxRdzOZB0Rlq0tW4unYjtocw0aZ9F8bR-N79EA=s900-c-k-c0x00ffffff-no-rj",
    verified: "true",
    description:
      "Witness the breathtaking sunrise from the world’s highest peaks captured in stunning 4K detail.",
    thumbnail:
      "https://wallpaperswide.com/download/nature_hd_background-wallpaper-1920x1080.jpg",
  },
  {
    title: "City Lights Timelapse",
    duration: "4:30",
    views: "54M",
    age: "3 years ago",
    channel: "Urban Explorer",
    channelIcon:
      "https://yt3.googleusercontent.com/q5e29rg0OB_0KwxRoiXTtdR7-ZqXRSgNMz4xUxRdzOZB0Rlq0tW4unYjtocw0aZ9F8bR-N79EA=s900-c-k-c0x00ffffff-no-rj",
    verified: "true",
    description:
      "Experience the buzzing energy of city nightlife with dazzling timelapse cinematography.",
    thumbnail:
      "https://wallpaperswide.com/download/city_lights_3-wallpaper-2560x1440.jpg",
  },
  {
    title: "Deep Sea Wonders",
    duration: "15:22",
    views: "89M",
    age: "A year ago",
    channel: "Blue Ocean Channel",
    channelIcon:
      "https://yt3.googleusercontent.com/q5e29rg0OB_0KwxRoiXTtdR7-ZqXRSgNMz4xUxRdzOZB0Rlq0tW4unYjtocw0aZ9F8bR-N79EA=s900-c-k-c0x00ffffff-no-rj",
    verified: "true",
    description:
      "Explore mysterious creatures of the deep ocean captured with advanced underwater cameras.",
    thumbnail:
      "https://wallpaperswide.com/download/deep_sea_monster-wallpaper-2048x1152.jpg",
  },
];

const shortsData = [
  {
    title: "Beautiful Switzerland in Summer!",
    description: "🎉🇨🇭 #switzerland #swiss #suisse #schweiz",
    views: "126K",
    thumbnail:
      "https://as2.ftcdn.net/jpg/01/47/46/63/1000_F_147466364_p5s9FejUgYz11RStQJGX7uihP1JXUdKA.jpg",
  },
  {
    title: "Tokyo Night Walk",
    description: "✨🏮 #tokyo #japan #citylights",
    views: "2.1M",
    thumbnail:
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0",
  },
  {
    title: "Fastest Car Launch",
    description: "🚗💨 #supercar #speedtest #auto",
    views: "780K",
    thumbnail:
      "https://w0.peakpx.com/wallpaper/247/360/HD-wallpaper-d-e-c-s-e-n-t-mclaren-grey-mountain-road-car-hypercar-supercar-rich-luxury.jpg",
  },
  {
    title: "Football Skills Challenge",
    description: "⚽🔥 #football #skills #challenge",
    views: "6.8M",
    thumbnail:
      "https://keeptheball.wordpress.com/wp-content/uploads/2012/04/lionel_messi_2011-fcb.jpg",
  },
  {
    title: "Crazy Skateboard Tricks",
    description: "🛹🔥 #skateboarding #extremesports",
    views: "3.3M",
    thumbnail:
      "https://images.stockcake.com/public/d/0/4/d0447ac5-66f8-422c-955b-b5d519dc9ebe_large/skateboarding-indoor-ramp-stockcake.jpg",
  },
];

export default function Home() {
  return (
    <div className="w-full h-screen p-20 flex flex-col gap-4 overflow-scroll">
      <div className="flex flex-col gap-2">
        {videoData.slice(0, 2).map((video, index) => (
          <Video key={index} {...video} />
        ))}
      </div>

      <div className="w-[640px] h-0.5 bg-gray-400 mt-2 mb-2"></div>

      <div className="flex gap-4 pt-2">
        {shortsData.map((short, index) => (
          <Shorts key={index} {...short} />
        ))}
      </div>

      <div className="flex flex-col gap-2">
        {videoData.slice(2).map((video, index) => (
          <Video key={index} {...video} />
        ))}
      </div>
    </div>
  );
}

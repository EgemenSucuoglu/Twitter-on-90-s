import "./Header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <img
          src="https://a0.anyrgb.com/pngimg/1630/1080/trr-twitter-crescent-app-store-social-media-facebook-iphone-blog-bird-internet.png"
          alt="twitter_logo"
        />
        <div className="header-title">Twitter on 90s</div>
      </div>

      <div className="header-right">
        <div className="header-home">
          <img
            src="https://lh5.ggpht.com/B130K0D9xQsuFaNNP-MsYmeRKt-YBjv7b76YQctmb4VlKVmcqjVtQbHe7NDKy32epRM"
            alt="home_logo"
          />
          <button>Home</button>
        </div>

        <img
          src="https://static.tildacdn.com/tild3834-6236-4637-b131-313135663863/_2.png"
          alt="message_logo"
        />
        <img
          src="https://image.pngaaa.com/713/668713-middle.png"
          alt="message_logo"
        />
      </div>
    </div>
  );
}

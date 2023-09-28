import "./WelcomeText.css";

const WelcomeText = () => {
  return (
    <div className="welcome-text">
      <div className="divtext-center1">
        <div className="heading-1">
          <div className="heading-1-child" />
        </div>
        <div className="headertext">
          <b className="join-the-decentralized-container">
            <p className="join-the-decentralized">
              Join the decentralized network that empowers individuals to
              directly or indirectly participate in the training, earnings, and
              hosting of
            </p>
            <p className="join-the-decentralized"> AI models</p>
          </b>
        </div>
        <div className="divmt-10">
          <div className="button3">
            <div className="spanhidden4">
              <div className="sign-up-now"> <a href="https://planck.sa-let.com/installation">Sign up now</a></div>
            </div>
          </div>
          <div className="learnmorebutton1">
            <b className="learn-more"><a href="https://planck.sa-let.com/about/introduction">Learn more → </a></b>
          </div>
        </div>
        <div className="democratizing-ai">{`Democratizing AI `}</div>
      </div>
    </div>
  );
};

export default WelcomeText;

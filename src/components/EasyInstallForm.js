import "./EasyInstallForm.css";

const EasyInstallForm = () => {
  return (
    <div className="frame16">
      <div className="divrelative2">
        <div className="divinline-flex">
          <div className="divflex2">
            <div className="span">
              <div className="easy-to-start">Easy to start,</div>
            </div>
            <div className="easy-to-instal">easy to install</div>
          </div>
          <div className="divflex3">
            <div className="span">
              <div className="you-can-start">
                You can start earning $PLN in just a few minutes
              </div>
            </div>
            <div className="span">
              <div className="you-can-start">
                with Planck’s simple installation process
              </div>
            </div>
          </div>
        </div>
        <div className="donutsvg">
          <img className="donutsvg-icon" alt="" src="/donutsvg.svg" />
        </div>
      </div>
    </div>
  );
};

export default EasyInstallForm;

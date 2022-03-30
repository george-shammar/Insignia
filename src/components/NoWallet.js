

export const NoWallet = () => {
    return (
      <div className="overall-nowallet">
        <div className="d-flex main flex-column justify-content-between align-text-center pt-2 px-4">
        <h1 className="pink azania py-2">Mage Wars</h1> 
        <p className="white">No Ethereum wallet was detected. Connect to Metamask to play Mage Wars.</p>
        <a
                href="http://metamask.io"
                target="_blank"
                rel="noopener noreferrer"
              > <div className="px-3 border-0 rounded-pill pt-2 wallet pill white">
            <p className="white">
              Install{" "}
             
                MetaMask
            </p>
          </div> </a>
        </div>
        </div>
    );
  }
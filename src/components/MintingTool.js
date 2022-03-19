import React from "react";
// import PropTypes from "prop-types";
// import { Form, Button, Card, Container, Row, Alert } from "react-bootstrap";
import { keys } from "regenerator-runtime";
const BN = require("bn.js");

const MintingTool = (props) => {
  const mintNFT = async () => {
    await window.contract.nft_mint(
      {
        token_id: `${window.accountId}-go-team-token`,
        metadata: {
          title: "My Non Fungible Team Token",
          description: "The Team Most Certainly Goes :)",
          media:
            "https://bafybeiftczwrtyr3k7a2k4vutd3amkwsmaqyhrdzlhvpt33dyjivufqusq.ipfs.dweb.link/goteam-gif.gif",
        },
        receiver_id: window.accountId,
      },
      300000000000000, // attached GAS (optional)
      new BN("1000000000000000000000000")
    );
  };

  return (
    <div>
      <div>
        {/* <div>
          <p>
            Step 2: After you have logged in, hit this button to mint your "Go
            Team" Token and go your{" "}
            <a href='https://wallet.testnet.near.org/'> wallet</a> and see your
            NFT
          </p>
        </div> */}
        <div className='d-flex justify-content-center'>
          <div
            disabled={props.userNFTStatus || window.accountId === ""}
            onClick={mintNFT}
            style={{ width: "50vw" }}
          >
                          <div>
                              <p className="wallet-scroll white font-meridian rounded-pill mb-0 mt-5 py-2">Creat Asset</p>
                          </div>
          </div>
        </div>
        <div className='d-flex justify-content-center'>
          {console.log(props.userNFTStatus)}
          {props.userNFTStatus ? (
            <div variant='danger' style={{ marginTop: "2vh" }}>
              <p style={{ textAlign: "center" }}>
                You have an Insignia Game character! {" "}
                <a href={"https://wallet.testnet.near.org/?tab=collectibles"}>
                  Click to check it out!
                </a>
                :)
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

MintingTool.propTypes = {};

export default MintingTool;

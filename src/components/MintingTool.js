import React from "react";
// import PropTypes from "prop-types";
// import { Form, Button, Card, Container, Row, Alert } from "react-bootstrap";
// import { keys } from "regenerator-runtime";
const BN = require("bn.js");

const MintingTool = (props) => {
  const mintNFT = async () => {
    await window.contract.nft_mint(
      {
        token_id: `${window.accountId}-go-team-token`,
        metadata: {
          title: "Insignia",
          description: "Insignia Metaverse",
          media:
            "https://bafybeibubx5e4k4ycoag5p54s3lmhnbcbny2ln6drydgj3oomxpzmuqn5a.ipfs.dweb.link/",
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
                              <p className="create-scroll white font-meridian rounded-pill my-3 py-2">Creat Asset</p>
                          </div>
          </div>
        </div>
        <div className='d-flex justify-content-center'>
          {console.log(props.userNFTStatus)}
          {props.userNFTStatus ? (
            <div variant='danger' style={{ marginTop: "2vh" }}>
              <p style={{ textAlign: "center" }}>
                You have an Insignia Game NFT. {" "}
                <a href={"https://wallet.testnet.near.org/?tab=collectibles"}>
                  Check it out under collectibles in your wallet!
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

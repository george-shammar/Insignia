// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/security/Pausable.sol";

contract Insignia is ERC721URIStorage, Pausable, Ownable {

    constructor()ERC721("Insignia", "INSIGNIA"){}

     uint256 COUNTER;

     uint256 private _price = 1200000000000000;

    struct Gladiator {
        string name;
        uint256 id;
        uint256 dna;
        uint8 level;
        uint8 rarity;
    }

    Gladiator[] public gladiators;

    event NewGladiator(address indexed owner, uint256 id, uint256 dna);

    // Creation
    function _createGladiator(string memory _name, string memory tokenURI) internal {
        uint8 randRarity = uint8(_createRandomNum(100));
        uint256 randDna = _createRandomNum(10**16);
        Gladiator memory newGladiator = Gladiator(_name, COUNTER, randDna, 1, randRarity);
        gladiators.push(newGladiator);
        _safeMint(msg.sender, COUNTER);
        _setTokenURI(COUNTER, tokenURI);
        emit NewGladiator(msg.sender, COUNTER, randDna);
        COUNTER++;
    }

    function createRandomGladiator(string memory _name, string memory tokenURI) public payable whenNotPaused {
        require(msg.value >= _price);
        _createGladiator(_name, tokenURI);
    }

    function updateFee(uint256 _fee) external onlyOwner {
        _price = _fee;
    }

    function getMintingPrice() public view returns (uint256) {
        return _price;
    }

    function withdraw() external payable onlyOwner {
        address payable _owner = payable(owner());
        _owner.transfer(address(this).balance);
    }

    // Getters
    function getGladiators() public view returns (Gladiator[] memory) {
        return gladiators;
    }

    function getOwnerGladiators(address _owner) public view returns (Gladiator[] memory) {
        Gladiator[] memory result = new Gladiator[](balanceOf(_owner));
        uint256 counter = 0;
        for (uint256 i = 0; i < gladiators.length; i++) {
        if (ownerOf(i) == _owner) {
            result[counter] = gladiators[i];
            counter++;
        }
        }
        return result;
    }

    // Actions
    function levelUp(uint256 _gladiatorId) public {
        require(ownerOf(_gladiatorId) == msg.sender);
        Gladiator storage gladiator = gladiators[_gladiatorId];
        gladiator.level++;
    }

    // Helpers
    function _createRandomNum(uint256 _mod) internal view returns (uint256) {
        uint256 randomNum = uint256(
        keccak256(abi.encodePacked(block.timestamp, msg.sender))
        );
        return randomNum % _mod;
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

}
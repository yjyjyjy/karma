const abiJson = [
  "event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId)",
  "event ApprovalForAll(address indexed owner, address indexed operator, bool approved)",
  "event DiceLanded(uint32 indexed result)",
  "event DiceRolled()",
  "event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)",
  "event Transfer(address indexed from, address indexed to, uint256 indexed tokenId)",
  "function LINK_token() view returns (address)",
  "function VRF_Coordinator() view returns (address)",
  "function approve(address to, uint256 tokenId)",
  "function balanceOf(address owner) view returns (uint256)",
  "function baseExtension() view returns (string)",
  "function chainlink() view returns (address)",
  "function cost() view returns (uint256)",
  "function fee() view returns (uint256)",
  "function getApproved(uint256 tokenId) view returns (address)",
  "function getBalance() view returns (uint256)",
  "function getRandomNumber() returns (bytes32 requestId)",
  "function isApprovedForAll(address owner, address operator) view returns (bool)",
  "function keyHash() view returns (bytes32)",
  "function maxMintAmount() view returns (uint256)",
  "function maxSupply() view returns (uint256)",
  "function mint(uint256 _mintAmount) payable",
  "function name() view returns (string)",
  "function notRevealedUri() view returns (string)",
  "function owner() view returns (address)",
  "function ownerOf(uint256 tokenId) view returns (address)",
  "function pause(bool _state)",
  "function paused() view returns (bool)",
  "function rawFulfillRandomness(bytes32 requestId, uint256 randomness)",
  "function refundOwner() payable",
  "function renounceOwnership()",
  "function reveal()",
  "function revealed() view returns (bool)",
  "function safeTransferFrom(address from, address to, uint256 tokenId)",
  "function safeTransferFrom(address from, address to, uint256 tokenId, bytes _data)",
  "function setApprovalForAll(address operator, bool approved)",
  "function setBaseExtension(string _newBaseExtension)",
  "function setBaseURI(string _newBaseURI)",
  "function setCost(uint256 _newCost)",
  "function setNotRevealedURI(string _notRevealedURI)",
  "function setmaxMintAmount(uint256 _newmaxMintAmount)",
  "function supportsInterface(bytes4 interfaceId) view returns (bool)",
  "function symbol() view returns (string)",
  "function tokenByIndex(uint256 index) view returns (uint256)",
  "function tokenIdShifter() view returns (uint32)",
  "function tokenOfOwnerByIndex(address owner, uint256 index) view returns (uint256)",
  "function tokenURI(uint256 tokenId) view returns (string)",
  "function totalSupply() view returns (uint256)",
  "function transferFrom(address from, address to, uint256 tokenId)",
  "function transferOwnership(address newOwner)",
  "function withdraw() payable"
]
  ;

export default abiJson;

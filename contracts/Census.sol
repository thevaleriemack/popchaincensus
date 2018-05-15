pragma solidity ^0.4.18;

contract Census{

	// represents a person's data, users public address is unique identifier
  // ToDo: when we need to have a data schema based on https://www.census.gov/2010census/text/text-form.php
	struct person{
		uint8 age;
		string workIndustry;
	}

	// this will be a key value pair of {personId: censusInfo} the main data chain
	mapping(address => person) public censusInfo;

	// Function to input person info
  // ToDo: Use the msg.sender instead of passing it in as a parameter
	function inputInfo(uint8 age, string workIndustry, bytes32 hash, uint8 v, bytes32 r, bytes32 s) public{
        if (verify(hash, v, r, s)){
          censusInfo[msg.sender].age = age;
          censusInfo[msg.sender].workIndustry = workIndustry;
        }
	}

  // Function to verify signature
  function verify(bytes32 hash, uint8 v, bytes32 r, bytes32 s) public constant returns(bool) {
		bytes memory prefix = "\x19Ethereum Signed Message:\n32";
		bytes32 prefixedHash = keccak256(prefix, hash);
		return ecrecover(prefixedHash, v, r, s) == msg.sender;
	}
}

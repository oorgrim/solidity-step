// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

contract My {
    function hello(string memory name) public pure returns(string memory) {
        return string(abi.encodePacked("hello", name));
    }
}
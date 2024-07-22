// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

contract Math {
    function add(int a, int b) public pure returns(int) {
        return a + b;
    }
    function sub(int a, int b) public pure returns(int) {
        return a - b;
    }
    function mul(int a, int b) public pure returns(int) {
        return a * b;
        
    }
    function div(int a, int b) public pure returns(int) {
        return a / b;
        
    }
}
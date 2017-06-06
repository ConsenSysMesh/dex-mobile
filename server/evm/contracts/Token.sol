pragma solidity ^0.4.4;

import "./SafeAddSub.sol";

contract Token is SafeAddSub {
    event Transfer(address indexed from, address indexed to, uint value);
    event Approval( address indexed owner, address indexed spender, uint value);

    mapping( address => uint ) balances;
    mapping( address => mapping( address => uint ) ) approvals;
    uint public supply;
    string public ticker;
    string public name;
    uint public date;

    function Token( uint _supply, string _name) {
        balances[msg.sender] = _supply;
        supply = _supply;
        name = _name;
        date = now;
    }

    function transfer( address to, uint value) returns (bool) {
        if( balances[msg.sender] < value ) {
            throw;
        }
        if( !safeToAdd(balances[to], value) ) {
            throw;
        }
        balances[msg.sender] -= value;
        balances[to] += value;
        Transfer( msg.sender, to, value );
        return true;
    }

    function transferFrom( address from, address to, uint value) returns (bool) {
        if( approvals[from][msg.sender] < value ) {
            throw;
        }
        if( !safeToAdd(balances[to], value) ) {
            throw;
        }
        approvals[from][msg.sender] -= value;
        balances[from] -= value;
        balances[to] += value;
        Transfer( from, to, value );
        return true;
    }

    function approve(address spender, uint value) returns (bool) {
        approvals[msg.sender][spender] = value;
        Approval( msg.sender, spender, value );
        return true;
    }

    function allowance(address owner, address spender) constant returns (uint) {
        return approvals[owner][spender];
    }

    function balanceOf(address who) constant returns (uint) {
        return balances[who];
    }
}

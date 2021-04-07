// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract DIX is ERC20 {
    
    struct Butt {
        uint256  _buttAmount;
        uint  _timeSinceLastMouthing;
        bool exists;
    }

    // ------------------------------------------------------------------------
    // Constructor
    // ------------------------------------------------------------------------
    constructor() ERC20("Dix", "DIX") {
        _mint(msg.sender, 2000000000000000000000000000000);
    }
    
    mapping(address => Butt) private dicksInButt;

    function transfer(address recipient, uint256 amount) public virtual override returns (bool) {
        uint amountToBurn = (amount)/100;
        uint amountToSend = amount - amountToBurn;
        bool success = super.transfer(recipient, amountToSend);
        if(success == true) {
            if(amount > 0){
                _burn(msg.sender, amountToBurn);
            }
            distributeDicksForMouth(msg.sender);
            return true;
        }
        return false;
    }
    
    function transferFrom(address sender, address recipient, uint256 amount) public virtual override returns (bool) {
        uint amountToBurn = (amount)/100;
        uint amountToSend = amount = amountToBurn;
        bool success = super.transferFrom(sender, recipient, amountToSend);
        if(success == true) {
            if(amount > 0){
                _burn(sender, amountToBurn);
            }
            distributeDicksForMouth(sender);
            return true;
        }
        return false;
    }
    
    function stickDicksInButt(uint256 amount) public returns(bool) {
        if(balanceOf(msg.sender)>=amount && amount > 0) {
            if(dicksInButt[msg.sender].exists == true) {
                dicksInButt[msg.sender]._buttAmount = dicksInButt[msg.sender]._buttAmount + amount;
                _burn(msg.sender, amount);
                return true;
            } else {
                dicksInButt[msg.sender] = Butt(amount, block.timestamp, true);
                _burn(msg.sender, amount);
                return true;
            }
        }
        return false;
    }
    
    function getDicksForMouth(address mouth) public view returns (uint256) {
        if(dicksInButt[mouth].exists == true) {
            uint256 timePeriod =  (block.timestamp - dicksInButt[mouth]._timeSinceLastMouthing);
            uint256 _dicksForMouth = ((dicksInButt[mouth]._buttAmount) * timePeriod)/8640000;
            return _dicksForMouth;
        }
        return 0;
    }
    
    function clearDicksForMouth(address mouth) private {
        dicksInButt[mouth]._timeSinceLastMouthing = block.timestamp;
    }
    
    function distributeDicksForMouth(address mouth) private {
        if(dicksInButt[mouth].exists == true) {
            uint256 rewards = getDicksForMouth(mouth);
            if(rewards > 0) {
                _mint(mouth, rewards);
                clearDicksForMouth(mouth);
            }
        }
    }
    
    function getDicksInButt() public view returns(uint256) {
        if(dicksInButt[msg.sender].exists == true) {
            return dicksInButt[msg.sender]._buttAmount;
        }
        return 0;
    }
    
    function pullDicksOutOfButt(uint256 amount) public returns (bool) {
        if(dicksInButt[msg.sender].exists ==  true) {
            if(amount <= dicksInButt[msg.sender]._buttAmount) {
                uint dicksToBeMovedToMouth =  amount + getDicksForMouth(msg.sender);
                dicksInButt[msg.sender]._buttAmount = dicksInButt[msg.sender]._buttAmount - amount;
                _mint(msg.sender, dicksToBeMovedToMouth);
                if(dicksInButt[msg.sender]._buttAmount == 0) {
                    delete dicksInButt[msg.sender];
                }
                clearDicksForMouth(msg.sender);
                return true;
            }
            return false;
        }
        return false;
    }
    
}
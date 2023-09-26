let gold;
let food;
let land;

let houses;
let farms;
let banks;

const housesBuiltStat = document.querySelector("#housesBuilt");
const farmsBuiltStat = document.querySelector("#farmsBuilt");
const banksBuiltStat = document.querySelector("#banksBuilt");
const buildButton = document.querySelector("#buildButton");
const battleButtons = document.querySelectorAll(".battleButton");

const currentGold = document.querySelector("#currentGold");
const currentFood = document.querySelector("#currentFood");
const currentLand = document.querySelector("#currentLand");

const goldPerTurn = document.querySelector("#goldPerTurn");
const foodPerTurn = document.querySelector("#foodPerTurn");

const currentGenerals = document.querySelector("#currentGenerals");
const currentSoldiers = document.querySelector("#currentSoldiers");
const currentCavalry = document.querySelector("#currentCavalry");
const currentArchers = document.querySelector("#currentArchers");
const currentTrebuchets = document.querySelector("#currentTrebuchets");
const currentDragons = document.querySelector("#currentDragons");

const players = [
  {
  name: "Player1",
  House: "",
  gold: 200,
  food: 50,
  land: 20,
  houses: 5,
  farms: 5,
  banks: 5,
  army: {
    generals: 2,
    soldiers: 300,
    cavalry: 100,
    archers: 100,
    trebuchets: 10,
    dragons: 0,
  },
}, 
];

let dropDownList = document.querySelector("#numberOfPlayers");
dropDownList.onchange = (e) => {
  let selectedI = dropDownList.selectedIndex;
  let selectedOption = dropDownList.options[selectedI];
  let selectedNumberOfPlayers = parseInt(selectedOption.value);

  let htmlToAdd=""


  for (let i = 1; i < selectedNumberOfPlayers; i++) {
    players[i] = {
        name: "Player"+[i+1],
        House: "",
        gold: 200,
        food: 50,
        land: 20,
        houses: 5,
        farms: 5,
        banks: 5,
        army: {
          generals: 2,
          soldiers: 300,
          cavalry: 100,
          archers: 100,
          trebuchets: 10,
          dragons: 0,
        },
      }
      
htmlToAdd+=`
<div id="player${[i]}Screen">
<h3>Player ${[i]}</h3>
<table class="buildingsTable">
    <tr><th>Buildings</th></tr>
    <tr>
        <th>

        </th>
        <th>Cost to Build</th>
        <th>Own</th>
        
        <th>Under Construction</th>
        <th>Build</th>
    </tr>
    <tr>
        <th>Houses</th>
        <td>5 gold and 1 land</td>
        <td id="housesBuilt${[i]}">
            
        </td>
        <td id="housesUnderConstruction${[i]}">
            
        </td>
        <td>
            <input id="buildHouseInput${[i]}"></input> 
        </td>
        
    </tr>
    <tr>
        <th>Farms</th>
        <td>5 gold and 1 land</td>

        <td id="farmsBuilt${[i]}">
            
        </td>
        <td id="farmsUnderConstruction${[i]}">
            
        </td>
        <td>
            <input id="buildFarmInput${[i]}"></input> 
        </td>
    </tr>
    <tr>
        <th>Banks</th>
        <td>10 gold and 1 land</td>

        <td id="banksBuilt${[i]}">
            
        </td>
        <td id="banksUnderConstruction${[i]}">
            
        </td>
        <td>
            <input id="buildBankInput${[i]}"></input> 
        </td>
    </tr>
    <tr>
        <th>Barracks</th>
        <td>
            
        </td>
    </tr>
    <tr>
        <th>Castles</th>
        <td>
            
        </td>
    </tr>
    <tr>
        <th>Armories</th>
        <td>
            
        </td>
    </tr>
</table>
<button id="buildButton">Build</button>
<table id="resourcesTable">
    <tr><th>Resources</th></tr>
    <tr>
        <th>

        </th>
        <th>Own</th>
        <th>Per Turn</th>
       
    </tr>
    <tr>
        <th>Gold</th>
        <td id="currentGold">
            
        </td>
        <td id="goldPerTurn"></td>
    </tr>
    <tr>
        <th>Food</th>
        <td id="currentFood">
            
        </td>
        <td id="foodPerTurn"></td>
    </tr>
    <tr>
        <th>Land</th>
        <td id="currentLand">
            
        </td>
    </tr>
    
</table>
<table id="militaryTable">
    <tr><th>Military</th></tr>
    <tr>
        <th>

        </th>
        <th>Own</th>
        <th>Currently Training</th>
        <th>Recruit</th>
    </tr>
    <tr>
        <th>Generals</th>
        <td id="currentGenerals">
            
        </td>
        <td></td>
        <td>
            <input id="recruitGeneralInput"></input> 
        </td>
    </tr>
    <tr>
        <th>Soldiers</th>
        <td id="currentSoldiers">
            
        </td>
        <td></td>
        <td>
            <input id="recruitSoldierInput"></input> 
        </td>

    </tr>
    <tr>
        <th>Cavalry</th>
        <td id="currentCavalry">
            
        </td>
        <td></td>
        <td>
            <input id="recruitCavalryInput"></input> 
        </td>
    </tr>
    <tr>
        <th>Archers</th>
        <td id="currentArchers">
            
        </td>
        <td></td>
        <td>
            <input id="recruitArcherInput"></input> 
        </td>
    </tr>
    <tr>
        <th>Trebuchets</th>
        <td id="currentTrebuchets">
            
        </td>
        <td></td>
        <td>
            <input id="recruitTrebuchetInput"></input> 
        </td>
    </tr>
    <tr>
        <th>Dragons</th>
        <td id="currentDragons">
            
        </td>
        <td></td>
        <td>
            <input id="recruitDragonInput"></input> 
        </td>
    </tr>
    
</table>
<button id="recruitButton">Recruit</button>
<table id="opponentsTable">
    <tr><th>Opponents</th></tr>
    <tr>
        <th>

        </th>
        <th>Military Size</th>
        <th>Amount of Land</th>
        <th>Amount of Gold</th>
        <th>Battle</th>
    </tr>
    <tr>
        <th>Stark</th>
        <td id="starkArmy">
            
        </td>
        <td>
            
        </td>
        <td>
            
        </td>
        <td>
            <button class="battleButton" id="stark">Battle!</button> 
         </td>
    </tr>
    <tr>
        <th>Lannister</th>
        <td>
            
        </td>
        <td>
            
        </td>
        <td>
            
        </td>
        <td>
            <button class="battleButton" id="lannister">Battle!</button> 
         </td>
    </tr>
    <tr>
        <th>Targaryen</th>
        <td>
            
        </td>
        <td>
            
        </td>
        <td>
            
        </td>
        <td>
           <button class="battleButton" id="targaryen">Battle!</button> 
        </td>
    </tr>
   
</table>


</div>`



      
  }

  let screenContainer = document.querySelector("#screenContainer")
screenContainer.innerHTML=htmlToAdd







  console.log(players);
};

const starkResources = {
  gold: 200,
  food: 50,
  land: 20,
  houses: 5,
  farms: 5,
  banks: 5,
};
const starkArmy = {
  generals: 3,
  soldiers: 300,
  cavalry: 100,
  archers: 100,
  trebuchets: 10,
  dragons: 0,
};
const opponents = {
  stark: { name: stark, army: starkArmy, resources: starkResources },
  lannister: {},
  targaryen: {},
};

const render = () => {
  renderStats();
};

const renderStats = () => {
  housesBuiltStat.innerHTML = state.houses;
  farmsBuiltStat.innerHTML = state.farms;
  banksBuiltStat.innerHTML = state.banks;
  currentGold.innerHTML = state.gold;
  currentFood.innerHTML = state.food;
  currentLand.innerHTML = state.land;
  goldPerTurn.innerHTML = state.banks * 1;
  foodPerTurn.innerHTML = state.farms * 1;
  currentGenerals.innerHTML = state.army.generals;
  currentSoldiers.innerHTML = state.army.soldiers;
  currentCavalry.innerHTML = state.army.cavalry;
  currentArchers.innerHTML = state.army.archers;
  currentTrebuchets.innerHTML = state.army.trebuchets;
  currentDragons.innerHTML = state.army.dragons;
};

const init = () => {
  state = {
    ...players[0],
  };

  cycles = 0;

  interval = 5000;
  timer = setInterval(runGame, interval);
  render();
};
const generateResources = () => {
  state.gold = state.gold + state.banks * 1;
  state.food = state.food + state.farms * 1;
};

const runGame = () => {
  cycles++;
  if (cycles < 1000) {
    // updateStats()

    generateResources();
    console.log("i updated");
  } else {
    return gameOver();
  }
  render();
};

const gameOver = () => {
  console.log("game over");

  clearInterval(timer);
};

const handleBtnClick = () => {
  let houseInput = parseInt(document.querySelector("#buildHouseInput").value);
  let farmInput = parseInt(document.querySelector("#buildFarmInput").value);
  let bankInput = parseInt(document.querySelector("#buildBankInput").value);
  let totalBeingBuilt = houseInput + farmInput + bankInput;
  let totalCost = houseInput * 5 + farmInput * 5 + bankInput * 10;
  console.log(totalBeingBuilt);
  console.log(totalCost);
  if (totalCost > state.gold) {
    alert("You don't have enough gold");
  } else if (totalBeingBuilt > state.land) {
    alert("You don't have enough land to build on");
  } else {
    if (houseInput != 0) {
      state.gold = state.gold - houseInput * 5;
      state.land = state.land - houseInput;
      state.houses = state.houses + parseInt(houseInput);

      console.log("houseadded");
      render();
    } else {
      return;
    }

    if (farmInput != 0) {
      state.gold = state.gold - farmInput * 5;
      state.land = state.land - farmInput;

      state.farms = state.farms + parseInt(farmInput);

      console.log("farmadded");
      render();
    } else {
      return;
    }

    if (bankInput != 0) {
      state.gold = state.gold - bankInput * 10;
      state.land = state.land - bankInput;

      state.banks = state.banks + parseInt(bankInput);

      console.log("bankadded");
      render();
    } else {
      return;
    }
  }

  render();
};

const battleCalculator = (chosenOpponentArmy) => {
  let myMilitaryPower =
    state.army.generals * 50 +
    state.army.soldiers * 1 +
    state.army.cavalry * 3 +
    state.army.archers * 2 +
    state.army.trebuchets * 100 +
    state.army.dragons * 500;
  let opponentMilitaryPower =
    chosenOpponentArmy.generals * 50 +
    chosenOpponentArmy.soldiers * 1 +
    chosenOpponentArmy.cavalry * 3 +
    chosenOpponentArmy.archers * 2 +
    chosenOpponentArmy.trebuchets * 100 +
    chosenOpponentArmy.dragons * 500;
  if (myMilitaryPower > opponentMilitaryPower) {
    Object.keys(chosenOpponentArmy).forEach((element) => {
      chosenOpponentArmy[element] = Math.floor(
        chosenOpponentArmy[element] * 0.5
      );
      console.log(chosenOpponentArmy);
    });
  } else if (opponentMilitaryPower > myMilitaryPower) {
    state.army.forEach((element) => {
      state.army[element] = Math.floor(state.army[element] * 0.5);
    });
  } else {
    return;
  }
};

battleButtons.forEach((button) => {
  button.addEventListener("click", function () {
    let chosenOpponentArmy = opponents[button.id].army;
    battleCalculator(chosenOpponentArmy);
    render();
  });
});

buildButton.addEventListener("click", handleBtnClick);

init();

// formulas for tracking current resources and spending resources

// formulas for the buildings which generate resources

// formulas for how armies work and how many resources they spend per day or spend during movement and battle

//formulas for resolving battles and taking resources from loser and assigning them to winner

//win conditions?
//house with most resources after X turns? or until only 1 house standing?
// or add logic for houses to concede defeat and "bend the knee" and after all X number of houses concede determine winner?

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


const housesBuiltStatTwo = document.querySelector("#housesBuiltTwo");
const farmsBuiltStatTwo = document.querySelector("#farmsBuiltTwo");
const banksBuiltStatTwo = document.querySelector("#banksBuiltTwo");
const buildButtonTwo = document.querySelector("#buildButtonTwo");
const battleButtonsTwo = document.querySelectorAll(".battleButtonTwo");

const currentGoldTwo = document.querySelector("#currentGoldTwo");
const currentFoodTwo = document.querySelector("#currentFoodTwo");
const currentLandTwo = document.querySelector("#currentLandTwo");

const goldPerTurnTwo = document.querySelector("#goldPerTurnTwo");
const foodPerTurnTwo = document.querySelector("#foodPerTurnTwo");

const currentGeneralsTwo = document.querySelector("#currentGeneralsTwo");
const currentSoldiersTwo = document.querySelector("#currentSoldiersTwo");
const currentCavalryTwo = document.querySelector("#currentCavalryTwo");
const currentArchersTwo = document.querySelector("#currentArchersTwo");
const currentTrebuchetsTwo = document.querySelector("#currentTrebuchetsTwo");
const currentDragonsTwo = document.querySelector("#currentDragonsTwo");

const INIT_STATE = {
playerOne:{gold: 200,
  food: 50,
  land: 20,
  houses: 5,
  farms: 5,
  banks: 5,
  army:{
    generals: 2,
  soldiers: 300,
  cavalry: 100,
  archers: 100,
  trebuchets: 10,
  dragons: 1,

  }},
playerTwo:{gold: 200,
  food: 50,
  land: 20,
  houses: 5,
  farms: 5,
  banks: 5,
  army:{
    generals: 2,
  soldiers: 300,
  cavalry: 100,
  archers: 100,
  trebuchets: 10,
  dragons: 1,

  }}
  
  
  
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
  housesBuiltStat.innerHTML = state.playerOne.houses;
  farmsBuiltStat.innerHTML = state.playerOne.farms;
  banksBuiltStat.innerHTML = state.playerOne.banks;
  currentGold.innerHTML = state.playerOne.gold;
  currentFood.innerHTML = state.playerOne.food;
  currentLand.innerHTML = state.playerOne.land;
  goldPerTurn.innerHTML = state.playerOne.banks * 1;
  foodPerTurn.innerHTML = state.playerOne.farms * 1;
  currentGenerals.innerHTML = state.playerOne.army.generals;
  currentSoldiers.innerHTML = state.playerOne.army.soldiers;
  currentCavalry.innerHTML = state.playerOne.army.cavalry;
  currentArchers.innerHTML = state.playerOne.army.archers;
  currentTrebuchets.innerHTML = state.playerOne.army.trebuchets;
  currentDragons.innerHTML = state.playerOne.army.dragons;

  housesBuiltStatTwo.innerHTML = state.playerTwo.houses;
  farmsBuiltStatTwo.innerHTML = state.playerTwo.farms;
  banksBuiltStatTwo.innerHTML = state.playerTwo.banks;
  currentGoldTwo.innerHTML = state.playerTwo.gold;
  currentFoodTwo.innerHTML = state.playerTwo.food;
  currentLandTwo.innerHTML = state.playerTwo.land;
  goldPerTurnTwo.innerHTML = state.playerTwo.banks * 1;
  foodPerTurnTwo.innerHTML = state.playerTwo.farms * 1;
  currentGeneralsTwo.innerHTML = state.playerTwo.army.generals;
  currentSoldiersTwo.innerHTML = state.playerTwo.army.soldiers;
  currentCavalryTwo.innerHTML = state.playerTwo.army.cavalry;
  currentArchersTwo.innerHTML = state.playerTwo.army.archers;
  currentTrebuchetsTwo.innerHTML = state.playerTwo.army.trebuchets;
  currentDragonsTwo.innerHTML = state.playerTwo.army.dragons;


};

const init = () => {
  state = {
    ...INIT_STATE,
  };

  cycles = 0;

  interval = 5000;
  timer = setInterval(runGame, interval);
  render();
};
const generateResources = () => {
  state.playerOne.gold = state.playerOne.gold + state.playerOne.banks * 1;
  state.playerOne.food = state.playerOne.food + state.playerOne.farms * 1;

  state.playerTwo.gold = state.playerTwo.gold + state.playerTwo.banks * 1;
  state.playerTwo.food = state.playerTwo.food + state.playerTwo.farms * 1;
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
  console.log(houseInput)
  console.log(farmInput)
  console.log(totalBeingBuilt);
  console.log(totalCost);
  if (totalCost > state.playerOne.gold) {
    alert("You don't have enough gold");
  } else if (totalBeingBuilt > state.playerOne.land) {
    alert("You don't have enough land to build on");
  } else {
    if (houseInput != 0) {
      state.playerOne.gold = state.playerOne.gold - houseInput * 5;
      state.playerOne.land = state.playerOne.land - houseInput;
      state.playerOne.houses = state.playerOne.houses + parseInt(houseInput);

      console.log("houseadded");
      render();
    } else {
      return;
    }

    if (farmInput != 0) {
      state.playerOne.gold = state.playerOne.gold - farmInput * 5;
      state.playerOne.land = state.playerOne.land - farmInput;

      state.playerOne.farms = state.playerOne.farms + parseInt(farmInput);

      console.log("farmadded");
      render();
    } else {
      return;
    }

    if (bankInput != 0) {
      state.playerOne.gold = state.playerOne.gold - bankInput * 10;
      state.playerOne.land = state.playerOne.land - bankInput;

      state.playerOne.banks = state.playerOne.banks + parseInt(bankInput);

      console.log("bankadded");
      render();
    } else {
      return;
    }
  }

  render();
};

const handleBtnClickTwo = () => {
  let houseInput = parseInt(document.querySelector("#buildHouseInputTwo").value);
  let farmInput = parseInt(document.querySelector("#buildFarmInputTwo").value);
  let bankInput = parseInt(document.querySelector("#buildBankInputTwo").value);
  let totalBeingBuilt = houseInput + farmInput + bankInput;
  let totalCost = houseInput * 5 + farmInput * 5 + bankInput * 10;
  console.log(totalBeingBuilt);
  console.log(totalCost);
  if (totalCost > state.playerTwo.gold) {
    alert("You don't have enough gold");
  } else if (totalBeingBuilt > state.land) {
    alert("You don't have enough land to build on");
  } else {
    if (houseInput != 0) {
      state.playerTwo.gold = state.playerTwo.gold - houseInput * 5;
      state.playerTwo.land = state.playerTwo.land - houseInput;
      state.playerTwo.houses = state.playerTwo.houses + parseInt(houseInput);

      console.log("houseadded");
      render();
    } else {
      return;
    }

    if (farmInput != 0) {
      state.playerTwo.gold = state.playerTwo.gold - farmInput * 5;
      state.playerTwo.land = state.playerTwo.land - farmInput;

      state.playerTwo.farms = state.playerTwo.farms + parseInt(farmInput);

      console.log("farmadded");
      render();
    } else {
      return;
    }

    if (bankInput != 0) {
      state.playerTwo.gold = state.playerTwo.gold - bankInput * 10;
      state.playerTwo.land = state.playerTwo.land - bankInput;

      state.playerTwo.banks = state.playerTwo.banks + parseInt(bankInput);

      console.log("bankadded");
      render();
    } else {
      return;
    }
  }

  render();
};

const battleCalculator=(chosenOpponentArmy)=>{
    let myMilitaryPower = (
        (state.army.generals*50)+(state.army.soldiers*1)+(state.army.cavalry*3)+(state.army.archers*2)+(state.army.trebuchets*100)+(state.army.dragons*500)
    )
    let opponentMilitaryPower=(
        (chosenOpponentArmy.generals*50)+(chosenOpponentArmy.soldiers*1)+(chosenOpponentArmy.cavalry*3)+(chosenOpponentArmy.archers*2)+(chosenOpponentArmy.trebuchets*100)+(chosenOpponentArmy.dragons*500)
    )
    if (myMilitaryPower>opponentMilitaryPower) {
        Object.keys(chosenOpponentArmy).forEach(element => {
            chosenOpponentArmy[element] =Math.floor(chosenOpponentArmy[element]*0.5)
            console.log(chosenOpponentArmy)

        });
    } else if(opponentMilitaryPower>myMilitaryPower){
        state.army.forEach(element => {
            state.army[element] =Math.floor(state.army[element]*0.5)
        });
    }else{
        return
    }
   
}

battleButtons.forEach((button) => {
  button.addEventListener("click", function () {
    let chosenOpponentArmy = opponents[button.id].army
    battleCalculator(chosenOpponentArmy)
    render()
  });
  
});

buildButton.addEventListener("click", handleBtnClick);
buildButtonTwo.addEventListener("click", handleBtnClickTwo);

init();


// formulas for tracking current resources and spending resources

// formulas for the buildings which generate resources

// formulas for how armies work and how many resources they spend per day or spend during movement and battle

//formulas for resolving battles and taking resources from loser and assigning them to winner

//win conditions?
//house with most resources after X turns? or until only 1 house standing?
// or add logic for houses to concede defeat and "bend the knee" and after all X number of houses concede determine winner?
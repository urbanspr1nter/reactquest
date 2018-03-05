import Utility from '../../../kernel/Utility';
import DungeonBackWall from '../../mixins/DungeonBackWall';
import DungeonBackWallMiddle from '../../mixins/DungeonBackWallMiddle';

const BackWallFactory = (left, top, iterations) => {
  const utility = new Utility();

  let data = [];

  let numCurrentCompleteWall = 0;
  let numCurrentMiddleWall = 0;
  let currLeft = left;

  const numCompleteWall = Math.floor(Math.random() * ((iterations / 4) + 1));
  const numMiddleWall = (iterations - numCompleteWall) + 1;

  for (; currLeft < 17;) {
    const whichWall = Math.floor((Math.random() * 10) + 1) % 2;
    if (whichWall === 1 && numCurrentCompleteWall < numCompleteWall) {
      data = utility.concat(data, DungeonBackWall(currLeft, top));
      numCurrentCompleteWall += 1;
      currLeft += 3;
    } else if (numCurrentMiddleWall < numMiddleWall) {
      for (let j = 0; j < 3 && currLeft < 17; j += 1) {
        data = utility.concat(data, DungeonBackWallMiddle(currLeft, top));
        numCurrentMiddleWall += 1;
        currLeft += 1;
      }
    }
  }

  return data;
};

export default BackWallFactory;

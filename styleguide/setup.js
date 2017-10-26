// styleguide/setup.js
import CardHeader from './../src/Card/CardHeader';
import CardImage from './../src/Card/CardImage';
import CardBody from './../src/Card/CardBody';
import CardFooter from './../src/Card/CardFooter';
import Cell from './../src/Layout/Cell';
import lodash from 'lodash';

global.lodash = lodash;
global.CardHeader = CardHeader;
global.CardImage = CardImage;
global.CardBody = CardBody;
global.CardFooter = CardFooter;
global.Cell = Cell;
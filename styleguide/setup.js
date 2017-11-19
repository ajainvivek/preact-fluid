// styleguide/setup.js
import CardHeader from './../src/Card/CardHeader';
import CardImage from './../src/Card/CardImage';
import CardBody from './../src/Card/CardBody';
import CardFooter from './../src/Card/CardFooter';
import ListHeader from './../src/List/ListHeader';
import ListSection from './../src/List/ListSection';
import ListItem from './../src/List/ListItem';
import ListFooter from './../src/List/ListFooter';
import Cell from './../src/Layout/Cell';
import lodash from 'lodash';

global.lodash = lodash;
global.CardHeader = CardHeader;
global.CardImage = CardImage;
global.CardBody = CardBody;
global.CardFooter = CardFooter;
global.ListHeader = ListHeader;
global.ListSection = ListSection;
global.ListItem = ListItem;
global.ListFooter = ListFooter;
global.Cell = Cell;
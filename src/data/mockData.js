import login from './login';
import preCheck from './pre-check';
import AppropPrefer from './approp-prefer';
import AppropResult from './approp-result';
import RiskSign from './risk-sign';
import buy from './buy';
import cfb from './cfb';
import bankTransfer from './bank-transfer';

const home = require('./home');
const my = require('./my');
const prodTmpl = require('./prodTmpl');
const holdings = require('./holdings');
const infoData = require('./info');
const searchData = require('./search');
const prod = require('./prod');
const favoriteData = require('./favorite');

const mockData = Object.assign(
  home,
  my,
  login,
  preCheck,
  holdings,
  infoData,
  searchData,
  AppropResult,
  AppropPrefer,
  prodTmpl,
  prod,
  buy,
  cfb,
  RiskSign,
  favoriteData,
  bankTransfer
);

module.exports = mockData;

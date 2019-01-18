const buy = {
  MALLU012: {
    error_no: '0',
    resultMap: {
      current_balance: '', // 当前余额 ,
      begin_balance: '', // 期初余额 ,
      enable_balance: '30000', // 可用资金 ,
      foregift_balance: '', // 禁取资金 ,
      mortgage_balance: '', // 禁取资产 ,
      frozen_balance: '', // 冻结资金 ,
      unfrozen_balance: '', // 解冻资金 ,
      fetch_balance: '', // 可取金额 ,
      fetch_cash: '', // 可取现金 ,
      market_value: '', // 证券市值 ,
      asset_balance: '10000000', // 资产值 ,
      fund_balance: '', // 总资金余额 ,
      opfund_market_value: '', // 开基市值 ,
      csfc_bail_balance: '1000000', // 保证金余额 ,
      accum_profit: '', // 累计收益 ,
      total_hold_amount: '', // 持仓总值 ,
      prodpre_income: '' // 持有期预期收益
    }
  },
  MALLT016: {
    error_no: '0'
    // error_no: '-1',
    // error_info: '短信发送超过次数'
  },
  MALLT021: {
    error_no: '0',
    resultList: [{
      agreement_content: '协议内容1',
      agreement_content_path: ' ',
      agreement_content_type: '1',
      agreement_name: '平安银行和盈系列产品协议',
      agreement_no: '8',
      agreement_type: '6',
      agreement_version: '1.0',
      archfile_no: ' ',
      busin_type: '100116',
      content_md5: '5e0f421940a4673c2981b3fc6008abe1',
      fund_code: 'D07',
      organ_flag: ' ',
      product_code: 'P03155',
      remark: ' ',
      sign_pos: ' ',
      sign_way: ' '
    }, {
      agreement_content: '协议内容2',
      agreement_content_path: ' ',
      agreement_content_type: '1',
      agreement_name: '兴业银行和盈系列产品协议',
      agreement_no: '8',
      agreement_type: '6',
      agreement_version: '1.0',
      archfile_no: ' ',
      busin_type: '100116',
      content_md5: '5e0f421940a4673c2981b3fc6008abe1',
      fund_code: 'D07',
      organ_flag: ' ',
      product_code: 'P03155',
      remark: ' ',
      sign_pos: ' ',
      sign_way: ' '
    }]
  },
  MALLT022: {
    error_no: '0'
  },
  MALLT023: {
    error_no: '0',
    resultMap: {
      current_datetime: '20171217091356',
      confirm_date: '20171230',
      entrust_no: '12',
      earnings_begin_date: '20180127'
    },
    success: 'true'
  },
  MALLT024: {
    resultMap: {
      current_datetime: '20180101091356',
      confirm_date: '20180130',
      assert_arrive_date: '20180227'
    },
    success: 'true'
  },
  MALLT051: {
    resultMap: {
      current_datetime: '20171231103456'
    }
  },
  MALLP035: {
    resultMap: {
      enable_quota: '1000',
      used_quota: '300',
      total_quota: '0.01'
    }
  },
  MALLT041: {
    error_no: '0',
    resultMap: {
      current_datetime: '20180101091356',
      hope_confirm_date: '20180130'
    }
  },
  MALLB031: {
    error_no: '0',
    resultMap: {
      agreement_no: '20180101091356',
      agreement_name: '协议1',
      agreement_content_type: '1',
      agreement_content: '协议1的内容',
      agreement_content_path: '不能举例'
    }
  },
  MALLB032: {
    error_no: '0',
    resultList: [{
      agreement_no: '20180101091356',
      agreement_name: '协议1',
      agreement_version: '12',
      agreement_content_type: '1'
    }]
  },
  MALL0002: {
    error_no: '0'
  },
  MALLU005: {
    office_tel: '13333333330'
  }
};

module.exports = buy;

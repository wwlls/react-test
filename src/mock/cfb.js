const cfb = {
  MALLF007: {
    error_no: '0',
    resultList: [{
      bank_no: '', // 银行代码 ,
      bank_name: '', // 银行名称 ,
      bank_account_short: '', // 银行尾号 ,
      pay_kind: '', // 支付方式 ,
      pay_kind_name: '', // 支付方式名称 ,
      business_flag: '', // 业务标志 ,
      business_name: '申请转入', // 业务标志描述 ,
      product_no: '', // 产品编号 ,
      product_code: '', // 产品代码 ,
      fund_code: '', // 产品TA编号 ,
      entrust_status: '', // 委托状态 ,
      entrust_name: '', // 委托状态描述 ,
      init_date: '201712121230', // 交易日期 ,
      fund_account: '', // 资产账户 ,
      client_id: '', // 客户编号 ,
      business_balance: '300', // 成交金额 ,
      business_amount: '', // 成交数量 ,
      entrust_no: '', // 委托编号 ,
      branch_no: '', // 分支机构 ,
      branch_name: '', // 分支机构名称 ,
      allot_no: '', // 申请编号 ,
      remark: '', // 备注 ,
      trade_account: '', // 交易账号 ,
      position_str: '', // 定位串 ,
      pay_account: '', // 支付账户 ,
      entrust_balance: '', // 委托金额 ,
      error_no: '', // 错误编号 ,
      error_info: '', // 错误信息 ,
      op_branch_no: '', // 操作分支机构 ,
      prod_entrust_style: '', // 产品委托风格 ,
      prod_cancel_type: '', // 产品取消类型 ,
      pay_serial_no: '', // 支付流水号 ,
      consumtrans_id: '', // 消费订单号 ,
      invpay_status: '', // 资金支付状态 ,
      invpay_status_desc: '', // 资金支付状态描述 ,
      curr_date: '', // 当前日期 ,
      business_date: '', // 成交日期 ,
      op_entrust_way: '', // 委托方式 ,
      seat_no: '', // 席位编号 ,
      deal_flag: '1', // 处理标志 ,
      deal_flag_desc: '撤单', // 处理标志描述 ,
      settle_date: '', // 交收日期 ,
      curr_time: '', // 当前时间 ,
      operator_no: '', // 操作员编号 ,
      date_clear: '', // 清算日期 ,
      report_time: '', // 申报日期 ,
      bank_error_info: '', // 银行错误信息 ,
      trade_type: '', // 交易方式[0|充值(申购);1|普通取现(普通赎回);2|快速取现;3|货基购买其他产品;4|赎回到货基;5|已撤单(主动撤单、支付撤单：3导致的)] ,
      trade_type_desc: '' // 交易方式描述
    }, {
      bank_no: '', // 银行代码 ,
      bank_name: '', // 银行名称 ,
      bank_account_short: '', // 银行尾号 ,
      pay_kind: '', // 支付方式 ,
      pay_kind_name: '', // 支付方式名称 ,
      business_flag: '', // 业务标志 ,
      business_name: '收益', // 业务标志描述 ,
      product_no: '', // 产品编号 ,
      product_code: '', // 产品代码 ,
      fund_code: '', // 产品TA编号 ,
      entrust_status: '', // 委托状态 ,
      entrust_name: '', // 委托状态描述 ,
      init_date: '201712121230', // 交易日期 ,
      fund_account: '', // 资产账户 ,
      client_id: '', // 客户编号 ,
      business_balance: '-900', // 成交金额 ,
      business_amount: '', // 成交数量 ,
      entrust_no: '', // 委托编号 ,
      branch_no: '', // 分支机构 ,
      branch_name: '', // 分支机构名称 ,
      allot_no: '', // 申请编号 ,
      remark: '', // 备注 ,
      trade_account: '', // 交易账号 ,
      position_str: '', // 定位串 ,
      pay_account: '', // 支付账户 ,
      entrust_balance: '', // 委托金额 ,
      error_no: '', // 错误编号 ,
      error_info: '', // 错误信息 ,
      op_branch_no: '', // 操作分支机构 ,
      prod_entrust_style: '', // 产品委托风格 ,
      prod_cancel_type: '', // 产品取消类型 ,
      pay_serial_no: '', // 支付流水号 ,
      consumtrans_id: '', // 消费订单号 ,
      invpay_status: '', // 资金支付状态 ,
      invpay_status_desc: '', // 资金支付状态描述 ,
      curr_date: '', // 当前日期 ,
      business_date: '', // 成交日期 ,
      op_entrust_way: '', // 委托方式 ,
      seat_no: '', // 席位编号 ,
      deal_flag: '2', // 处理标志 ,
      deal_flag_desc: '成功', // 处理标志描述 ,
      settle_date: '', // 交收日期 ,
      curr_time: '', // 当前时间 ,
      operator_no: '', // 操作员编号 ,
      date_clear: '', // 清算日期 ,
      report_time: '', // 申报日期 ,
      bank_error_info: '', // 银行错误信息 ,
      trade_type: '', // 交易方式[0|充值(申购);1|普通取现(普通赎回);2|快速取现;3|货基购买其他产品;4|赎回到货基;5|已撤单(主动撤单、支付撤单：3导致的)] ,
      trade_type_desc: '' // 交易方式描述
    }]
  },
  MALLF019: {
    error_no: '0',
    resultList: [
      {
        max_pdshare: '100000',
        mfund_year_rate: '6.32'
      },
      {
        max_pdshare: '-1',
        mfund_year_rate: '5.32'
      }
    ]
  },
  MALLF012: {
    error_no: '0',
    resultMap: {
      earnings_begin_date: '20180228',
      earnings_begin_week: '周三',
      pay_date: '20180301',
      pay_week: '周三'
    }
  },
  MALLF005: { // 转入
    error_no: '0',
    error_info: '',
    resultMap: {
      init_date: '20180301', // 交易日期 ,
      entrust_no: '6788', // 委托编号 ,
      consumtrans_id: '100', // 消费订单号 ,
      remark: '', // 备注 ,
      earnings_begin_date: '20180304', // 预计收益日期 ,
      earnings_begin_week: '星期一', // 预计收益星期 ,
      view_earnings_begin_date: '20180304', // 查看预计收益日期 ,
      view_earnings_begin_week: '星期一', // 查看预计收益星期 ,
      sub_date: '20180301', // 提交日期 ,
      sub_time: '103029', // 提交时间 ,
      entrust_balance: '1000' // 委托金额
    }
  },
  MALLF006: { // 转出
    error_no: '0',
    resultMap: {
      entrust_no: '',
      sub_date: '20180228',
      sub_time: '104033',
      pay_date: '20180301',
      pay_time: '104033',
      pay_week: '周三',
      entrust_balance: '1000'
    }
  },
  MALLU013: { //
    error_no: '0',
    resultMap: {
      bank_no: 'ZSYH',
      bank_name: '招商银行',
      bank_alias: '招商银行',
      bank_account: '6020808080012876554',
      icon: 'zhaoshangyinhang'
    }
  },
  MALLF018: { //
    error_no: '0',
    resultMap: {
      total_quota: '3000000000'
    }
  },
  MALLF009: { // 货基持仓查询
    resultMap: {
      fund_account: '', // 资产账户
      client_id: '', // 客户编号
      product_no: '', // 产品编号
      product_code: '', // 产品代码
      fund_code: '', // 产品TA编号
      pay_kind: '', // 支付方式
      pay_kind_name: '', // 支付方式描述
      bank_no: '', // 银行代码
      bank_name: '', // 银行名称
      pay_account: '', // 支付账户
      trade_account: '', // 交易账号
      current_amount: '3434343', // 当前数量,总资产
      enable_amount: '2000', // 可用数量，可取资产
      sum_buy_amount: '', // 累计买入数量
      sum_sell_amount: '', // 累计卖出数量
      sum_buy_balance: '', // 累计买入金额
      sum_sell_balance: '', // 累计卖出金额
      remark: '', // 备注
      income_unit: '1.2309', // 万份收益
      last_income: '34.3', // 昨日收益
      accum_income: '3333', // 累计收益
      mfund_year_rate: '', // 七日年化收益率
      bank_account_short: '', // 银行尾号
      single_limit: '', // 单笔限额
      daily_transfer_limit: '', // 每日限额
      month_transfer_limit: '' // 每月限额
    }
  },
  MALLF017: { // 货基行情查询
    resultList: [
      {
        seven_income_ratio: '4', // 7日年化收益率
        per_myriad_income: '', // 万份单位收益
        init_date: '20171111', // 交易日期
        net_value: '', // 净值
        product_no: '' // 产品编号
      }, {
        seven_income_ratio: '2', // 7日年化收益率
        per_myriad_income: '', // 万份单位收益
        init_date: '20171112', // 交易日期
        net_value: '', // 净值
        product_no: '' // 产品编号
      }, {
        seven_income_ratio: '6', // 7日年化收益率
        per_myriad_income: '', // 万份单位收益
        init_date: '20171113', // 交易日期
        net_value: '', // 净值
        product_no: '' // 产品编号
      }
    ]
  },
  MALLF016: { // 货基理财委托、历史委托、收益查询集合
    resultMap: {
      total_income: '3343434' // 总的收益
    },
    resultList: [
      {
        business_date: '20170101', // 业务发生日期
        business_time: '121212', // 业务发生时间
        prod_prop_name: '申请转入', // 操作名称
        otc_entrust_status_name: '撤单', // 委托状态
        business_balance: '300', // 委托金额
        product_no: '', // 产品编号
        position_str: '', // 位置
        total_income: '100' // 总的收益
      }, {
        business_date: '20170102', // 业务发生日期
        business_time: '211203', // 业务发生时间
        prod_prop_name: '收益', // 操作名称
        otc_entrust_status_name: '成功', // 委托状态
        business_balance: '300', // 委托金额
        product_no: '', // 产品编号
        position_str: '', // 位置
        total_income: '200' // 总的收益
      }
    ]
  },
  MALLF010: { // 货基委托撤单
    error_no: '', // 错误编号
    error_info: '', // 错误信息
    init_date: '', // 交易日期
    entrust_no: '' // 委托编号
  },
  MALLF004: { // 理财账户信息查询
    resultMap: {
      fund_code: '', // 产品TA编号
      fund_account: '', // 资产账户
      client_id: '', // 客户编号
      trade_account: '', // 交易账号
      bank_name: '', // 银行名称
      pay_kind: '', // 支付方式
      pay_kind_name: '', // 支付方式名称
      bank_no: '', // 银行代码
      pay_account: '', // 支付账户
      prod_account: '0', // 产品账户
      prodcash_status: '', // 现金宝触发状态 0：正常1：停止
      prodcash_balance: '', // 现金宝触发金额
      bank_account_short: '', // 银行尾号
      single_limit: '', // 单笔限额
      daily_transfer_limit: '', // 每日限额
      month_transfer_limit: '', // 每月限额
      product_no: '', // 产品编号
      prod_code: ''
    },
    resultList: []
  },
  MALLF021: {
    resultMap: {
      income_unit: '1.234343', // 万份收益
      product_no: '' // 产品编号
    }
  },
  MALLF020: { //
    error_no: '0',
    resultMap: {
      product_no: '213', // 产品编号 ,
      mfund_year_rate: '', // 七日年化收益率 ,
      max_pdshare: '-1', // 单账户单日限额:-1机构版 ,
      template_id: '', // 模板id ,
      min_tendtendered_sum: '10000', // 起购金额 ,
      income_unit: '', // 万份收益
      append_balance: '100'
    }
  }
};
module.exports = cfb;

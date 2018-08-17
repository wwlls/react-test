const holdingsData = {
  MALLU021: {
    error_no: '0',
    error_info: '',
    resultMap: {
      category_id: '1', // 产品分类ID
      category_name: '全部', // 产品分类名称
      prod_market_value: '50000.09', // 产品市值
      pre_income: '222.12', // 昨日总收益
      accum_income: '10001', // 累计收益
      hold_income: '-22.22', // 持仓盈亏
      prodpre_income: '320' // 产品预期收益
    }
  },
  MALLU022: {
    error_no: '0',
    error_info: '',
    resultList: [
      {
        allot_no: '1200011', // 订单流水号 ,
        product_name: '基金名称基金名称基金名称1234556', // 产品名称 ,
        product_short_name: '基金名称基金名称基金名称', // 产品简称 ,
        category_id: '1', // 产品分类ID ,
        prodpre_income: '', // 产品预期收益 ,
        product_no: 'p213131', // 产品编号 ,
        product_code: 'BD1015', // 产品编号 ,
        annual_rate: '', // 产品预期年收益率 ,
        principal: '', // 理财本金 ,
        prod_term: '', // 投资期限 ,
        expire_num: '', // 到期天数 ,
        pre_income: '-20.09', // 单个产品昨日收益 ,
        market_value: '1.2E8', // 单个产品持仓市值 ,
        accum_income: '123', // 单个产品持仓收益 ,
        nav: '', // 最新净值 ,
        sell_flag: '0', // 是否可卖 null:不显示，0：灰色卖出按钮不可以卖，1：可以卖 ,
        open_date_str: '', // 可卖日期 yyyymmdd ,
        reward_ratio: '', // 业绩计提基准 ,
        hold_income: '', // 持仓盈亏 ,
        dividend_way: '1', // 分红方式设置 1为可以设置
        position_str: '123', // 定位串
        holder_account: '', // 持有人帐号 ,
        total_amount: '1000', // 持有数量 ,
        frozen_amount: '300', // 冻结数量 ,
        enable_amount: '700', // 可用数量 ,
        end_date: '', // 到期日 ,
        is_trans: '', // 是否可转让 transfer:可转让 notTransfer:不可转让 ,
        trans_account: '32424112',
        pay_account: '65424112',
        create_time: '' // 持仓创建时间
      },
      {
        allot_no: '1200011', // 订单流水号 ,
        product_name: '基金名称基金名称基金名称222', // 产品名称 ,
        product_short_name: '基金名称基金名称基金名称的是', // 产品简称 ,
        category_id: '1', // 产品分类ID ,
        prodpre_income: '', // 产品预期收益 ,
        product_no: 'p213131', // 产品编号 ,
        product_code: 'BD1015',
        annual_rate: '', // 产品预期年收益率 ,
        principal: '', // 理财本金 ,
        prod_term: '', // 投资期限 ,
        expire_num: '', // 到期天数 ,
        pre_income: '-20.09', // 单个产品昨日收益 ,
        market_value: '12336', // 单个产品持仓市值 ,
        accum_income: '123', // 单个产品持仓收益 ,
        nav: '', // 最新净值 ,
        sell_flag: '1', // 是否可卖 null:不显示，0：灰色卖出按钮不可以卖，1：可以卖 ,
        open_date_str: '', // 可卖日期 yyyymmdd ,
        reward_ratio: '', // 业绩计提基准 ,
        hold_income: '', // 持仓盈亏 ,
        dividend_way: '', // 分红方式设置 1为可以设置
        position_str: '123', // 定位串
        holder_account: '', // 持有人帐号 ,
        total_amount: '1000', // 持有数量 ,
        frozen_amount: '300', // 冻结数量 ,
        enable_amount: '700', // 可用数量 ,
        end_date: '', // 到期日 ,
        is_trans: '', // 是否可转让 transfer:可转让 notTransfer:不可转让 ,
        trans_account: '32424112',
        pay_account: '65424112',
        create_time: '' // 持仓创建时间
      },
      {
        allot_no: '1200011', // 订单流水号 ,
        product_name: '基金名称3', // 产品名称 ,
        product_short_name: '基金名称3', // 产品简称 ,
        category_id: '1', // 产品分类ID ,
        prodpre_income: '', // 产品预期收益 ,
        product_no: 'p213131', // 产品编号 ,
        product_code: 'BD1015',
        annual_rate: '', // 产品预期年收益率 ,
        principal: '', // 理财本金 ,
        prod_term: '', // 投资期限 ,
        expire_num: '', // 到期天数 ,
        pre_income: '-20.09', // 单个产品昨日收益 ,
        market_value: '12336', // 单个产品持仓市值 ,
        accum_income: '123', // 单个产品持仓收益 ,
        nav: '', // 最新净值 ,
        sell_flag: '', // 是否可卖 null:不显示，0：灰色卖出按钮不可以卖，1：可以卖 ,
        open_date_str: '', // 可卖日期 yyyymmdd ,
        reward_ratio: '', // 业绩计提基准 ,
        hold_income: '', // 持仓盈亏 ,
        dividend_way: '', // 分红方式设置 1为可以设置
        position_str: '123', // 定位串
        holder_account: '', // 持有人帐号 ,
        total_amount: '1000', // 持有数量 ,
        frozen_amount: '300', // 冻结数量 ,
        enable_amount: '700', // 可用数量 ,
        end_date: '', // 到期日 ,
        is_trans: '', // 是否可转让 transfer:可转让 notTransfer:不可转让 ,
        trans_account: '32424112',
        pay_account: '65424112',
        create_time: '' // 持仓创建时间
      },
      {
        allot_no: '1200012', // 订单流水号 ,
        product_name: '定期产品1', // 产品名称 ,
        product_short_name: '定期产品1', // 产品简称 ,
        category_id: '0', // 产品分类ID ,
        prodpre_income: '123', // 产品预期收益 ,
        product_no: 'p2010', // 产品编号 ,
        product_code: 'BD1015',
        annual_rate: '4.56', // 产品预期年收益率 ,
        principal: '2000', // 理财本金 ,
        prod_term: '180', // 投资期限 ,
        expire_num: '98', // 到期天数 ,
        pre_income: '', // 单个产品昨日收益 ,
        market_value: '', // 单个产品持仓市值 ,
        accum_income: '', // 单个产品持仓收益 ,
        nav: '', // 最新净值 ,
        sell_flag: '', // 是否可卖 null:不显示，0：灰色卖出按钮不可以卖，1：可以卖 ,
        open_date_str: '', // 可卖日期 yyyymmdd ,
        reward_ratio: '', // 业绩计提基准 ,
        hold_income: '', // 持仓盈亏 ,
        dividend_way: '', // 分红方式设置 1为可以设置
        position_str: '123', // 定位串
        holder_account: '', // 持有人帐号 ,
        total_amount: '1000', // 持有数量 ,
        frozen_amount: '300', // 冻结数量 ,
        enable_amount: '700', // 可用数量 ,
        end_date: '', // 到期日 ,
        is_trans: '', // 是否可转让 transfer:可转让 notTransfer:不可转让 ,
        trans_account: '32424112',
        pay_account: '65424112',
        create_time: '' // 持仓创建时间
      },
      {
        allot_no: '1200013', // 订单流水号 ,
        product_name: '定期产品2', // 产品名称 ,
        product_short_name: '定期产品2', // 产品简称 ,
        category_id: '0', // 产品分类ID ,
        prodpre_income: '', // 产品预期收益 ,
        product_no: 'p2010', // 产品编号 ,
        product_code: 'BD1015',
        annual_rate: '', // 产品预期年收益率 ,
        principal: '2000', // 理财本金 ,
        prod_term: '180', // 投资期限 ,
        expire_num: '98', // 到期天数 ,
        pre_income: '', // 单个产品昨日收益 ,
        market_value: '', // 单个产品持仓市值 ,
        accum_income: '', // 单个产品持仓收益 ,
        nav: '', // 最新净值 ,
        sell_flag: '', // 是否可卖 null:不显示，0：灰色卖出按钮不可以卖，1：可以卖 ,
        open_date_str: '', // 可卖日期 yyyymmdd ,
        reward_ratio: '0.0567', // 业绩计提基准 ,
        hold_income: '', // 持仓盈亏 ,
        dividend_way: '', // 分红方式设置 1为可以设置
        position_str: '123', // 定位串
        holder_account: '', // 持有人帐号 ,
        total_amount: '1000', // 持有数量 ,
        frozen_amount: '300', // 冻结数量 ,
        enable_amount: '700', // 可用数量 ,
        end_date: '', // 到期日 ,
        is_trans: '', // 是否可转让 transfer:可转让 notTransfer:不可转让 ,
        trans_account: '32424112',
        pay_account: '65424112',
        create_time: '' // 持仓创建时间
      },
      {
        allot_no: '1200013', // 订单流水号 ,
        product_name: '高端产品1', // 产品名称 ,
        product_short_name: '高端产品1', // 产品简称 ,
        category_id: '2', // 产品分类ID ,
        prodpre_income: '', // 产品预期收益 ,
        product_no: 'p1090', // 产品编号 ,
        product_code: 'BD1015',
        annual_rate: '', // 产品预期年收益率 ,
        principal: '', // 理财本金 ,
        prod_term: '', // 投资期限 ,
        expire_num: '', // 到期天数 ,
        pre_income: '', // 单个产品昨日收益 ,
        market_value: '1234', // 单个产品持仓市值 ,
        accum_income: '', // 单个产品持仓收益 ,
        nav: '1.1345', // 最新净值 ,
        sell_flag: '', // 是否可卖 null:不显示，0：灰色卖出按钮不可以卖，1：可以卖 ,
        open_date_str: '20171212', // 可卖日期 yyyymmdd ,
        reward_ratio: '', // 业绩计提基准 ,
        hold_income: '-29.91', // 持仓盈亏 ,
        dividend_way: '', // 分红方式设置 1为可以设置
        position_str: '123', // 定位串
        holder_account: '', // 持有人帐号 ,
        total_amount: '1000', // 持有数量 ,
        frozen_amount: '300', // 冻结数量 ,
        enable_amount: '700', // 可用数量 ,
        end_date: '', // 到期日 ,
        is_trans: '', // 是否可转让 transfer:可转让 notTransfer:不可转让 ,
        trans_account: '32424112',
        pay_account: '65424112',
        create_time: '' // 持仓创建时间
      }
    ]
  },
  MALLU023: {
    error_no: '0',
    error_info: '',
    resultMap: {
      product_no: 'p123', // 产品序号 ,
      product_name: '易方达货币基金1号', // 产品名称 ,
      product_short_name: '易方达货币基金1号', // 产品名称 ,
      prodpre_income: '123', // 产品预期收益 ,
      principal: '3456', // 理财本金 ,
      annual_rate: '3.45', // 产品预期收益率 ,
      template_id: '10001',
      prod_term: '60', // 投资期限 ,
      buy_date_str: '20171209', // 购买日 格式:yyyymmdd ,
      prod_begin_date: '20171209', // 成立日 格式:yyyymmdd ,
      interest_date_str: '20171212', // 起息日 格式:yyyymmdd ,
      open_date_str: '20171212', // 开放日
      expire_date_str: '20171212', // 到期日 格式:yyyymmdd ,
      pre_paydate_str: '20171225', // 到账日 格式:yyyymmdd ,
      init_date: '20180315', // 最新净值更新日期 ,
      pre_income: '123', // 昨日收益 ,
      accum_income: '123', // 单个产品持仓收益 ,
      market_value: '1112', // 单个产品持仓市值 ,
      buy_time_str: '143439', // 购买时间 HHmmss ,
      buy_income_unit: '1.3456', // 购买时万份收益 ,
      new_income_unit: '1.3456', // 最新万份收益 ,
      current_amount: '1400', // 总份额 ,
      enable_amount: '1400', // 可用份额 ,
      mfund_year_rate: '3.65', // 最新七日年化收益率 ,
      buy_nav: '1.2345', // 购买时净值 ,
      nav: '1.2345', // 最新净值 ,
      reward_ratio: '1.2121', // 业绩计提基准 ,
      hold_income: '123', // 持仓盈亏 ,
      nav_ratio: '2.34', // 日涨跌幅 ,
      prod_switch_flag: '1', // 基金转换 1：可转换 ,
      sell_flag: '', // 0：灰色卖出按钮不可以卖，1：可以卖 ,
      buy_flag: '', // 是否追加购买 0:追加购买灰色 1：追加购买 红色,2:可预约
      working_phase: '1', // 运作期 1:显示
      prod_type_ifs: '4', // 产品柜台类型 4 银行理财
      trans_account: '32424112',
      pay_account: '65424112',
      dividend_way: '0',
      min_tendtendered_sum: '1000', // 起购金额
      min_switch_share: '100' // 最低转换份额
    }
  },
  MALLU024: { // 处理中委托流水列表
    error_no: '0',
    error_info: '',
    resultList: [
      {
        allot_no: 'o1234', // 订单流水号 ,
        product_no: 'p1234', // 产品序号 ,
        product_short_name: '产品1产品1产品1产品1产品1产品1产品1产品1产品1产品1产品1产品1产品1产品1产品1', // 产品简称 ,
        prod_prop_name: '赎回', // 交易屬性名称 ,
        entrust_balance: '1000', // 委託金额 ,
        sell_entrust_flag: '0',
        entrust_amount: '1000', // 委託数量 ,
        entrust_date: '20171209', // 委托日期 ,
        entrust_time: '143321', // 委托时间 ,
        exchange_status_name: '', // 成交状态 ,
        withdraw_flag: '1', // 是否可撤单 ,
        position_str: '' // 定位串
      },
      {
        allot_no: 'o1234', // 订单流水号 ,
        product_no: 'p1234', // 产品序号 ,
        product_short_name: '产品1', // 产品简称 ,
        prod_prop_name: '赎回', // 交易屬性名称 ,
        entrust_balance: '1000', // 委託金额 ,
        sell_entrust_flag: '0',
        entrust_amount: '1000', // 委託数量 ,
        entrust_date: '20171209', // 委托日期 ,
        entrust_time: '143321', // 委托时间 ,
        exchange_status_name: '', // 成交状态 ,
        withdraw_flag: '0', // 是否可撤单 ,
        position_str: '' // 定位串
      },
      {
        allot_no: 'o1234', // 订单流水号 ,
        product_no: 'p1234', // 产品序号 ,
        product_short_name: '产品1', // 产品简称 ,
        prod_prop_name: '赎回', // 交易屬性名称 ,
        entrust_balance: '1000', // 委託金额 ,
        sell_entrust_flag: '0',
        entrust_amount: '1000', // 委託数量 ,
        entrust_date: '20171209', // 委托日期 ,
        entrust_time: '143321', // 委托时间 ,
        exchange_status_name: '', // 成交状态 ,
        withdraw_flag: '1', // 是否可撤单 ,
        position_str: '' // 定位串
      },
      {
        allot_no: 'o1234', // 订单流水号 ,
        product_no: 'p1234', // 产品序号 ,
        product_short_name: '产品1', // 产品简称 ,
        prod_prop_name: '赎回', // 交易屬性名称 ,
        entrust_balance: '1000', // 委託金额 ,
        sell_entrust_flag: '0',
        entrust_amount: '1000', // 委託数量 ,
        entrust_date: '20171209', // 委托日期 ,
        entrust_time: '143321', // 委托时间 ,
        exchange_status_name: '', // 成交状态 ,
        withdraw_flag: '0', // 是否可撤单 ,
        position_str: '' // 定位串
      },
      {
        allot_no: 'o1234', // 订单流水号 ,
        product_no: 'p1234', // 产品序号 ,
        product_short_name: '产品1', // 产品简称 ,
        prod_prop_name: '赎回', // 交易屬性名称 ,
        entrust_balance: '1000', // 委託金额 ,
        sell_entrust_flag: '0',
        entrust_amount: '1000', // 委託数量 ,
        entrust_date: '20171209', // 委托日期 ,
        entrust_time: '143321', // 委托时间 ,
        exchange_status_name: '', // 成交状态 ,
        withdraw_flag: '0', // 是否可撤单 ,
        position_str: '' // 定位串
      },
      {
        allot_no: 'o1234', // 订单流水号 ,
        product_no: 'p1234', // 产品序号 ,
        product_short_name: '产品1', // 产品简称 ,
        prod_prop_name: '赎回', // 交易屬性名称 ,
        entrust_balance: '1000', // 委託金额 ,
        sell_entrust_flag: '0',
        entrust_amount: '1000', // 委託数量 ,
        entrust_date: '20171209', // 委托日期 ,
        entrust_time: '143321', // 委托时间 ,
        exchange_status_name: '', // 成交状态 ,
        withdraw_flag: '0', // 是否可撤单 ,
        position_str: '' // 定位串
      }
    ]
  },
  MALLU026: { // 已处理委托流水列表
    error_no: '0',
    error_info: '',
    resultList: [
      {
        allot_no: 'o1234', // 订单流水号 ,
        product_no: 'p1234', // 产品序号 ,
        product_short_name: '产品2', // 产品简称 ,
        prod_prop_name: '卖出', // 交易屬性名称 ,
        entrust_balance: '1000', // 委託金额 ,
        sell_entrust_flag: '0',
        entrust_amount: '1000', // 委託数量 ,
        entrust_date: '20171212', // 委托日期 ,
        entrust_time: '134532', // 委托时间 ,
        exchange_status_name: '成功', // 成交状态 ,
        position_str: '' // 定位串
      },
      {
        allot_no: 'o1234', // 订单流水号 ,
        product_no: 'p1234', // 产品序号 ,
        product_short_name: '产品2产品2产品2产品2产品2产品2产品2产品2产品2产品2产品2产品2', // 产品简称 ,
        prod_prop_name: '卖出', // 交易屬性名称 ,
        entrust_balance: '1000', // 委託金额 ,
        sell_entrust_flag: '0',
        entrust_amount: '1000', // 委託数量 ,
        entrust_date: '20171212', // 委托日期 ,
        entrust_time: '134532', // 委托时间 ,
        exchange_status_name: '失败', // 成交状态 ,
        position_str: '' // 定位串
      },
      {
        allot_no: 'o1234', // 订单流水号 ,
        product_no: 'p1234', // 产品序号 ,
        product_short_name: '产品2', // 产品简称 ,
        prod_prop_name: '卖出', // 交易屬性名称 ,
        entrust_balance: '1000', // 委託金额 ,
        sell_entrust_flag: '0',
        entrust_amount: '1000', // 委託数量 ,
        entrust_date: '20171212', // 委托日期 ,
        entrust_time: '134532', // 委托时间 ,
        exchange_status_name: '废单', // 成交状态 ,
        position_str: '' // 定位串
      }
    ]
  },
  MALLU025: { // 处理中委托流水详情
    error_no: '0',
    error_info: '',
    resultMap: {
      allot_no: 'a1000', // 申请编号 ,
      product_no: 'p1000', // 产品编号 ,
      product_name: '天天盈18号', // 产品名称 ,
      entrust_no: '108023',
      entrust_balance: '1500', // 委托金额 ,
      entrust_date: '20171220', // 委托日期 ,
      entrust_time: '144332', // 委托时间 ,
      entrust_amount: '1400', // 委托数量 ,
      prodpre_income: '123', // 产品预期收益 ,
      withdraw_flag: '1', // 撤单允许标志 ,0不允许,1允许
      dividend_way: '0', // 分红方式
      prod_prop: 'DN3' // 交易属性AB2:产品认购 BB2:产品申购CS2:产品赎回
    }
  },
  MALLU027: { // 已处理委托流水详情
    error_no: '0',
    error_info: '',
    resultMap: {
      allot_no: 'a1000', // 申请编号 ,
      product_no: 'p1000', // 产品编号 ,
      product_name: '天天盈18号', // 产品名称 ,
      entrust_balance: '1500', // 委托金额 ,
      entrust_date: '20171220', // 委托日期 ,
      entrust_time: '144332', // 委托时间 ,
      entrust_amount: '1400', // 委托数量 ,
      prodpre_income: '123', // 产品预期收益 ,
      withdraw_flag: '', // 撤单允许标志 ,0不允许,1允许
      dividend_way: '1', // 分红方式
      settle_date: '20171223', // 确认日期
      prod_prop: 'DN3' // 交易属性AB2:产品认购 BB2:产品申购CS2:产品赎回
    }
  },
  MALLT025: { // 撤单
    error_no: '0',
    error_info: '',
    resultMap: {
      serial_no: '',
      current_datetime: '201712201332',
      confirm_date: '20171221'
    }
  },
  MALLT026: {
    error_no: '-1',
    error_info: '分红方式设置错误',
    resultMap: {
      serial_no: '',
      current_datetime: '201712201332',
      confirm_date: '20171221'
    }
  },
  MALLT045: {
    error_no: '0',
    error_info: '',
    resultList: [
      {
        allot_no: '1234', // 申请编号 ,
        entrust_no: '345',
        init_date: '20171222',
        product_no: '100000', // 产品序号 ,
        product_name: '南方基金13期', // 产品名称 ,
        balance: '1000', // 发生金额 ,
        hope_date: '', // 希望处理日期 ,
        entrust_date: '20171222', // 委托日期 ,
        entrust_time: '103434', // 委托时间 ,
        entrust_balance: '5000', // 委托金额 ,
        entrust_amount: '1000', // 委托数量 ,
        otc_entrust_status_name: '已成交', // 委托状态 ,
        withdraw_flag: '0', // 撤单允许标志 ,
        pay_kind: '', // 支付方式 ,
        elig_confirm_type_name: '', // 适当性信息确认类型 ,
        mfund_year_rate: '4.34', // 最新七日年化收益率 ,
        annual_rate: '', // 产品预期收益率 ,
        expire_date_str: '20180630', // 到期日 格式:yyyymmdd ,
        deal_num: '', // 成交天数 ,
        prod_term: '180', // 投资期限 ,
        deal_date: '20171222', // 成交日期 ,
        nav: '', // 最新净值 ,
        incom_unit: '1.4325', // 最新万份收益 ,
        year_ratio: '', // 一年涨跌幅 ,
        position_str: '' // 定位串
      },
      {
        allot_no: '1234', // 申请编号 ,
        entrust_no: '345',
        init_date: '20171222',
        product_no: '100001', // 产品序号 ,
        product_name: '南方基金13期', // 产品名称 ,
        balance: '1000', // 发生金额 ,
        hope_date: '', // 希望处理日期 ,
        entrust_date: '20171222', // 委托日期 ,
        entrust_time: '103434', // 委托时间 ,
        entrust_balance: '5000', // 委托金额 ,
        entrust_amount: '1000', // 委托数量 ,
        otc_entrust_status_name: '已预约', // 委托状态 ,
        withdraw_flag: '1', // 撤单允许标志 ,
        pay_kind: '', // 支付方式 ,
        elig_confirm_type_name: '', // 适当性信息确认类型 ,
        mfund_year_rate: '', // 最新七日年化收益率 ,
        annual_rate: '5.98', // 产品预期收益率 ,
        expire_date_str: '', // 到期日 格式:yyyymmdd ,
        deal_num: '28', // 成交天数 ,
        prod_term: '180', // 投资期限 ,
        deal_date: '', // 成交日期 ,
        nav: '', // 最新净值 ,
        incom_unit: '', // 最新万份收益 ,
        year_ratio: '', // 一年涨跌幅 ,
        position_str: '' // 定位串
      },
      {
        allot_no: '1234', // 申请编号 ,
        entrust_no: '345',
        init_date: '20171222',
        product_no: '100002', // 产品序号 ,
        product_name: '南方基金13期', // 产品名称 ,
        balance: '1000', // 发生金额 ,
        hope_date: '', // 希望处理日期 ,
        entrust_date: '20171222', // 委托日期 ,
        entrust_time: '103434', // 委托时间 ,
        entrust_balance: '5000', // 委托金额 ,
        entrust_amount: '1000', // 委托数量 ,
        otc_entrust_status_name: '成交失败', // 委托状态 ,
        withdraw_flag: '0', // 撤单允许标志 ,
        pay_kind: '', // 支付方式 ,
        elig_confirm_type_name: '', // 适当性信息确认类型 ,
        mfund_year_rate: '', // 最新七日年化收益率 ,
        annual_rate: '5.98', // 产品预期收益率 ,
        expire_date_str: '', // 到期日 格式:yyyymmdd ,
        deal_num: '', // 成交天数 ,
        prod_term: '180', // 投资期限 ,
        deal_date: '', // 成交日期 ,
        nav: '', // 最新净值 ,
        incom_unit: '', // 最新万份收益 ,
        year_ratio: '', // 一年涨跌幅 ,
        position_str: '' // 定位串
      },
      {
        allot_no: '1234', // 申请编号 ,
        entrust_no: '345',
        init_date: '20171222',
        product_no: '100003', // 产品序号 ,
        product_name: '南方基金13期', // 产品名称 ,
        balance: '1000', // 发生金额 ,
        hope_date: '', // 希望处理日期 ,
        entrust_date: '20171222', // 委托日期 ,
        entrust_time: '103434', // 委托时间 ,
        entrust_balance: '5000', // 委托金额 ,
        entrust_amount: '1000', // 委托数量 ,
        otc_entrust_status_name: '已取消', // 委托状态 ,
        withdraw_flag: '0', // 撤单允许标志 ,
        pay_kind: '', // 支付方式 ,
        elig_confirm_type_name: '', // 适当性信息确认类型 ,
        mfund_year_rate: '', // 最新七日年化收益率 ,
        annual_rate: '', // 产品预期收益率 ,
        expire_date_str: '', // 到期日 格式:yyyymmdd ,
        deal_num: '', // 成交天数 ,
        prod_term: '180', // 投资期限 ,
        deal_date: '', // 成交日期 ,
        nav: '1.2345', // 最新净值 ,
        incom_unit: '', // 最新万份收益 ,
        year_ratio: '6.38', // 一年涨跌幅 ,
        position_str: '' // 定位串
      }
    ]
  },
  MALLT053: {
    error_no: '0',
    error_info: ''
  },
  MALLT055: { // 客户定投计划列表
    error_no: '0',
    error_info: '',
    resultList: [
      {
        allot_no: '10000', // 申请编号 ,
        product_no: '100001', // 产品序号 ,
        product_short_name: '定投18号', // 产品简称 ,
        product_name: '天天赚定投计划18号', // 产品名称 ,
        balance: '100', // 发生金额 ,
        en_fund_date: '', // 扣款允许日 ,
        otc_ration_status: '4',
        otc_ration_status_name: '已终止', // 定投处理状态 ,
        period_date: '10', // 定期定额日期 ,
        pay_cycle_unit_name: '月', // 扣款周期单位 ,
        position_str: '', // 定位串 ,
        pay_kind: '保证金' // 支付方式
      },
      {
        allot_no: '10000', // 申请编号 ,
        product_no: '100001', // 产品序号 ,
        product_short_name: '定投18号', // 产品简称 ,
        product_name: '天天赚定投计划18号', // 产品名称 ,
        balance: '100', // 发生金额 ,
        en_fund_date: '', // 扣款允许日 ,
        otc_ration_status: 'W',
        otc_ration_status_name: '定投退出申请', // 定投处理状态 ,
        period_date: '10', // 定期定额日期 ,
        pay_cycle_unit_name: '月', // 扣款周期单位 ,
        position_str: '', // 定位串 ,
        pay_kind: '保证金' // 支付方式
      }
    ]
  },
  MALLT056: { // 客户定投详情
    error_no: '0',
    erroro_info: '',
    resultMap: {
      product_no: '100001', // 产品序号 ,
      product_name: '定投计划1', // 产品名称 ,
      otc_ration_status: 'W',
      otc_ration_status_name: '进行中', // 定投处理状态 ,
      balance: '100', // 发生金额 ,
      send_balance: '1000', // 共申购金额 ,
      pay_kind_name: '保证金', // 扣款方式 ,
      total_trade_count: '10', // 交易次数 ,
      period_date: '20180413', // 定期定额日期 ,
      en_fund_date: '', // 允许扣款日 ,
      template_id: '100001',
      pay_cycle_unit_name: '月', // 扣款周期单位 ,
      pay_cycle_rate: '1', // 扣款周期频率 ,
      allot_no: '123', // 申请编号 ,
      allot_date: '20180403',
      u026Resps: [ // 历史定额记录
        {
          allot_no: '234', // 申请编号 ,
          product_no: '100001', // 产品序号 ,
          product_short_name: '定投计划1', // 产品简称 ,
          product_name: '定投计划1', // 产品名称 ,
          prod_prop_name: '', // 交易属性名 ,
          entrust_balance: '100', // 委託金额 ,
          entrust_date: '20171212', // 委托日期 ,
          entrust_time: '1334', // 委托时间 ,
          exchange_status_name: '定投确认中', // 成交状态 ,
          position_str: '' // 定位串
        },
        {
          allot_no: '234', // 申请编号 ,
          product_no: '100001', // 产品序号 ,
          product_short_name: '定投计划1', // 产品简称 ,
          product_name: '定投计划1', // 产品名称 ,
          prod_prop_name: '', // 交易属性名 ,
          entrust_balance: '100', // 委託金额 ,
          entrust_date: '20171212', // 委托日期 ,
          entrust_time: '1334', // 委托时间 ,
          exchange_status_name: '定投成功', // 成交状态 ,
          position_str: '' // 定位串
        },
        {
          allot_no: '234', // 申请编号 ,
          product_no: '100001', // 产品序号 ,
          product_short_name: '定投计划1', // 产品简称 ,
          product_name: '定投计划1', // 产品名称 ,
          prod_prop_name: '', // 交易属性名 ,
          entrust_balance: '100', // 委託金额 ,
          entrust_date: '20171212', // 委托日期 ,
          entrust_time: '1334', // 委托时间 ,
          exchange_status_name: '定投成功', // 成交状态 ,
          position_str: '' // 定位串
        },
        {
          allot_no: '234', // 申请编号 ,
          product_no: '100001', // 产品序号 ,
          product_short_name: '定投计划1', // 产品简称 ,
          product_name: '定投计划1', // 产品名称 ,
          prod_prop_name: '', // 交易属性名 ,
          entrust_balance: '100', // 委託金额 ,
          entrust_date: '20171212', // 委托日期 ,
          entrust_time: '1334', // 委托时间 ,
          exchange_status_name: '定投成功', // 成交状态 ,
          position_str: '' // 定位串
        }
      ]
    },
    resultList: [ // 历史定额记录
      {
        allot_no: '234', // 申请编号 ,
        product_no: '100001', // 产品序号 ,
        product_short_name: '定投计划1', // 产品简称 ,
        product_name: '定投计划1', // 产品名称 ,
        prod_prop_name: '', // 交易属性名 ,
        entrust_balance: '100', // 委託金额 ,
        entrust_date: '20171212', // 委托日期 ,
        entrust_time: '1334', // 委托时间 ,
        exchange_status_name: '定投确认中', // 成交状态 ,
        position_str: '' // 定位串
      },
      {
        allot_no: '234', // 申请编号 ,
        product_no: '100001', // 产品序号 ,
        product_short_name: '定投计划1', // 产品简称 ,
        product_name: '定投计划1', // 产品名称 ,
        prod_prop_name: '', // 交易属性名 ,
        entrust_balance: '100', // 委託金额 ,
        entrust_date: '20171212', // 委托日期 ,
        entrust_time: '1334', // 委托时间 ,
        exchange_status_name: '定投成功', // 成交状态 ,
        position_str: '' // 定位串
      },
      {
        allot_no: '234', // 申请编号 ,
        product_no: '100001', // 产品序号 ,
        product_short_name: '定投计划1', // 产品简称 ,
        product_name: '定投计划1', // 产品名称 ,
        prod_prop_name: '', // 交易属性名 ,
        entrust_balance: '100', // 委託金额 ,
        entrust_date: '20171212', // 委托日期 ,
        entrust_time: '1334', // 委托时间 ,
        exchange_status_name: '定投成功', // 成交状态 ,
        position_str: '' // 定位串
      },
      {
        allot_no: '234', // 申请编号 ,
        product_no: '100001', // 产品序号 ,
        product_short_name: '定投计划1', // 产品简称 ,
        product_name: '定投计划1', // 产品名称 ,
        prod_prop_name: '', // 交易属性名 ,
        entrust_balance: '100', // 委託金额 ,
        entrust_date: '20171212', // 委托日期 ,
        entrust_time: '1334', // 委托时间 ,
        exchange_status_name: '定投成功', // 成交状态 ,
        position_str: '' // 定位串
      }
    ]
  },
  MALLT044: { // 取消预约
    error_no: '1',
    error_info: '出错信息',
    resultMap: {
    }
  },
  MALLT031: {
    error_no: '1',
    error_info: '出错信息',
    resultList: [{
      product_name: '产品1',
      product_code: '300696',
      product_status: '2',
      year_ratio: '1'
    }, {
      product_name: '产品2',
      product_code: '300686',
      product_status: '3',
      year_ratio: '2'
    }, {
      product_name: '产品3',
      product_code: '100686',
      product_status: '4',
      year_ratio: '-3'
    }, {
      product_name: '产品4',
      product_code: '200686',
      product_status: '5',
      year_ratio: '4'
    }]
  }
};

module.exports = holdingsData;

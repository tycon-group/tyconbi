<template>
  <div>
    <a-tree-select
      v-model:value="value"
      showSearch
      style="width: 100%"
      :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
      :tree-data="treeData"
      placeholder="请选择需要查看的组织"
      :replace-fields="{ title: 'name', key: 'id', value: 'id', children: 'child' }"
      @change="tsChange"
      @select="tsSelect"
      treeNodeFilterProp="title"
    >
    </a-tree-select>
  </div>
</template>

<script>
export default {
  name: 'base-company-menu',
  data() {
    return {
      value: undefined,
      treeData: [
        {
          name: '上海太江集团有限公司',
          id: 1,
          url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/1',
          employees: [
            {
              name: '于坤',
              empID: 'A00076',
              url: 'https://tyconcps.cn:4399/hr/employees/A00076',
            },
            {
              name: '邵乃文',
              empID: 'A00001',
              url: 'https://tyconcps.cn:4399/hr/employees/A00001',
            },
            {
              name: '蒋玲玲',
              empID: 'A00134',
              url: 'https://tyconcps.cn:4399/hr/employees/A00134',
            },
          ],
          child: [
            {
              name: '上海太江信息科技有限公司',
              id: 2,
              url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/2',
              employees: [],
              child: [
                {
                  name: '总经办（太江科技 ）',
                  id: 9,
                  url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/9',
                  employees: [],
                  child: [
                    {
                      name: '信息科技拓展事业部',
                      id: 47,
                      url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/47',
                      employees: [
                        {
                          name: '许波龙',
                          empID: 'D00005',
                          url: 'https://tyconcps.cn:4399/hr/employees/D00005',
                        },
                      ],
                      child: [
                        {
                          name: '信息化组',
                          id: 48,
                          url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/48',
                          employees: [
                            {
                              name: '李晓龙',
                              empID: 'D00209',
                              url: 'https://tyconcps.cn:4399/hr/employees/D00209',
                            },
                          ],
                          child: [],
                        },
                        {
                          name: '研发部',
                          id: 49,
                          url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/49',
                          employees: [
                            {
                              name: '丁涯',
                              empID: 'D00121',
                              url: 'https://tyconcps.cn:4399/hr/employees/D00121',
                            },
                            {
                              name: '彭强强',
                              empID: 'D00204',
                              url: 'https://tyconcps.cn:4399/hr/employees/D00204',
                            },
                            {
                              name: '周德',
                              empID: 'D00211',
                              url: 'https://tyconcps.cn:4399/hr/employees/D00211',
                            },
                          ],
                          child: [],
                        },
                        {
                          name: 'IT组',
                          id: 50,
                          url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/50',
                          employees: [],
                          child: [],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              name: '上海太江建设工程有限公司',
              id: 3,
              url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/3',
              employees: [],
              child: [
                {
                  name: '总裁办（太江建设）',
                  id: 8,
                  url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/8',
                  employees: [],
                  child: [
                    {
                      name: '总经办',
                      id: 19,
                      url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/19',
                      employees: [
                        {
                          name: '耿兵',
                          empID: 'B00023',
                          url: 'https://tyconcps.cn:4399/hr/employees/B00023',
                        },
                        {
                          name: '胡震',
                          empID: 'C00007',
                          url: 'https://tyconcps.cn:4399/hr/employees/C00007',
                        },
                        {
                          name: '徐神洲',
                          empID: 'E00034',
                          url: 'https://tyconcps.cn:4399/hr/employees/E00034',
                        },
                      ],
                      child: [
                        {
                          name: '成本+预算部',
                          id: 20,
                          url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/20',
                          employees: [
                            {
                              name: '孙霖',
                              empID: 'B00210',
                              url: 'https://tyconcps.cn:4399/hr/employees/B00210',
                            },
                            {
                              name: '晏婷',
                              empID: 'B00207',
                              url: 'https://tyconcps.cn:4399/hr/employees/B00207',
                            },
                            {
                              name: '杨玉銮',
                              empID: 'B00187',
                              url: 'https://tyconcps.cn:4399/hr/employees/B00187',
                            },
                            {
                              name: '宋慧',
                              empID: 'B00077',
                              url: 'https://tyconcps.cn:4399/hr/employees/B00077',
                            },
                            {
                              name: '唐晓磊',
                              empID: 'B00124',
                              url: 'https://tyconcps.cn:4399/hr/employees/B00124',
                            },
                            {
                              name: '陈玉山',
                              empID: 'B00018',
                              url: 'https://tyconcps.cn:4399/hr/employees/B00018',
                            },
                          ],
                          child: [],
                        },
                        {
                          name: '供应链管理部',
                          id: 21,
                          url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/21',
                          employees: [
                            {
                              name: '计军燕',
                              empID: 'B00004',
                              url: 'https://tyconcps.cn:4399/hr/employees/B00004',
                            },
                          ],
                          child: [],
                        },
                        {
                          name: '安全部',
                          id: 22,
                          url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/22',
                          employees: [
                            {
                              name: '李忠',
                              empID: 'B00010',
                              url: 'https://tyconcps.cn:4399/hr/employees/B00010',
                            },
                            {
                              name: '戴仁祥',
                              empID: 'B00021',
                              url: 'https://tyconcps.cn:4399/hr/employees/B00021',
                            },
                            {
                              name: '陈建明',
                              empID: 'B00026',
                              url: 'https://tyconcps.cn:4399/hr/employees/B00026',
                            },
                            {
                              name: '房建华',
                              empID: 'B00032',
                              url: 'https://tyconcps.cn:4399/hr/employees/B00032',
                            },
                            {
                              name: '袁健东',
                              empID: 'B00043',
                              url: 'https://tyconcps.cn:4399/hr/employees/B00043',
                            },
                            {
                              name: '陈苗',
                              empID: 'B00050',
                              url: 'https://tyconcps.cn:4399/hr/employees/B00050',
                            },
                            {
                              name: '顾育东',
                              empID: 'B00051',
                              url: 'https://tyconcps.cn:4399/hr/employees/B00051',
                            },
                            {
                              name: '陶仕友',
                              empID: 'B00052',
                              url: 'https://tyconcps.cn:4399/hr/employees/B00052',
                            },
                            {
                              name: '张凯',
                              empID: 'B00062',
                              url: 'https://tyconcps.cn:4399/hr/employees/B00062',
                            },
                            {
                              name: '马周',
                              empID: 'B00093',
                              url: 'https://tyconcps.cn:4399/hr/employees/B00093',
                            },
                            {
                              name: '祝振松',
                              empID: 'B00125',
                              url: 'https://tyconcps.cn:4399/hr/employees/B00125',
                            },
                            {
                              name: '孟凌',
                              empID: 'B00131',
                              url: 'https://tyconcps.cn:4399/hr/employees/B00131',
                            },
                            {
                              name: '徐凯',
                              empID: 'B00145',
                              url: 'https://tyconcps.cn:4399/hr/employees/B00145',
                            },
                            {
                              name: '曹全胜',
                              empID: 'B00158',
                              url: 'https://tyconcps.cn:4399/hr/employees/B00158',
                            },
                            {
                              name: '李春耀',
                              empID: 'B00182',
                              url: 'https://tyconcps.cn:4399/hr/employees/B00182',
                            },
                            {
                              name: '朱发升',
                              empID: 'B00212',
                              url: 'https://tyconcps.cn:4399/hr/employees/B00212',
                            },
                            {
                              name: '邱小伟',
                              empID: 'B00200',
                              url: 'https://tyconcps.cn:4399/hr/employees/B00200',
                            },
                          ],
                          child: [],
                        },
                        {
                          name: '技术部',
                          id: 23,
                          url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/23',
                          employees: [
                            {
                              name: '李清根',
                              empID: 'B00025',
                              url: 'https://tyconcps.cn:4399/hr/employees/B00025',
                            },
                            {
                              name: '雷幸',
                              empID: 'B00058',
                              url: 'https://tyconcps.cn:4399/hr/employees/B00058',
                            },
                            {
                              name: '同美龙',
                              empID: 'B00060',
                              url: 'https://tyconcps.cn:4399/hr/employees/B00060',
                            },
                            {
                              name: '刘胜兰',
                              empID: 'B00061',
                              url: 'https://tyconcps.cn:4399/hr/employees/B00061',
                            },
                            {
                              name: '唐黎明',
                              empID: 'B00080',
                              url: 'https://tyconcps.cn:4399/hr/employees/B00080',
                            },
                            {
                              name: '李宁',
                              empID: 'B00128',
                              url: 'https://tyconcps.cn:4399/hr/employees/B00128',
                            },
                            {
                              name: '唱佳鸣',
                              empID: 'B00153',
                              url: 'https://tyconcps.cn:4399/hr/employees/B00153',
                            },
                            {
                              name: '董玉良',
                              empID: 'B00166',
                              url: 'https://tyconcps.cn:4399/hr/employees/B00166',
                            },
                            {
                              name: '尚辰辰',
                              empID: 'B00178',
                              url: 'https://tyconcps.cn:4399/hr/employees/B00178',
                            },
                            {
                              name: '黄彦佼',
                              empID: 'B00186',
                              url: 'https://tyconcps.cn:4399/hr/employees/B00186',
                            },
                            {
                              name: '王欢',
                              empID: 'B00191',
                              url: 'https://tyconcps.cn:4399/hr/employees/B00191',
                            },
                            {
                              name: '李惠贤',
                              empID: 'B00195',
                              url: 'https://tyconcps.cn:4399/hr/employees/B00195',
                            },
                            {
                              name: '夏俊',
                              empID: 'B00198',
                              url: 'https://tyconcps.cn:4399/hr/employees/B00198',
                            },
                            {
                              name: '乐文涛',
                              empID: 'B00137',
                              url: 'https://tyconcps.cn:4399/hr/employees/B00137',
                            },
                          ],
                          child: [],
                        },
                        {
                          name: '质量部',
                          id: 24,
                          url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/24',
                          employees: [],
                          child: [],
                        },
                        {
                          name: '工程部',
                          id: 25,
                          url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/25',
                          employees: [
                            {
                              name: '王永东',
                              empID: 'B00159',
                              url: 'https://tyconcps.cn:4399/hr/employees/B00159',
                            },
                          ],
                          child: [
                            {
                              name: '乍浦-乐歌项目部',
                              id: 26,
                              url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/26',
                              employees: [
                                {
                                  name: '尹宝玉',
                                  empID: 'B00008',
                                  url: 'https://tyconcps.cn:4399/hr/employees/B00008',
                                },
                                {
                                  name: '陆应之',
                                  empID: 'B00014',
                                  url: 'https://tyconcps.cn:4399/hr/employees/B00014',
                                },
                                {
                                  name: '吴彪',
                                  empID: 'B00027',
                                  url: 'https://tyconcps.cn:4399/hr/employees/B00027',
                                },
                                {
                                  name: '陈伟平',
                                  empID: 'B00042',
                                  url: 'https://tyconcps.cn:4399/hr/employees/B00042',
                                },
                                {
                                  name: '刘磊',
                                  empID: 'B00045',
                                  url: 'https://tyconcps.cn:4399/hr/employees/B00045',
                                },
                                {
                                  name: '张羽',
                                  empID: 'B00065',
                                  url: 'https://tyconcps.cn:4399/hr/employees/B00065',
                                },
                                {
                                  name: '曹健',
                                  empID: 'B00066',
                                  url: 'https://tyconcps.cn:4399/hr/employees/B00066',
                                },
                                {
                                  name: '潘盼',
                                  empID: 'B00067',
                                  url: 'https://tyconcps.cn:4399/hr/employees/B00067',
                                },
                                {
                                  name: '任礼龙',
                                  empID: 'B00071',
                                  url: 'https://tyconcps.cn:4399/hr/employees/B00071',
                                },
                                {
                                  name: '任自松',
                                  empID: 'B00086',
                                  url: 'https://tyconcps.cn:4399/hr/employees/B00086',
                                },
                                {
                                  name: '贺亮',
                                  empID: 'B00117',
                                  url: 'https://tyconcps.cn:4399/hr/employees/B00117',
                                },
                                {
                                  name: '杨旭',
                                  empID: 'B00118',
                                  url: 'https://tyconcps.cn:4399/hr/employees/B00118',
                                },
                                {
                                  name: '康崇',
                                  empID: 'B00122',
                                  url: 'https://tyconcps.cn:4399/hr/employees/B00122',
                                },
                                {
                                  name: '张弘',
                                  empID: 'B00129',
                                  url: 'https://tyconcps.cn:4399/hr/employees/B00129',
                                },
                                {
                                  name: '张颜雯',
                                  empID: 'B00141',
                                  url: 'https://tyconcps.cn:4399/hr/employees/B00141',
                                },
                              ],
                              child: [],
                            },
                            {
                              name: '津南-乐歌项目部',
                              id: 27,
                              url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/27',
                              employees: [
                                {
                                  name: '王俊',
                                  empID: 'B00016',
                                  url: 'https://tyconcps.cn:4399/hr/employees/B00016',
                                },
                                {
                                  name: '陈和春',
                                  empID: 'B00031',
                                  url: 'https://tyconcps.cn:4399/hr/employees/B00031',
                                },
                                {
                                  name: '毛太龙',
                                  empID: 'B00033',
                                  url: 'https://tyconcps.cn:4399/hr/employees/B00033',
                                },
                                {
                                  name: '刘威',
                                  empID: 'B00108',
                                  url: 'https://tyconcps.cn:4399/hr/employees/B00108',
                                },
                                {
                                  name: '王栋',
                                  empID: 'B00116',
                                  url: 'https://tyconcps.cn:4399/hr/employees/B00116',
                                },
                                {
                                  name: '吴康',
                                  empID: 'B00119',
                                  url: 'https://tyconcps.cn:4399/hr/employees/B00119',
                                },
                                {
                                  name: '熊京京',
                                  empID: 'B00139',
                                  url: 'https://tyconcps.cn:4399/hr/employees/B00139',
                                },
                                {
                                  name: '张红林',
                                  empID: 'B00144',
                                  url: 'https://tyconcps.cn:4399/hr/employees/B00144',
                                },
                              ],
                              child: [],
                            },
                            {
                              name: '支塘-乐歌项目部',
                              id: 28,
                              url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/28',
                              employees: [
                                {
                                  name: '邢成',
                                  empID: 'B00017',
                                  url: 'https://tyconcps.cn:4399/hr/employees/B00017',
                                },
                                {
                                  name: '张茂银',
                                  empID: 'B00029',
                                  url: 'https://tyconcps.cn:4399/hr/employees/B00029',
                                },
                                {
                                  name: '姚冬卫',
                                  empID: 'B00055',
                                  url: 'https://tyconcps.cn:4399/hr/employees/B00055',
                                },
                                {
                                  name: '丁顾伟',
                                  empID: 'B00063',
                                  url: 'https://tyconcps.cn:4399/hr/employees/B00063',
                                },
                                {
                                  name: '陈迪芳',
                                  empID: 'B00073',
                                  url: 'https://tyconcps.cn:4399/hr/employees/B00073',
                                },
                                {
                                  name: '徐洪松',
                                  empID: 'B00085',
                                  url: 'https://tyconcps.cn:4399/hr/employees/B00085',
                                },
                                {
                                  name: '严跃锦',
                                  empID: 'B00088',
                                  url: 'https://tyconcps.cn:4399/hr/employees/B00088',
                                },
                                {
                                  name: '熊力',
                                  empID: 'B00113',
                                  url: 'https://tyconcps.cn:4399/hr/employees/B00113',
                                },
                                {
                                  name: '李昌宣',
                                  empID: 'B00160',
                                  url: 'https://tyconcps.cn:4399/hr/employees/B00160',
                                },
                              ],
                              child: [],
                            },
                            {
                              name: '浏河-悦格项目部',
                              id: 29,
                              url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/29',
                              employees: [
                                {
                                  name: '叶振',
                                  empID: 'B00206',
                                  url: 'https://tyconcps.cn:4399/hr/employees/B00206',
                                },
                                {
                                  name: '张有飞',
                                  empID: 'B00196',
                                  url: 'https://tyconcps.cn:4399/hr/employees/B00196',
                                },
                                {
                                  name: '朱涛',
                                  empID: 'B00038',
                                  url: 'https://tyconcps.cn:4399/hr/employees/B00038',
                                },
                                {
                                  name: '秦飞龙',
                                  empID: 'B00064',
                                  url: 'https://tyconcps.cn:4399/hr/employees/B00064',
                                },
                                {
                                  name: '林秀峰',
                                  empID: 'B00081',
                                  url: 'https://tyconcps.cn:4399/hr/employees/B00081',
                                },
                              ],
                              child: [],
                            },
                            {
                              name: '拱墅-乐歌项目部',
                              id: 30,
                              url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/30',
                              employees: [
                                {
                                  name: '柯俊',
                                  empID: 'B00114',
                                  url: 'https://tyconcps.cn:4399/hr/employees/B00114',
                                },
                              ],
                              child: [],
                            },
                            {
                              name: '空港-乐歌项目部',
                              id: 31,
                              url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/31',
                              employees: [
                                {
                                  name: '陈志勋',
                                  empID: 'B00202',
                                  url: 'https://tyconcps.cn:4399/hr/employees/B00202',
                                },
                                {
                                  name: '彭亮',
                                  empID: 'B00201',
                                  url: 'https://tyconcps.cn:4399/hr/employees/B00201',
                                },
                                {
                                  name: '石建民',
                                  empID: 'B00012',
                                  url: 'https://tyconcps.cn:4399/hr/employees/B00012',
                                },
                                {
                                  name: '殷振东',
                                  empID: 'B00087',
                                  url: 'https://tyconcps.cn:4399/hr/employees/B00087',
                                },
                              ],
                              child: [],
                            },
                            {
                              name: '无锡-乐歌项目部',
                              id: 32,
                              url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/32',
                              employees: [],
                              child: [],
                            },
                            {
                              name: '杭州-大江东项目部',
                              id: 33,
                              url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/33',
                              employees: [],
                              child: [],
                            },
                            {
                              name: '上海-蜂花项目部',
                              id: 34,
                              url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/34',
                              employees: [],
                              child: [],
                            },
                            {
                              name: '金山-大新华项目部',
                              id: 35,
                              url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/35',
                              employees: [],
                              child: [],
                            },
                            {
                              name: '常熟-飞煌项目部',
                              id: 36,
                              url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/36',
                              employees: [],
                              child: [],
                            },
                            {
                              name: '杭州-宝龙项目部',
                              id: 37,
                              url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/37',
                              employees: [],
                              child: [],
                            },
                            {
                              name: '西安-明卓项目部',
                              id: 38,
                              url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/38',
                              employees: [],
                              child: [],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              name: '上海太江文化发展有限公司',
              id: 4,
              url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/4',
              employees: [],
              child: [
                {
                  name: '总经办（太江文化）',
                  id: 10,
                  url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/10',
                  employees: [],
                  child: [],
                },
              ],
            },
            {
              name: '总裁办',
              id: 7,
              url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/7',
              employees: [
                {
                  name: '邵乃文',
                  empID: 'A00001',
                  url: 'https://tyconcps.cn:4399/hr/employees/A00001',
                },
                {
                  name: '于坤',
                  empID: 'A00076',
                  url: 'https://tyconcps.cn:4399/hr/employees/A00076',
                },
              ],
              child: [
                {
                  name: '合约部',
                  id: 11,
                  url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/11',
                  employees: [
                    {
                      name: '黄震',
                      empID: 'B00075',
                      url: 'https://tyconcps.cn:4399/hr/employees/B00075',
                    },
                    {
                      name: '帖晨曦',
                      empID: 'B00177',
                      url: 'https://tyconcps.cn:4399/hr/employees/B00177',
                    },
                  ],
                  child: [],
                },
                {
                  name: '法务部',
                  id: 12,
                  url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/12',
                  employees: [
                    {
                      name: '黄恬',
                      empID: 'A00101',
                      url: 'https://tyconcps.cn:4399/hr/employees/A00101',
                    },
                    {
                      name: '胡琼瑶',
                      empID: 'X90001',
                      url: 'https://tyconcps.cn:4399/hr/employees/X90001',
                    },
                  ],
                  child: [],
                },
                {
                  name: '投资部',
                  id: 13,
                  url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/13',
                  employees: [
                    {
                      name: '沈利金',
                      empID: 'A00046',
                      url: 'https://tyconcps.cn:4399/hr/employees/A00046',
                    },
                  ],
                  child: [],
                },
                {
                  name: '审计部',
                  id: 14,
                  url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/14',
                  employees: [],
                  child: [],
                },
                {
                  name: '财务部',
                  id: 15,
                  url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/15',
                  employees: [
                    {
                      name: '李建珍',
                      empID: 'A00003',
                      url: 'https://tyconcps.cn:4399/hr/employees/A00003',
                    },
                    {
                      name: '夏静',
                      empID: 'A00022',
                      url: 'https://tyconcps.cn:4399/hr/employees/A00022',
                    },
                    {
                      name: '顾春燕',
                      empID: 'A00036',
                      url: 'https://tyconcps.cn:4399/hr/employees/A00036',
                    },
                    {
                      name: '李治民',
                      empID: 'A00054',
                      url: 'https://tyconcps.cn:4399/hr/employees/A00054',
                    },
                    {
                      name: '朱佳辉',
                      empID: 'A00068',
                      url: 'https://tyconcps.cn:4399/hr/employees/A00068',
                    },
                    {
                      name: '陈阳',
                      empID: 'A00089',
                      url: 'https://tyconcps.cn:4399/hr/employees/A00089',
                    },
                    {
                      name: '庄余希',
                      empID: 'A00099',
                      url: 'https://tyconcps.cn:4399/hr/employees/A00099',
                    },
                  ],
                  child: [],
                },
                {
                  name: '人事行政部',
                  id: 16,
                  url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/16',
                  employees: [
                    {
                      name: '赵平',
                      empID: 'A00011',
                      url: 'https://tyconcps.cn:4399/hr/employees/A00011',
                    },
                    {
                      name: '季国兴',
                      empID: 'A00020',
                      url: 'https://tyconcps.cn:4399/hr/employees/A00020',
                    },
                    {
                      name: '陈颖蓓',
                      empID: 'A00039',
                      url: 'https://tyconcps.cn:4399/hr/employees/A00039',
                    },
                    {
                      name: '王亚萍',
                      empID: 'A00083',
                      url: 'https://tyconcps.cn:4399/hr/employees/A00083',
                    },
                    {
                      name: '顾晓群',
                      empID: 'A00092',
                      url: 'https://tyconcps.cn:4399/hr/employees/A00092',
                    },
                    {
                      name: '蒋玲玲',
                      empID: 'A00134',
                      url: 'https://tyconcps.cn:4399/hr/employees/A00134',
                    },
                    {
                      name: '谢晋',
                      empID: 'A00149',
                      url: 'https://tyconcps.cn:4399/hr/employees/A00149',
                    },
                    {
                      name: '施维雯',
                      empID: 'A00184',
                      url: 'https://tyconcps.cn:4399/hr/employees/A00184',
                    },
                  ],
                  child: [],
                },
                {
                  name: '党支部',
                  id: 17,
                  url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/17',
                  employees: [
                    {
                      name: '叶伯康',
                      empID: 'A00078',
                      url: 'https://tyconcps.cn:4399/hr/employees/A00078',
                    },
                  ],
                  child: [],
                },
                {
                  name: '商务部',
                  id: 18,
                  url: 'https://tyconcps.cn:4399/hr/orgAndEmpDetail/18',
                  employees: [
                    {
                      name: '林贤',
                      empID: 'A00171',
                      url: 'https://tyconcps.cn:4399/hr/employees/A00171',
                    },
                  ],
                  child: [],
                },
              ],
            },
          ],
        },
      ],
      empData: [],
      empIDCom: '',
    };
  },
  watch: {
    value(value) {
      const url = `https://tyconcps.cn:4399/hr/employees/?organization=${value}`;
      this.$http.get(url)
        .then((res) => {
          this.empData = res.data.data;
          console.log(res.data.data, '0000');
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.empIDCom = 'A00134';
    console.log(this.empIDCom, '1111');
    setTimeout(() => {
      const url = `https://tyconcps.cn:4399/hr/listOrgAndEmp?empID=${this.empIDCom}`;
      this.$http.get(url)
        .then((res) => {
          this.treeData = res.data.data;
          console.log(this.treeData, '2222');
        })
        .catch((error) => {
          console.log(error);
        });
    }, 200);
  },
};
</script>

<style>
/*不定义定义滑块，则为隐藏*/
/**设置滚动条的样式**/
::-webkit-scrollbar{
  width:10px;
  height:20px;
}
/**滚动槽**/
::-webkit-scrollbar-track{
  box-shadow:inset 0 0 3px #dcdcdc;
  border-radius:10px;
}
</style>

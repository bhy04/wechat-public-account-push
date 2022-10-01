/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx596af6ac974ff780',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '80ba70093f6feda5a575f8c3ad07ad72',

  PROVINCE: '山西',
  CITY: '太原',

  USERS: [
    {
      // 想要发送的人的名字
      name: '小兔兔',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oh5Z76Dp3eVqbt44Ri_uy9ZxYygI',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'dHnfm6a5gP35GUD53ODDWMThli9phiao3dxaOscTgYk',
      festivals: [
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '小兔兔', year: '2005', date: '01-15',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-08-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '',

  CALLBACK_USERS: [
    {
      name: '小狗',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: '',
    }
  ],

}

module.exports = USER_CONFIG


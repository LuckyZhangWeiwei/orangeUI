// components/mask/mask.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    showMask: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    setShow() {
      this.triggerEvent('setShow')
    }
  }
})

//index.js
//获取应用实例
var app = getApp()
    //获取应用实例    
    Page({
      data: {
       
       
      },
      listenerSwitch: function (e) {
        console.log('switch类型开关当前状态-----', e.detail.value);
        if (e.detail.value==true){
          wx.playBackgroundAudio({
            dataUrl: 'http://78remu.com1.z0.glb.clouddn.com/TotoroForest.mp3',
            title: 'RainStyle',
            coverImgUrl: 'http://78remu.com1.z0.glb.clouddn.com/4.jpg',
            success: function () {

            },
            fail: function () {

            }
          })
        }
        if (e.detail.value ==false){
          wx.pauseBackgroundAudio();
        }
      },
      onLoad: function (options) { 
        /**  
         * 监听音乐播放  
         */
        wx.onBackgroundAudioPlay(function () {
          console.log('onBackgroundAudioPlay')
        })

        /**  
         * 监听音乐暂停  
         */
        wx.onBackgroundAudioPause(function () {
          console.log('onBackgroundAudioPause')
        })
        wx.onBackgroundAudioStop(function () {
          wx.playBackgroundAudio({
            dataUrl: 'http://78remu.com1.z0.glb.clouddn.com/TotoroForest.mp3',
            title: 'RainStyle',
            coverImgUrl: 'http://78remu.com1.z0.glb.clouddn.com/4.jpg',
            success: function () {

            },
            fail: function () {

            }
          })
        })


      },

      onShareAppMessage: function () {
        return {
          title: 'RainyStyle',
          desc: 'May you find peace in the rain.',
          path: '/page/index'
        }
      }
    })
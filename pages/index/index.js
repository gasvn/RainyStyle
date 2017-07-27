//index.js
//获取应用实例
var app = getApp()
    //获取应用实例    
    Page({
      data: {
        array:[{mode:'scaleToFill'}],
        src: 'http://78remu.com1.z0.glb.clouddn.com/4.jpg',
       
      },

      onLoad: function (options) {
        // 页面初始化 options为页面跳转所带来的参数  
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

        /**  
         * 监听音乐停止  
         */
       /* wx.onBackgroundAudioStop(function () {
          console.log('onBackgroundAudioStop')
        })*/

      },//播放音乐  
      listenerButtonPlay: function () {
        wx.playBackgroundAudio({
          dataUrl: 'http://78remu.com1.z0.glb.clouddn.com/TotoroForest.mp3',
          title: 'RainStyle',
          coverImgUrl: 'http://78remu.com1.z0.glb.clouddn.com/4.jpg',
          success:function(){

          },
          fail:function(){

          }
        })
      },
      /**  
      * 播放状态  
      */
      listenerButtonGetPlayState: function () {
        wx.getBackgroundAudioPlayerState({
          success: function (res) {
            console.log(res)
            //duration 总时长  
            //currentPosition 当前播放位置  
            //status 播放状态  
            //downloadPercent 下载状况 100 即为100%  
            //dataUrl 当前播放音乐地址  
          }
        })
      },
      /**  
      * 监听button暂停按钮  
      */
      listenerButtonPause: function () {
        wx.pauseBackgroundAudio();
      },
      /**  
      *停止播放   
      */
      listenerButtonStop: function () {
        wx.stopBackgroundAudio()
      }
    })
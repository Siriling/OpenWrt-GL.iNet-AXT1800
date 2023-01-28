/**
 * 字段说明
 * @name app 名称
 * @desc app 描述
 */

 module.exports = [

  //依赖
  // {
  //    name: 'kmod-usb-ledtrig-usbport',
  //    desc: 'kmod-usb-ledtrig-usbport',
  // },
  // {
  //   name: 'kmod-usb-net-cdc-mbim',
  //   desc: 'kmod-usb-net-cdc-mbim',
  // },
  // {
  //   name: 'kmod-usb-net-sierrawireless',
  //   desc: 'kmod-usb-net-sierrawireless',
  // },
  
  //工具
  // {
  //   name: 'usbutils',
  //   desc: 'usbutils',
  // },
  // {
  //   name: 'minicom',
  //   desc: 'minicom',
  // },
  // {
  //   name: 'procps-ng',
  //   desc: 'procps-ng',
  // },
  // {
  //   name: 'procps-ng-ps',
  //   desc: 'procps-ng-ps',
  // },
  // {
  //   name: 'grep',
  //   desc: 'grep',
  // },
  // {
  //   name: 'lsblk',
  //   desc: 'lsblk',
  // },
  // {
  //   name: 'fdisk',
  //   desc: 'fdisk',
  // },
  // {
  //   name: 'cfdisk',
  //   desc: 'cfdisk',
  // },
  
  //系统相关
  {
    name: 'luci-app-netdata',
    desc: 'Netdata实时监控',
  },
  {
    name: 'luci-app-ttyd',
    desc: '网页终端命令行',
  },
  {
    name: 'luci-app-nlbwmon',
    desc: '网络带宽监视器',
  },
  {
    name: 'luci-app-wrtbwmon',
    desc: '实时流量监测',
  },
  {
    name: 'luci-app-diskman',
    desc: '磁盘管理工具',
  },
  {
    name: 'luci-app-watchcat',
    desc: '断网检测功能与定时重启',
  },
  {
    name: 'luci-app-ramfree',
    desc: '释放内存',
  },
  {
    name: 'luci-app-eqos',
    desc: '基于IP地址限速',
  },
  // {
  //   name: 'luci-app-sqm', //4.X内核固件编译不过
  //   desc: '流量智能队列管理（QOS）',
  // },
  {
    name: 'luci-app-accesscontrol',
    desc: '访问时间控制',
  },
  {
    name: 'luci-app-arpbind',
    desc: 'IP/MAC绑定',
  },
  {
    name: 'luci-app-upnp',
    desc: '通用即插即用UPnP（端口自动转发）',
  },
  {
    name: 'luci-app-firewall',
    desc: '添加防火墙',
  },
  // {
  //   name: 'luci-app-ddns',
  //   desc: '动态域名（DDNS）',
  // },
  {
    name: 'luci-app-wol',
    desc: 'WOL网络唤醒',
  },
  {
    name: 'luci-app-autoreboot',
    desc: '支持计划重启',
  },
  {
    name: 'luci-app-commands',
    desc: '自定义命令',
  },
  // {
  //   name: 'luci-app-sms-tool',
  //   desc: '4G/5G模组短信工具',
  // },
  // {
  // name: 'luci-app-mwan3helper',
  // desc: '负载均衡',
  // },
  // {
  //   name: 'luci-app-homebox',
  //   desc: '内网测速',
  // },
  {
    name: 'luci-app-fileassistant',
    desc: '文件管理助手',
  },
  // {
  //   name: 'luci-app-guest-wifi',
  //   desc: 'WiFi访客网络',
  // },

  //主题
  // {
  //   name: 'luci-theme-edge',
  //   desc: 'Edge主题',
  // },
  {
    name: 'luci-theme-argon',
    desc: 'Argon主题',
  },
  {
    name: 'luci-app-argon-config',
    desc: 'Argon主题设置',
  },

  //科学上网
  // {
  //   name: 'luci-app-bypass',
  //   desc: 'Bypass代理',
  // },
  // {
  //   name: 'luci-app-ssr-plus',
  //   desc: 'SSR Plus+代理',
  // },
  // {
  //   name: 'luci-app-passwall',
  //   desc: 'Passwall代理',
  // },
  // {
  //   name: 'luci-app-passwall2',
  //   desc: 'Passwall2代理',
  // },
  // {
  //   name: 'luci-app-vssr',
  //   desc: 'Hello World代理',
  // },
  {
    name: 'luci-app-openclash',
    desc: 'Clash代理',
  },
  
  //网络存储共享
  // {
  //   name: 'luci-app-cifsd',
  //   desc: 'CIFS/SMB网络共享',
  // },
  // {
  //   name: 'luci-app-cifs-mount',
  //   desc: 'CIFS/SMB挂载设置',
  // },
  // {
  //   name: 'luci-app-samba4',
  //   desc: '网络共享（Samba4）',
  // },
  // {
  //   name: 'luci-app-nfs',
  //   desc: 'NFS网络共享',
  // },

  //应用
  {
    name: 'luci-app-zerotier',
    desc: 'ZeroTier内网穿透',
  },
  {
    name: 'luci-app-openvpn',
    desc: 'OpenVPN客户端',
  },
  // {
  //   name: 'luci-app-docker',
  //   desc: 'Docker容器',
  // },
  // {
  //   name: 'luci-app-adbyby-plus',
  //   desc: '广告屏蔽大师Plus +',
  // },
  // {
  //   name: 'luci-app-adguardhome',
  //   desc: 'AdGuard home广告过滤',
  // },
  {
    name: 'luci-app-unblockmusic',
    desc: '解锁网易云灰色歌曲3合1新版本',
  },
  // {
  //   name: 'luci-app-unblockneteasemusic-go',
  //   desc: '解锁网易云Golang版本',
  // },
  // {
  //   name: 'luci-app-unblockneteasemusic',
  //   desc: '解锁网易云NodeJS版本',
  // },
  // {
  //   name: 'luci-app-pushbot',
  //   desc: '全能推送（钉钉推送，企业微信推送，Bark，PushPlus推送）',
  // },
  // {
  //   name: 'luci-app-aliyundrive-webdav',
  //   desc: '阿里云盘WebDAV服务',
  // },
  // {
  //   name: 'luci-app-turboacc',
  //   desc: 'Turbo ACC 网络加速(支持Fast Path或者硬件NAT)',
  // },
  // {
  //   name: 'luci-app-uugamebooster',
  //   desc: 'UU网游加速器',
  // },
];
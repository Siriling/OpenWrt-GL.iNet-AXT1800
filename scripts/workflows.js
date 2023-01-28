/**
 * 字段说明
 * @name 工作流文件名 可留空（留空自动生成为 build-glnet-型号）
 * @model 设备型号
 * @config 官方 wlan-ap配置文件名称 profiles 目录下
 * @target 官方 target_wlan_ap 配置文件名称 profiles 目录下
 * @build 生成自定义的编译文件 可留空（留空自动生成为 glnet-型号）
 * @official 是否官方编译界面
 */
 module.exports = [
  {
    model: 'ax1800',
    config: 'config-wlan-ap',
    target: 'target_wlan_ap-gl-ax1800',
    official: true,
  },
  {
    model: 'axt1800',
    config: 'config-wlan-ap',
    target: 'target_wlan_ap-gl-axt1800',
    official: true,
  },
  {
    model: 'mt2500',
    config: 'config-mt798x-7.6.6.1',
    target: 'target_mt7981_gl-mt2500',
    official: true,
  },
  // {
  //   model: 'mt1300',
  //   config: 'config-22.03.0',
  //   target: 'target_ramips_gl-mt1300',
  //   official: false,
  // },
  // {
  //   model: 'a1300',
  //   config: 'config-22.03.2',
  //   target: 'target_ipq40xx_gl-a1300',
  //   official: false,
  // },
  // {
  //   model: 'sf1200',
  //   config: 'config-siflower-18.x',
  //   target: 'target_siflower_gl-sf1200',
  //   official: false,
  // },
  // {
  //   model: 'sft1200',
  //   config: 'config-siflower-18.x',
  //   target: 'target_siflower_gl-sft1200',
  //   official: false,
  // },
  // {
  //   name: 'build-glinet-ax1800-5.4',
  //   model: 'ax1800',
  //   config: 'config-wlan-ap-5.4',
  //   target: 'target_wlan_ap-gl-ax1800-5-4',
  //   build: 'glinet-ax1800-5-4',
  //   official: true,
  // },
  // {
  //   name: 'build-glinet-axt1800-5.4',
  //   model: 'axt1800',
  //   config: 'config-wlan-ap-5.4',
  //   target: 'target_wlan_ap-gl-axt1800-5-4',
  //   build: 'glinet-axt1800-5-4',
  //   official: true,
  // },
];

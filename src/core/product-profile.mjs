export const productProfile = {
  "repo": "streaming-status-physical-monitor",
  "title": "配信状態物理モニター",
  "domain": "IoT",
  "version": "0.1.0-alpha.1",
  "rank": 52,
  "tier": "P2",
  "score": 55,
  "publicTarget": "GitHub Release / 自宅LAN",
  "overview": "OBS配信中、録画中、マイク、音量、BGM状態をM5Stackで表示・操作する。",
  "problem": "配信中の状態確認やミュート操作が画面上で埋もれる。",
  "differentiation": "誤操作を避ける大きな物理操作と色表示にする。",
  "modules": [
    "src/core",
    "src/validators",
    "src/report",
    "src/review-model",
    "src/cli",
    "app",
    "src/simulator",
    "src/device-adapter",
    "src/host-adapter"
  ],
  "manualTestStatus": "not-run",
  "qcdsGrades": {
    "Quality": "S-",
    "Cost": "A+",
    "Delivery": "A+",
    "Satisfaction": "S-"
  },
  "securityBoundaries": [
    "実機なしで検証できるようsample telemetry、mock device、dry-run CLI、Web dashboardに閉じる。",
    "家庭LAN公開時は認証、端末allowlist、危険操作の二段階確認、ログ、復旧手順を必須にする。",
    "カメラ、ファイル、MQTT、自動化、バックアップ、OCR、音声/RSS保存は読み取り、匿名サンプル、dry-runを既定にする。"
  ]
};
